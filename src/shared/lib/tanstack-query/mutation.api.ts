import { inject } from "@angular/core";
import { injectMutation as mutation, QueryClient } from "@tanstack/angular-query-experimental";

export function injectMutation<TInput, TOutput, TError = Error>(
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
    onError(error: TError) {
      console.error(`[Mutation ${mutationKeys.join("/")}] Error: `, error);
    },
  }));
}
