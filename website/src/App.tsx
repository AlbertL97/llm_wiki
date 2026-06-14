import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { WikiPage } from './components/WikiPage';
import { GraphView } from './components/GraphView';
import { LayoutGrid, FileText, Network, Menu, X } from 'lucide-react';
import wikiDbData from './wiki_db.json';

interface WikiPageType {
  id: string;
  title: string;
  summary: string;
  sources: string[];
  lastUpdated: string;
  content: string;
  related: string[];
  type: 'concept' | 'source';
}

const wikiDb = wikiDbData as Record<string, WikiPageType>;

export const App: React.FC = () => {
  const [selectedPageId, setSelectedPageId] = useState<string>('index');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // viewMode: 'split' | 'content' | 'graph'
  const [viewMode, setViewMode] = useState<'split' | 'content' | 'graph'>('split');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sync state with URL hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/#\/page\/(.+)/);
      if (match && wikiDb[match[1]]) {
        setSelectedPageId(match[1]);
      } else {
        setSelectedPageId('index');
      }
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPage = (id: string) => {
    window.location.hash = `#/page/${id}`;
    setSelectedPageId(id);
    
    // Auto-scroll content panel to top
    const contentPanel = document.querySelector('.content-panel');
    if (contentPanel) {
      contentPanel.scrollTop = 0;
    }
  };

  const selectedPage = wikiDb[selectedPageId] || wikiDb['index'];

  return (
    <div className="app-container" style={{ gridTemplateColumns: sidebarOpen ? '320px 1fr' : '0px 1fr' }}>
      {/* Toggle Sidebar Button */}
      <button 
        className="control-btn toggle-sidebar-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ left: sidebarOpen ? '336px' : '24px', transition: 'left var(--transition-normal)' }}
        title={sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      >
        {sidebarOpen ? <X style={{ width: '16px', height: '16px' }} /> : <Menu style={{ width: '16px', height: '16px' }} />}
      </button>

      {/* Floating Layout View Mode Controls */}
      <div className="graph-controls" style={{ right: 'auto', left: sidebarOpen ? '396px' : '84px', transition: 'left var(--transition-normal)' }}>
        <button 
          className={`control-btn ${viewMode === 'content' ? 'active' : ''}`}
          onClick={() => setViewMode('content')}
          style={{ borderColor: viewMode === 'content' ? 'var(--accent-cyan)' : '' }}
          title="Content Only"
        >
          <FileText style={{ width: '16px', height: '16px', color: viewMode === 'content' ? 'var(--accent-cyan)' : '' }} />
        </button>
        <button 
          className={`control-btn ${viewMode === 'split' ? 'active' : ''}`}
          onClick={() => setViewMode('split')}
          style={{ borderColor: viewMode === 'split' ? 'var(--accent-cyan)' : '' }}
          title="Split View"
        >
          <LayoutGrid style={{ width: '16px', height: '16px', color: viewMode === 'split' ? 'var(--accent-cyan)' : '' }} />
        </button>
        <button 
          className={`control-btn ${viewMode === 'graph' ? 'active' : ''}`}
          onClick={() => setViewMode('graph')}
          style={{ borderColor: viewMode === 'graph' ? 'var(--accent-cyan)' : '' }}
          title="Graph Only"
        >
          <Network style={{ width: '16px', height: '16px', color: viewMode === 'graph' ? 'var(--accent-cyan)' : '' }} />
        </button>
      </div>

      {/* Sidebar Panel */}
      {sidebarOpen && (
        <Sidebar
          wikiDb={wikiDb}
          selectedPageId={selectedPageId}
          onSelectPage={handleSelectPage}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      )}

      {/* Main Content & Graph Area */}
      <main className={`main-display ${viewMode === 'content' ? 'full-content' : viewMode === 'graph' ? 'full-graph' : ''}`}>
        {viewMode !== 'graph' && (
          <WikiPage
            page={selectedPage}
            wikiDb={wikiDb}
            onSelectPage={handleSelectPage}
          />
        )}
        
        {viewMode !== 'content' && (
          <GraphView
            selectedPageId={selectedPageId}
            onSelectPage={handleSelectPage}
          />
        )}
      </main>
    </div>
  );
};

export default App;
