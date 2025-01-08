import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { Input } from '@/0_shared/components/input';
import { LockKeyhole } from 'lucide-react';
import { Text } from '@/0_shared/components/text';
import s from './auth.module.css';

export type ChangePasswordInputsProps = {} & PropsOf<HTMLDivElement>;

export const ChangePasswordInputs = (props: ChangePasswordInputsProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn('column gap-2 w100', className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <div className="row pt-2">
        <Text className={s.label}>
          Пароль <span>*</span>
        </Text>
      </div>

      <Input placeholder="*******" Icon={LockKeyhole} borderRadius="round" />

      <div className="row pt-2">
        <Text className={s.label}>
          Повторите пароль <span>*</span>
        </Text>
      </div>

      <Input placeholder="*******" Icon={LockKeyhole} borderRadius="round" />
    </div>
  );
};
