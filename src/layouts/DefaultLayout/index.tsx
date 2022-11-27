import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header } from '../../components/Header'
import { LayoutContainer } from './style'
import 'react-toastify/dist/ReactToastify.css'

interface DefaultProps {
  toggleTheme: () => void
}

export function DefaultLayout({ toggleTheme }: DefaultProps) {
  return (
    <LayoutContainer>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
      <ToastContainer position="top-right" autoClose={2000} />
    </LayoutContainer>
  )
}
