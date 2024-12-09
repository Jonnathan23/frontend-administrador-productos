# Frontend de Administrador de productos

## Validar formulario
```bash
npm i valibot
```

## ActionData
Utiliza funciones para formulario, usualmente retornamos una redirección, se define la función en el router la función y en caso de que haya ocurrido un error podemos acceder a el de esta forma.

```ts
export default function NewProduct() {

    const error = useActionData() as string


    return (
        ...
```

## Loaders (React Router)

Uitliza Loaders para obtener datos de una API, similar al useEffect y colocar la respuesta en un state.

Para ello deberás crear una función en tu router decirle que función debe ejecutarse en el leader. Se importa la función en el router ``loader()``, para utilizar nuestra funcion debemos hacer uso de ``useLoaderData()``, nos permitirá obtener los datos de la función que definimos
```ts

export default function Products() {
    const products = useLoaderData() as Product[]

    return (
        ...
```

## Declarar funciones ActionData y Loaders

### Action
función action

```ts
export async function action({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())

    let error = ''

    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }

    if (error.length) {
        return error
    }

    await addProduct(data) 

    return redirect('/')
}
```

### Loader
función de loader
```ts
export async function loader() {
    const products = await getProducts()

    return products
}
```

### Declaración

Para indicar a nuestra aplicación las funciones que hemos definido y donde deben ejecutarse lo hacemos desde el router de esta maner

```ts
import Products, {loader as productsLoader} from './pages/Products'
import NewProduct, { action as newProductAction} from './pages/NewProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader //función a ejecutarse
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction // funcion action
            }
        ]
    }
])
```

## Cuando utilizar useLoaderData y use Action Data
* useLoaderData cuando quieras obtener el resultado de un loader --> cargar información de una API
* useActionData cuando quieras obtener el resultado de un action --> es especial cuando trabajas con un formulario