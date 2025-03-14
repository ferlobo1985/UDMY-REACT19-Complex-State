import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(obj,thunkAPI)=>{
        // thunkAPI.dispatch(testAsyncDispatch())
        // console.log(thunkAPI.getState())
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            return res.data;
        } catch(err){
            return err;
        }
       
    }
)


export const usersSlice =  createSlice({
    name:'users',
    initialState:{
        type:'Guest',
        users:[],
        loading: false
    },
    reducers:{
        setType:(state,action)=>{
            state.type = action.payload || 'Guest'
        },
        testAsyncDispatch:(state)=>{
            state.test = true
        }
    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchUsers.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected,(state)=>{
            console.log('REJECTED')
            state.loading = false;
        })
    }
});

export const { setType, testAsyncDispatch } = usersSlice.actions
export default usersSlice.reducer;