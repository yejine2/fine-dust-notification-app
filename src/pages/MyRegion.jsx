import React from 'react'
import { useSelector } from 'react-redux'
import { getAlldustData } from '../store/dustSlice'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

function MyRegion() {
  const { myRegion, isLoading } = useSelector(getAlldustData)

  return (
    <>
      <div>{isLoading && <Loader />}</div>
      <Layout title="내 지역보기">
        {myRegion && <Card data={myRegion} />}
      </Layout>
      <div>
        {!myRegion && <h3 className="centered">내 지역을 설정해주세요</h3>}
      </div>
    </>
  )
}

export default MyRegion
