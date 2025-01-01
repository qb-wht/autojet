import { cn } from '@/0_shared/utils';
import { DesignSystem, PropsOf, Variant } from '@/0_shared/types';
import s from './Chip.module.css';

export type ChipProps = { variant?: Variant } & PropsOf<HTMLDivElement> & DesignSystem;

export const Chip = (props: ChipProps) => {
  const {
    color = 'primary',
    size = 'l',
    borderRadius = 'medium',
    gap = '1',
    variant = 'fill',
    className,
    ...anotherProps
  } = props;

  const classNames = cn(
    s.chip,
    s[`variant-${variant}`],
    s[`color-${color}`],
    `size-${size}`,
    `gap-${gap}`,
    `br-${borderRadius}`,
    className
  );

  return <div className={classNames.build()} {...anotherProps} />;
};
