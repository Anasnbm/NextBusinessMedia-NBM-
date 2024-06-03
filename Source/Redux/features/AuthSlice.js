import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APILogin, LoginApiUrl } from '../../Src/Api/Authentication';
import axios from 'axios';

const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null, // Nouvelle propriété pour stocker l'erreur
};

// login
export const login = createAsyncThunk('login', async (params, thunkApi) => {
  console.log('🚀 ~ file: AuthSlice.js:12 ~ login ~ params:', params);
  try {
    const response = await axios.post(LoginApiUrl, params);
    console.log('🚀 ~ file: AuthSlice.js:16 ~ login ~ response:', response);
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: AuthSlice.js:16 ~ login ~ error:', error);
    return thunkApi.rejectWithValue(error.response.data); // Renvoyer les données d'erreur
  }
});

// signup

// confirmSignup

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login cases
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
      state.error = null; // Réinitialiser l'erreur
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload; // Stocker l'erreur dans l'état
    });
  },
});

export default AuthSlice.reducer;
