import homepage from './pages/home';
import accomodationDetailPage from './pages/accomodationDetail';
import loadingPage from './pages/loading';

const routes = [
  {
    path: '/',
    name: '홈',
    container: homepage,
    exact: true,
  },
  {
    path: '/accomodation-detail/:accomodationId',
    name: '숙소 세부',
    container: accomodationDetailPage,
    exact: true,
  },
  {
    path: '/loading',
    name: '로딩 화면',
    container: loadingPage,
    exact: false,
  },
];

export default routes;
