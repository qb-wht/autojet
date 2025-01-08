import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import s from './Register.module.css';
import { RegisterForm } from '@/1_entities/auth/ui/RegisterForm';

export type RegisterProps = {} & PropsOf<HTMLDivElement>;

export const Register = (props: RegisterProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn(s.register, className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <RegisterForm onExistAccountRedirect="/auth?type=login" />
    </div>
  );
};
