import { useContext } from "react";
import {StoreContext} from "../ui/StoreProvider";


export const useStores = () => {
    return useContext(StoreContext);
};