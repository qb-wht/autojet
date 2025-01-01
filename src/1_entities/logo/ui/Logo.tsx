import { Nunito } from 'next/font/google';
import { Text } from '@/0_shared/components/text';
import { Chip } from '@/0_shared/components/chip';
import { cn } from '@/0_shared/utils';
import s from './Logo.module.css';

const nunito = Nunito({
  weight: '600',
  subsets: ['latin'],
});

export const Logo = () => {
  return (
    <div className={cn(s.logo, nunito.className).build()}>
      <Text className={s.mainText}>AUTOJET</Text>

      <Chip>
        <Text className={s.subText}>COLOR</Text>
      </Chip>
    </div>
  );
};
