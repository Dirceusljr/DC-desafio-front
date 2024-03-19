import { Outlet } from "react-router-dom"
import Header from "../../shared/components/Header"
import { Footer } from "../../shared/components/Footer"


export const PaginaBase = () => {
  return (
    <main style={{width: '100vw', height: '100vh'}}>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}
