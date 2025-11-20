import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { StorySection } from "../components/StorySection";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TestimonialSection } from "../components/TestimonialSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CallToActionSection } from "../components/CallToActionSection";
import { Footer } from "../components/Footer";
import { StoryModal } from "../components/StoryModal";
import { Bounce, ToastContainer } from "react-toastify";
import AudioNguoiGieoMamXanh from "../assets/audios/nguoigieomamxanh.mp3";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { closeStoryModal } from "../store/storyReducer";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  const playAudio = (): void => {
    const audio = new Audio(AudioNguoiGieoMamXanh);
    audio.play();
    audio.loop = true;
  };
  // Cuộn trang đến phần tử
  const scrollIntoSection = (idElement: string): void => {
    if (idElement === "header") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(idElement);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Story Modal
  const { isStory } = useSelector((state: RootState) => state.storyReducer);
  const dispatch = useDispatch<AppDispatch>();
  const closeStory = () => {
    playAudio();
    dispatch(closeStoryModal());
  };
  return (
    <div className="relative w-full">
      {isStory && <StoryModal onStart={closeStory}></StoryModal>}
      {!isStory && (
        <>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />

          <Header scrollIntoSection={scrollIntoSection}></Header>
          <Banner scroll={scrollIntoSection}></Banner>
          <StorySection></StorySection>
          <TestimonialSection></TestimonialSection>
          <CallToActionSection></CallToActionSection>
          <Footer></Footer>
          <div
            onClick={() => scrollIntoSection("header")}
            className="fixed bottom-10 right-10 max-sm:bottom-5 max-sm:right-5 w-12 h-12 bg-gray-400/40 hover:bg-gray-400/80 rounded-full flex justify-center items-center cursor-pointer 
             transition-all duration-300 transform hover:scale-110 hover:opacity-100 shadow-lg"
          >
            <ArrowUpwardIcon className="text-white"></ArrowUpwardIcon>
          </div>
        </>
      )}
    </div>
  );
};
