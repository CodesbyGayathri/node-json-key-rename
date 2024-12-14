export function renameJsonKeys<T>(obj: T, keyMap: Record<string, string>): string {

  const keyLookup = new Map(Object.entries(keyMap));


  function renameObject(o: any): any {
    if (Array.isArray(o)) {
      // If the value is an array, process each element
      return o.map(item => (typeof item === 'object' && item !== null ? renameObject(item) : item));
    }

    if (o && typeof o === 'object' && !Array.isArray(o)) {
      // If the value is an object, rename its keys
      return Object.entries(o).reduce((acc, [key, value]) => {
        const newKey = keyLookup.get(key) || key; 
        acc[newKey] = renameObject(value);
        return acc;
      }, {} as any);
    }

    return o; 
  }

  return JSON.stringify(renameObject(obj));
}
