'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { RxRocket } from 'react-icons/rx';

export default function RocketIcon() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -12 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
    >
      <RxRocket className="w-10 h-10 sm:w-14 sm:h-14 text-[#FF5310] stroke-[0.3px] " />
    </motion.div>
  );
}
