import { useState } from 'react'
import { platforms, featureCategories } from './data/platforms'
import ComparisonTable from './components/ComparisonTable'
import FeatureMatrix from './components/FeatureMatrix'
import RecommendationEngine from './components/RecommendationEngine'
import ScoreChart from './components/ScoreChart'
import PricingComparison from './components/PricingComparison'
import NFROverview from './components/NFROverview'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>🏢 Internal Communications Platform Comparison</h1>
          <p className="subtitle">
            Comprehensive analysis for 2,650 employees (1,987 deskless workers)
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="nav-tabs">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              ✅ Feature Matrix
            </button>
            <button 
              className={`tab ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              💰 Pricing
            </button>
            <button 
              className={`tab ${activeTab === 'recommendation' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommendation')}
            >
              🎯 Recommendation
            </button>
            <button 
              className={`tab ${activeTab === 'nfr' ? 'active' : ''}`}
              onClick={() => setActiveTab('nfr')}
            >
              📋 NFR Compliance
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {activeTab === 'overview' && (
            <>
              <section className="section">
                <h2>Platform Scores Comparison</h2>
                <p className="section-desc">
                  Overall scores based on must-have features (weighted 80%) and optional features (weighted 20%)
                </p>
                <ScoreChart platforms={platforms} />
              </section>

              <section className="section">
                <h2>Platform Comparison Table</h2>
                <ComparisonTable platforms={platforms} />
              </section>

              <section className="section">
                <h2>Non-Functional Requirements (NFR) Compliance</h2>
                <p className="section-desc">
                  Assessment of how each platform meets enterprise NFR standards
                </p>
                <NFROverview platforms={platforms} />
              </section>
            </>
          )}

          {activeTab === 'features' && (
            <section className="section">
              <h2>Complete Feature Matrix</h2>
              <p className="section-desc">
                Detailed comparison of must-have and optional features for deskless workforce
              </p>
              <FeatureMatrix platforms={platforms} categories={featureCategories} />
            </section>
          )}

          {activeTab === 'pricing' && (
            <section className="section">
              <h2>Pricing Comparison</h2>
              <p className="section-desc">
                Estimated costs for 2,650 employees (contact vendors for exact quotes)
              </p>
              <PricingComparison platforms={platforms} employeeCount={2650} />
            </section>
          )}

          {activeTab === 'recommendation' && (
            <section className="section">
              <h2>Smart Recommendation Engine</h2>
              <p className="section-desc">
                Based on your specific requirements for deskless workers
              </p>
              <RecommendationEngine platforms={platforms} categories={featureCategories} />
            </section>
          )}

          {activeTab === 'nfr' && (
            <section className="section">
              <h2>Non-Functional Requirements Assessment</h2>
              <p className="section-desc">
                Detailed compliance analysis against 68 enterprise NFRs across 12 categories
              </p>
              <div className="nfr-info-box">
                <h3>📋 What are NFRs?</h3>
                <p>
                  Non-Functional Requirements (NFRs) define system qualities like security, performance, availability, 
                  and data management. They ensure the platform meets enterprise standards beyond just features.
                </p>
                <p><strong>Categories assessed:</strong> Access Management, Security, Data Protection, Availability, 
                Performance, Compliance, Integration, and more.</p>
              </div>
              <NFROverview platforms={platforms} />
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Internal Communications Platform Comparison v2.0.0</p>
          <p className="footer-note">
            Data compiled {new Date().toLocaleDateString()} • Prices are estimates • Contact vendors for official quotes
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
