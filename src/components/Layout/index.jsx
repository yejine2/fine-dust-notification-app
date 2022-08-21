import TabMenu from '../TabMenu'
import SelectMenu from '../SelectMenu'
import * as S from './style.js'

function Layout(props) {
  return (
    <S.Container>
      <S.MainTitle>{props.title}</S.MainTitle>
      <SelectMenu />
      <S.CardArea> {props.children}</S.CardArea>
      <TabMenu />
    </S.Container>
  )
}

export default Layout
