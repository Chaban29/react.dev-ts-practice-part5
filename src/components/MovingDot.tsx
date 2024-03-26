import { FC, useState, PointerEvent } from 'react';

interface IPosition {
  x: number;
  y: number;
}

export const MovingDot: FC = () => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handlePointerCircle = (event: PointerEvent<HTMLDivElement>) => {
    setPosition({ ...position, x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onPointerMove={handlePointerCircle}
      style={{ position: 'relative', width: '100vw', height: '100vh' }}
    >
      {' '}
      <div
        style={{
          position: 'absolute',
          background: 'blue',
          borderRadius: '50%',
          width: 20,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -37,
          top: -35,
        }}
      />
    </div>
  );
};
