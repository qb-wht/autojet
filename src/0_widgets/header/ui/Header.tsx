import Link from 'next/link';
import s from './Header.module.css';
import { Logo } from '@/2_entities/logo';

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Link href={'/'}>Home</Link>
      <Link href={'./about'}>About</Link>
    </div>
  );
}