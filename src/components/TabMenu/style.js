import styled from 'styled-components'

export const TabMenuNav = styled.nav`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 5rem;
  bottom: 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TabMenuList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0;
`
export const TabMenuListItem = styled.li`
  list-style: none;
  padding: 1rem;
  cursor: pointer;
`

export const TabMenuIcon = styled.div`
  display: flex;
  justify-content: center;
`
