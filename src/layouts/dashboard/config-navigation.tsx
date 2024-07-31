// import SvgColor from 'src/components/svg-color';
import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name:string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'კლიენტები',
    path: '/clients',
    icon: icon('ic_clients'),
  },
  {
    title: 'ჯგუფური რეგისტრაცია',
    path: '/group-registartion',
    icon: icon('ic_group_registration'),
  },
  {
    title: 'ცნობის ფურცელი',
    path: '/statement',
    icon: icon('ic_news_paper'),
  },
  {
    title: 'ბარათები',
    path: '/cards',
    icon: icon('ic_location'),
  },
  {
    title: 'კუპონები',
    path: '/coupons',
    icon: icon('ic_user'),
  },


  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
