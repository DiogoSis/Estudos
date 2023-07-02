import { NavLink } from "react-router-dom";
import styles from './MenuLink.module.css';

import React from 'react'

export default function MenuLink({ children, to}) {
  // const localizacao = useLocation()

  return (
    
    <NavLink className={({ isActive}) => `
    ${styles.link} 
    ${isActive ? styles.linkDestacado : ""}
    `}
    to={to}
    end
    >
      {children}

    </NavLink>
    
  )
}

