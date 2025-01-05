'use client';
import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import s from './BannerSlider.module.css';
import { Banner } from './Banner';
import { Slider } from '@/0_shared/components/slider';

export type BannerSliderProps = {} & PropsOf<HTMLDivElement>;

export const BannerSlider = (props: BannerSliderProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn(s.bannerSlider, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Slider className={s.slider}>
        <Banner width={181} height={181} src="/0.png" alt="Banner" text="Новые компоненты" />
        <Banner width={181} height={181} src="/1.png" alt="Banner" text="Где найти код краски?" />
        <Banner width={181} height={181} src="/2.png" alt="Banner" text="Узнать код краски  по WIN" />
        <Banner width={181} height={181} src="/3.png" alt="Banner" text="Сила новых компонентов" />
        <Banner width={181} height={181} src="/4.png" alt="Banner" text="Слабость это сила" />
        <Banner width={181} height={181} src="/5.png" alt="Banner" text="Комплектом выгоднее" />
        <Banner width={181} height={181} src="/5.png" alt="Banner" text="Комплектом выгоднее" />
        <Banner width={181} height={181} src="/5.png" alt="Banner" text="Комплектом выгоднее" />
        <Banner width={181} height={181} src="/5.png" alt="Banner" text="Комплектом выгоднее" />
      </Slider>
    </div>
  );
};
