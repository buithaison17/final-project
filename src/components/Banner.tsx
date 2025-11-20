import MainBanner from "../assets/images/mainbanner1.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  scroll: (idElement: string) => void;
}

export const Banner = ({ scroll }: Props) => {
  return (
    <div
      data-aos="fade-down"
      style={{ backgroundImage: `url(${MainBanner})` }}
      className="w-full max-w-full overflow-hidden relative h-[550px] bg-cover bg-top flex flex-col gap-5 justify-center items-center"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div
        data-aos="fade-down"
        className="text-center leading-snug font-bold z-10 text-white text-4xl font-merriweather shadow"
      >
        Người gieo chữ giữa mây ngàn
      </div>
      <div
        data-aos="fade-left"
        className="z-10 font-roboto text-xl text-center text-[#F2C57C]"
      >
        Một hành trình mang con chữ đến vùng cao
      </div>
      <button
        onClick={() => scroll("story")}
        data-aos="fade-up"
        className="px-5 py-2 bg-[#8B5E3C] hover:bg-[#7c5436] hover:duration-200 font-roboto rounded-3xl text-white shadow z-10"
      >
        Khám phá câu chuyện
      </button>
      <div onClick={() => scroll("story")}>
        <KeyboardArrowDownIcon
          className="z-20 absolute text-white bottom-6 bounce-up-down cursor-pointer"
          fontSize="large"
        ></KeyboardArrowDownIcon>
      </div>
    </div>
  );
};
