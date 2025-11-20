import { supabase } from "./supabase";

export const addWish = async (
  username: string,
  classRoom: string,
  message: string
) => {
  if (!username.trim() || !classRoom.trim() || !message.trim()) return;
  await supabase.from("messages").insert({
    username: username.trim(),
    classRoom: classRoom.trim(),
    message: message.trim(),
    createAt: new Date(),
  });
};
