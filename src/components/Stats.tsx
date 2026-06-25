import { motion } from 'framer-motion';

export function Stats() {
  const containerVariants = {
    hidden: {},
    show: {}
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="border-y border-line-soft bg-bg">
      <div className="max-w-[1040px] mx-auto px-[22px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 text-center py-[52px] gap-y-8"
        >
          <motion.div variants={itemVariants} className="md:border-r border-line-soft px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">92%</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Model accuracy</div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:border-r border-line-soft px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">200+</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Students mentored</div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:border-r border-line-soft px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">10+</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Projects shipped</div>
          </motion.div>
          <motion.div variants={itemVariants} className="px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">40%</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Performance boost</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
