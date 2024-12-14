export function renameJsonKeys<T>(obj: T, keyMap: Record<string, string>): string {

  const keyLookup = new Map(Object.entries(keyMap));


  function renameJson(o: any): any {
    if (Array.isArray(o)) {
      // If the value is an array, process each element
      return o.map(item => (typeof item === 'object' && item !== null ? renameJson(item) : item));
    }

    if (o && typeof o === 'object' && !Array.isArray(o)) {
      // If the value is an object, rename its keys
      return Object.entries(o).reduce((acc, [key, value]) => {
        const newKey = keyLookup.get(key) || key; 
        acc[newKey] = renameJson(value);
        return acc;
      }, {} as any);
    }

    return o; 
  }

  return renameJson(obj);
}
