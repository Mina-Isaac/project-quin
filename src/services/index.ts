import { BASE_URL } from "../constants";
import { LaunchResponse } from "../store/types";
import Cache from "./cache";

const cache = new Cache<LaunchResponse>();

const service = {
  cacheAge: 24,

  async fetchData(endpoint: string): Promise<LaunchResponse> {
    if (cache.has(endpoint) && !cache.isExpired(endpoint, this.cacheAge))
      return cache.get(endpoint) as LaunchResponse;
    else {
      return await fetch(`${BASE_URL}${endpoint}`).then((res) => res.json());
    }
  },
};

export default service;
