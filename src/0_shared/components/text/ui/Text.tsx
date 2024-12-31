import { PropsOf } from '@/0_shared/types';
import s from './Text.module.css';
import React, { createElement, ReactNode } from 'react';
import { cn } from '@/0_shared/utils';

export type TextProps = {
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
};

export const Text = (props: TextProps) => {
  const { tag = 'p', children } = props;

  const classNames = cn(s.text);

  switch (tag) {
    case 'h1':
      return <h1 className={classNames.build({ [s.h1]: true })}>{children}</h1>;
    case 'h2':
      return <h2 className={classNames.build({ [s.h2]: true })}>{children}</h2>;
    case 'h3':
      return <h3 className={classNames.build({ [s.h3]: true })}>{children}</h3>;
    case 'h4':
      return <h4 className={classNames.build({ [s.h4]: true })}>{children}</h4>;
    case 'h5':
      return <h5 className={classNames.build({ [s.h5]: true })}>{children}</h5>;
    case 'h6':
      return <h6 className={classNames.build({ [s.h6]: true })}>{children}</h6>;
    case 'p':
      return <p className={classNames.build({ [s.p]: true })}>{children}</p>;
    default:
      return <span className={classNames.build({ [s.span]: true })}>{children}</span>;
  }
};
