import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import s from './BannerList.module.css';
import { Banner } from './Banner';

export type BannerListItem = {
  href?: string;
  src: string;
  alt: string;
  text: string;
};

export type BannerListProps = {
  items: BannerListItem[];
} & PropsOf<HTMLDivElement>;

export const BannerList = (props: BannerListProps) => {
  const { className, items, ...anotherProps } = props;
  const classNames = cn(s.bannerList, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      {items.map(({ text, href, src, alt }, i) => (
        <Banner width={583} height={100} text={text} href={href} key={i} src={src} alt={alt} />
      ))}
    </div>
  );
};
