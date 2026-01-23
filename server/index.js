
import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection and Fallback Logic
let pool;
let useInMemory = false;
let inMemoryData = []; // Fallback storage

if (process.env.DATABASE_URL) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
} else {
    console.warn('⚠️ No DATABASE_URL found in .env. Switching to IN-MEMORY mode.');
    useInMemory = true;
}

// Helper to unify DB access
const db = {
    query: async (text, params) => {
        if (useInMemory) {
            // Mock SQL behavior
            if (text.includes('SELECT * FROM assessments')) {
                return { rows: [...inMemoryData].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) };
            }
            if (text.includes('INSERT INTO assessments')) {
                const newItem = {
                    id: Date.now(), // Mock ID
                    name: params[0],
                    ratings: JSON.parse(params[1]),
                    average: params[2],
                    created_at: new Date().toISOString()
                };
                inMemoryData.push(newItem);
                return { rows: [newItem] };
            }
            if (text.includes('DELETE FROM assessments')) {
                const idToDelete = parseInt(params[0]);
                inMemoryData = inMemoryData.filter(item => item.id !== idToDelete);
                return { rows: [] };
            }
            return { rows: [] };
        } else {
            return pool.query(text, params);
        }
    }
};

// Create tables if not exist (only for real DB)
const initDb = async () => {
    if (useInMemory) return;
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS assessments (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                ratings JSONB NOT NULL,
                average DECIMAL(4,1) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Database initialized (PostgreSQL)');
    } catch (err) {
        console.error('❌ Error connecting to database:', err.message);
        console.warn('⚠️ Switching to IN-MEMORY mode due to connection error.');
        useInMemory = true;
    }
};

initDb();

// Routes
// Get all assessments
app.get('/api/assessments', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM assessments ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching assessments:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Save new assessment
app.post('/api/assessments', async (req, res) => {
    const { name, ratings, average } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO assessments (name, ratings, average) VALUES ($1, $2, $3) RETURNING *',
            [name, JSON.stringify(ratings), average]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error saving assessment:', err);
        res.status(500).json({ error: 'Error saving assessment' });
    }
});

// Delete assessment
app.delete('/api/assessments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM assessments WHERE id = $1', [id]);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        console.error('Error deleting assessment:', err);
        res.status(500).json({ error: 'Error deleting assessment' });
    }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
