import s from '@/0_shared/styles/shared.module.css';
import l from '@/0_shared/styles/layout.module.css';
import { cn } from '@/0_shared/utils';
import { Input } from '@/0_shared/components/input';
import { LockKeyhole, Mail, Phone, Send } from 'lucide-react';

export const Chips = () => {
  return (
    <div style={{ gap: '8px' }} className={cn(s.page, l.column).build()}>
      <h1>Border radius</h1>

      <Input borderRadius="none" />
      <Input borderRadius="small" />
      <Input borderRadius="medium" />
      <Input borderRadius="round" />
      <Input borderRadius="circle" />

      <h1>Color</h1>

      <Input color="primary" />
      <Input color="secondary" />
      <Input color="default" />

      <h1>Size</h1>

      <Input size="s" borderRadius="round" />
      <Input size="m" borderRadius="round" />
      <Input size="l" borderRadius="round" />
      <Input size="xl" borderRadius="round" />
      <Input size="xxl" borderRadius="round" />

      <h1>Gap</h1>

      <Input gap="1" borderRadius="round" />
      <Input gap="2" borderRadius="round" />
      <Input gap="3" borderRadius="round" />
      <Input gap="4" borderRadius="round" />
      <Input gap="5" borderRadius="round" />
      <Input gap="6" borderRadius="round" />
      <Input gap="7" borderRadius="round" />
      <Input gap="8" borderRadius="round" />
      <Input gap="9" borderRadius="round" />

      <h1>Icon</h1>

      <Input Icon={LockKeyhole} borderRadius="round" />
      <Input Icon={Mail} borderRadius="round" />
      <Input Icon={Phone} borderRadius="round" />
      <Input Icon={Send} color="secondary" borderRadius="round" />

      <h1>Placeholder</h1>

      <Input placeholder="*******" Icon={LockKeyhole} borderRadius="round" />
      <Input placeholder="ya@mail.ru" Icon={Mail} borderRadius="round" />
      <Input placeholder="8800553535" Icon={Phone} borderRadius="round" />
      <Input placeholder="@qb_wht" Icon={Send} color="secondary" borderRadius="round" />
    </div>
  );
};

export default Chips;
