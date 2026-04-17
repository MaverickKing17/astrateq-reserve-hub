import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function AnnouncementBar() {
  const { t } = useTranslation();
  // Mock live scarcity
  const count = 247;

  return (
    <div className="bg-navy text-white py-2 text-center text-[11px] font-bold uppercase tracking-[0.05em]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {t('common.spotsRemaining', { count })}
      </motion.div>
    </div>
  );
}
