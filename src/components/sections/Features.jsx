import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Eye, Activity, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Sliders,
    title: 'ACTIVE AERO CONTROL',
    subtitle: 'DYNAMIC REAR WING & GROUND FLAPS',
    desc: 'Hydraulically actuated rear wing adjusts pitch angle in 50 milliseconds based on velocity and steering telemetry.',
    code: 'SYS-AERO-01',
  },
  {
    icon: Eye,
    title: 'MATRIX LASER LIGHTING',
    subtitle: 'PRECISION ILLUMINATION UP TO 600M',
    desc: 'Adaptive digital matrix headlights modulate 1.3 million micro-mirrors per lamp for maximum night visibility without glare.',
    code: 'SYS-[#F5C400]-02',
  },
  {
    icon: Activity,
    title: 'TELEMETRY HUD SUITE',
    subtitle: 'REAL-TIME TRACK DIAGNOSTICS',
    desc: 'Projected directly onto the windscreen, rendering tire pressure, brake temps, G-force vectors, and split timing.',
    code: 'SYS-HUD-03',
  },
  {
    icon: ShieldCheck,
    title: 'MONOCOQUE CELL',
    subtitle: 'FIA-CERTIFIED SAFETY ARCHITECTURE',
    desc: 'Formed under 10 atmospheres of pressure to create an unbreakable safety cell surrounding driver and powertrain.',
    code: 'SYS-[#5E6264]-04',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-[#0A0A0A] relative z-20 text-[#F2F2F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-tech text-xs tracking-widest text-[#F5C400] uppercase">
            INTELLIGENT INNOVATION
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mt-2">
            ADVANCED TECHNOLOGY
          </h2>
          <p className="text-[#9A9A96] text-sm md:text-base font-light mt-4 leading-relaxed">
            Every subsystem is networked via high-speed fiber-optic bus to synchronize aerodynamic control, hybrid output, and chassis damping.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;

            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111214] border border-white/5 rounded-2xl p-8 hover:border-[#F5C400]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#17191B] border border-white/10 text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono-tech text-[10px] text-[#5E6264] tracking-widest">
                      {feat.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-wide uppercase text-[#F2F2F0] mb-1 group-hover:text-[#F5C400] transition-colors">
                    {feat.title}
                  </h3>
                  <div className="font-mono-tech text-[10px] text-[#F5C400] tracking-widest uppercase mb-4">
                    {feat.subtitle}
                  </div>
                  <p className="text-[#9A9A96] text-sm font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono-tech text-[10px] text-[#5E6264]">
                  <span>APEX V12 SPEC</span>
                  <span className="text-[#F5C400]">ACTIVE CONTROL</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
