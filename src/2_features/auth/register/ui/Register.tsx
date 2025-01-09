import { RegisterForm } from '@/1_entities/auth/ui/RegisterForm';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './Register.module.css';

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
