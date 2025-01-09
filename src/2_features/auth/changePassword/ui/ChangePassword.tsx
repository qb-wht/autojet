import { ChangePasswordForm } from '@/1_entities/auth/ui/ChangePasswordForm';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './ChangePassword.module.css';

export type ChangePasswordProps = {} & PropsOf<HTMLDivElement>;

export const ChangePassword = (props: ChangePasswordProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn(s.changePassword, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <ChangePasswordForm />
    </div>
  );
};
