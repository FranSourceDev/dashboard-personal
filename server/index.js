
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

// Database connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Create tables if not exist
const initDb = async () => {
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
        console.log('Database initialized');
    } catch (err) {
        console.error('Error initializing database:', err);
    }
};

initDb();

// Routes
// Get all assessments
app.get('/api/assessments', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM assessments ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Save new assessment
app.post('/api/assessments', async (req, res) => {
    const { name, ratings, average } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO assessments (name, ratings, average) VALUES ($1, $2, $3) RETURNING *',
            [name, JSON.stringify(ratings), average]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error saving assessment' });
    }
});

// Delete assessment
app.delete('/api/assessments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM assessments WHERE id = $1', [id]);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting assessment' });
    }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
