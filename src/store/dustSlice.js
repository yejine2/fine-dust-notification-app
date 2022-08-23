import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import qs from 'qs'

const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY
const BASE_URL = 'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

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
      const response = await axios.get(`${PROXY}/${BASE_URL}`, {
        params: { ...getParameters, sidoName },
      })
      return response.data['response']['body']['items']
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
    // 즐겨찾기 장소 삭제
    favoriteRegionRemoveHandler(state, action) {
      state.favoriteRegion = state.favoriteRegion.filter(
        (item) => item.stationName !== action.payload,
      )
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      return { ...state, isLoading: true }
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      return { ...state, dustDataList: payload, isLoading: false }
    },
    [fetchData.rejected]: (state) => {
      return { ...state, isLoading: false }
    },
  },
})

export const {
  setRegionHandler,
  favoriteRegionAddHandler,
  favoriteRegionRemoveHandler,
} = dustSlice.actions
export const getAlldustData = (state) => state.dust
export const dustReducer = dustSlice.reducer
