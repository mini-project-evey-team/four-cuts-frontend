import { FC } from "react";
import { ReactQueryProvider, RecoilProvider } from "./provider";
import { RouterProvider } from "./router";

export const App: FC = () => {
  return (
    <RecoilProvider>
      <ReactQueryProvider>
        <RouterProvider />
      </ReactQueryProvider>
    </RecoilProvider>
  );
};
