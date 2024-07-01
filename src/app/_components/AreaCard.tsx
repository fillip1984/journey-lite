import { motion } from "framer-motion";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { type Area } from "../page";
import { staggeredItem } from "~/styles/framerVariants";

export default function AreaCard({ area }: { area: Area }) {
  return (
    <motion.div
      variants={staggeredItem}
      className="min-h-full min-w-[80%] snap-center rounded-xl border border-white/30 lg:min-w-[45%]">
      <div className="flex items-center justify-between p-1 text-2xl">
        {area.name}
        <button
          type="button"
          className="text-white/30 transition duration-200 ease-in-out hover:text-white">
          <PiDotsThreeCircleVertical className="h-10 w-10" />
        </button>
      </div>
      <div className="my-2 flex flex-col gap-1 p-2">
        {area.tasks?.map((task) => (
          <span key={task.name}>
            <input type="checkbox" className="rounded" /> {task.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
