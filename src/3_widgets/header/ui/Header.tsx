import Link from 'next/link';
import { Logo } from '@/1_entities/logo';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Link href={'/'}>Home</Link>
      <Link href={'./about'}>About</Link>
    </div>
  );
};
