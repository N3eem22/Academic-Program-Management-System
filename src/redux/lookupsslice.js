import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// export let getsummerFees = createAsyncThunk( async()=>{
//     let{data} = await     axios.get('https://localhost:7095/api/TypeOfSummerFees?UniversityId=')
//     .then(res => setSummerFees(res.data))
//     .catch(err => console.log(err));
// })
export const getsummerFees = createAsyncThunk(
    "lookupsslice/getsummerFees",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          "https://localhost:7095/api/TypeOfSummerFees?UniversityId="
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

let initialState = {summerfees:[], loading:false};
let TypeOfSummerFeesslice = createSlice({
    name:'summerfees',
    initialState: initialState,
    extraReducers:(builder)=>{
        builder.addCase(getsummerFees.fulfilled , (state , action)=>{
               state.summerfees = action.payload;
        })
        // builder.addCase(getlookups.pending)
        // builder.addCase(getlookups.rejected)

    }
});
let summerfeesReducer = TypeOfSummerFeesslice.reducer;
export default summerfeesReducer;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getsummerFees = createAsyncThunk(
//   "summerfees/getsummerFees",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "https://localhost:7095/api/TypeOfSummerFees?UniversityId="
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// let initialState = { summerfees: [], loading: false };
// let TypeOfSummerFeesslice = createSlice({
//   name: 'summerfees',
//   initialState: initialState,
//   extraReducers: (builder) => {
//     builder.addCase(getsummerFees.fulfilled, (state, action) => {
//       state.summerfees = action.payload;
//     });
//   }
// });

// let summerfeesReducer = TypeOfSummerFeesslice.reducer;
// export default summerfeesReducer;