import React, { useRef, useState } from 'react';
import './Cude.scss';

const defaultPosition = { x: 0, y: 0 };

export const Cude = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [rotate, setRotate] = useState(defaultPosition);
  const [startPos, setStartPos] = useState(defaultPosition);
  const cude = useRef<HTMLDivElement>(null);
  const offset = useRef(defaultPosition);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(true);
    setStartPos(prev => ({
      ...prev,
      x: e.pageX - offset.current.x,
      y: e.pageY - offset.current.y,
    }));
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseDown) {
      offset.current = {
        x: e.pageY - startPos.y,
        y: e.pageX - startPos.x,
      };

      setRotate(prev => ({
        ...prev,
        x: -offset.current.x,
        y: -offset.current.y,
      }));
    }
  };

  return (
    <section
      className="cude"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}>
      <p className="cude__description">
        Drag the cude and enjoy 🖐
      </p>
      <div className="cude__wrapper">
        <div
          className="cude__body"
          ref={cude}
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}>
          <div className="cude__side cude__side_top">top</div>
          <div className="cude__side cude__side_right">right</div>
          <div className="cude__side cude__side_bottom">bottom</div>
          <div className="cude__side cude__side_left">left</div>
          <div className="cude__side cude__side_front">front</div>
          <div className="cude__side cude__side_back">back</div>
        </div>
      </div>
    </section>
  );
};
