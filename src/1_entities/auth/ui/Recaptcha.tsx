import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import { cn } from '@/0_shared/utils';
import { Nullable, PropsOf } from '@/0_shared/types';

export type RecaptchaProps = {} & PropsOf<HTMLDivElement>;

export const Recaptcha = (props: RecaptchaProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn('center w100', className).build();

  const [recaptchaValue, setRecaptchaValue] = useState<Nullable<string>>();

  return (
    <div style={{ transform: 'scale(1.1)' }} className={classNames} {...anotherProps}>
      <ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SECRET_KEY} onChange={(value) => setRecaptchaValue(value)} />
    </div>
  );
};
