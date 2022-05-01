import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import dataReducer from "./dataReducer";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
