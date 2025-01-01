import { Link } from '@/0_shared/components/link';
import { Logo } from '@/1_entities/logo';
import s from './Header.module.css';
import shared from '@/0_shared/styles/layout.module.css';
import { cn } from '@/0_shared/utils';
import { Button } from '@/0_shared/components/button';
import { LogIn, Mail, Phone, Send, ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={cn(shared.width, s.content).build()}>
        <div className={s.leftContent}>
          <div style={{ display: 'flex', gap: '0px' }}>
            <Link href={'/'}>Home</Link>
            <Link href={'./about'}>About</Link>
          </div>

          <div style={{ paddingLeft: '8px' }}>
            <Logo />
          </div>
        </div>

        <div className={s.rightContent}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <Link href={'./'}>
              <LogIn size={16} /> Войти
            </Link>
          </div>

          <Button borderRadius="round">
            <ShoppingCart size={20} /> Корзина
          </Button>
        </div>
      </div>

      <div className={cn(shared.width).build()} style={{ display: 'flex', gap: '0px' }}>
        <Link href={'/buttons'}>Buttons</Link>
        <Link href={'./chips'}>Chips</Link>
        <Link href={'./inputs'}>Inputs</Link>
        <Link href={'./links'}>Links</Link>
        <Link href={'./texts'}>Texts</Link>
      </div>
    </div>
  );
};
