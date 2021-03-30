// Components
import Home from '../../views/SuperAdministrator/Home';
import Stores from '../../views/SuperAdministrator/Stores'
import Products from '../../views/SuperAdministrator/Products'
import Clients from '../../views/SuperAdministrator/Clients'

const superAdminRoutes = [
  {
    name: 'Inicio',
    path: '/',
    icon: '*-',
    exact: true,
    main: () => <Home diff='Home'/>,
    children: null,
  },
  {
    name: 'Tiendas',
    icon: '*-',
    children: [
      {
        name: 'Listar',
        path: '/tiendas/listar',
        exact: true,
        main: () => <Stores />,
      },
      {
        name: 'Agregar',
        path: '/tiendas/agregar',
        exact: true,
        main: () => <Home diff='Tiendas Agregar'/>,
      },
    ],
  },
  {
    name: 'Productos',
    icon: '*-',
    children: [
      {
        name: 'Listar',
        path: '/productos/listar',
        exact: true,
        main: () => <Products />,
      },
      {
        name: 'Agregar',
        path: '/productos/agregar',
        exact: true,
        main: () => <Home diff='Producto Agregar'/>,
      },
    ],
  },
  {
    name: 'Clientes',
    path: '/clientes',
    icon: '*-',
    exact: true,
    main: () => <Clients />,
    children: null,
  },
];

export default superAdminRoutes;