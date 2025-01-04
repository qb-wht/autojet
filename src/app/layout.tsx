import { Header } from '@/3_widgets/header';
import { Footer } from '@/3_widgets/footer';
import { Roboto } from 'next/font/google';
import '@/0_shared/styles/globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="pt-2 pl-2 pr-2 min-height-100">
          <Header />

          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
