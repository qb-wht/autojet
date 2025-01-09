import { M_PLUS_Rounded_1c } from 'next/font/google';
import Image from 'next/image';
import NextLink from 'next/link';
import { Text } from '@/0_shared/components/text';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './Banner.module.css';

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
    <NextLink href={href} className={classNames} {...anotherProps}>
      <Image src={src} alt={alt} width={width} height={height} />
      <Text className={cn(s.text, font.className).build()}>{text}</Text>
    </NextLink>;
  }

  return (
    <div className={classNames} {...anotherProps}>
      <Image src={src} alt={alt} width={width} height={height} />
      <Text className={cn(s.text, font.className).build()}>{text}</Text>
    </div>
  );
};
