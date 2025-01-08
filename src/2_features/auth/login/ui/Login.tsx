import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { LoginForm } from '@/1_entities/auth';
import s from './Login.module.css';

export type LoginProps = {} & PropsOf<HTMLDivElement>;

export const Login = (props: LoginProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn(s.login, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <LoginForm onNoAccountRedirect="/auth?type=register" onForgotPasswordRedirect="/auth?type=forgot-password" />
    </div>
  );
};
