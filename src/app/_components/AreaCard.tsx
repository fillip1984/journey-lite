import { motion } from "framer-motion";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { type Area } from "../page";
import { staggeredItem } from "~/styles/framerVariants";
import { Button } from "./ui/button";

export default function AreaCard({ area }: { area: Area }) {
  return (
    <motion.div
      variants={staggeredItem}
      className="min-h-full min-w-[80%] snap-center rounded-xl border border-white/30 lg:min-w-[45%]">
      <div className="flex items-center justify-between p-1 text-2xl">
        {area.name}
        <Button>
          <PiDotsThreeCircleVertical className="h-10 w-10" />
        </Button>
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
