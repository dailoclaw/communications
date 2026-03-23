import './ComparisonTable.css'

export default function ComparisonTable({ platforms }) {
  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="platform-header">Platform</th>
            <th>Best For</th>
            <th>Overall Score</th>
            <th>Strengths</th>
            <th>Limitations</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map(platform => (
            <tr key={platform.id}>
              <td className="platform-cell">
                <div className="platform-name">
                  <span className="platform-logo">{platform.logo}</span>
                  <div>
                    <div className="name">{platform.name}</div>
                    <div className="tagline">{platform.tagline}</div>
                  </div>
                </div>
              </td>
              <td>{platform.bestFor}</td>
              <td>
                <div className="score-badge">
                  <span className="score-value">{platform.overallScore}</span>
                  <span className="score-max">/100</span>
                </div>
              </td>
              <td>
                <ul className="feature-list">
                  {platform.pros.slice(0, 3).map((pro, idx) => (
                    <li key={idx} className="pro">✓ {pro}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul className="feature-list">
                  {platform.cons.slice(0, 3).map((con, idx) => (
                    <li key={idx} className="con">⚠ {con}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
