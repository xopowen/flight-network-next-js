import React from "react";
import {Metadata} from "next";
import '../../public/css/main.css';
import {StoresProvider} from "@/app/ui/StoreProvider";


export const metadata: Metadata = {
    title: {
        template: '%s | Xopowen educational project',
        default: 'Xopowen educational project',
    },
    description: 'Xopowen educational project',
}


export default function RootLayout ({children}: {children:React.ReactNode}) {
    return( <StoresProvider>
        <html lang="en">
        <body  >
        {children}
        </body>
        </html>
    </StoresProvider>)
}