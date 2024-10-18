// src/store/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../services/api';

interface DataState {
    data: any[]; // Replace 'any' with your actual data type
    loading: boolean;
    error: string | null; // This should be 'string | null' instead of 'string | undefined'
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchDataAsync = createAsyncThunk('data/fetchData', async () => {
    const response = await fetchData();
    return response;
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ? action.error.message : null; // Ensure it is null if message is undefined
            });
    },
});

export default dataSlice.reducer;
