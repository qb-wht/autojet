import NextLink from 'next/link';
import s from './Link.module.css';
import { ComponentProps } from 'react';
import { DesignSystem, Variant } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';

export type LinkProps = { variant?: Variant; isUnderline?: boolean } & ComponentProps<typeof NextLink> & DesignSystem;

export const Link = (props: LinkProps) => {
  const {
    color = 'primary',
    size = 'l',
    borderRadius = 'medium',
    gap = '1',
    isUnderline,
    variant = 'ghost',
    ...anotherProps
  } = props;

  const classNames = cn(
    s.link,
    s[`variant-${variant}`],
    s[`color-${color}`],
    `size-${size}`,
    `gap-${gap}`,
    `br-${borderRadius}`
  );

  return <NextLink className={classNames.build({ [s.underline]: isUnderline })} {...anotherProps} />;
};
