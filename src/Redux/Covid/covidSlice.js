import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'covid/fetchData', async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '03bbb1fc45msh68e8ff1426d6e84p15faffjsn9831d20690b8',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    };

    const response = fetch('https://covid-193.p.rapidapi.com/statistics', options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    return response;
  },
);

export const fetchDetail = createAsyncThunk(
  'covid/fetchDetail', async (data) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '03bbb1fc45msh68e8ff1426d6e84p15faffjsn9831d20690b8',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    };

    const response = fetch(`https://covid-193.p.rapidapi.com/statistics?country=${data}`, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    return response;
  },
);

const covidSlice = createSlice({
  name: 'covid',
  initialState: { covid: [], status: 'idel' },
  reducers: {
    covidStatus: (state, { payload }) => {
      state;
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchData.pending, (state) => ({
      ...state,
      status: 'pending',
    }));
    Builder.addCase(fetchData.fulfilled, (state, action) => {
      state.covid = action.payload.response,
      state.status = 'fulfiled';
    });

    Builder.addCase(fetchDetail.pending, (state) => ({
      ...state,
      status: 'pending',
    }));
    Builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.covid = action.payload.response,
      state.status = 'fulfiled';
    });
  },

});

export const { covidStatus } = covidSlice.actions;

export default covidSlice.reducer;
