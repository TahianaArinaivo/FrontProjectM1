export type Data<T> = {
    result?: T,
    isSuccess: boolean
    displayMessage?: string;
    errorMessage?: string;
}