import { PropsOf, DesignSystem, Variant } from '@/0_shared/types';
import s from './Button.module.css';
import { cn } from '@/0_shared/utils';
import { ClassNameMods } from '@/0_shared/utils';

export type ButtonProps = { disable?: boolean; variant?: Variant } & PropsOf<HTMLButtonElement> & DesignSystem;

export const Button = (props: ButtonProps) => {
  const {
    color = 'primary',
    size = 'l',
    borderRadius = 'medium',
    gap = '1',
    disable,
    children,
    variant = 'fill',
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
    `br-${borderRadius}`
  );

  return <button className={classNames.build(mods)}>{children}</button>;
};
