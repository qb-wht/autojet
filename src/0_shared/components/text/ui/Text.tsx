import { createElement, ReactNode } from 'react';
import { cn } from '@/0_shared/utils';
import s from './Text.module.css';

export type TextProps = {
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  className?: string;
};

export const Text = (props: TextProps) => {
  const { tag = 'p', children, className } = props;

  const classNames = cn(s.text, className).build({ [s[tag]]: true });

  return createElement(tag, { className: classNames }, children);
};
