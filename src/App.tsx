import { FC } from "react";
import { ReactQueryProvider, RecoilProvider } from "./provider";
import { Router } from "./router";

export const App: FC = () => {
  return (
    <RecoilProvider>
      <ReactQueryProvider>
        <Router />
      </ReactQueryProvider>
    </RecoilProvider>
  );
};
