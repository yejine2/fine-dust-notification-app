import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  favoriteRegionAddHandler,
  favoriteRegionRemoveHandler,
} from '../../store/dustSlice'
import * as S from './style'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { DUST_GRADE } from '../../utils/constants'

function Card({ data, isShowFavoriteRegionCard }) {
  const dispatch = useDispatch()
  const [favoriteRegion, setFavoriteRegion] = useState(false)

  const onStarCheckHandler = () => {
    if (favoriteRegion) {
      dispatch(favoriteRegionRemoveHandler(data.stationName))
    } else {
      dispatch(favoriteRegionAddHandler(data))
    }

    if (isShowFavoriteRegionCard) {
      dispatch(favoriteRegionRemoveHandler(data.stationName))
    }
    setFavoriteRegion(!favoriteRegion)
  }

  return (
    <S.CardContainer value={data.pm10Grade}>
      <S.CardInfoWrapper>
        <S.CardSubText>{data.stationName}</S.CardSubText>
        <S.CardInfoText>{data.sidoName}</S.CardInfoText>
        <S.CardFavoriteBtn
          onClick={() => {
            onStarCheckHandler(data)
          }}
        >
          {favoriteRegion || data.isFavoriteRegion ? (
            <AiFillStar size="1.4rem" />
          ) : (
            <AiOutlineStar size="1.4rem" />
          )}
        </S.CardFavoriteBtn>
      </S.CardInfoWrapper>

      <S.CardValue>
        {data.pm10Grade ? DUST_GRADE[data.pm10Grade] : '알 수 없음 😓'}
      </S.CardValue>
      <S.CardDateText>
        {data.dataTime && `${data.dataTime} 기준`}
      </S.CardDateText>
    </S.CardContainer>
  )
}

export default Card
