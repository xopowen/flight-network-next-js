

import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";



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
