export type Color = 'primary' | 'secondary' | 'default';
export type BorderRadius = 'none' | 'small' | 'medium' | 'round' | 'circle';
export type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';
export type Gap = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

export type Variant = 'fill' | 'fillLight' | 'outline' | 'ghost';

export type DesignSystemRequired = {
  color: Color;
  colorText: Color;
  borderRadius: BorderRadius;
  size: Size;
  gap: Gap;
};

export type DesignSystem = Partial<DesignSystemRequired>;
