// Components
import Home from '../views/Administrator/Home';

const adminRoutes = [
  {
    name: 'Inicio',
    path: '/',
    icon: '*-',
    exact: true,
    main: () => <Home diff='Home'/>,
  },
  {
    name: 'Tiendas',
    path: '/tiendas',
    icon: '*-',
    exact: true,
    main: () => <Home diff='Tiendas'/>,
  },
  {
    name: 'Productos',
    path: '/productos',
    icon: '*-',
    exact: true,
    main: () => <Home diff='Productos'/>,
  },
];

export default adminRoutes;