import {createSlice, createSelector} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


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
    counter:1,
    watchlistData:[],
  },
  reducers: {
    setIsTradeModalVisible: (state, action) => {
      state.isTradeModalVisible = action.payload;
    },
    incrementCounter : (state,action)=>{
        state.counter +=1;
    },
    decrementCounter : (state,action)=>{
      state.counter -=1;
  },
  addToWatchlist: (state, action) => {
    const newItem = action.payload;
    const existingItem = state.watchlistData.find((item) => item.id === newItem.id);
    if (!existingItem) {
      state.watchlistData.push(newItem);
    }
  },
  removeFromWatchlist: (state, action) => {
    state.watchlistData = state.watchlistData.filter((item) => item.id !== action.payload);
  },
  removeAllFromWatchlist: (state) => {
    state.watchlistData = [];
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

export const {setIsTradeModalVisible,incrementCounter,decrementCounter,addToWatchlist,removeFromWatchlist,removeAllFromWatchlist} = coinSlice.actions;
export default coinSlice.reducer;
export const selectIsTradeModalVisible = state =>
  state.coin.isTradeModalVisible;
 export const selectWatchlistData = (state) => state.coin.watchlistData;