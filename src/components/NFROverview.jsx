import { platformNFRCompliance, calculateNFRScore } from '../data/nfrData'
import './NFROverview.css'

export default function NFROverview({ platforms }) {
  const nfrScores = platforms.map(p => ({
    ...p,
    nfr: calculateNFRScore(p.name)
  })).sort((a, b) => b.nfr.score - a.nfr.score)

  return (
    <div className="nfr-overview">
      <div className="nfr-summary-cards">
        {nfrScores.map(platform => (
          <div key={platform.id} className="nfr-summary-card">
            <div className="nfr-card-header">
              <span className="nfr-logo">{platform.logo}</span>
              <div>
                <h4>{platform.name}</h4>
                <div className="nfr-score-badge">{platform.nfr.score}% Compliant</div>
              </div>
            </div>
            <div className="nfr-card-body">
              <div className="nfr-stat met">
                <span className="stat-value">{platform.nfr.met}</span>
                <span className="stat-label">Met</span>
              </div>
              <div className="nfr-stat partial">
                <span className="stat-value">{platform.nfr.partial}</span>
                <span className="stat-label">Partial</span>
              </div>
              <div className="nfr-stat unknown">
                <span className="stat-value">{platform.nfr.unknown}</span>
                <span className="stat-label">Unknown</span>
              </div>
              <div className="nfr-stat not-met">
                <span className="stat-value">{platform.nfr.notMet}</span>
                <span className="stat-label">Not Met</span>
              </div>
            </div>
            <div className="nfr-card-footer">
              Total: {platform.nfr.total} NFRs assessed
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
