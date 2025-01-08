import { cn } from '@/0_shared/utils';
import { PropsOf } from '@/0_shared/types';
import { Button } from '@/0_shared/components/button';
import { FaGoogle, FaTelegram, FaYandex } from 'react-icons/fa';

export type AuthSocialProps = {} & PropsOf<HTMLDivElement>;

export const AuthSocial = (props: AuthSocialProps) => {
  const { className, ...anotherProps } = props;
  const classNames = cn('row gap-2', className).build();

  return (
    <div className={classNames} {...anotherProps}>
      <Button
        style={{ fontSize: '0.9rem' }}
        gap="2"
        size="m"
        className="w100"
        variant="outline"
        color="default"
        borderRadius="round"
      >
        <FaTelegram size={16} />
        Telegram
      </Button>

      <Button
        style={{ fontSize: '0.9rem' }}
        gap="2"
        size="m"
        className="w100"
        variant="outline"
        color="default"
        borderRadius="round"
      >
        <FaGoogle size={16} />
        Google
      </Button>

      <Button
        style={{ fontSize: '0.9rem' }}
        gap="2"
        size="m"
        className="w100"
        variant="outline"
        color="default"
        borderRadius="round"
      >
        <FaYandex size={16} />
        Yandex
      </Button>
    </div>
  );
};
