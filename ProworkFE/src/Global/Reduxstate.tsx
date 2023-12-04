import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null,
    project: [] || Array<{}> || {}
}

const Reduxstate = createSlice({
    name: "Reduxstate",
    initialState,
    reducers: {
        Adduser: (state, { payload }) => {
            state.user = payload
        }

    }
});

export const { Adduser } = Reduxstate.actions

export default Reduxstate.reducer