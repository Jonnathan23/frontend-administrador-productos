export function formatCurrency(value: number) {
    return new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(value)
}

export function toBoolean(str: string) {
    return str.toLowerCase() === 'true'
}