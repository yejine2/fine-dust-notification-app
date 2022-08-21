import React from 'react'
import { NavLink } from 'react-router-dom'
import { GrLocation, GrMapLocation } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'
import * as S from './style'

function TabMenu() {
  return (
    <S.TabMenuNav>
      <S.TabMenuList>
        <S.TabMenuListItem>
          <S.TabMenuIcon>
            <GrLocation />
          </S.TabMenuIcon>
          <NavLink className="tab" to="/">
            내 지역보기
          </NavLink>
        </S.TabMenuListItem>

        <S.TabMenuListItem>
          <S.TabMenuIcon>
            <GrMapLocation />
          </S.TabMenuIcon>
          <NavLink to="/all-region">전체 시도보기</NavLink>
        </S.TabMenuListItem>

        <S.TabMenuListItem>
          <S.TabMenuIcon>
            <AiFillStar color="#000" />
          </S.TabMenuIcon>
          <NavLink to="/favorite-region">즐겨찾기</NavLink>
        </S.TabMenuListItem>
      </S.TabMenuList>
    </S.TabMenuNav>
  )
}

export default TabMenu
