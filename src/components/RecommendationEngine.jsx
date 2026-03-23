import { useState } from 'react'
import './RecommendationEngine.css'

export default function RecommendationEngine({ platforms, categories }) {
  const [priorities, setPriorities] = useState({
    recognition: 5,
    mobile: 5,
    budget: 3,
    integration: 4
  })

  const calculateRecommendation = () => {
    return platforms.map(platform => {
      let score = platform.overallScore

      // Recognition priority
      const recognitionScore = (
        platform.features.recognition.rating +
        platform.features.rewards.rating +
        platform.features.peerShoutouts.rating
      ) / 3
      score += recognitionScore * priorities.recognition * 2

      // Mobile priority
      score += platform.features.nativeApp.rating * priorities.mobile * 3

      // Budget priority (inverse - higher budget = less penalty)
      const avgCost = platform.name === 'Microsoft Viva Engage' ? 16 : 
                     platform.name === 'WorkVivo' ? 6.5 : 
                     platform.name === 'Staffbase' ? 5 : 
                     platform.name === 'Reward Gateway' ? 4.5 : 7.5
      score += (10 - avgCost) * priorities.budget

      // Integration priority
      score += platform.features.integration.rating * priorities.integration * 2

      return { ...platform, recommendationScore: Math.round(score) }
    }).sort((a, b) => b.recommendationScore - a.recommendationScore)
  }

  const recommended = calculateRecommendation()
  const topPick = recommended[0]

  return (
    <div className="recommendation-engine">
      <div className="priority-controls">
        <h3>Adjust Your Priorities</h3>
        <p className="controls-desc">
          Slide to indicate what matters most to your organization (1=low, 10=critical)
        </p>

        <div className="priority-grid">
          <div className="priority-item">
            <label>
              <span className="priority-label">🎁 Recognition & Rewards</span>
              <span className="priority-value">{priorities.recognition}/10</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={priorities.recognition}
              onChange={(e) => setPriorities({...priorities, recognition: Number(e.target.value)})}
            />
          </div>

          <div className="priority-item">
            <label>
              <span className="priority-label">📱 Mobile-First Experience</span>
              <span className="priority-value">{priorities.mobile}/10</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={priorities.mobile}
              onChange={(e) => setPriorities({...priorities, mobile: Number(e.target.value)})}
            />
          </div>

          <div className="priority-item">
            <label>
              <span className="priority-label">💰 Budget Conscious</span>
              <span className="priority-value">{priorities.budget}/10</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={priorities.budget}
              onChange={(e) => setPriorities({...priorities, budget: Number(e.target.value)})}
            />
          </div>

          <div className="priority-item">
            <label>
              <span className="priority-label">🔗 System Integration</span>
              <span className="priority-value">{priorities.integration}/10</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={priorities.integration}
              onChange={(e) => setPriorities({...priorities, integration: Number(e.target.value)})}
            />
          </div>
        </div>
      </div>

      <div className="recommendation-results">
        <div className="top-pick">
          <div className="top-pick-header">
            <h2>🏆 Top Recommendation</h2>
            <div className="rec-score">Score: {topPick.recommendationScore}</div>
          </div>

          <div className="top-pick-body">
            <div className="pick-platform">
              <span className="pick-logo">{topPick.logo}</span>
              <div>
                <h3>{topPick.name}</h3>
                <p>{topPick.tagline}</p>
              </div>
            </div>

            <div className="pick-reason">
              <h4>Why {topPick.name}?</h4>
              <p><strong>Best For:</strong> {topPick.bestFor}</p>
              <div className="pick-pros">
                {topPick.pros.map((pro, idx) => (
                  <div key={idx} className="pro-item">✓ {pro}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="all-rankings">
          <h3>All Platforms Ranked</h3>
          <div className="ranking-list">
            {recommended.map((platform, idx) => (
              <div key={platform.id} className={`ranking-card ${idx === 0 ? 'rank-1' : ''}`}>
                <div className="rank-number">#{idx + 1}</div>
                <div className="rank-logo">{platform.logo}</div>
                <div className="rank-details">
                  <div className="rank-name">{platform.name}</div>
                  <div className="rank-tagline">{platform.tagline}</div>
                </div>
                <div className="rank-score">{platform.recommendationScore}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
