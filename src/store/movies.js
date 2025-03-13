import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        list:[
            {id:1,title:'Pulp Fiction'},
            {id:2,title:'Rambo'}
        ]
    },
    reducers:{}
});

export default moviesSlice.reducer;