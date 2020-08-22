import ShoppingCart from '../Components/ShoppingCart/ShoppingCart';
import ShoppingsProducts from '../Components/ShoppingProducts/ShoppingsProducts';
import Profile from '../Components/Profile/Profile';
import MainLogin from '../Components/login/MainLogin';

export const routes = [
  {
    path: '/ShoppingCart',
    component: ShoppingCart,
    name: 'ShoppingCart',
  },
  {
    path: '/ShoppingsProducts',
    component: ShoppingsProducts,
    name: 'ShoppingsProducts',
  },
  {
    path: '/Profile',
    component: Profile,
    name: 'Profile',
  },
  {
    path: '/Login',
    component: MainLogin,
    name: 'Login',
  },
];
