import { Provider } from "@angular/core";
import { provideTanStackQuery, QueryClient } from "@tanstack/angular-query-experimental";
import { withDevtools } from "@tanstack/angular-query-experimental/devtools";

export const QUERY_PROVIDER: Provider[] = provideTanStackQuery(
  new QueryClient({
    defaultOptions: {
      queries: {
        retryOnMount: true,
        refetchOnWindowFocus: false,
        throwOnError: false,
      },
      mutations: {
        throwOnError: false,
      },
    },
  }),
  withDevtools(),
);
