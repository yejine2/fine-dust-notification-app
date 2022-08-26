import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, getAlldustData } from '../store/dustSlice'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

function AllRegions() {
  const dispatch = useDispatch()
  const { dustDataList, isLoading } = useSelector(getAlldustData)

  useEffect(() => {
    dispatch(fetchData('전국'))
  }, [dispatch])

  return (
    <>
      <div>{isLoading && <Loader />}</div>
      <Layout title="전체 시도보기">
        {dustDataList &&
          dustDataList.length > 0 &&
          dustDataList.map((item) => (
            <Card key={item.stationName} data={item} />
          ))}
      </Layout>
    </>
  )
}

export default AllRegions
