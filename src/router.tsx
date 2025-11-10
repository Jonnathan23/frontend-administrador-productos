import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './pages/Products'
import NewProduct from './pages/NewProduct'
import EditProduct from './pages/EditProduct'

/*
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar',
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])

*/


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Products />} />
                    {
                        //<Route path='/products/new' element={<NewProduct />} />
                    }
                    {
                        //    <Route path='/products/:id/edit' element={<EditProduct />} />
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    );
}