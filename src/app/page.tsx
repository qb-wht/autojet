import s from '@/0_shared/styles/shared.module.css';
import l from '@/0_shared/styles/layout.module.css';
import { cn } from '@/0_shared/utils';
import { Link } from '@/0_shared/components/link';

export const Home = () => {
  return (
    <div style={{ gap: '8px' }} className={cn(s.page, l.column).build()}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
