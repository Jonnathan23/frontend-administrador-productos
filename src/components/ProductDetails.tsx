import { ActionFunctionArgs, Form, Link, redirect, useFetcher } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"

type ProductDetailsProps = {
    product: Product
}

export async function action({ params }: ActionFunctionArgs) {

    if (params.id !== undefined) {
        await deleteProduct(+params.id)

    }

    return redirect('/')
}

export default function ProductDetails({ product }: ProductDetailsProps) {

    const fetcher = useFetcher()
    const isAvailable = product.availability
    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${isAvailable ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs font-bold uppercase w-full border border-black-100 hover:cursor-pointer `}
                    >
                        {isAvailable ? 'Disponible' : 'No disponible'}
                    </button>
                </fetcher.Form>

            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 intem-center">
                    <Link
                        to={`/productos/${product.id}/editar`}
                        className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                    >Editar</Link>

                    <Form
                        method="post"
                        className="w-full"
                        action={`/productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if (!confirm('¿Deseas eliminar el producto?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type="submit"
                            className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center cursor-pointer"
                            value="Eliminar" />
                    </Form>
                </div>
            </td>
        </tr>
    )
}