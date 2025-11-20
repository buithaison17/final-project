import { Footer } from "../components/Footer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { WishCard } from "../components/WishCard";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "antd";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";
import { ModalViewDetail } from "../components/ModalViewDetail";

export interface Message {
  id: number;
  username: string;
  classRoom: string;
  message: string;
  createAt: string;
}

export const ViewWishes = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  // Input tìm kiếm
  const [input, setInput] = useState("");
  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  // Lấy dữ liệu
  const [messages, setMessages] = useState<Message[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const from = (currentPage - 1) * 6;
      const to = from + 5;
      const { data, count } = await supabase
        .from("messages")
        .select("*", { count: "exact" })
        .order("createAt", { ascending: false })
        .ilike("username", `%${input}%`)
        .range(from, to);
      setMessages(data || []);
      setTotal(count || 0);
    };
    fetchData();
  }, [currentPage, input]);
  const navigate = useNavigate();
  // Lấy tổng lời chúc
  const [totalWish, setTotalWish] = useState(0);
  useEffect(() => {
    const getTotalWish = async () => {
      const { count } = await supabase
        .from("messages")
        .select("*", { count: "exact" });
      setTotalWish(count || 0);
    };
    getTotalWish();
  }, []);
  // Xem chi tiết lời chúc
  const [visibleMessage, setVisibleMessage] = useState<Message | null>(null);
  const onVisible = (message: Message) => setVisibleMessage(message);
  const closeVisible = () => setVisibleMessage(null);
  return (
    <div className="h-screen flex flex-col justify-between">
      <div
        className="py-3 px-12 flex flex-col gap-1 cursor-pointer"
        onClick={() => navigate("/final-project")}
      >
        <div className="text-[#F9733B] text-2xl font-medium">
          Lời chúc 20/11
        </div>
        <div>Ngày Nhà giáo Việt Nam</div>
      </div>
      <div className="h-[350px] p-6 bg-gradient-to-r from-[#FC9E4C] to-[#FACF2B] flex flex-col justify-center items-center gap-3 text-white">
        <FavoriteIcon
          data-aos="fade-down"
          fontSize="large"
          className="text-white"
        ></FavoriteIcon>
        <div
          data-aos="fade-right"
          className="text-3xl font-bold font-merriweather"
        >
          Chào mừng 20/11
        </div>
        <div data-aos="fade-left">Ngày Nhà giáo Việt Nam</div>
        <div data-aos="fade-up" className="text-center">
          Gửi lời tri ân sâu sắc đến các thảy cô giáo - những người thắp sáng
          ngọn đuốc tri thức
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-6">
        <div>Tổng số lời chúc: {totalWish}</div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setCurrentPage(1);
            setInput(e.target.value);
          }}
          placeholder="Nhập tên người muốn tìm"
          className="border outline-none px-3 py-1 rounded hover:border-blue-500 focus:border-blue-500 w-[350px] max-sm:w-[200px]"
        />
      </div>
      <div className="px-12 py-3 grid grid-cols-3 gap-12 max-sm:grid-cols-1">
        {messages.map((msg) => (
          <WishCard
            key={msg.id}
            data={msg}
            onView={() => onVisible(msg)}
          ></WishCard>
        ))}
      </div>
      <div className="flex justify-center p-3">
        <Pagination
          defaultCurrent={1}
          total={total}
          pageSize={6}
          showQuickJumper
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer></Footer>
      {visibleMessage && (
        <ModalViewDetail
          data={visibleMessage}
          onClose={closeVisible}
        ></ModalViewDetail>
      )}
    </div>
  );
};
