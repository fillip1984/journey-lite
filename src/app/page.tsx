"use client";

import { motion } from "framer-motion";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useState } from "react";

type Area = {
  name: string;
};

export default function Home() {
  const [newArea, setNewArea] = useState("");
  const [areas, setAreas] = useState<Area[]>([
    { name: "Test1" },
    { name: "Test2" },
    { name: "Test3" },
    { name: "Test4" },
  ]);

  const handleAddArea = () => {
    const area: Area = { name: newArea };
    setAreas([...areas, area]);
    setNewArea("");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <main className="bg-background flex min-h-screen flex-col overflow-hidden p-4 text-white">
      <div className="flex w-full justify-center">
        <h2>Journey lite</h2>
      </div>
      <div className="my-2 flex">
        <input
          type="search"
          value={newArea}
          onChange={(e) => setNewArea(e.target.value)}
          className="w-1/4 rounded-r-none p-2 text-black"
        />
        <button
          type="button"
          onClick={handleAddArea}
          className="bg-success rounded-r px-4 py-2 text-2xl"
        >
          Add Area
        </button>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-1 gap-2 overflow-auto p-4"
      >
        {areas.map((area) => (
          <motion.div
            key={area.name}
            variants={item}
            className="min-h-full min-w-[300px] rounded-xl border border-white"
          >
            <div className="flex items-center justify-between p-1 text-2xl">
              {area.name}
              <PiDotsThreeCircleVertical className="h-10 w-10" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
