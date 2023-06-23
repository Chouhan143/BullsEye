import {createSlice, createSelector} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {getData} from '../../../constants/hooks/ApiHelper';

export const fetchCoinData = createAsyncThunk('fetchCoin', async () => {
  try {
    const response = await axios.get('https://scripts.bulleyetrade.com/api/getMarket');
     const result = response.data.Data;
     return result
  } catch (error) {
    console.log('error', error);
    throw error;
  }
});

export const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
    isTradeModalVisible: false,
  },
  reducers: {
    setIsTradeModalVisible: (state, action) => {
      state.isTradeModalVisible = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCoinData.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCoinData.fulfilled, (state, action) => {
      // console.log("response",response)
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCoinData.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export const {setIsTradeModalVisible} = coinSlice.actions;
export default coinSlice.reducer;
export const selectIsTradeModalVisible = state =>
  state.coin.isTradeModalVisible;
