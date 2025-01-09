import { Button } from '@/0_shared/components/button';
import { Link } from '@/0_shared/components/link';
import { Text } from '@/0_shared/components/text';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import { ForgotPasswordInputs } from './ForgotPasswordInputs';
import s from './auth.module.css';

export type ForgotPasswordFormProps = {
  onExistAccountRedirect: string;
  onNoAccountRedirect: string;
} & PropsOf<HTMLDivElement>;

export const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  const { className, onExistAccountRedirect, onNoAccountRedirect, ...anotherProps } = props;
  const classNames = cn(s.form, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Text tag="h2">Сброс пароля</Text>

      <ForgotPasswordInputs />

      <Button className="w100">Сбросить пароль</Button>

      <div className="column center gap-2 w100">
        <Link variant="link" color="primary" href={onExistAccountRedirect}>
          Уже есть аккаунт? Войти
        </Link>

        <Link variant="link" color="primary" href={onNoAccountRedirect}>
          Нет аккаунта? Регистрация
        </Link>
      </div>
    </div>
  );
};
