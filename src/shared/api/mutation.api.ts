import { inject } from "@angular/core";
import { injectMutation as mutation, QueryClient } from "@tanstack/angular-query-experimental";

export function injectMutation<TInput, TOutput>(
  mutationKeys: string[],
  mutationFunction: (payload: TInput) => Promise<TOutput>,
  refetchKeys: string[] = [],
) {
  const queryClient = inject(QueryClient);
  return mutation(() => ({
    mutationKey: mutationKeys,
    mutationFn: mutationFunction,
    onSuccess() {
      queryClient.removeQueries({ queryKey: refetchKeys });
    },
  }));
}
