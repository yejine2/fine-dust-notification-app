import React from 'react'
import { NavLink } from 'react-router-dom'

function TabMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">내 지역보기</NavLink>
        </li>
        <li>
          <NavLink to="/all-region">전체 시도보기</NavLink>
        </li>
        <li>
          <NavLink to="/favorite-region">즐겨찾기</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TabMenu
