import { motion } from "framer-motion";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { type Area } from "../page";
import { staggeredItem } from "~/styles/framerVariants";

export default function AreaCard({ area }: { area: Area }) {
  return (
    <motion.div
      variants={staggeredItem}
      className="min-h-full min-w-full snap-start rounded-xl border border-white md:min-w-[45%]">
      <div className="flex items-center justify-between p-1 text-2xl">
        {area.name}
        <button type="button">
          <PiDotsThreeCircleVertical className="h-10 w-10" />
        </button>
      </div>
    </motion.div>
  );
}
