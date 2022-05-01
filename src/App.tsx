import React, { useEffect } from "react";

import "./App.css";
import { fetchLaunchData, selectData } from "./store/dataReducer";
import { useAppSelector, useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);

  useEffect(() => {
    dispatch(fetchLaunchData());
  }, [dispatch]);
  return <pre>{data ? JSON.stringify(data, undefined, 2) : "loading"}</pre>;
}

export default App;
