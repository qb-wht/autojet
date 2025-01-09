import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { DesignSystem, PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './Input.module.css';

export type InputProps = {
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  placeholder?: string;
} & PropsOf<HTMLInputElement> &
  DesignSystem;

export const Input = (props: InputProps) => {
  const {
    color = 'primary',
    size = 'l',
    borderRadius = 'medium',
    gap = '1',
    Icon,
    placeholder,
    className,
    ...anotherProps
  } = props;

  const classNames = cn(s.input, s[`color-${color}`], `size-${size}`, `gap-${gap}`, `br-${borderRadius}`, className);

  return (
    <div className={s.inputContainer}>
      {Icon && (
        <div className={cn(s.iconContainer, `size-${size}`).build()}>{<Icon size={16} className={s.icon} />}</div>
      )}
      <input placeholder={placeholder} className={classNames.build({ [s.icon]: !!Icon })} {...anotherProps} />
    </div>
  );
};
