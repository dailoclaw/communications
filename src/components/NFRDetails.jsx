import { useState } from 'react'
import { nfrRequirements, platformNFRCompliance } from '../data/nfrData'
import * as XLSX from 'xlsx'
import './NFRDetails.css'

export default function NFRDetails({ platforms }) {
  const [expandedPlatforms, setExpandedPlatforms] = useState({})
  const [showCategoryBreakdown, setShowCategoryBreakdown] = useState({})

  const togglePlatform = (platformName) => {
    setExpandedPlatforms(prev => ({
      ...prev,
      [platformName]: !prev[platformName]
    }))
  }

  const toggleCategoryBreakdown = (platformName) => {
    setShowCategoryBreakdown(prev => ({
      ...prev,
      [platformName]: !prev[platformName]
    }))
  }

  const getCategoryBreakdown = (platformName) => {
    const compliance = platformNFRCompliance[platformName]
    if (!compliance) return {}

    const breakdown = {}
    
    nfrRequirements.forEach(req => {
      const nfrStatus = compliance[req.id]
      if (nfrStatus) {
        if (!breakdown[req.category]) {
          breakdown[req.category] = { met: 0, partial: 0, unknown: 0, notMet: 0, total: 0 }
        }
        breakdown[req.category].total++
        
        switch(nfrStatus.status) {
          case 'Met': breakdown[req.category].met++; break
          case 'Partial': breakdown[req.category].partial++; break
          case 'Unknown': breakdown[req.category].unknown++; break
          case 'Not Met': breakdown[req.category].notMet++; break
        }
      }
    })

    return breakdown
  }

  const exportToExcel = (platformName) => {
    const compliance = platformNFRCompliance[platformName]
    if (!compliance) return

    // Prepare data for Excel
    const data = []
    
    // Add header row
    data.push(['NFR ID', 'Category', 'Name', 'Description', 'Status', 'Implementation Notes'])
    
    // Add each NFR
    nfrRequirements.forEach(req => {
      const nfrStatus = compliance[req.id]
      if (nfrStatus) {
        data.push([
          req.id,
          req.category,
          req.name,
          req.description,
          nfrStatus.status,
          nfrStatus.note
        ])
      }
    })

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.aoa_to_sheet(data)
    
    // Set column widths
    ws['!cols'] = [
      { wch: 10 },  // NFR ID
      { wch: 25 },  // Category
      { wch: 35 },  // Name
      { wch: 60 },  // Description
      { wch: 12 },  // Status
      { wch: 50 }   // Notes
    ]
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'NFR Compliance')
    
    // Generate filename
    const filename = `${platformName.replace(/\s+/g, '_')}_NFR_Compliance.xlsx`
    
    // Download file
    XLSX.writeFile(wb, filename)
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
            <div className="nfr-platform-header-wrapper">
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
              <button 
                className="export-button"
                onClick={(e) => {
                  e.stopPropagation()
                  exportToExcel(platform.name)
                }}
                title="Export to Excel"
              >
                📊 Export Excel
              </button>
            </div>

            {isExpanded && (
              <div className="nfr-platform-body">
                <div className="category-breakdown-toggle">
                  <button 
                    className="breakdown-toggle-btn"
                    onClick={() => toggleCategoryBreakdown(platform.name)}
                  >
                    {showCategoryBreakdown[platform.name] ? '📊 Hide' : '📊 Show'} Category Breakdown
                  </button>
                </div>

                {showCategoryBreakdown[platform.name] && (
                  <div className="category-breakdown-section">
                    <h4 className="breakdown-title">NFR Compliance by Category</h4>
                    <div className="category-breakdown-grid">
                      {Object.entries(getCategoryBreakdown(platform.name))
                        .sort((a, b) => a[0].localeCompare(b[0]))
                        .map(([category, stats]) => {
                          const complianceRate = Math.round((stats.met / stats.total) * 100)
                          return (
                            <div key={category} className="category-breakdown-card">
                              <div className="category-breakdown-header">
                                <span className="category-breakdown-name">{category}</span>
                                <span className="category-breakdown-total">({stats.total} NFRs)</span>
                              </div>
                              <div className="category-breakdown-bar">
                                <div 
                                  className="bar-segment bar-met" 
                                  style={{ width: `${(stats.met / stats.total) * 100}%` }}
                                  title={`${stats.met} Met`}
                                />
                                <div 
                                  className="bar-segment bar-partial" 
                                  style={{ width: `${(stats.partial / stats.total) * 100}%` }}
                                  title={`${stats.partial} Partial`}
                                />
                                <div 
                                  className="bar-segment bar-unknown" 
                                  style={{ width: `${(stats.unknown / stats.total) * 100}%` }}
                                  title={`${stats.unknown} Unknown`}
                                />
                                {stats.notMet > 0 && (
                                  <div 
                                    className="bar-segment bar-not-met" 
                                    style={{ width: `${(stats.notMet / stats.total) * 100}%` }}
                                    title={`${stats.notMet} Not Met`}
                                  />
                                )}
                              </div>
                              <div className="category-breakdown-stats">
                                <span className="stat-item stat-met">✅ {stats.met}</span>
                                {stats.partial > 0 && <span className="stat-item stat-partial">⚠️ {stats.partial}</span>}
                                {stats.unknown > 0 && <span className="stat-item stat-unknown">❓ {stats.unknown}</span>}
                                {stats.notMet > 0 && <span className="stat-item stat-not-met">❌ {stats.notMet}</span>}
                                <span className="stat-item stat-rate">{complianceRate}%</span>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )}

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
