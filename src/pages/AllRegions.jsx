import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, getAlldustData } from '../store/dustSlice'
import Card from '../components/Card'
import SelectMenu from '../components/SelectMenu'

function AllRegions() {
  const dispatch = useDispatch()
  const { dustDataList, isLoading } = useSelector(getAlldustData)

  useEffect(() => {
    dispatch(fetchData('전국'))
  }, [dispatch])

  return (
    <div>
      <h2>전체 지역</h2>
      <SelectMenu />
      {isLoading ? (
        <p>로딩중!</p>
      ) : (
        dustDataList.map((item) => <Card key={item.stationName} data={item} />)
      )}
    </div>
  )
}

export default AllRegions
