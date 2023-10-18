type WithAsync<T = unknown> = () => T | Promise<T>;
type WithAsyncReturn<TData, TError> = Promise<TData | TError> | null | unknown;

//abstract of try catch
export async function withAsync<TData = unknown, TError = unknown>(
  fn: WithAsync<TData>
): Promise<WithAsyncReturn<TData, TError>> {
  try {
    if (typeof fn !== "function") {
      throw new Error("the first argument must be a function");
    }
    const response = await fn();
    return response;
  } catch (error) {
    return error;
  }
}
