import Image from 'next/image';
import s from '@/0_shared/styles/shared.module.css';
import l from '@/0_shared/styles/layout.module.css';
import { classNames } from '@/0_shared/utils';

export const Home = () => {
  return (
    <div className={classNames(s.container, l.container).build()}>
      <Image src="/logo.svg" alt="logo" width={500} height={400} />
    </div>
  );
};

export default Home;
