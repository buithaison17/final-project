import type { Message } from "../pages/ViewWishes";
import { timeAgo } from "../utils/timeAgo";

interface Props {
  data: Message;
  onView: () => void;
}

export const WishCard = ({ data, onView }: Props) => {
  return (
    <div
      onClick={onView}
      className="flex flex-col gap-2 border p-2 rounded-md shadow border-l-[3px] border-l-orange-500 hover:cursor-pointer hover:scale-110 transition-all duration-200"
    >
      <div className="text-xl font-bold">{data.username}</div>
      <div>Lớp: {data.classRoom}</div>
      <div className="line-clamp-3 break-all">{data.message}</div>
      <div className="flex justify-end text-gray-500">
        {timeAgo(data.createAt)}
      </div>
    </div>
  );
};
