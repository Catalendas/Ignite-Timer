import { HeaderContainer } from './style'
import Switch from 'react-switch'

import LogoIgnite from '../../assets/Logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { CyclesContext } from '../../context/CyclesContext'

interface HeaderProps {
  toggleTheme: () => void
}

export function Header({ toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />

      <nav>
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          onColor="#333"
          offColor="#444"
          height={10}
          width={40}
          handleDiameter={20}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
