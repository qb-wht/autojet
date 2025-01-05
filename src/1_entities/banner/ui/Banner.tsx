import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import s from './Banner.module.css';
import Image from 'next/image';
import { Text } from '@/0_shared/components/text';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import Link from 'next/link';

export type BannerProps = {
  src: string;
  alt: string;
  text: string;
  href?: string;
  width: number;
  height: number;
} & PropsOf<HTMLElement>;

const font = M_PLUS_Rounded_1c({
  weight: '500',
  subsets: ['latin'],
});

export const Banner = (props: BannerProps) => {
  const { className, src, text, href, alt, width, height, ...anotherProps } = props;
  const classNames = cn(s.banner, className).build();

  if (href) {
    <Link href={href} className={classNames} {...anotherProps}>
      <Image src={src} alt={alt} width={width} height={height} />
      <Text className={cn(s.text, font.className).build()}>{text}</Text>
    </Link>;
  }

  return (
    <div className={classNames} {...anotherProps}>
      <Image src={src} alt={alt} width={width} height={height} />
      <Text className={cn(s.text, font.className).build()}>{text}</Text>
    </div>
  );
};
