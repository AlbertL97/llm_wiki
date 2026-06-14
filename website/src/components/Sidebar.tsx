import React from 'react';
import { Search, BrainCircuit, FileText, Compass, BookOpen } from 'lucide-react';

interface WikiPage {
  id: string;
  title: string;
  summary: string;
  type: 'concept' | 'source';
}

interface SidebarProps {
  wikiDb: Record<string, WikiPage>;
  selectedPageId: string;
  onSelectPage: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  wikiDb,
  selectedPageId,
  onSelectPage,
  searchQuery,
  onSearchChange
}) => {
  const allPages = Object.values(wikiDb);

  // Filter based on search query
  const filteredPages = allPages.filter(page => {
    const q = searchQuery.toLowerCase();
    return (
      page.title.toLowerCase().includes(q) ||
      page.id.toLowerCase().includes(q) ||
      page.summary.toLowerCase().includes(q)
    );
  });

  // Categorize pages
  const orientationIds = ['project-overview', 'open-questions', 'research-decisions', 'source-conflicts', 'evidence-gaps', 'needs-verification', 'outdated-claims'];
  
  const orientationPages = filteredPages.filter(p => orientationIds.includes(p.id));
  const conceptPages = filteredPages.filter(p => p.type === 'concept' && !orientationIds.includes(p.id) && p.id !== 'index' && p.id !== 'log');
  const sourcePages = filteredPages.filter(p => p.type === 'source');

  // Sort alphabetically
  orientationPages.sort((a, b) => a.title.localeCompare(b.title));
  conceptPages.sort((a, b) => a.title.localeCompare(b.title));
  sourcePages.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <span className="logo-icon">🧠</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="logo-text">Human–AI Interaction</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Psychology Wiki</span>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search wiki content..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        {/* Navigation to Home and Changelog */}
        <ul className="nav-list" style={{ marginBottom: '16px' }}>
          <li
            className={`nav-item ${selectedPageId === 'index' ? 'active' : ''}`}
            onClick={() => onSelectPage('index')}
          >
            <Compass className="nav-item-icon" />
            <span>Wiki Index</span>
          </li>
          <li
            className={`nav-item ${selectedPageId === 'log' ? 'active' : ''}`}
            onClick={() => onSelectPage('log')}
          >
            <BookOpen className="nav-item-icon" />
            <span>Changelog</span>
          </li>
        </ul>

        {/* Orientation Section */}
        {orientationPages.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <div className="nav-section-title">Orientation</div>
            <ul className="nav-list">
              {orientationPages.map(page => (
                <li
                  key={page.id}
                  className={`nav-item ${selectedPageId === page.id ? 'active' : ''}`}
                  onClick={() => onSelectPage(page.id)}
                  title={page.title}
                >
                  <Compass className="nav-item-icon" />
                  <span>{page.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Concepts & Constructs Section */}
        {conceptPages.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <div className="nav-section-title">Concepts & Constructs</div>
            <ul className="nav-list">
              {conceptPages.map(page => (
                <li
                  key={page.id}
                  className={`nav-item ${selectedPageId === page.id ? 'active' : ''}`}
                  onClick={() => onSelectPage(page.id)}
                  title={page.title}
                >
                  <BrainCircuit className="nav-item-icon" />
                  <span>{page.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Source Summaries Section */}
        {sourcePages.length > 0 && (
          <div>
            <div className="nav-section-title">Source Summaries</div>
            <ul className="nav-list">
              {sourcePages.map(page => (
                <li
                  key={page.id}
                  className={`nav-item source ${selectedPageId === page.id ? 'active' : ''}`}
                  onClick={() => onSelectPage(page.id)}
                  title={page.title}
                >
                  <FileText className="nav-item-icon" />
                  <span>{page.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </aside>
  );
};
