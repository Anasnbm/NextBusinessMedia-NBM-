import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import authSlice from './features/AuthSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer, persistStore} from 'redux-persist';
const  reducers=combineReducers({
  counter: counterSlice,
    auth: authSlice,
})
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist:['auth']
}
const persistedReducer = persistReducer(persistConfig, reducers);
 const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({serializableCheck: false}),
})
const persistor = persistStore(store);
export {store, persistor};