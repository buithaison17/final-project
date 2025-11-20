import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { addWish } from "../utils/addWish";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const CallToActionSection = () => {
  const [input, setInput] = useState({
    username: "",
    classRoom: "",
    message: "",
  });
  const [error, setError] = useState({
    username: "",
    classRoom: "",
    message: "",
  });
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newError = {
      username: !input.username.trim() ? "username không được để trống" : "",
      classRoom: !input.classRoom.trim() ? "Lớp học không được để trống" : "",
      message: !input.message.trim() ? "Lời chúc không được để trống" : "",
    };
    setError(newError);
    if (newError.username || newError.classRoom || newError.message) return;
    await addWish(input.username, input.classRoom, input.message);
    setInput({ ...input, username: "", classRoom: "", message: "" });
    toast.success("Gửi lời chúc thành công");
  };
  const navigate = useNavigate();
  return (
    <div
      id="wishes"
      className="scroll-mt-10 w-full max-w-full overflow-hidden p-12 flex flex-col gap-6 justify-center items-center bg-[#8E6241]"
    >
      <div data-aos="zoom-in">
        <FavoriteIcon
          className="text-[#F2C57C]"
          fontSize="large"
        ></FavoriteIcon>
      </div>
      <div
        data-aos="fade-down"
        className="text-3xl font-semibold text-white font-merriweather text-center"
      >
        Hãy Gửi Lời Tri Ân Thầy Cô Của Bạn Ngay Hôm Nay
      </div>
      <div
        data-aos="fade-right"
        className="text-[#E9BC77] font-semibold w-[600px] text-center font-roboto max-sm:w-[350px]"
      >
        Ngày 20/11 - Một dịp để chúng ta bày tỏ lòng biết ơn sâu sắc đến những
        người thầy đã dành cả cuộc đời để gieo chữ
      </div>
      <form
        onSubmit={onAdd}
        data-aos="fade-left"
        className="w-[600px] p-3 rounded-md bg-[#c78b5d] flex flex-col gap-3 max-sm:w-[300px]"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-white">
            Tên của bạn
          </label>
          <input
            onClick={() => setError({ ...error, username: "" })}
            value={input.username}
            name="username"
            onChange={handleInput}
            type="text"
            placeholder="Nhập tên của bạn"
            className={`px-3 py-1 rounded outline-none border hover:border-blue-500 focus:border-blue-500 ${
              error.username ? "border-red-500" : ""
            }`}
          />
          {error.username && (
            <p className="text-red-500 font-semibold">{error.username}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="student" className="text-white">
            Lớp
          </label>
          <input
            onClick={() => setError({ ...error, classRoom: "" })}
            value={input.classRoom}
            name="classRoom"
            onChange={handleInput}
            id="student"
            type="text"
            placeholder="Nhập lớp của bạn"
            className={`px-3 py-1 rounded outline-none border hover:border-blue-500 focus:border-blue-500 ${
              error.classRoom ? "border-red-500" : ""
            }`}
          />
          {error.classRoom && (
            <p className="text-red-500 font-semibold">{error.classRoom}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-white">
            Lời chúc của bạn
          </label>
          <textarea
            onClick={() => setError({ ...error, message: "" })}
            value={input.message}
            name="message"
            onChange={handleInput}
            id="message"
            className={`px-3 py-1 min-h-[130px] rounded outline-none border hover:border-blue-500 focus:border-blue-500 ${
              error.message ? "border-red-500 font-semibold" : ""
            }`}
          />
          {error.message && (
            <p className="text-red-500 font-semibold">{error.message}</p>
          )}
        </div>
        <div className="flex items-center gap-3 justify-end">
          <button
            onClick={() => navigate("/final-project/xem-loi-chuc")}
            className="bg-yellow-400 text-gray-900 py-1  px-3 rounded hover:bg-yellow-500 transition"
          >
            Xem lời chúc
          </button>
          <button
            onClick={() =>
              setInput({ ...input, username: "", classRoom: "", message: "" })
            }
            type="reset"
            className="px-3 py-1 bg-gray-500 rounded text-white"
          >
            Xóa tất cả
          </button>
          <button className="px-3 py-1 bg-blue-500 rounded text-white">
            Gửi lời chúc
          </button>
        </div>
      </form>
    </div>
  );
};
