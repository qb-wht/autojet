'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ChangePassword } from '@/2_features/auth/changePassword';
import { ForgotPassword } from '@/2_features/auth/forgotPassword';
import { Login } from '@/2_features/auth/login';
import { Register } from '@/2_features/auth/register';
import { useUnsafeLayoutEffect } from '@/0_shared/libs/hooks';
import { PropsOf } from '@/0_shared/types';
import { cn } from '@/0_shared/utils';
import s from './Auth.module.css';

// Todo: Перенести в Shared
export enum AuthTypes {
  REGISTER = 'register',
  LOGIN = 'login',
  FORGOT_PASSWORD = 'forgot-password',
  CHANGE_PASSWORD = 'change-password',
}

export const isAuthType = (value: string): value is AuthTypes => {
  return Object.values(AuthTypes).includes(value as AuthTypes);
};

export type AuthProps = {} & PropsOf<HTMLDivElement>;

export const Auth = (props: AuthProps) => {
  const { className, ...anotherProps } = props;
  const [authType, setAuthType] = useState<AuthTypes>();
  const classNames = cn(s.auth, className).build();

  const searchParams = useSearchParams();
  const router = useRouter();

  useUnsafeLayoutEffect(() => {
    const authType = searchParams.get('type');

    if (authType && isAuthType(authType)) {
      setAuthType(authType);
      return;
    }

    router.push('./auth?type=login');
  }, [searchParams]);

  return (
    <div className={classNames} {...anotherProps}>
      {authType === AuthTypes.LOGIN && <Login />}
      {authType === AuthTypes.REGISTER && <Register />}
      {authType === AuthTypes.FORGOT_PASSWORD && <ForgotPassword />}
      {authType === AuthTypes.CHANGE_PASSWORD && <ChangePassword />}
    </div>
  );
};
