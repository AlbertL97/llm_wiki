import React, { useRef, useState, useEffect } from 'react';
import ForceGraph2D, { ForceGraphMethods } from 'react-force-graph-2d';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import graphData from '../graph.json';

interface Node {
  id: string;
  name: string;
  val: number;
  group: number;
  summary: string;
  x?: number;
  y?: number;
}

// Link type not needed locally


interface GraphViewProps {
  selectedPageId: string;
  onSelectPage: (id: string) => void;
}

export const GraphView: React.FC<GraphViewProps> = ({ selectedPageId, onSelectPage }) => {
  const fgRef = useRef<ForceGraphMethods>();
  
  // Highlight states
  const [hoverNode, setHoverNode] = useState<Node | null>(null);
  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<string>>(new Set());

  // Dimensions
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse links to easily find neighbors
  const [neighborsMap] = useState(() => {
    const map: Record<string, Set<string>> = {};
    graphData.nodes.forEach(node => {
      map[node.id] = new Set();
    });
    graphData.links.forEach(link => {
      map[link.source]?.add(link.target);
      map[link.target]?.add(link.source);
    });
    return map;
  });

  // Handle container resizing
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height: height || 500 });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Update highlights when hovering
  const handleNodeHover = (node: any) => {
    setHoverNode(node || null);
    const nodes = new Set<string>();
    const links = new Set<string>();

    if (node) {
      nodes.add(node.id);
      neighborsMap[node.id]?.forEach(neigh => nodes.add(neigh));
      
      (graphData.links as any[]).forEach((link: any) => {
        if (
          (typeof link.source === 'object' && link.source.id === node.id) ||
          (typeof link.target === 'object' && link.target.id === node.id) ||
          link.source === node.id ||
          link.target === node.id
        ) {
          const sId = typeof link.source === 'object' ? link.source.id : link.source;
          const tId = typeof link.target === 'object' ? link.target.id : link.target;
          links.add(`${sId}->${tId}`);
        }
      });
    }

    setHighlightNodes(nodes);
    setHighlightLinks(links);
  };

  // Zoom controls
  const handleZoomIn = () => fgRef.current?.zoom(fgRef.current.zoom() * 1.3, 400);
  const handleZoomOut = () => fgRef.current?.zoom(fgRef.current.zoom() / 1.3, 400);
  const handleZoomFit = () => fgRef.current?.zoomToFit(400);

  return (
    <div className="graph-panel" ref={containerRef}>
      {/* Controls */}
      <div className="graph-controls">
        <button className="control-btn" onClick={handleZoomIn} title="Zoom In">
          <ZoomIn style={{ width: '16px', height: '16px' }} />
        </button>
        <button className="control-btn" onClick={handleZoomOut} title="Zoom Out">
          <ZoomOut style={{ width: '16px', height: '16px' }} />
        </button>
        <button className="control-btn" onClick={handleZoomFit} title="Fit to Canvas">
          <Maximize2 style={{ width: '16px', height: '16px' }} />
        </button>
      </div>

      {/* Legend */}
      <div className="graph-legend">
        <div className="legend-item">
          <span className="legend-color concept"></span>
          <span>Concepts & Constructs</span>
        </div>
        <div className="legend-item">
          <span className="legend-color source"></span>
          <span>Source Summaries</span>
        </div>
      </div>

      {/* Custom Tooltip */}
      {hoverNode && (
        <div 
          className="graph-tooltip"
          style={{
            left: `${(hoverNode.x || 0) + dimensions.width / 2}px`,
            top: `${(hoverNode.y || 0) + dimensions.height / 2 - 20}px`,
            transform: 'translate(-50%, -100%)',
            position: 'absolute',
            pointerEvents: 'none'
          }}
        >
          <div className="graph-tooltip-title">{hoverNode.name}</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.3 }}>
            {hoverNode.summary || 'No summary available.'}
          </div>
        </div>
      )}

      {/* D3 Graph */}
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        nodeRelSize={6}
        cooldownTicks={100}
        
        // Link styling
        linkColor={(link: any) => {
          const sId = typeof link.source === 'object' ? link.source.id : link.source;
          const tId = typeof link.target === 'object' ? link.target.id : link.target;
          const key = `${sId}->${tId}`;
          if (hoverNode) {
            return highlightLinks.has(key) ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 255, 255, 0.05)';
          }
          return sId === selectedPageId || tId === selectedPageId
            ? 'rgba(0, 240, 255, 0.6)'
            : 'rgba(255, 255, 255, 0.12)';
        }}
        linkWidth={(link: any) => {
          const sId = typeof link.source === 'object' ? link.source.id : link.source;
          const tId = typeof link.target === 'object' ? link.target.id : link.target;
          return sId === selectedPageId || tId === selectedPageId ? 2 : 1;
        }}
        
        // Particles representing data flow
        linkDirectionalParticles={(link: any) => {
          const sId = typeof link.source === 'object' ? link.source.id : link.source;
          const tId = typeof link.target === 'object' ? link.target.id : link.target;
          return sId === selectedPageId || tId === selectedPageId ? 4 : 0;
        }}
        linkDirectionalParticleSpeed={0.006}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleColor={() => 'var(--accent-cyan)'}

        // Custom Node Rendering
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const isSelected = node.id === selectedPageId;
          const isHighlighted = hoverNode ? highlightNodes.has(node.id) : false;
          const isDimmed = hoverNode && !isHighlighted;

          const r = node.val * 2.5;

          ctx.save();
          
          // Draw neon glow for active or hovered nodes
          if (isSelected || isHighlighted) {
            ctx.shadowColor = node.group === 1 ? '#00f0ff' : '#bf55ec';
            ctx.shadowBlur = 15;
          }

          // Node fill color
          if (isDimmed) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          } else {
            ctx.fillStyle = node.group === 1 ? '#00f0ff' : '#bf55ec';
          }

          ctx.beginPath();
          ctx.arc(node.x || 0, node.y || 0, r, 0, 2 * Math.PI, false);
          ctx.fill();

          // Node border outline
          if (isSelected) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }

          // Render labels for larger nodes or when zoomed in
          const label = node.name;
          const fontSize = 11 / globalScale;
          
          if (globalScale > 0.8 || isSelected || isHighlighted) {
            ctx.shadowBlur = 0; // Disable shadow for text to keep it crisp
            ctx.font = `${fontSize}px Outfit, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            
            ctx.fillStyle = isDimmed 
              ? 'rgba(156, 163, 175, 0.15)' 
              : isSelected 
                ? '#ffffff' 
                : 'rgba(243, 244, 246, 0.85)';
            
            // Limit text width
            let text = label;
            if (text.length > 25) {
              text = text.substring(0, 22) + '...';
            }
            ctx.fillText(text, node.x || 0, (node.y || 0) + r + 4);
          }

          ctx.restore();
        }}
        
        onNodeHover={handleNodeHover}
        onNodeClick={(node: any) => onSelectPage(node.id)}
      />
    </div>
  );
};
export default GraphView;
