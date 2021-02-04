import React from 'react';
import gsap from 'gsap';
import './GradientSnake.scss';

const cirlesArray = Array.from({ length: 10 }, (_, idx) => idx);

export const GradientSnake = () => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to('.gradient-snake__circle', {
      left: 0,
      top: 0,
      x: e.clientX,
      y: e.clientY,
      stagger: -0.05,
    });
  };

  return (
    <section className="gradient-snake" onMouseMove={onMouseMove}>
      <div className="gradient-snake__cursor">
        {cirlesArray.map(circleIndex => (
          <div className="gradient-snake__circle" key={circleIndex} />
        ))}
      </div>
    </section>
  );
};
