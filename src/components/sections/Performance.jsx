import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Wind, ArrowRight } from 'lucide-react';

const specs = [
  { label: 'ACCELERATION 0-100 KM/H', value: '2.4s', detail: 'Launch control active' },
  { label: 'MAXIMUM POWER OUTPUT', value: '1,020 HP', detail: 'Twin-Turbo V8 + Electric Motor' },
  { label: 'TOP SPEED', value: '345 KM/H', detail: 'Electronically limited' },
  { label: 'LATERAL ACCELERATION', value: '1.45 G', detail: 'Active ground effect aero' },
];

const featureBlocks = [
  {
    id: 'engineering',
    icon: Cpu,
    title: 'ENGINEERING',
    tagline: 'PRECISION DEVELOPED FOR PERFORMANCE.',
    desc: 'Every tolerance, weave pattern, and titanium fastener is calculated to minimize unsprung mass and optimize structural rigidity under extreme load.',
    stat: '1,320 KG',
    statLabel: 'DRY CURB WEIGHT',
  },
  {
    id: 'aerodynamics',
    icon: Wind,
    title: 'AERODYNAMICS',
    tagline: 'EVERY SURFACE SERVES A PURPOSE.',
    desc: 'Active rear wing diffuser system channels air to create 650kg of downforce at 280 km/h without sacrificing straight-line efficiency.',
    stat: '650 KG',
    statLabel: 'DOWNFORCE @ 280KM/H',
  },
  {
    id: 'power',
    icon: Zap,
    title: 'POWER',
    tagline: 'PERFORMANCE ENGINEERED WITHOUT COMPROMISE.',
    desc: 'Dual-clutch 8-speed transmission coupled with dual front electric torque vectoring motors for instantaneous throttle response.',
    stat: '9,200 RPM',
    statLabel: 'REDLINE POWERBAND',
  },
  {
    id: 'control',
    icon: Shield,
    title: 'CONTROL',
    tagline: 'DESIGNED AROUND DRIVER CONFIDENCE.',
    desc: 'Integrated dynamic chassis management recalculates damper rates and active vectoring 1,000 times per second for pinpoint corner entry.',
    stat: '31.5 M',
    statLabel: '100-0 KM/H STOPPING',
  },
];

export default function Performance() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="performance" className="py-24 px-6 md:px-12 bg-[#0A0A0A] relative z-20 text-[#F2F2F0]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5C400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono-tech text-xs tracking-widest text-[#F5C400] uppercase">
              PERFORMANCE TELEMETRY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mt-2">
              ENGINEERED FOR EXTREMES
            </h2>
          </div>
          <p className="text-[#9A9A96] text-sm md:text-base font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            The benchmark in high-downforce mechanical engineering. Combining electric instantaneous torque with race-proven combustion telemetry.
          </p>
        </div>

        {/* Telemetry Key Specs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111214] p-6 rounded-xl border border-white/5 hover:border-[#F5C400]/40 transition-all group"
            >
              <div className="font-mono-tech text-[10px] text-[#5E6264] tracking-widest uppercase mb-2">
                {spec.label}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#F2F2F0] group-hover:text-[#F5C400] transition-colors font-mono-tech">
                {spec.value}
              </div>
              <div className="text-xs text-[#9A9A96] mt-2 font-mono-tech">
                {spec.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Tab Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {featureBlocks.map((block, idx) => {
              const Icon = block.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={block.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-6 rounded-xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#17191B] border-[#F5C400] shadow-lg shadow-[#F5C400]/5'
                      : 'bg-[#111214]/60 border-white/5 hover:border-white/20 hover:bg-[#111214]'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isActive ? 'bg-[#F5C400] text-black' : 'bg-[#222528] text-[#9A9A96]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs tracking-widest text-[#F5C400]">
                        0{idx + 1}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#F5C400] translate-x-1' : 'text-[#5E6264]'
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-bold tracking-wide uppercase text-[#F2F2F0] mt-1">
                      {block.title}
                    </h3>
                    <p className="text-xs text-[#9A9A96] font-light mt-1 line-clamp-1">
                      {block.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Block Detail Display */}
          <div className="lg:col-span-7 bg-[#17191B] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle corner graphic accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5C400]/10 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F5C400]" />
                <span className="font-mono-tech text-xs tracking-widest text-[#9A9A96] uppercase">
                  DEEP SYSTEM INTEGRATION
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#F2F2F0] uppercase mb-4 leading-tight">
                {featureBlocks[activeTab].tagline}
              </h3>

              <p className="text-[#9A9A96] text-base md:text-lg font-light leading-relaxed mb-8">
                {featureBlocks[activeTab].desc}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono-tech text-[10px] text-[#5E6264] tracking-widest block uppercase">
                  {featureBlocks[activeTab].statLabel}
                </span>
                <span className="text-3xl font-extrabold font-mono-tech text-[#F5C400]">
                  {featureBlocks[activeTab].stat}
                </span>
              </div>

              <a
                href="#cta"
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[#F2F2F0] hover:text-[#F5C400] transition-colors group"
              >
                FULL BENCHMARK DATA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F5C400]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
