import NextLink from 'next/link';
import { ComponentProps } from 'react';
import { cn } from '@/0_shared/utils';
import { DesignSystem, Variant } from '@/0_shared/types';
import s from './Link.module.css';

export type LinkProps = { variant?: Variant | 'link'; isUnderline?: boolean } & ComponentProps<typeof NextLink> &
  DesignSystem;

export const Link = (props: LinkProps) => {
  const {
    color = 'default',
    size = 'm',
    borderRadius = 'medium',
    gap = '1',
    isUnderline,
    variant = 'ghost',
    className,
    ...anotherProps
  } = props;

  const classNames = cn(
    s.link,
    s[`variant-${variant}`],
    s[`color-${color}`],
    `size-${size}`,
    `gap-${gap}`,
    `br-${borderRadius}`,
    className
  );

  return <NextLink className={classNames.build({ [s.underline]: isUnderline })} {...anotherProps} />;
};
