import { createBrowserRouter } from 'react-router-dom';
import MainDashBoardComp from '../Layout/MainDashBoardComp';
import HomeComp from '../components/HomeComp';
import AboutComp from '../components/AboutComp';
import ProductsComp from '../components/ProductsComp';
import ContactComp from '../components/ContactComp';
import ProductDashComp from "../CRUD/ProductDashComp";
import AddProductComp from "../CRUD/AddProductComp";
import EditProductComp from "../CRUD/EditProductComp";
import PageNotFoundComp from '../Layout/PageNotFoundComp';

const router = createBrowserRouter([
  {
    path: '/',element: <MainDashBoardComp />,
    children: [

      {path:"*", element:<PageNotFoundComp />},

      { path: 'Home', element: <HomeComp /> },
      { path: 'about', element: <AboutComp /> },
      { path: 'products', element: <ProductsComp /> },
      { path: 'contact', element: <ContactComp /> },
      {path: 'ProductDashComp' ,element: <ProductDashComp />},
      {path:"/MainDashBoard/AddProductComp", element:<AddProductComp />},
    
      {path:"/MainDashBoard/EditProductComp/:id" , element:<EditProductComp />},

    ],
  },
]);

export default router;


