import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHomepageContent = createAsyncThunk(
    'homepage/fetchHomepageContent',
    async () => {
        const response = await fetch('https://apigateway.dusdusan.com/homepageContent');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    }
);

const homepageSlice = createSlice({
    name: 'homepage',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomepageContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomepageContent.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.product.productByNumberOfSales; // Adjust according to your data structure
            })
            .addCase(fetchHomepageContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default homepageSlice.reducer;
