import settingsReducer, {
  SettingState,
  setCoordinates,
  setDateRange,
} from "./settingsSlice";
import { addWeeks, addMonths } from "date-fns";

describe("settings reducer", () => {
  const initialState: SettingState = {
    dateRange: {
      start: Date.now(),
      end: addMonths(Date.now(), 3).getTime(),
    },
  };
  it("should handle initial state", () => {
    expect(settingsReducer(undefined, { type: "unknown" })).toEqual({
      dateRange: {
        start: Date.now(),
        end: addMonths(Date.now(), 3).getTime(),
      },
    });
  });

  it("should handle setting date range", () => {
    const rangeToSet = {
      start: Date.now(),
      end: addWeeks(Date.now(), 4).getTime(),
    };
    const actual = settingsReducer(initialState, setDateRange(rangeToSet));
    expect(actual.dateRange).toEqual(rangeToSet);
  });

  it("should handle setting coordinates", () => {
    const coordinateString = "Some coordinate string";
    const actual = settingsReducer(
      initialState,
      setCoordinates(coordinateString)
    );
    expect(actual.coordinates).toEqual(coordinateString);
  });
});
