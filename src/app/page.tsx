"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { staggerContainer } from "~/styles/framerVariants";
import AreaCard from "./_components/AreaCard";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";

export type Area = {
  name: string;
  tasks?: Task[];
};

export type Task = {
  name: string;
};

export default function Home() {
  const [areas, setAreas] = useState<Area[]>([
    {
      name: "Self improvement",
      tasks: [
        {
          name: "Come up with a morning routine",
        },
        {
          name: "Figure out if bullet journal routine is useful",
        },
        {
          name: "Start a yoga/stretching routine",
        },
        {
          name: "Start a running habit",
        },
      ],
    },
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

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background p-4 text-white">
      <AddAreaView setAreas={setAreas} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-1 snap-x snap-mandatory gap-2 overflow-auto py-4">
        {areas.map((area) => (
          <AreaCard key={area.name} area={area} />
        ))}
      </motion.div>
    </main>
  );
}

const AddAreaView = ({
  setAreas,
}: {
  setAreas: Dispatch<SetStateAction<Area[]>>;
}) => {
  const [newArea, setNewArea] = useState("");

  const handleAddArea = () => {
    const area: Area = { name: newArea };
    setAreas((prev) => [...prev, area]);
    setNewArea("");
  };
  return (
    <>
      <div className="flex w-full justify-center">
        <h2>Journey lite</h2>
      </div>
      <div className="my-2 flex items-center gap-2">
        <Input
          type="search"
          value={newArea}
          onChange={(e) => setNewArea(e.target.value)}
        />
        <Button onClick={handleAddArea} size={"lg"} className="">
          Add Area
        </Button>
      </div>
    </>
  );
};
