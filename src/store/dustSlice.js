import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import qs from 'qs'

const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY
const BASE_URL = 'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { encode: false })
}

const getParameters = {
  serviceKey: SERVICE_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  ver: '1.0',
}

const initialState = {
  dustDataList: [],
  favoriteRegion: [],
  myRegion: null,
  isLoading: false,
  error: null,
}

export const fetchData = createAsyncThunk(
  'dust/fetchData',
  async (sidoName) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: { ...getParameters, sidoName },
      })
      return response.data.response.body.items.map((item) => {
        return { ...item, isFavoriteRegion: false }
      })
    } catch (error) {
      console.log(error)
    }
  },
)

export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    // 장소 설정
    setRegionHandler(state, action) {
      state.myRegion = state.dustDataList.find(
        (item) => item.stationName === action.payload,
      )
    },
    // 즐겨찾기 장소 추가
    favoriteRegionAddHandler(state, action) {
      state.favoriteRegion.push({ ...action.payload, isFavoriteRegion: true })
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      console.log('Pending')
      return { ...state, isLoading: true }
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!')
      return { ...state, dustDataList: payload, isLoading: false }
    },
    [fetchData.rejected]: (state) => {
      console.log('Rejected')
      return { ...state, isLoading: false }
    },
  },
})

export const { setRegionHandler, favoriteRegionAddHandler } = dustSlice.actions
export const getAlldustData = (state) => state.dust
export const dustReducer = dustSlice.reducer
