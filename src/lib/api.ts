import axios, { AxiosInstance } from "axios"
import { envs } from "../config/envs"


export class Api {
    private readonly api: AxiosInstance;

    constructor() {
        console.log(envs.BACKEND_URL)
        this.api = axios.create({
            baseURL: envs.BACKEND_URL!
        })
    }

    get = async (url: string) => {
        try {
            const { data } = await this.api.get(url)
            console.log('data')
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    post = async <T>(url: string, dataForm: T) => {
        try {
            const { data } = await this.api.post(url, dataForm)

            return data

        } catch (error) {
            console.log(error)
        }
    }

    put = async <T>(url: string, dataForm: T) => {
        try {
            const { data } = await this.api.put(url, dataForm)

            return data
        } catch (error) {
            console.log(error)
        }
    }

    patch = async <T>(url: string, dataForm?: T) => {
        try {
            const { data } = await this.api.patch(url, dataForm)

            return data
        } catch (error) {
            console.log(error)

        }
    }

    delete = async (url: string) => {
        try {
            await this.api.delete(url)
        } catch (error) {
            console.log(error)
        }
    }

}