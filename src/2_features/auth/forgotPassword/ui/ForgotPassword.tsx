import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { ForgotPasswordForm } from '@/1_entities/auth/ui/ForgotPasswordForm';
import s from './ForgotPassword.module.css';

export type ForgotPasswordProps = {} & PropsOf<HTMLDivElement>;

export const ForgotPassword = (props: ForgotPasswordProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn(s.forgotPassword, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <ForgotPasswordForm onExistAccountRedirect="/auth?type=login" onNoAccountRedirect="/auth?type=register" />
    </div>
  );
};
