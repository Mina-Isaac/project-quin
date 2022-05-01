interface CacheInterface<T> {
  cache: Map<string, [T, number]>;
}
class Cache<TData> implements CacheInterface<TData> {
  cache = new Map<string, [TData, number]>();

  has(key: string) {
    return this.cache.has(key);
  }

  set(key: string, value: TData) {
    return this.cache.set(key, [value, Date.now()]);
  }

  get(key: string) {
    return this.cache.get(key)?.[0];
  }

  isExpired(key: string, hours: number) {
    const timestamp = this.cache.get(key)?.[1];
    if (timestamp === undefined) return true;

    return (Date.now() - timestamp) / (1000 * 60 * 60) > hours;
  }
}

export default Cache;
