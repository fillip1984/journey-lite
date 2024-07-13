import { motion } from "framer-motion";
import { staggeredItem } from "~/styles/framerVariants";
import { type Area } from "../page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";

export default function AreaCard({ area }: { area: Area }) {
  return (
    // <motion.div
    //   variants={staggeredItem}
    //   className="min-h-full min-w-[80%] snap-center rounded-xl border border-white/30 lg:min-w-[45%]">
    //   <div className="flex items-center justify-between p-1 text-2xl">
    //     {area.name}
    //     <Button>
    //       <PiDotsThreeCircleVertical className="h-10 w-10" />
    //     </Button>
    //   </div>
    //   <div className="my-2 flex flex-col gap-1 p-2">
    //     {area.tasks?.map((task) => (
    //       <span key={task.name}>
    //         <input type="checkbox" className="rounded" /> {task.name}
    //       </span>
    //     ))}
    //   </div>

    <motion.div
      variants={staggeredItem}
      className="min-h-full min-w-[80%] snap-center rounded-xl xl:min-w-[33%]">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{area.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1">
            {area.tasks?.map((task) => (
              <span key={task.name} className="flex items-center gap-2">
                <Checkbox id={task.name} />{" "}
                <label htmlFor={task.name}>{task.name}</label>
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
