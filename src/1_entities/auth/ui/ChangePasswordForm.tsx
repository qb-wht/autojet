import { Button } from '@/0_shared/components/button';
import { Text } from '@/0_shared/components/text';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import { ChangePasswordInputs } from './ChangePasswordInputs';
import s from './auth.module.css';

export type ChangePasswordFormProps = {} & PropsOf<HTMLDivElement>;

export const ChangePasswordForm = (props: ChangePasswordFormProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn(s.form, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Text tag="h2">Установка пароля</Text>

      <ChangePasswordInputs />

      <Button className="w100">Установить новый пароль</Button>
    </div>
  );
};
