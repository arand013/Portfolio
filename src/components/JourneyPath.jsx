import { useEffect, useRef } from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';

function JourneyPath({ items }) {
  const archerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const refreshPath = () => archerRef.current?.refreshScreen();
    const frameId = window.requestAnimationFrame(refreshPath);

    window.addEventListener('resize', refreshPath);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', refreshPath);
    };
  }, [items]);

  return (
    <div
      className="journey-path"
      onScroll={() => archerRef.current?.refreshScreen()}
    >
      <ArcherContainer
        ref={archerRef}
        strokeColor="#5d8cff"
        strokeWidth={2}
        lineStyle="curve"
        offset={16}
        svgContainerStyle={{ zIndex: 0 }}
      >
        <div
          className="journey-path__rail"
          aria-label="Story pathway"
          role="list"
        >
          {items.map((item, index) => {
            const nextItem = items[index + 1];
            const relations = nextItem
              ? [
                  {
                    targetId: `journey-step-${index + 1}`,
                    sourceAnchor: 'right',
                    targetAnchor: 'left',
                    style: {
                      strokeColor: '#5d8cff',
                      strokeWidth: 2,
                      strokeDasharray: '8,6',
                      lineStyle: 'curve',
                    },
                  },
                ]
              : [];

            return (
              <ArcherElement
                key={`${item.period}-${item.title}`}
                id={`journey-step-${index}`}
                relations={relations}
              >
                <div
                  className="journey-node"
                  role="listitem"
                >
                  <span className="journey-node__period">{item.period}</span>
                  <strong>{item.title}</strong>
                  <p className="journey-node__detail">{item.detail}</p>
                  <p className="journey-node__summary">{item.summary}</p>
                </div>
              </ArcherElement>
            );
          })}
        </div>
      </ArcherContainer>
    </div>
  );
}

export default JourneyPath;
