type WithAsync<T = unknown> = () => T | Promise<T>;
type WithAsyncReturn<TData, TError> = Promise<{
  response: TData | null;
  error: TError | unknown;
}>;

//abstract of try catch
export async function withAsync<TData = unknown, TError = unknown>(
  fn: WithAsync<TData>
): Promise<WithAsyncReturn<TData, TError>> {
  try {
    if (typeof fn !== "function") {
      throw new Error("the first argument must be a function");
    }
    const response = await fn();
    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
}
