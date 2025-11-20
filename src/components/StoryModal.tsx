import Banner from "../assets/images/storymodal2.png";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import { ReactTyped } from "react-typed";

interface Props {
  onStart: () => void;
}

export const StoryModal = ({ onStart }: Props) => {
  const [titleDone, setTitleDone] = useState(false);
  const [isDone, setIsDone] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${Banner})` }}
      className="fixed inset-0 top-0 left-0 z-50 bg-cover bg-bottom flex justify-center items-center"
    >
      <div className="fixed inset-0 bg-black/60"></div>
      <div
        data-aos="zoom-in"
        className="w-[550px] max-sm:w-[350px] bg-[#141D30] rounded-xl z-[60] p-6 flex flex-col gap-6 justify-center items-center shadow-md"
      >
        {!titleDone && (
          <div className="text-3xl font-merriweather text-[#FDE158] text-center">
            <ReactTyped
              strings={["Người Gieo Chữ Giữa Mây Ngàn"]}
              onComplete={() => setTitleDone(true)}
              typeSpeed={100}
              startDelay={500}
            ></ReactTyped>
          </div>
        )}
        {titleDone && (
          <div className="text-3xl font-merriweather text-[#FDE158] text-center">
            Người gieo chữ giữa mây ngàn
          </div>
        )}
        {!isDone && (
          <div className="font-roboto text-white text-center leading-snug">
            {titleDone && (
              <ReactTyped
                strings={[
                  `Giữa mây ngàn và sương núi, một người thầy trẻ mang con chữ đến những
          bản làng xa xôi. Với bảng phấn cũ và những viền vở sờn, thầy gieo hy
          vọng và ánh sáng tri thức cho những đứa trẻ vùng cao. Hãy cùng bước vào
          hành trình gieo chữ nơi núi cao....`,
                ]}
                onComplete={() => setIsDone(true)}
                typeSpeed={60}
              ></ReactTyped>
            )}
          </div>
        )}
        {isDone && (
          <div className="font-roboto text-white text-center leading-snug">
            Giữa mây ngàn và sương núi, một người thầy trẻ mang con chữ đến
            những bản làng xa xôi. Với bảng phấn cũ và những viên vở sờn, thầy
            gieo hy vọng và ánh sáng tri thức cho những đứa trẻ vùng cao. Hãy
            cùng bước vào hành trình gieo chữ nơi núi cao....
          </div>
        )}
        {isDone && (
          <button
            onClick={onStart}
            data-aos="fade-right"
            className="px-6 py-2 text-white bg-gradient-to-r from-[#F59B0C] to-[#F97815] rounded-2xl flex items-center gap-3"
          >
            <div>Bắt đầu câu chuyện</div>
            <EastIcon className="text-white mt-1" fontSize="small"></EastIcon>
          </button>
        )}
      </div>
    </div>
  );
};
