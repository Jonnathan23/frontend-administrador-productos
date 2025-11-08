import axios, { AxiosInstance } from "axios"
import { envs } from "../config/envs"


export class Api {
    private readonly api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: envs.BACKEND_URL!
        })
    }

    async get(url: string) {
        try {
            const { data } = await this.api.get(url)

            return { data: data }
        } catch (error) {
            console.log(error)
        }
    }

    async post<T>(url: string, dataForm: T) {
        try {
            const { data } = await this.api.post(url, dataForm)

            return { data: data }

        } catch (error) {
            console.log(error)
        }
    }

    async put<T>(url: string, dataForm: T) {
        try {
            const { data } = await this.api.put(url, dataForm)

            return { data: data }
        } catch (error) {
            console.log(error)
        }
    }

    async patch<T>(url: string, dataForm?: T) {
        try {
            const { data } = await this.api.patch(url, dataForm)

            return { data: data }
        } catch (error) {
            console.log(error)

        }
    }

    async delete(url: string) {
        try {
            await this.api.delete(url)
        } catch (error) {
            console.log(error)
        }
    }

}