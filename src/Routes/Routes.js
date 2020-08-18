import ShoppingCart from '../Components/ShoppingCart/ShoppingCart';
import ShoppingsProducts from '../Components/ShoppingProducts/ShoppingsProducts';
import Profile from '../Components/Profile/Profile';

export const routes = [
  {
    path: '/Cart',
    component: ShoppingCart,
  },
  {
    path: '/ShoppingsProducts',
    component: ShoppingsProducts,
  },
  {
    path: '/Profile',
    component: Profile,
  },
];
