

import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import BookTickets from "@/app/stateManagers/BookTickets";
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
