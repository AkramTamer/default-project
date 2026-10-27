import { createContext } from "react-router";

export const GlobalStore = createContext()

export default function MainStore(children){


    const vaules = {}

   return(
   <GlobalStore.provider vaule={vaules}>{children}</GlobalStore.provider>
   )

}