import { Suspense } from 'react';
import { Auth as AuthWidget } from '@/3_widgets/auth';

const Auth = () => {
  return (
    <div className="page center">
      <Suspense fallback="<div>Loading</div>">
        <AuthWidget />
      </Suspense>
    </div>
  );
};

export default Auth;
