import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  isStory: boolean;
}

const initialState: StateType = {
  isStory: JSON.parse(sessionStorage.getItem("isStory") || "true"),
};

const storyModalSlice = createSlice({
  name: "storyModal",
  initialState,
  reducers: {
    closeStoryModal: (state) => {
      state.isStory = false;
      sessionStorage.setItem("isStory", "false");
    },
  },
});

export const { closeStoryModal } = storyModalSlice.actions;
export default storyModalSlice.reducer;
