import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import { getAlldustData } from '../store/dustSlice'
import SelectMenu from '../components/SelectMenu'

function FavoriteRegion() {
  const { favoriteRegion, isLoading } = useSelector(getAlldustData)

  return (
    <div>
      <h2>즐겨찾는 장소</h2>
      <SelectMenu />
      {isLoading ? (
        <p> 로딩중 </p>
      ) : favoriteRegion.length > 0 ? (
        favoriteRegion.map((item) => (
          <Card
            key={item.stationName}
            data={item}
            isShowFavoriteRegionCard={true}
          />
        ))
      ) : (
        <p>즐겨찾는 지역을 등록해주세요</p>
      )}
    </div>
  )
}

export default FavoriteRegion
