import useScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "motion/react";

function DataRecovery() {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="h-56 bg-light-gray col-span-6 lg:col-span-7 rounded-lg"
    ></motion.div>
  );
}

export default DataRecovery;
