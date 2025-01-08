import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { Text } from '@/0_shared/components/text';
import { Link } from '@/0_shared/components/link';
import { LoginInputs } from './LoginInputs';
import { AuthSocial } from './AuthSocial';
import { Button } from '@/0_shared/components/button';
import { Divider } from '@/0_shared/components/divider';
import { Recaptcha } from './Recaptcha';
import { api } from '@/0_shared/api';
import s from './auth.module.css';

export type LoginFormProps = {
  onNoAccountRedirect: string;
  onForgotPasswordRedirect: string;
} & PropsOf<HTMLDivElement>;

const a = () => {
  api.post('/auth/login', {
    email: 'qb.wheatley@gmail.com',
    password: '12345678ee',
  });
};

export const LoginForm = (props: LoginFormProps) => {
  const { className, onNoAccountRedirect, onForgotPasswordRedirect, ...anotherProps } = props;
  const classNames = cn(s.form, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Text tag="h2">Вход</Text>

      <LoginInputs onForgotPasswordRedirect={onForgotPasswordRedirect} />

      <Recaptcha />

      <Button onClick={a} className="w100">
        Войти
      </Button>

      <Divider text="Или" />

      <AuthSocial />

      <div className="center w100">
        <Link variant="link" color="primary" href={onNoAccountRedirect}>
          Нет аккаунта? Регистрация
        </Link>
      </div>
    </div>
  );
};
