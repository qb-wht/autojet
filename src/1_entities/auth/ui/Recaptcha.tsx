import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Nullable, PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';

export type RecaptchaProps = {} & PropsOf<HTMLDivElement>;

export const Recaptcha = (props: RecaptchaProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn('center w100', className).build();

  const [recaptchaValue, setRecaptchaValue] = useState<Nullable<string>>();

  console.log(recaptchaValue);

  return (
    <div style={{ transform: 'scale(1.1)' }} className={classNames} {...anotherProps}>
      <ReCAPTCHA sitekey={process.env.GOOGLE_RECAPTCHA_SECRET_KEY} onChange={(value) => setRecaptchaValue(value)} />
    </div>
  );
};
