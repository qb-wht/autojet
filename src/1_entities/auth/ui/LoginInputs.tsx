import { LockKeyhole, Mail } from 'lucide-react';
import { Input } from '@/0_shared/components/input';
import { Link } from '@/0_shared/components/link';
import { Text } from '@/0_shared/components/text';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './auth.module.css';

export type LoginInputsProps = {
  onForgotPasswordRedirect: string;
} & PropsOf<HTMLDivElement>;

export const LoginInputs = (props: LoginInputsProps) => {
  const { className, onForgotPasswordRedirect, ...anotherProps } = props;
  const classNames = cn('column gap-2 w100', className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <div className="row">
        <Text className={s.label}>
          Почта <span>*</span>
        </Text>
      </div>

      <Input placeholder="ya@mail.ru" Icon={Mail} borderRadius="round" />

      <div className="row jc-sb pt-2">
        <Text className={s.label}>
          Пароль <span>*</span>
        </Text>

        <Link variant="link" color="primary" href={onForgotPasswordRedirect} size="s" className={s.label}>
          Забыли пароль?
        </Link>
      </div>

      <Input placeholder="*******" Icon={LockKeyhole} borderRadius="round" />
    </div>
  );
};
