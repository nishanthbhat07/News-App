import { useMMKVStorage } from "react-native-mmkv-storage";
import MMKV from "../utils/mmkv";

export const useStorage = <T = string>(
  key: string,
  defaultValue?: T,
): [T, (value: T | ((prevValue: T) => T)) => void] => {
  const [value, setValue] = useMMKVStorage<T>(key, MMKV, defaultValue);
  return [value, setValue];
};
