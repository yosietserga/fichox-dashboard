'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, BookOpen, Megaphone } from 'lucide-react'
import { BusinessPlanView } from '@/components/business-plan-view'
import { BrandingManualView } from '@/components/branding-manual-view'
import { MarketingPlanView } from '@/components/marketing-plan-view'

export default function Home() {
  const [tab, setTab] = useState<'plan' | 'brand' | 'mkt'>('mkt')

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top tab switcher */}
      <div className="sticky top-0 z-[60] border-b border-blue-100/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-12 sm:h-13 flex items-center justify-center gap-1 flex-wrap">
          <button
            onClick={() => setTab('plan')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              tab === 'plan'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-blue-50'
            }`}
          >
            <Briefcase className="size-3.5" />
            Plan de Negocio
          </button>
          <button
            onClick={() => setTab('brand')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              tab === 'brand'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-blue-50'
            }`}
          >
            <BookOpen className="size-3.5" />
            Manual de Branding
          </button>
          <button
            onClick={() => setTab('mkt')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              tab === 'mkt'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-blue-50'
            }`}
          >
            <Megaphone className="size-3.5" />
            Plan de Marketing
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          {tab === 'plan' ? <BusinessPlanView /> : tab === 'brand' ? <BrandingManualView /> : <MarketingPlanView />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
