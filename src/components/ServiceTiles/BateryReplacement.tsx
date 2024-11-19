import useScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "motion/react";

function BateryReplacement() {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="h-56 bg-red-500 col-span-12 rounded-lg"
    ></motion.div>
  );
}

export default BateryReplacement;
