'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, BookOpen, Megaphone, Cog, Zap, Landmark } from 'lucide-react'
import { BusinessPlanView } from '@/components/business-plan-view'
import { BrandingManualView } from '@/components/branding-manual-view'
import { MarketingPlanView } from '@/components/marketing-plan-view'
import { OperationalPlanView } from '@/components/operational-plan-view'
import { AutomationPlanView } from '@/components/automation-plan-view'
import { FinancePlanView } from '@/components/finance-plan-view'

export default function Home() {
  const [tab, setTab] = useState<'plan' | 'brand' | 'mkt' | 'ops' | 'auto' | 'fin'>('fin')

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
          <button
            onClick={() => setTab('ops')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              tab === 'ops'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-blue-50'
            }`}
          >
            <Cog className="size-3.5" />
            Plan Operativo
          </button>
          <button
            onClick={() => setTab('auto')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              tab === 'auto'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-blue-50'
            }`}
          >
            <Zap className="size-3.5" />
            Plan de Automatización
          </button>
          <button
            onClick={() => setTab('fin')}
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              tab === 'fin'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-blue-50'
            }`}
          >
            <Landmark className="size-3.5" />
            Plan Financiero & Alianzas
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
          {tab === 'plan' ? <BusinessPlanView /> : tab === 'brand' ? <BrandingManualView /> : tab === 'mkt' ? <MarketingPlanView /> : tab === 'ops' ? <OperationalPlanView /> : tab === 'auto' ? <AutomationPlanView /> : <FinancePlanView />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
