import { Chip } from '@/0_shared/components/chip';
import s from './Logo.module.css';
import { Nunito } from 'next/font/google';
import { cn } from '@/0_shared/utils';
import { Text } from '@/0_shared/components/text';

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
