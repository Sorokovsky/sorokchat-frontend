import { injectQuery as query } from "@tanstack/angular-query-experimental";
import { ErrorPayload } from "../../types";
import { toast } from "ngx-sonner";

export function injectQuery<TData>(
  queryKeys: readonly string[],
  queryFunction: () => Promise<TData>,
  retry: boolean | number = false,
) {
  return query(() => ({
    queryKey: queryKeys,
    queryFn: queryFunction,
    retry,
    throwOnError(error: ErrorPayload) {
      toast.error(error.title || "Невідома помилка");
      return false;
    },
  }));
}
