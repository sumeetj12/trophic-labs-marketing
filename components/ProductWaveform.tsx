type Mode = 'analyzing' | 'idle';

export default function ProductWaveform({
  mode = 'analyzing',
  width = 240,
  height = 96,
  ariaLabel = 'Trophic engine waveform',
}: {
  mode?: Mode;
  width?: number;
  height?: number;
  ariaLabel?: string;
}) {
  const bars = [
    { x: 51, y: 42, h: 12 },
    { x: 67, y: 38, h: 20 },
    { x: 83, y: 34, h: 28 },
    { x: 99, y: 32, h: 32 },
    { x: 115, y: 30, h: 36 },
    { x: 131, y: 32, h: 32 },
    { x: 147, y: 34, h: 28 },
    { x: 163, y: 38, h: 20 },
    { x: 179, y: 42, h: 12 },
  ];
  return (
    <svg
      className={`wf wf--${mode}`}
      width={width}
      height={height}
      viewBox="0 0 240 96"
      role="img"
      aria-label={ariaLabel}
      shapeRendering="crispEdges"
    >
      {bars.map((b, i) => (
        <rect key={i} className="bar" x={b.x} y={b.y} width="2" height={b.h} rx="1" />
      ))}
    </svg>
  );
}
