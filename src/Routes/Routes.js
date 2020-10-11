import ShoppingCart from '../Components/ShoppingCart/ShoppingCart';
import ShoppingsProducts from '../Components/ShoppingProducts/ShoppingsProducts';
import Profile from '../Components/Profile/Profile';
import MainLogin from '../Components/login/MainLogin';
import ProductDetail from '../Components/ShoppingProducts/ProductDetail/ProductDetail';
import CreateProduct from '../Components/NewProduct/CreateProduct';
import EditProduct from '../Components/EditProduct/EditProduct';
import Signup from '../Components/login/loginComponents/signup/Signup';

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
    path: '/productDetails/:id',
    component: ProductDetail,
    name: 'ProductDetail',
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
  {
    path: '/Register',
    component: Signup,
    name: 'Signup',
  },
  {
    path: '/CreateProduct',
    component: CreateProduct,
    name: 'CreateProduct',
  },
  {
    path: '/EditProduct/:id',
    component: EditProduct,
    name: 'EditProduct',
  },
];
