import { useMutation, useQuery, useQueryClient } from "react-query"
import { productService } from "../services"
import { Product } from "../types"


//* Gets

export const useGetAllProducts = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts,
        retry: true,
        refetchOnWindowFocus: false,
    })

    return { data: data ?? [] as Product[], isLoading, isError }
}

export const useGetProductById = (id: Product['id']) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['product-by-id', id],
        queryFn: () => productService.getProductById(id),
        retry: true,
        refetchOnWindowFocus: false,
    })

    return { data: data, isLoading: isLoading, isError: isError }
}


//* Post

export const useCreateProduct = (id: Product['id']) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productService.addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product-by-id', id] })
        },
        onError: (error) => {
            console.log(error)
        }
    })
}

//* Put

export const useUpdateProduct = (id: Product['id']) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productService.addProduct,
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['product-by-id', id] })
        },
        onError: (error) => {
            console.log(error)
        }
    })
}

//* Delete

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productService.deleteProduct,
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['products'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })
}