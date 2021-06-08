import Loadable from 'react-loadable';
import Loader from 'components/shared/Loading/index';

const AsyncLoginContainer = Loadable({
  loader: () => import('./components/Login/containers'),
  loading: Loader,
});

const AsyncLandingPageContainer = Loadable({
  loader: () => import('./components/LandingPage/containers/GetAllPosts'),
  loading: Loader,
});

const AsyncPostDetailsContainer = Loadable({
  loader: () => import('./components/PostDetails/containers'),
  loading: Loader,
});

const AsyncPageNotFound = Loadable({
  loader: () => import('./components/PageNotFound'),
  loading: Loader,
});

const publicRoutes = [
  {
    path: '/',
    name: 'Login form',
    exact: true,
    component: AsyncLoginContainer,
  },
  {
    path: '/dashboard',
    name: 'LandingPage',
    exact: true,
    component: AsyncLandingPageContainer,
  },
  {
    path: '/details/:author/:id',
    name: 'Post Details',
    exact: true,
    component: AsyncPostDetailsContainer,
  },
  {
    path: '*',
    name: 'Page Not Found',
    exact: true,
    component: AsyncPageNotFound,
  },
];

export { publicRoutes };
