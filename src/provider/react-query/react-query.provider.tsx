import { createContext, FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

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
