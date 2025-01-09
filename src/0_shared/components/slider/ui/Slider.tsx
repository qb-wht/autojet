'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { useUnsafeEffect } from '@/0_shared/libs/hooks';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './Slider.module.css';

export type SliderProps = {
  slidesCount?: number;
  gap?: number;
  children: React.ReactNode[];
} & PropsOf<HTMLDivElement>;

export const Slider = (props: SliderProps) => {
  const { className, slidesCount = 6, gap = 5, children, ...anotherProps } = props;
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const classNames = cn(s.slider, className).build();
  const containerRef = useRef<HTMLDivElement>(null);

  useUnsafeEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setSlideWidth(container.getBoundingClientRect().width / slidesCount);
  }, []);

  const onChevronClick = (isReverse: boolean) => {
    setCurrentSlide((s) => (isReverse ? s + 1 : s - 1));
  };

  return (
    <div ref={containerRef} className={classNames} {...anotherProps}>
      <div style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}>
        <div style={{ gap: `${gap}px`, transform: `translateX(-${currentSlide * slideWidth}px)` }} className={s.line}>
          {children}
        </div>
      </div>

      {currentSlide > 0 && (
        <div onClick={() => onChevronClick(false)} className={s.chevronLeft}>
          <ChevronLeft size={28} />
        </div>
      )}

      {currentSlide < children.length - slidesCount && (
        <div onClick={() => onChevronClick(true)} className={s.chevronRight}>
          <ChevronRight size={28} />
        </div>
      )}
    </div>
  );
};
