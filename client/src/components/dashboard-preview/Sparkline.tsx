import type { FC } from 'react';

interface SparklineProps {
  points?: number[];
  className?: string;
}

export const Sparkline: FC<SparklineProps> = ({
  points = [30, 32, 28, 35, 33, 40, 48, 45, 52, 60],
  className = 'w-24 h-10',
}) => {
  const width = 100;
  const height = 40;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const coords = points.map((val, idx) => {
    const x = (idx / (points.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 8) - 4;
    return { x, y };
  });

  // Generate smooth cubic bezier SVG path
  let pathD = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const curr = coords[i];
    const next = coords[i + 1];
    const cx = (curr.x + next.x) / 2;
    pathD += ` C ${cx} ${curr.y}, ${cx} ${next.y}, ${next.x} ${next.y}`;
  }

  const lastPoint = coords[coords.length - 1];

  return (
    <div className={`relative flex items-center justify-end ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible"
        fill="none"
      >
        <path
          d={pathD}
          fill="none"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Terminal dot */}
        <circle
          cx={lastPoint.x}
          cy={lastPoint.y}
          r="3"
          fill="#18181B"
        />
      </svg>
    </div>
  );
};
