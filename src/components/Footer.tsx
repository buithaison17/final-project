import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div
      data-aos="zoom-in"
      className="py-6 flex flex-col justify-center items-center gap-3"
    >
      <div className="font-merriweather text-center text-xl font-semibold text-[#8B5E3C]">
        Tôn vinh những đóng góp to lớn của các nhà giáo trong sự nghiệp trồng
        người
      </div>
      <div className="font-roboto">
        Được tạo với{" "}
        <span>
          <FavoriteIcon
            className="text-red-500"
            fontSize="small"
          ></FavoriteIcon>
        </span>{" "}
        cho ngày Nhà giáo việt Nam
      </div>
      <div className="flex gap-3 items-center">
        <div onClick={() => window.open("https://facebook.com/thaison.17")}>
          <FacebookOutlinedIcon className="hover:cursor-pointer"></FacebookOutlinedIcon>
        </div>
        <div
          onClick={() => window.open("https://www.instagram.com/thaison.17")}
        >
          <InstagramIcon className="hover:cursor-pointer"></InstagramIcon>
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center flex max-sm:flex-col">
        &copy; 2025 Người gieo chữ giữa mây ngàn.&ensp;
        <span>Designed by Son Bui</span>.
      </div>
    </div>
  );
};
