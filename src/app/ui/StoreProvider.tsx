"use client";
import React, { createContext, ReactNode } from "react";
import {RootStore} from '../store/RootStore.js'

export const StoreContext = createContext(RootStore);
/**
 * @description оборачиваем нужный loader и все менеджеры будут доступны из контекста
 * @param children
 * @constructor
 */
export const StoresProvider = ({ children }: { children: ReactNode }) => {
    return (
        <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
    );
};

