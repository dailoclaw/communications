import './PricingComparison.css'

export default function PricingComparison({ platforms, employeeCount }) {
  const estimateAnnualCost = (platform) => {
    // These are rough estimates based on typical pricing
    const estimates = {
      'WorkVivo': { min: 5, max: 8 },
      'Staffbase': { min: 3, max: 7 },
      'Reward Gateway': { min: 3, max: 6 },
      'Microsoft Viva Engage': { min: 12, max: 20 }, // Part of M365
      'Simpplr': { min: 5, max: 10 }
    }
    
    const range = estimates[platform.name] || { min: 3, max: 8 }
    const minAnnual = range.min * employeeCount * 12
    const maxAnnual = range.max * employeeCount * 12
    
    return { minAnnual, maxAnnual, perUserMin: range.min, perUserMax: range.max }
  }

  return (
    <div className="pricing-comparison">
      <div className="pricing-note">
        <strong>⚠️ Important Note:</strong> All prices are estimates based on {employeeCount.toLocaleString()} total employees ({Math.round(employeeCount * 0.75).toLocaleString()} deskless workers). 
        Contact vendors directly for accurate quotes. Most platforms offer volume discounts for large deployments.
      </div>

      <div className="pricing-grid">
        {platforms.map(platform => {
          const costs = estimateAnnualCost(platform)
          return (
            <div key={platform.id} className="pricing-card">
              <div className="pricing-header">
                <span className="pricing-logo">{platform.logo}</span>
                <h3>{platform.name}</h3>
              </div>

              <div className="pricing-body">
                <div className="cost-estimate">
                  <div className="cost-label">Estimated Annual Cost</div>
                  <div className="cost-range">
                    ${costs.minAnnual.toLocaleString()} - ${costs.maxAnnual.toLocaleString()}
                  </div>
                  <div className="cost-per-user">
                    ${costs.perUserMin}-${costs.perUserMax} per user/month
                  </div>
                </div>

                <div className="pricing-tiers">
                  <h4>Pricing Tiers</h4>
                  <div className="tier">
                    <span className="tier-name">Starter</span>
                    <span className="tier-price">{platform.pricing.starter}</span>
                  </div>
                  <div className="tier">
                    <span className="tier-name">Professional</span>
                    <span className="tier-price">{platform.pricing.professional}</span>
                  </div>
                  <div className="tier">
                    <span className="tier-name">Enterprise</span>
                    <span className="tier-price">{platform.pricing.enterprise}</span>
                  </div>
                </div>

                <div className="pricing-notes">
                  <p>{platform.pricing.note}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="pricing-summary">
        <h3>Cost Comparison Summary</h3>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Est. Per User/Month</th>
              <th>Est. Annual Cost ({employeeCount.toLocaleString()} employees)</th>
              <th>Value Rating</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map(platform => {
              const costs = estimateAnnualCost(platform)
              const valueRating = platform.overallScore / ((costs.perUserMin + costs.perUserMax) / 2)
              return (
                <tr key={platform.id}>
                  <td>
                    <div className="platform-name-cell">
                      <span>{platform.logo}</span>
                      <span>{platform.name}</span>
                    </div>
                  </td>
                  <td className="price-cell">
                    ${costs.perUserMin}-${costs.perUserMax}
                  </td>
                  <td className="price-cell">
                    ${costs.minAnnual.toLocaleString()} - ${costs.maxAnnual.toLocaleString()}
                  </td>
                  <td>
                    <div className="value-badge">{valueRating.toFixed(1)} pts</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
