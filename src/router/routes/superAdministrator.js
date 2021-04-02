import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faPumpSoap } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

// Components
import Home from '../../views/SuperAdministrator/Home';
import Stores from '../../views/SuperAdministrator/Stores'
import Products from '../../views/SuperAdministrator/Products'
import Clients from '../../views/SuperAdministrator/Clients'

const superAdminRoutes = [
  {
    name: 'Inicio',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    exact: true,
    main: () => <Home diff='Home'/>,
    children: null,
  },
  {
    name: 'Tiendas',
    icon: <FontAwesomeIcon icon={faStore} />,
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
    icon: <FontAwesomeIcon icon={faPumpSoap} />,
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
    name: 'Empleados',
    path: '/clientes',
    icon: <FontAwesomeIcon icon={faIdCard} />,
    exact: true,
    main: () => <Clients />,
    children: null,
  },
  {
    name: 'Clientes',
    path: '/clientes',
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    exact: true,
    main: () => <Clients />,
    children: null,
  },
];

export default superAdminRoutes;