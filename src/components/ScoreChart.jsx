import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import './ScoreChart.css'

export default function ScoreChart({ platforms }) {
  const data = platforms.map(p => ({
    name: p.name,
    score: p.overallScore,
    logo: p.logo
  })).sort((a, b) => b.score - a.score)

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']

  return (
    <div className="score-chart">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={100}
            style={{ fontSize: 14, fontWeight: 600 }}
          />
          <YAxis 
            domain={[0, 100]} 
            label={{ value: 'Overall Score', angle: -90, position: 'insideLeft', style: { fontSize: 14, fontWeight: 600 } }}
          />
          <Tooltip 
            contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', padding: '12px' }}
            labelStyle={{ fontWeight: 700, marginBottom: 8 }}
          />
          <Legend wrapperStyle={{ paddingTop: 20 }} />
          <Bar dataKey="score" name="Platform Score" radius={[8, 8, 0, 0]} animationDuration={800}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      <div className="score-legend">
        {data.map((p, idx) => (
          <div key={p.name} className="legend-item">
            <span className="legend-logo">{p.logo}</span>
            <span className="legend-name">{p.name}</span>
            <span className="legend-score" style={{ color: COLORS[idx % COLORS.length] }}>
              {p.score}/100
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
