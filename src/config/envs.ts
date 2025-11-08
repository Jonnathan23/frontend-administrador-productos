

const verifyObject = <T>(variable: T) => {
    if (!variable) throw new Error('Sin variable de entorno')

}


export const envs = {
    BACKEND_URL: verifyObject<string>(import.meta.env.VITE_BACKEND_URL)
}