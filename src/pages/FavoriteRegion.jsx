import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import { getAlldustData } from '../store/dustSlice'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

function FavoriteRegion() {
  const { favoriteRegion, isLoading } = useSelector(getAlldustData)

  return (
    <>
      <div>{isLoading ? <Loader /> : ''}</div>
      <Layout title="즐겨찾기">
        {favoriteRegion &&
          favoriteRegion.length > 0 &&
          favoriteRegion.map((item) => (
            <Card
              key={item.stationName}
              data={item}
              isShowFavoriteRegionCard={true}
            />
          ))}
      </Layout>
      <div>
        {!favoriteRegion.length && (
          <h3 className="centered">즐겨찾는 지역을 설정해주세요</h3>
        )}
      </div>
    </>
  )
}

export default FavoriteRegion
