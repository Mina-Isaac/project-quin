import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

import { addMonths } from "date-fns";

export interface SettingState {
  dateRange: {
    start: number;
    end: number;
  };
  coordinates?: string;
}

const initialState: SettingState = {
  dateRange: {
    start: Date.now(),
    end: addMonths(Date.now(), 3).getTime(),
  },
  coordinates: undefined,
};

export const counterSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<SettingState["dateRange"]>) => {
      state.dateRange = action.payload;
    },
    setCoordinates: (
      state,
      action: PayloadAction<SettingState["coordinates"]>
    ) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setDateRange, setCoordinates } = counterSlice.actions;

export const selectDateRange = (state: RootState) => state.settings.dateRange;
export const selectCoordinates = (state: RootState) =>
  state.settings.coordinates;

export default counterSlice.reducer;
