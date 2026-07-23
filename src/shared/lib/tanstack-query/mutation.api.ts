import { inject } from "@angular/core";
import { ErrorPayload } from "@shared/types";
import { injectMutation as mutation, QueryClient } from "@tanstack/angular-query-experimental";
import { toast } from "ngx-sonner";

export function injectMutation<TInput, TOutput>(
  mutationKeys: readonly string[],
  mutationFunction: (payload: TInput) => Promise<TOutput>,
  refetchKeys: readonly string[] = [],
) {
  const queryClient = inject(QueryClient);
  return mutation(() => ({
    mutationKey: mutationKeys,
    mutationFn: mutationFunction,
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: refetchKeys });
    },
    onError(error: ErrorPayload) {
      toast.error(error.title || "Невідома помилка");
    },
  }));
}
