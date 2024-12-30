import { Header } from '@/0_widgets/header';
import { Footer } from '@/0_widgets/footer';
import { Roboto } from 'next/font/google';
import '@/app/styles/globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
