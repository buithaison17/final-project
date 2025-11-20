import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useNavigate } from "react-router-dom";

interface Props {
  scrollIntoSection: (idElement: string) => void;
}

export const Header = ({ scrollIntoSection }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      id="header"
      className="sticky left-0 top-0 z-30 flex items-center justify-between px-8 p-5 bg-[#FBFAF9] cursor-pointer"
    >
      <div
        onClick={() => scrollIntoSection("header")}
        className="flex items-center gap-3"
      >
        <AutoStoriesIcon
          className="text-[#8B5E3C]"
          fontSize="large"
        ></AutoStoriesIcon>
        <div className="text-2xl text-center font-semibold text-[#8B5E3C]">
          Thầy Giáo Vùng Cao
        </div>
      </div>
      <div className="flex items-center gap-6 max-sm:hidden">
        <div
          onClick={() => scrollIntoSection("story")}
          className="cursor-pointer hover:underline"
        >
          Câu chuyện
        </div>
        <div
          onClick={() => scrollIntoSection("student")}
          className="cursor-pointer hover:underline"
        >
          Học trò
        </div>
        <div
          onClick={() => scrollIntoSection("wishes")}
          className="cursor-pointer hover:underline"
        >
          Lời chúc
        </div>
        <div
          onClick={() => navigate("/final-project/xem-loi-chuc")}
          className="cursor-pointer hover:underline"
        >
          Xem lời chúc
        </div>
      </div>
    </div>
  );
};
