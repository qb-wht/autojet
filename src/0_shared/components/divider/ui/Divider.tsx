import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { Text } from '../../text';
import s from './Divider.module.css';

export type DividerProps = {
  text: string;
} & PropsOf<HTMLDivElement>;

export const Divider = (props: DividerProps) => {
  const { className, text, ...anotherProps } = props;
  const classNames = cn(s.divider, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      {text && <Text className={s.text}>{text}</Text>}
    </div>
  );
};
