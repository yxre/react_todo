import { useSelector } from "react-redux";
import { RootState } from "./store";

export type AppState = {
  data: RootState;
};

const selector = (state: RootState): RootState => {
  return state;
};

export const useAppState = () => {
  const data = useSelector(selector);

  return {
    data,
  };
};
