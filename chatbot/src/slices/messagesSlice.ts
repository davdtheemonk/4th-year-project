import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";


type Messages = Array<{
    sender: string;
    message: string;
}>;


const messages: Messages = [
    { sender: "User1", message: "Hello there!" },
    { sender: "User2", message: "Hi, how are you?" },
];
type MessagesApiState = {
    messages?: Messages | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
  };
  
const initialState: MessagesApiState = {
    messages:messages,
    status: "idle",
    error: null,
  };

type Data = {
    url: string;

}
  export const getMessages = createAsyncThunk("messages", async (data:Data) => {
    const response = await axiosInstance.get(
      "/messages",
      data
    );
    const resData = response.data;
  

    return resData;
  });
  export const sendMessage = createAsyncThunk("getMessages", async () => {
    const response = await axiosInstance.get(
      "/send",
      
    );
    const resData = response.data;
  

    return resData;
  });
  
 
  
  const messagesSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Login failed";
      })
        .addCase(getMessages.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(
          getMessages.fulfilled,
          (state, action: PayloadAction<Messages>) => {
            state.status = "idle";
            state.messages = action.payload;
          }
        )
    }
})

export default messagesSlice.reducer;
  