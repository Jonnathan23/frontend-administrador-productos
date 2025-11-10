const verifyObject = <T>(envVar: T) => {
    if (!envVar) throw new Error('Sin variable de entorno')

    return envVar
}


export const envs = {
    BACKEND_URL: verifyObject(import.meta.env.VITE_BACKEND_URL)
}