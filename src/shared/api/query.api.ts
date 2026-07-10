import { injectQuery as query } from "@tanstack/angular-query-experimental";

export function injectQuery<TData>(
  queryKeys: readonly string[],
  queryFunction: () => TData,
  retry: boolean | number = false,
) {
  return query(() => ({
    queryKey: queryKeys,
    queryFn: queryFunction,
    retry,
  }));
}
