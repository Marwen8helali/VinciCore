import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-gray-200 dark:bg-gray-700 rounded-xl ${className}`}
    >
      <div className="p-6 space-y-4">
        <div className="h-12 w-12 bg-gray-300 dark:bg-gray-600 rounded-lg" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
      </div>
    </motion.div>
  );
};

export default SkeletonCard;