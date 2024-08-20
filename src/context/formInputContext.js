import { createContext } from "react";

export let inputContext = createContext({
  Label: "",
  Value: "",
  handelChange: null,
});
