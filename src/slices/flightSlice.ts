import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the local proxy server URL
const PROXY_URL = "http://localhost:8080/";

// Define the API endpoint URL
const API_URL =
  "https://app.goflightlabs.com/retrieveFlights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGQyZGY0ZWU5NGU5ZmVmNjFlZDAyNjYxNDUzZDYwMTI0NThjMmY3MjIzMDMyMzk4YmQzYjY0NzE2ZTMyOThjZTZiZjE4OTcyYWI2MWRmYWMiLCJpYXQiOjE3MTYxNzYzNTYsIm5iZiI6MTcxNjE3NjM1NiwiZXhwIjoxNzQ3NzEyMzU2LCJzdWIiOiIyMjU2OSIsInNjb3BlcyI6W119.cZnHSnwxjM_OTfoR8m2bUNUmLooqPLcGhszmfRjzbXgIZNeBiSw1eJ92XAM3419xW7cgHmYgsri-jzCVFSWbyA&originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&date=2024-05-21";


export const fetchFlights = createAsyncThunk(
  "flights/fetchFlights",
  async () => {
    const url = PROXY_URL + API_URL;

    try {
      const response = await axios.get(url);
      return response.data.itineraries;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.flights = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default flightSlice.reducer;
