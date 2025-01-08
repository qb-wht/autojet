import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { Text } from '@/0_shared/components/text';
import { Link } from '@/0_shared/components/link';
import { RegisterInputs } from './RegisterInputs';
import { AuthSocial } from './AuthSocial';
import { Button } from '@/0_shared/components/button';
import { Divider } from '@/0_shared/components/divider';
import { Recaptcha } from './Recaptcha';
import s from './auth.module.css';

export type RegisterFormProps = {
  onExistAccountRedirect: string;
} & PropsOf<HTMLDivElement>;

export const RegisterForm = (props: RegisterFormProps) => {
  const { className, onExistAccountRedirect, ...anotherProps } = props;
  const classNames = cn(s.form, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Text tag="h2">Регистрация</Text>

      <RegisterInputs />

      <Recaptcha />

      <Button className="w100">Регистрация</Button>

      <Divider text="Или" />

      <AuthSocial />

      <div className="center w100">
        <Link variant="link" color="primary" href={onExistAccountRedirect}>
          Уже есть аккаунт? Войти
        </Link>
      </div>
    </div>
  );
};
