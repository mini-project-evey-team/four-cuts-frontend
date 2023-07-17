import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, FC, ReactNode } from "react";

export interface IReactQueryContext {}

export const ReactQueryContext = createContext<IReactQueryContext | null>(null);

type IReactQueryProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const ReactQueryProvider: FC<IReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
