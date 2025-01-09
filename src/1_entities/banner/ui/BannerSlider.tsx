'use client';

import { Slider } from '@/0_shared/components/slider';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import { Banner } from './Banner';
import s from './BannerSlider.module.css';

export type BannerSliderItem = {
  width: number;
  height: number;
  href?: string;
  src: string;
  alt: string;
  text: string;
};

export type BannerSliderProps = {
  items: BannerSliderItem[];
} & PropsOf<HTMLDivElement>;

export const BannerSlider = (props: BannerSliderProps) => {
  const { className, items, ...anotherProps } = props;
  const classNames = cn(s.bannerSlider, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Slider className={s.slider}>
        {items.map(({ width, height, src, alt, text, href }, i) => (
          <Banner key={i} width={width} height={height} src={src} alt={alt} text={text} href={href} />
        ))}
      </Slider>
    </div>
  );
};
