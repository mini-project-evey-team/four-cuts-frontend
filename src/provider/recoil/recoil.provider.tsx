import { createContext, FC, ReactNode, useContext } from "react";
import { RecoilRoot } from "recoil";

export interface IRecoilContext {}

export const RecoilContext = createContext<IRecoilContext | null>(null);

type IRecoilProviderProps = {
  children: ReactNode;
};

export const RecoilProvider: FC<IRecoilProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export const useRecoil = () => {
  const context = useContext(RecoilContext);

  if (!context) {
    throw new Error("useRecoil must be used within a RecoilProvider");
  }
  return context;
};
