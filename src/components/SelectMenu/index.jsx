import {
  setRegionHandler,
  fetchData,
  getAlldustData,
} from '../../store/dustSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { SIDO_NAME } from '../../utils/constants'

function SelectMenu() {
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const { dustDataList } = useSelector(getAlldustData)

  const onSidoNameChange = (event) => {
    if (event.currentTarget.value === '시도') return
    dispatch(fetchData(event.currentTarget.value))
  }
  const onStationNameChange = (event) => {
    if (event.currentTarget.value === '시군구') return
    dispatch(setRegionHandler(event.currentTarget.value))
  }

  return (
    <>
      {location !== '/favorite-region' && (
        <div>
          <select onChange={onSidoNameChange}>
            <option>시도</option>
            {SIDO_NAME.map((sido) => (
              <option key={sido}>{sido}</option>
            ))}
          </select>

          {location !== '/all-region' && (
            <select onChange={onStationNameChange}>
              <option>시군구</option>
              {dustDataList.map((station) => (
                <option key={station.stationName}>{station.stationName}</option>
              ))}
            </select>
          )}
        </div>
      )}
    </>
  )
}

export default SelectMenu
