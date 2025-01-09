import { PropsOf, DesignSystem, Variant } from '@/0_shared/types';
import { cn, ClassNameMods } from '@/0_shared/utils';
import s from './Button.module.css';

export type ButtonProps = { disable?: boolean; variant?: Variant } & PropsOf<HTMLButtonElement> & DesignSystem;

export const Button = (props: ButtonProps) => {
  const {
    color = 'primary',
    size = 'l',
    borderRadius = 'medium',
    gap = '1',
    disable,
    variant = 'fill',
    className,
    ...anotherProps
  } = props;

  const mods: ClassNameMods = {
    [s.disable]: disable,
  };

  const classNames = cn(
    s.button,
    s[`variant-${variant}`],
    s[`color-${color}`],
    `size-${size}`,
    `gap-${gap}`,
    `br-${borderRadius}`,
    className
  );

  return <button className={classNames.build(mods)} {...anotherProps} />;
};
