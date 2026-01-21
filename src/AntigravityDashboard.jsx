import React, { useState, useEffect, useMemo } from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';
import {
    Zap,
    Activity,
    Brain,
    Users,
    Smile,
    Heart,
    DollarSign,
    Target,
    TrendingUp,
    Loader2,
    Save,
    RotateCcw,
    Trash2,
    History
} from 'lucide-react';


/**
 * --- CONFIGURACIÓN PARA MIGRACIÓN (LEER AQUÍ) ---
 * * Para mover este componente a tu proyecto 'Prisma':
 * 1. Asegúrate de instalar las dependencias: npm install recharts lucide-react firebase
 * 2. Reemplaza la lógica de `firebaseConfig` abajo con tus variables de entorno habituales.
 * Ej: const firebaseConfig = { apiKey: process.env.REACT_APP_API_KEY, ... }
 */

// Configured for PostgreSQL Backend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';


// --- ESTILOS Y COLORES "PRISMA" ---
const THEME = {
    bg: 'bg-[#0f0c29]', // Fondo muy oscuro
    card: 'bg-[#1a163a]/80', // Tarjetas semitransparentes
    text: 'text-slate-200',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
    gradient: 'from-[#0f0c29] via-[#302b63] to-[#24243e]',
    chartColors: {
        stroke: '#a855f7', // Purple 500
        fill: '#8b5cf6',   // Violet 500
        grid: '#4c1d95',   // Violet 900
        text: '#e2e8f0'    // Slate 200
    }
};

const CATEGORIES = [
    { id: 'alma', label: 'Alma', icon: Zap, color: '#d8b4fe' },
    { id: 'cuerpo', label: 'Cuerpo', icon: Activity, color: '#6ee7b7' },
    { id: 'mente', label: 'Mente', icon: Brain, color: '#fcd34d' },
    { id: 'familia', label: 'Familia', icon: Users, color: '#fb923c' },
    { id: 'amigos', label: 'Amigos', icon: Smile, color: '#38bdf8' },
    { id: 'amor', label: 'Amor', icon: Heart, color: '#f472b6' },
    { id: 'dinero', label: 'Dinero', icon: DollarSign, color: '#4ade80' },
    { id: 'proposito', label: 'Propósito', icon: Target, color: '#fbbf24' },
    { id: 'crecimiento', label: 'Crecimiento', icon: TrendingUp, color: '#c084fc' },
];

const INITIAL_RATINGS = {
    alma: 5, cuerpo: 5, mente: 5, familia: 5,
    amigos: 5, amor: 5, dinero: 5, proposito: 5, crecimiento: 5,
};

export default function AntigravityDashboard() {
    const [ratings, setRatings] = useState(INITIAL_RATINGS);
    const [entryName, setEntryName] = useState('');
    const [savedEntries, setSavedEntries] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [view, setView] = useState('dashboard');
    const [statusMsg, setStatusMsg] = useState(null);

    // --- Auth & Data Fetching ---
    // --- Auth & Data Fetching ---
    // --- Data Fetching ---
    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const res = await fetch(`${API_URL}/assessments`);
                if (res.ok) {
                    const data = await res.json();
                    setSavedEntries(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEntries();
    }, []);

    // --- Computed ---
    const chartData = useMemo(() => {
        return CATEGORIES.map(cat => ({
            subject: cat.label,
            A: ratings[cat.id],
            fullMark: 10,
        }));
    }, [ratings]);

    const averageScore = useMemo(() => {
        const sum = Object.values(ratings).reduce((a, b) => a + b, 0);
        return (sum / 9).toFixed(1);
    }, [ratings]);

    // --- Actions ---
    const handleSliderChange = (id, value) => {
        setRatings(prev => ({ ...prev, [id]: parseInt(value) }));
    };

    const handleSave = async () => {
        if (!entryName.trim()) {
            showStatus('Asigna un nombre para identificar este estado', 'error');
            return;
        }

        setSaving(true);
        try {
            const res = await fetch(`${API_URL}/assessments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: entryName,
                    ratings: ratings,
                    average: averageScore
                })
            });

            if (res.ok) {
                const newEntry = await res.json();
                setSavedEntries(prev => [newEntry, ...prev]);
                showStatus('Estado guardado (PostgreSQL)', 'success');
                setEntryName('');
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            console.error(error);
            showStatus('Error al guardar', 'error');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (docId, e) => {
        e.stopPropagation();

        try {
            const res = await fetch(`${API_URL}/assessments/${docId}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                setSavedEntries(prev => prev.filter(e => e.id !== docId));
                showStatus('Registro eliminado', 'success');
            }
        } catch (error) {
            console.error(error);
            showStatus('Error al eliminar', 'error');
        }
    };

    const loadEntry = (entry) => {
        setRatings(entry.ratings);
        setEntryName(entry.name);
        setView('dashboard');
        showStatus(`Visualizando: ${entry.name}`, 'success');
    };

    const showStatus = (msg, type) => {
        setStatusMsg({ text: msg, type });
        setTimeout(() => setStatusMsg(null), 3000);
    };

    // --- Render Helpers ---
    if (loading) {
        return (
            <div className={`flex items-center justify-center min-h-screen ${THEME.bg} text-purple-200`}>
                <Loader2 className="w-10 h-10 animate-spin mr-3 text-purple-500" />
                <span className="text-lg font-light tracking-widest">SINTONIZANDO...</span>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br ${THEME.gradient} text-slate-200 font-sans selection:bg-purple-500 selection:text-white pb-20`}>

            {/* Toast */}
            {statusMsg && (
                <div className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md border transition-all animate-in fade-in slide-in-from-top-2 ${statusMsg.type === 'error'
                    ? 'bg-red-900/80 border-red-500/50 text-red-100'
                    : 'bg-emerald-900/80 border-emerald-500/50 text-emerald-100'
                    }`}>
                    {statusMsg.text}
                </div>
            )}

            {/* Navbar */}
            <nav className="border-b border-purple-500/20 bg-[#0f0c29]/50 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="bg-purple-600 p-2 rounded-lg shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    PRISMA
                                </h1>
                                <p className="text-[10px] text-purple-300/70 tracking-[0.2em] uppercase">Life Balance System</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setView('dashboard')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'dashboard'
                                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/50 shadow-[0_0_10px_rgba(147,51,234,0.2)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => setView('history')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'history'
                                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/50 shadow-[0_0_10px_rgba(147,51,234,0.2)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Historial
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {view === 'dashboard' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">

                        {/* Controles */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className={`${THEME.card} backdrop-blur-sm rounded-2xl border ${THEME.border} p-6 shadow-xl`}>
                                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                    <h2 className="text-lg font-light text-purple-200 tracking-wide">Calibración de Áreas</h2>
                                    <button
                                        onClick={() => { setRatings(INITIAL_RATINGS); setEntryName(''); }}
                                        className="text-slate-500 hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                        title="Resetear"
                                    >
                                        <RotateCcw size={18} />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {CATEGORIES.map((cat) => (
                                        <div key={cat.id} className="group relative">
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="flex items-center gap-3 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                                    <cat.icon size={16} style={{ color: cat.color }} className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                                    {cat.label}
                                                </label>
                                                <span className="text-xs font-mono text-purple-300/80 bg-purple-900/30 px-2 py-0.5 rounded border border-purple-500/20">
                                                    {ratings[cat.id]} / 10
                                                </span>
                                            </div>

                                            {/* Custom Range Slider */}
                                            <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
                                                <div
                                                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out opacity-60 group-hover:opacity-100"
                                                    style={{
                                                        width: `${ratings[cat.id] * 10}%`,
                                                        backgroundColor: cat.color,
                                                        boxShadow: `0 0 10px ${cat.color}`
                                                    }}
                                                />
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="10"
                                                    step="1"
                                                    value={ratings[cat.id]}
                                                    onChange={(e) => handleSliderChange(cat.id, e.target.value)}
                                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Radar Chart */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className={`${THEME.card} backdrop-blur-sm rounded-2xl border ${THEME.border} p-6 shadow-2xl relative overflow-hidden group`}>

                                {/* Background Glow Effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-lg font-light text-purple-200 tracking-wide">Proyección Radar</h2>
                                    <div className="text-right">
                                        <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Promedio</span>
                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                            {averageScore}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-[450px] relative z-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                                            <PolarGrid stroke={THEME.chartColors.grid} strokeOpacity={0.5} />
                                            <PolarAngleAxis
                                                dataKey="subject"
                                                tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
                                            />
                                            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                            <Radar
                                                name="Balance Actual"
                                                dataKey="A"
                                                stroke={THEME.chartColors.stroke}
                                                strokeWidth={3}
                                                fill={THEME.chartColors.fill}
                                                fillOpacity={0.3}
                                                isAnimationActive={true}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#1e1b4b',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                                    borderRadius: '8px',
                                                    color: '#fff'
                                                }}
                                                itemStyle={{ color: '#a78bfa' }}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Guardar */}
                            <div className={`${THEME.card} backdrop-blur-sm rounded-2xl border ${THEME.border} p-6`}>
                                <div className="flex flex-col md:flex-row gap-4 items-end">
                                    <div className="flex-1 w-full">
                                        <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                                            Guardar sesión actual
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ej: Inicio 2024 - Objetivo Prisma"
                                            value={entryName}
                                            onChange={(e) => setEntryName(e.target.value)}
                                            className="w-full bg-[#0f0c29]/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-purple-900/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Historial View */
                    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-4 text-purple-200 mb-4">
                            <History size={24} className="text-purple-500" />
                            <h2 className="text-2xl font-light">Línea de Tiempo</h2>
                        </div>

                        {savedEntries.length === 0 ? (
                            <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-purple-500/20 rounded-3xl bg-white/5 text-slate-500">
                                <Activity className="w-16 h-16 mb-4 opacity-20" />
                                <p>No hay registros en el sistema aún.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {savedEntries.map((entry) => (
                                    <div
                                        key={entry.id}
                                        onClick={() => loadEntry(entry)}
                                        className="group bg-[#1e1b4b]/60 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/40 hover:bg-[#1e1b4b]/80 transition-all cursor-pointer relative overflow-hidden"
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                        <div className="flex justify-between items-start mb-4 relative z-10">
                                            <div>
                                                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                                    {entry.name}
                                                </h3>
                                                <p className="text-xs text-slate-500 mt-1 font-mono">
                                                    {entry.created_at
                                                        ? new Date(entry.created_at).toLocaleDateString()
                                                        : 'N/A'}
                                                </p>
                                            </div>
                                            <div className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs font-mono border border-purple-500/20">
                                                {entry.average} AVG
                                            </div>
                                        </div>

                                        {/* Mini Stats */}
                                        <div className="flex gap-1 mt-4 border-t border-white/5 pt-4">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className={`h-1 flex-1 rounded-full ${i < Math.round(entry.average / 2) ? 'bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]' : 'bg-slate-800'
                                                    }`} />
                                            ))}
                                        </div>

                                        <div className="mt-4 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                                            <span className="text-xs text-purple-400 flex items-center gap-1">
                                                <RotateCcw size={12} /> Cargar
                                            </span>
                                            <button
                                                onClick={(e) => handleDelete(entry.id, e)}
                                                className="text-slate-500 hover:text-red-400 transition-colors p-1"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
