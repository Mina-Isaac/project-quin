import {
  createAsyncThunk,
  createReducer,
  SerializedError,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { LaunchResponse } from "./types";
import service from "../services";

export interface DataState {
  dataStatus: "idle" | "loading" | "failed" | "succeeded";
  data?: LaunchResponse;
  error?: SerializedError;
}

const initialState: DataState = {
  data: undefined,
  dataStatus: "idle",
  error: undefined,
};

export const fetchLaunchData = createAsyncThunk("data/launch", async () => {
  return await service.fetchData("launch");
});

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLaunchData.pending, (state) => {
      state.dataStatus = "loading";
      state.error = undefined;
    })

    .addCase(fetchLaunchData.fulfilled, (state, { payload }) => {
      state.dataStatus = "succeeded";
      state.data = payload;
    })

    .addCase(fetchLaunchData.rejected, (state, action) => {
      state.dataStatus = "failed";
      state.error = action.error;
      state.data = undefined;
    });
});

// Selectors related to data state

const selectData = (state: RootState) => state.data.data;

const selectStatus = (state: RootState) => state.data.dataStatus;

const selectError = (state: RootState) => state.data.error;

export { selectData, selectStatus, selectError };

export default dataReducer;
