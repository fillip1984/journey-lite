"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer } from "~/styles/framerVariants";
import AreaCard from "./_components/AreaCard";

export type Area = {
  name: string;
};

export default function Home() {
  const [newArea, setNewArea] = useState("");
  const [areas, setAreas] = useState<Area[]>([
    { name: "Test1" },
    { name: "Test2" },
    { name: "Test3" },
    { name: "Test4" },
    { name: "Test5" },
    { name: "Test6" },
    { name: "Test7" },
    { name: "Test8" },
    { name: "Test9" },
    { name: "Test10" },
  ]);

  const handleAddArea = () => {
    const area: Area = { name: newArea };
    setAreas([...areas, area]);
    setNewArea("");
  };

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background p-4 text-white">
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
          className="rounded-r bg-success px-4 py-2 text-2xl">
          Add Area
        </button>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-1 snap-x snap-mandatory gap-2 overflow-auto p-4">
        {areas.map((area) => (
          <AreaCard key={area.name} area={area} />
        ))}
      </motion.div>
    </main>
  );
}
