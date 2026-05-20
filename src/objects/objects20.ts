export function fromArrays<T, K extends string>(keys: K[], values: T[]): Record<K, T> {
	// Собираем объект, сопоставляя ключи и значения до длины меньшего массива
	const result = {} as Record<K, T>;
	const len = Math.min(keys.length, values.length);
	for (let i = 0; i < len; i++) {
		result[keys[i]] = values[i];
	}
	return result;
}


