import Image from 'next/image';
import s from './page.module.css';

export default function Home() {
  return (
    <div className={s.home}>
      <Image src="/logo.svg" alt="logo" width={500} height={400} />
    </div>
  );
}
