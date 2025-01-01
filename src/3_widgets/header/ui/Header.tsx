import { Link } from '@/0_shared/components/link';
import { Logo } from '@/1_entities/logo';
import { Button } from '@/0_shared/components/button';
import { LogIn, ShoppingCart } from 'lucide-react';
import { Text } from '@/0_shared/components/text';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className="center">
      <div className="width">
        <div className="column gap-2 pt-2 pr-2 pl-2">
          <div className="row">
            <div className="row">
              <Link href={'/'}>Home</Link>
              <Link href={'./about'}>About</Link>
            </div>

            <div className="row width-auto">
              <Link href={'./'} gap="1">
                <LogIn size={16} />
                Войти
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="row ai-center pl-2">
              <Logo />
            </div>

            <div className="row width-auto">
              <Button borderRadius="round" gap="2">
                <ShoppingCart size={20} />
                <Text tag="span" className={s.cartText}>
                  Корзина
                </Text>
              </Button>
            </div>
          </div>

          <div className="row">
            <Link href={'/buttons'}>Buttons</Link>
            <Link href={'./chips'}>Chips</Link>
            <Link href={'./inputs'}>Inputs</Link>
            <Link href={'./links'}>Links</Link>
            <Link href={'./texts'}>Texts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
