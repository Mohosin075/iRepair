import useScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "motion/react";

function ChipsetReplacement() {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="h-56 bg-red-500 col-span-6 lg:col-span-5 rounded-lg"
    ></motion.div>
  );
}

export default ChipsetReplacement;
