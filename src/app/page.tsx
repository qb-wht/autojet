import { BannerList, BannerSlider } from '@/1_entities/banner';
import { Text } from '@/0_shared/components/text';

const Home = () => {
  return (
    <div className="page">
      <div className="width column pt-2 gap-4">
        <BannerSlider
          items={[
            {
              width: 181,
              height: 201,
              src: '/1.png',
              alt: 'Banner',
              text: 'Где найти код краски?',
            },
            {
              width: 181,
              height: 201,
              src: '/2.png',
              alt: 'Banner',
              text: 'Узнать код краски по WIN',
            },
            {
              width: 181,
              height: 201,
              src: '/3.png',
              alt: 'Banner',
              text: 'Сила новых компонентов',
            },
            {
              width: 181,
              height: 201,
              src: '/4.png',
              alt: 'Banner',
              text: 'Слабость это сила',
            },
            {
              width: 181,
              height: 201,
              src: '/5.png',
              alt: 'Banner',
              text: 'Комплектом выгоднее',
            },
            {
              width: 181,
              height: 201,
              src: '/1.png',
              alt: 'Banner',
              text: 'Где найти код краски?',
            },
            {
              width: 181,
              height: 201,
              src: '/2.png',
              alt: 'Banner',
              text: 'Узнать код краски по WIN',
            },
            {
              width: 181,
              height: 201,
              src: '/3.png',
              alt: 'Banner',
              text: 'Сила новых компонентов',
            },
            {
              width: 181,
              height: 201,
              src: '/4.png',
              alt: 'Banner',
              text: 'Слабость это сила',
            },
            {
              width: 181,
              height: 201,
              src: '/5.png',
              alt: 'Banner',
              text: 'Комплектом выгоднее',
            },
          ]}
        />

        <Text tag="h2">Категории</Text>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '4rem' }}></div>
        </div>

        <Text tag="h2">Подкраска</Text>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <BannerList
          items={[
            {
              src: '/banner.png',
              alt: 'Banner',
              text: 'Статья. Как экономить на кузовном ремонте?',
            },

            {
              src: '/banner2.png',
              alt: 'Banner',
              text: 'Как подобрать цвет к автомобилю?',
            },
          ]}
        />

        <Text tag="h2">Баллончики</Text>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <BannerList
          items={[
            {
              src: '/banner3.png',
              alt: 'Banner',
              text: 'Статья. Как экономить на кузовном ремонте?',
            },

            {
              src: '/banner4.png',
              alt: 'Banner',
              text: 'Как подобрать цвет к автомобилю?',
            },
          ]}
        />

        <Text tag="h2">Эмаль по коду цвета автомобиля</Text>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <Text tag="h2">Расходные материалы</Text>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>

        <div style={{ gap: '8px' }} className="row">
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
          <div style={{ borderRadius: '1rem', background: 'gray', width: '100%', height: '17rem' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
