import CloseIcon from "@mui/icons-material/Close";
import type { Message } from "../pages/ViewWishes";
import { timeAgo } from "../utils/timeAgo";

interface Props {
  data: Message | null;
  onClose: () => void;
}

export const ModalViewDetail = ({ data, onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black/15"></div>
      <div className="bg-red-100 h-fit w-[600px] p-4 mt-12 z-10 rounded-md max-sm:w-[400px]">
        <div className="flex flex-1 justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-2xl">{data?.username}</div>
            <div className="flex items-center gap-2">
              <div>Lớp: {data?.classRoom}</div>
              <div>&bull;</div>
              <div>{timeAgo(data!.createAt)}</div>
            </div>
          </div>
          <div onClick={onClose}>
            <CloseIcon fontSize="small" className="cursor-pointer"></CloseIcon>
          </div>
        </div>
        <div className="w-full bg-white rounded p-3 mt-3 max-h-[450px] overflow-y-auto">
          {data?.message}
        </div>
      </div>
    </div>
  );
};
