import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async ({ thunkAPI, ...userData }) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      await updateProfile(auth.currentUser, {
        displayName: userData.name,
      });

      const { uid, displayName, email, accessToken } = auth.currentUser;
      return { uid, displayName, email, accessToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ thunkAPI, ...userData }) => {
    try {
      const respons = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const { uid, displayName, email } = respons.user;
      return { uid, displayName, email };
    } catch (error) {
      toast.error(
        "Sorry, we couldn't find your account! Check your email or password"
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getCurrentUser = createAsyncThunk(
//   "auth/current",
//   async (_, { rejectWithValue, getState }) => {
//     const { token } = getState().auth;

//     if (!token) {
//       return rejectWithValue("Unable to fetch user");
//     }

//     try {
//       setAuthHeader(token);
//       const { data } = await axios.get(`/api/auth/current`, token);
//       return data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         clearAuthHeader();
//         window.localStorage.clear();
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
