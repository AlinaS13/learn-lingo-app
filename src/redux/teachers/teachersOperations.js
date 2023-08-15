import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, child, get } from "firebase/database";
import { database } from "../../firebase/config";
import { toast } from "react-toastify";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, thunkAPI) => {
    const dbRef = ref(database);
    // get(child(dbRef, "teachers/"))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       toast.error("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error("Something went wrong");
    //     return thunkAPI.rejectWithValue(error.message);
    //   });
    try {
      const snapshot = await get(child(dbRef, "/"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data["teachers"];
      }
    } catch (error) {
      toast.error("Something went wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
