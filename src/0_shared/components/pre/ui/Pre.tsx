import { PropsOf } from '@/0_shared/types';
import s from './Pre.module.css';

export type PreProps = {} & PropsOf<HTMLPreElement>;

export const Pre = (props: PreProps) => {
  return <pre className={s.pre} {...props} />;
};
