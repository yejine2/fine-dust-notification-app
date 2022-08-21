import React from 'react'
import { useSelector } from 'react-redux'
import { getAlldustData } from '../store/dustSlice'
import Card from '../components/Card'
import SelectMenu from '../components/SelectMenu'

function MyRegion() {
  const { myRegion } = useSelector(getAlldustData)

  return (
    <div>
      <h2>내 지역</h2>
      <SelectMenu />
      {myRegion ? <Card data={myRegion} /> : <p>지역을 선택해주세요</p>}
    </div>
  )
}

export default MyRegion
