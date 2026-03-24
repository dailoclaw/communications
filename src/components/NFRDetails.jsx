import { useState } from 'react'
import { nfrRequirements, platformNFRCompliance } from '../data/nfrData'
import './NFRDetails.css'

export default function NFRDetails({ platforms }) {
  const [expandedPlatforms, setExpandedPlatforms] = useState({})

  const togglePlatform = (platformName) => {
    setExpandedPlatforms(prev => ({
      ...prev,
      [platformName]: !prev[platformName]
    }))
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Met': return '✅'
      case 'Partial': return '⚠️'
      case 'Unknown': return '❓'
      case 'Not Met': return '❌'
      default: return '❓'
    }
  }

  const getStatusClass = (status) => {
    switch(status) {
      case 'Met': return 'status-met'
      case 'Partial': return 'status-partial'
      case 'Unknown': return 'status-unknown'
      case 'Not Met': return 'status-not-met'
      default: return 'status-unknown'
    }
  }

  return (
    <div className="nfr-details">
      {platforms.map(platform => {
        const compliance = platformNFRCompliance[platform.name]
        const isExpanded = expandedPlatforms[platform.name]
        
        if (!compliance) return null

        // Group NFRs by status
        const metNFRs = []
        const partialNFRs = []
        const unknownNFRs = []
        const notMetNFRs = []

        nfrRequirements.forEach(req => {
          const nfrStatus = compliance[req.id]
          if (nfrStatus) {
            const nfrData = { ...req, ...nfrStatus }
            switch(nfrStatus.status) {
              case 'Met': metNFRs.push(nfrData); break
              case 'Partial': partialNFRs.push(nfrData); break
              case 'Unknown': unknownNFRs.push(nfrData); break
              case 'Not Met': notMetNFRs.push(nfrData); break
            }
          }
        })

        return (
          <div key={platform.id} className="nfr-platform-card">
            <div 
              className="nfr-platform-header"
              onClick={() => togglePlatform(platform.name)}
            >
              <div className="platform-title">
                <span className="platform-logo">{platform.logo}</span>
                <h3>{platform.name}</h3>
                <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
              </div>
              <div className="platform-summary">
                <div className="summary-badge met">{metNFRs.length} Met</div>
                <div className="summary-badge partial">{partialNFRs.length} Partial</div>
                <div className="summary-badge unknown">{unknownNFRs.length} Unknown</div>
                {notMetNFRs.length > 0 && (
                  <div className="summary-badge not-met">{notMetNFRs.length} Not Met</div>
                )}
              </div>
            </div>

            {isExpanded && (
              <div className="nfr-platform-body">
                {metNFRs.length > 0 && (
                  <div className="nfr-status-group">
                    <h4 className="status-group-title met">
                      ✅ Fully Met ({metNFRs.length})
                    </h4>
                    <div className="nfr-list">
                      {metNFRs.map(nfr => (
                        <div key={nfr.id} className={`nfr-item ${getStatusClass(nfr.status)}`}>
                          <div className="nfr-item-header">
                            <span className="nfr-status-icon">{getStatusIcon(nfr.status)}</span>
                            <span className="nfr-id">{nfr.id}</span>
                            <span className="nfr-name">{nfr.name}</span>
                          </div>
                          <div className="nfr-item-body">
                            <p className="nfr-description">{nfr.description}</p>
                            {nfr.note && (
                              <p className="nfr-note">
                                <strong>Implementation:</strong> {nfr.note}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {partialNFRs.length > 0 && (
                  <div className="nfr-status-group">
                    <h4 className="status-group-title partial">
                      ⚠️ Partially Met ({partialNFRs.length})
                    </h4>
                    <div className="nfr-list">
                      {partialNFRs.map(nfr => (
                        <div key={nfr.id} className={`nfr-item ${getStatusClass(nfr.status)}`}>
                          <div className="nfr-item-header">
                            <span className="nfr-status-icon">{getStatusIcon(nfr.status)}</span>
                            <span className="nfr-id">{nfr.id}</span>
                            <span className="nfr-name">{nfr.name}</span>
                          </div>
                          <div className="nfr-item-body">
                            <p className="nfr-description">{nfr.description}</p>
                            {nfr.note && (
                              <p className="nfr-note">
                                <strong>Gap/Limitation:</strong> {nfr.note}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {unknownNFRs.length > 0 && (
                  <div className="nfr-status-group">
                    <h4 className="status-group-title unknown">
                      ❓ Unknown / Unable to Verify ({unknownNFRs.length})
                    </h4>
                    <div className="nfr-list">
                      {unknownNFRs.map(nfr => (
                        <div key={nfr.id} className={`nfr-item ${getStatusClass(nfr.status)}`}>
                          <div className="nfr-item-header">
                            <span className="nfr-status-icon">{getStatusIcon(nfr.status)}</span>
                            <span className="nfr-id">{nfr.id}</span>
                            <span className="nfr-name">{nfr.name}</span>
                          </div>
                          <div className="nfr-item-body">
                            <p className="nfr-description">{nfr.description}</p>
                            {nfr.note && (
                              <p className="nfr-note">
                                <strong>Note:</strong> {nfr.note}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {notMetNFRs.length > 0 && (
                  <div className="nfr-status-group">
                    <h4 className="status-group-title not-met">
                      ❌ Not Met ({notMetNFRs.length})
                    </h4>
                    <div className="nfr-list">
                      {notMetNFRs.map(nfr => (
                        <div key={nfr.id} className={`nfr-item ${getStatusClass(nfr.status)}`}>
                          <div className="nfr-item-header">
                            <span className="nfr-status-icon">{getStatusIcon(nfr.status)}</span>
                            <span className="nfr-id">{nfr.id}</span>
                            <span className="nfr-name">{nfr.name}</span>
                          </div>
                          <div className="nfr-item-body">
                            <p className="nfr-description">{nfr.description}</p>
                            {nfr.note && (
                              <p className="nfr-note">
                                <strong>Issue:</strong> {nfr.note}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
