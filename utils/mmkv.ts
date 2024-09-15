import { MMKVLoader } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().withInstanceID("news_app").initialize();

export default MMKV;
