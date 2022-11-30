import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'covid/fetchData', async () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '03bbb1fc45msh68e8ff1426d6e84p15faffjsn9831d20690b8',
                'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
        };

        const response = fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return response;
    },
);



const covidSlice = createSlice({
    name: 'covid',
    initialState: { covid: [{ "1": 1, "2": 2 }], status: 'idel' },
    reducers: {
        covidStatus: (state, { payload }) => {
            state
        },
    },
    extraReducers: (Builder) => {
        Builder.addCase(fetchData.pending, (state) => ({
            ...state,
            status: 'pending',
        }))
        .addCase(fetchData.fulfilled, (state, action) => {
            state.covid = action.payload
        })
    }

})

export const { covidStatus } = covidSlice.actions;

export default covidSlice.reducer;