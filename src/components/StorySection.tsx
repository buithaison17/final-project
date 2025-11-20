import "aos/dist/aos.css";
import Story1 from "../assets/images/story1.png";
import Story2 from "../assets/images/story2.png";
import Story3 from "../assets/images/story41.png";
import Story4 from "../assets/images/story31.png";
import Story5 from "../assets/images/story5.png";

export const StorySection = () => {
  return (
    <div
      id="story"
      className="scroll-mt-10 w-full max-w-full overflow-hidden flex flex-col gap-14 p-12 items-center bg-[#FEFAF4]"
    >
      <div
        data-aos="zoom-in"
        className="text-3xl font-semibold text-[#8B5E3C] font-merriweather text max-sm:text-xl"
      >
        Hành Trình Gieo Chữ
      </div>
      {/* Story 1 */}
      <div
        data-aos="fade-right"
        className="flex w-full justify-evenly items-center font-roboto max-sm:flex-col max-sm:gap-3 lg:w-[1200px]"
      >
        <div className="flex flex-col gap-5 w-[500px] max-sm:w-[300px]">
          <div className="text-sm px-3 py-1 rounded-xl text-[#8B5E3C] bg-[#F3EFEA] w-fit">
            Khởi đầu
          </div>
          <div className="font-merriweather text-3xl text-[#8B5E3C] font-semibold max-sm:text-xl">
            Lời Hứa Với Chính Mình
          </div>
          <div className="text-lg text-[#374151]">
            Thẩy Minh, một giáo viên trẻ từ thành phố, quyết định rời bỏ cuộc
            sống thoải mái để đến với vùng cao. Trong chiếc ba lô cũ kỹ, thầy
            mang theo những cuốn sách, bút viết và một trái tim đầy nhiệt huyết.
          </div>
          <div className="italic text-[#4B5563]">
            "Tôi muốn mang ánh sáng tri thức đến những nơi xa xôi nhất, nơi mà
            mỗi chữ cái là một món quà quý giá."
          </div>
        </div>
        <img
          src={Story1}
          alt=""
          className="w-[450px] h-[300px] object-cover object-center rounded-xl shadow max-sm:h-[200px]"
        />
      </div>
      {/* Story 2 */}
      <div
        data-aos="fade-left"
        className="flex w-full justify-around items-center font-roboto max-sm:flex-col max-sm:gap-3 lg:w-[1200px]"
      >
        <img
          src={Story2}
          alt=""
          className="max-sm:order-1 w-[450px] h-[300px] object-cover object-center rounded-xl shadow max-sm:h-[200px]"
        />
        <div className="flex flex-col gap-5 w-[500px] max-sm:w-[300px]">
          <div className="text-sm px-3 py-1 rounded-xl text-[#8B5E3C] bg-[#E3F0E0] w-fit">
            Con đường gian nan
          </div>
          <div className="font-merriweather text-3xl text-[#8B5E3C] font-semibold max-sm:text-xl">
            Vượt Núi, Băng Rừng
          </div>
          <div className="text-lg text-[#374151]">
            Hành trình dài 15 cây số qua những con đường đèo dốc, trơn trượt.
            Thầy phải vượt qua nhiều khó khăn: mưa rừng, sương mù dày đặc, và
            những đoạn đường hiểm trở. Nhưng trong lòng thầy, niềm tin không bao
            giờ phai nhạt.
          </div>
          <div className="italic text-[#4B5563]">
            "Mỗi bước chân là một lời hứa với những đứa trẻ đang chờ đợi."
          </div>
        </div>
      </div>
      {/* Story 3 */}
      <div
        data-aos="fade-right"
        className="flex w-full justify-around items-center font-roboto max-sm:flex-col max-sm:gap-3 lg:w-[1200px]"
      >
        <div className="flex flex-col gap-5 w-[500px] max-sm:w-[300px]">
          <div className="text-sm px-3 py-1 rounded-xl text-[#8B5E3C] bg-[#F8E1BA] w-fit">
            Lớp học đầu tiên
          </div>
          <div className="font-merriweather text-3xl text-[#8B5E3C] font-semibold max-sm:text-xl">
            Gặp gỡ những học trò nhỏ
          </div>
          <div className="text-lg text-[#374151]">
            Lớp học đơn sơ với những bàn ghế gỗ cũ kỹ, mái tôn rỉ sét. Nhưng ánh
            mắt của các em học trò lại sáng ngời như những vì sao. Họ hảo hức,
            tò mò với từng trang sách, từng nét chữ mà thầy viết lên bảng đen.
          </div>
          <div className="italic text-[#4B5563]">
            "Thầy ơi, chữ 'yêu' viết thế nào ạ?"
          </div>
        </div>
        <img
          src={Story3}
          alt=""
          className="w-[450px] h-[300px] object-cover object-center rounded-xl shadow max-sm:h-[200px]"
        />
      </div>
      {/* Story 4 */}
      <div
        data-aos="fade-left"
        className="flex w-full justify-around items-center font-roboto max-sm:flex-col max-sm:gap-3 lg:w-[1200px]"
      >
        <img
          src={Story4}
          alt=""
          className="w-[450px] h-[300px] object-cover object-center rounded-xl shadow max-sm:h-[200px] max-sm:order-2"
        />
        <div className="flex flex-col gap-5 w-[500px] max-sm:w-[300px]">
          <div className="text-sm px-3 py-1 rounded-xl text-[#8B5E3C] bg-[#E3F0E0] w-fit">
            Khoảnh khắc đáng nhớ
          </div>
          <div className="font-merriweather text-3xl text-[#8B5E3C] font-semibold max-sm:text-xl">
            Những Chữ Cái Đầu Tiên
          </div>
          <div className="text-lg text-[#374151]">
            Ngày đầu tiên các em đọc được từng chữ cái, từng âm tiết. Tiềng cười
            rộn ràng vang khắp lớp học khi em Sủn đọc được câu đầu tiên: "Con
            yêu ba, con yêu mẹ." Nước mắt thầy rơi, không phải vì buồn, mà vì
            hạnh phúc.
          </div>
          <div className="italic text-[#4B5563]">
            "Đây chính là ý nghĩa của nghề giáo."
          </div>
        </div>
      </div>
      {/* Story 5 */}
      <div
        data-aos="fade-right"
        className="flex w-full justify-around gap-5 items-center font-roboto max-sm:flex-col max-sm:gap-3 lg:w-[1200px]"
      >
        <div className="flex flex-col gap-5 w-[500px] max-sm:w-[300px]">
          <div className="text-sm px-3 py-1 rounded-xl text-[#8B5E3C] bg-[#E3F0E0] w-fit">
            Thành quả
          </div>
          <div className="font-merriweather text-3xl text-[#8B5E3C] font-semibold max-sm:text-xl">
            Lớn Lên Với Biết Ơn
          </div>
          <div className="text-lg text-[#374151]">
            Nhiều năm sau, những đứa trẻ ngày nào giờ đã trưởng thành. Có em trở
            thành giáo viên, có em trờ thành bác sĩ, có em về tiếp tục xây dựng
            quê hương. Nhưng tất cả đều không quên người thầy đã mang con chữ
            đến với các em.
          </div>
          <div className="italic text-[#4B5563]">
            "Thầy không chi dạy chữ, thầy còn dạy chúng em cách yêu thương và
            chia sẻ."
          </div>
        </div>
        <img
          src={Story5}
          alt=""
          className="max-sm:order-1 w-[450px] h-[300px] object-cover object-center rounded-xl shadow max-sm:h-[200px]"
        />
      </div>

      {/* <div
        data-aos="fade-right"
        className="flex w-full justify-around items-center font-roboto"
      >
        <div className="flex flex-col gap-5 w-[500px]">
          <div className="text-sm px-3 py-1 rounded-xl text-[#8B5E3C] bg-[#F3EFEA] w-fit">
            Thành quả
          </div>
          <div className="font-merriweather text-3xl text-[#8B5E3C] font-semibold">
            Lớn Lên Với Biết Ơn
          </div>
          <div className="text-lg text-[#374151]">
            Nhiều năm sau, những đứa trẻ ngày nào giờ đã trưởng thành. Có em trở
            thành giáo viên, có em trờ thành bác sĩ, có em về tiếp tục xây dựng
            quê hương. Nhưng tất cả đều không quên người thầy đã mang con chữ
            đến với các em.
          </div>
          <div className="italic text-[#4B5563]">
            "Thầy không chi dạy chữ, thầy còn dạy chúng em cách yêu thương và
            chia sẻ."
          </div>
        </div>
        <img
          src={Story5}
          alt=""
          className="w-[450px] h-[300px] object-cover object-center rounded-xl shadow"
        />
      </div> */}
    </div>
  );
};
