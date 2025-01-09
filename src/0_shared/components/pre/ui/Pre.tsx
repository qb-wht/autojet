import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './Pre.module.css';

export type PreProps = {} & PropsOf<HTMLPreElement>;

export const Pre = (props: PreProps) => {
  const { className, ...anotherProps } = props;

  const classNames = cn(s.text, className).build();

  return <pre className={classNames} {...anotherProps} />;
};
