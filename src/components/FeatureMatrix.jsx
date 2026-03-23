import './FeatureMatrix.css'

export default function FeatureMatrix({ platforms, categories }) {
  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'excellent'
    if (rating >= 3.5) return 'good'
    if (rating >= 2) return 'fair'
    if (rating > 0) return 'poor'
    return 'none'
  }

  const getRatingDot = (rating) => {
    const count = Math.round(rating)
    return '●'.repeat(count) + '○'.repeat(5 - count)
  }

  return (
    <div className="feature-matrix">
      {/* Must Have Features */}
      <div className="feature-section">
        <h3 className="section-title">
          <span className="badge must-have">Must Have</span> Features for Deskless Workers
        </h3>
        <div className="matrix-table-wrapper">
          <table className="matrix-table">
            <thead>
              <tr>
                <th className="feature-col">Feature</th>
                {platforms.map(p => (
                  <th key={p.id} className="platform-col">
                    <div className="platform-header">
                      <span>{p.logo}</span>
                      <span>{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.mustHave.map(feature => (
                <tr key={feature.key}>
                  <td className="feature-name">
                    {feature.label}
                    <span className="weight">Weight: {feature.weight}/10</span>
                  </td>
                  {platforms.map(p => {
                    const featureData = p.features[feature.key]
                    return (
                      <td key={p.id} className={`rating-cell ${getRatingColor(featureData.rating)}`}>
                        <div className="rating-dots">{getRatingDot(featureData.rating)}</div>
                        <div className="rating-value">{featureData.rating}/5</div>
                        <div className="feature-note">{featureData.note}</div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Optional Features */}
      <div className="feature-section">
        <h3 className="section-title">
          <span className="badge optional">Optional</span> Nice-to-Have Features
        </h3>
        <div className="matrix-table-wrapper">
          <table className="matrix-table">
            <thead>
              <tr>
                <th className="feature-col">Feature</th>
                {platforms.map(p => (
                  <th key={p.id} className="platform-col">
                    <div className="platform-header">
                      <span>{p.logo}</span>
                      <span>{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.optional.map(feature => (
                <tr key={feature.key}>
                  <td className="feature-name">
                    {feature.label}
                    <span className="weight">Weight: {feature.weight}/10</span>
                  </td>
                  {platforms.map(p => {
                    const featureData = p.features[feature.key]
                    return (
                      <td key={p.id} className={`rating-cell ${getRatingColor(featureData.rating)}`}>
                        <div className="rating-dots">{getRatingDot(featureData.rating)}</div>
                        <div className="rating-value">{featureData.rating}/5</div>
                        <div className="feature-note">{featureData.note}</div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
