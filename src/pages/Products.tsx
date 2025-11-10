import { Link } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'
import { useGetAllProducts } from '../hooks/useProducts.use'


export default function Products() {
    const { data: products } = useGetAllProducts()


    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>
                    Productos
                </h2>

                <Link
                    to="/productos/nuevo"
                    className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Agregar Producto
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Disponibilidad</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-500">
                                    Sin productos
                                </td>
                            </tr>
                        ) : (
                            products.map(product => (
                                <ProductDetails key={product.id} product={product} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}