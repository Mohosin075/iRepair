import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import mackbook from "@/assets/images/macbook-exposed.png";
import { motion } from "motion/react";
function HeroSection() {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.5 },
    },
  };

  const laptop = {
    initial: {
      y: 0,
      rotate: 0,
      scale: 4,
    },
    animate: {
      y: 20,
      rotate: -30,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 h-screen place-content-center pt-16">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="mt-10 mb-5 max-w-[50ch]"
            variants={introChildren}
          >
            Welcome to <span className="font-semibold">iRepair</span> dolor, sit
            amet consectetur adipisicing{" "}
            <span className="font-semibold">Mackbook repair</span> elit. Cum,
            illo?
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="w-[75%] mt-10 object-contain" src={mackbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
}

export default HeroSection;
