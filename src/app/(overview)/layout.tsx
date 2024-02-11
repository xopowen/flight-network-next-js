import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import React from "react";


export default function mainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
          <Header/>
          {children}
          <Footer/>
  </>
  )
}
