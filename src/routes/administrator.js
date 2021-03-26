// Components
import Home from '../views/Administrator/Home';

const adminRoutes = [
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
        main: () => <Home diff='Tiendas Listado'/>,
      },
      {
        name: 'Agregar',
        path: '/tiendas/agregar',
        exact: true,
        main: () => <Home diff='Tiendas Agregar'/>,
      },
      {
        name: 'Productos Tienda',
        path: '/tiendas/producto',
        exact: true,
        main: () => <Home diff='Tiendas Productos'/>,
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
        main: () => <Home diff='Producto Listado'/>,
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
    name: 'Facturas',
    path: '/facturas',
    icon: '*-',
    exact: true,
    main: () => <Home diff='Facturas'/>,
    children: null,
  },
  {
    name: 'Empleados',
    path: '/empleados',
    icon: '*-',
    exact: true,
    main: () => <Home diff='Empleados'/>,
    children: null,
  },
];

export default adminRoutes;