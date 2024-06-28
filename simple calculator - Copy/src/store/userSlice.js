import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let fetchData = createAsyncThunk("fetchData", async (b) => {
    console.log(b);
    try {
        const response = await fetch(
            "http://newsapi.org/v2/everything?q=business AND blockchain&sortBy=publishedAt&language=en&apiKey=607afe6fe95343d9be98d608b783cb20"
        );
        const data = await response.json();
        return data;
        console.log(data);
    } catch (error) {
        throw new Error(error.message);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: "idle",
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                console.log(action, "pending");
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log(action);
                console.log(state, "fulfilled")((state.status = "succeeded")),
                    (state.data = action.payload);
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
export { fetchData };
export default userSlice.reducer;
