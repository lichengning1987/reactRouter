import { lazy } from 'react';
import Home from '../home';

const routes = [
  {
    path: '/home',
    component: lazy(() => import('../home'))
  },
  {
    path: '/user',
    component: lazy(() => import('../user'))
  },
  {
    path: '/list/:id',
    component: lazy(()=>import('../pages/list'))
  },
  {
    path: '/login',
    component: lazy(()=>import('../other/Login'))
  },
  {
    path: '/register',
    component: lazy(()=>import('../other/Register'))
  },
  {
    path: '/activity',
    component: lazy(() => import('../pages/activity')),
    root:'admin'
  },
  {
    path: '',
    component: lazy(() => import('../pages/noFile')),
  }
];
export default routes