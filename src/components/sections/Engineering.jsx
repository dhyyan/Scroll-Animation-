import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldAlert, Cpu, Orbit } from 'lucide-react';

const engineeringModules = [
  {
    id: 'body',
    title: 'AERODYNAMIC BODY PANELS',
    frame: '/images/herosection/ezgif-frame-045.png',
    frameNum: 'FRAME 045',
    icon: Layers,
    desc: 'Pre-preg carbon fiber weave with hydrophobic resin coating. Minimizes boundary layer air drag while optimizing engine bay cooling induction.',
    specs: [
      { key: 'Material', val: 'Autoclave Pre-Preg Carbon' },
      { key: 'Weight Savings', val: '-42% vs Aluminum' },
      { key: 'Torsion', val: '52,000 Nm/degree' },
    ],
  },
  {
    id: 'suspension',
    title: 'PUSHROD SUSPENSION & BRAKES',
    frame: '/images/herosection/ezgif-frame-110.png',
    frameNum: 'FRAME 110',
    icon: Orbit,
    desc: 'Magnetorheological fluid dampers coupled to carbon-ceramic brake rotors with titanium piston calipers for zero fading during high-g braking.',
    specs: [
      { key: 'Rotor Spec', val: '420mm Carbon-Ceramic' },
      { key: 'Caliper', val: '10-Piston Titanium' },
      { key: 'Response', val: '< 2 Milliseconds' },
    ],
  },
  {
    id: 'powertrain',
    title: 'POWERTRAIN INTEGRATION',
    frame: '/images/herosection/ezgif-frame-205.png',
    frameNum: 'FRAME 205',
    icon: Cpu,
    desc: 'Mid-mounted twin-turbo V8 paired with a front axle electric motor system. Delivers instantaneous torque fills during gear changes.',
    specs: [
      { key: 'Displacement', val: '3,996 cc V8' },
      { key: 'Boost Pressure', val: '2.4 Bar Twin-Scroll' },
      { key: 'Hybrid Output', val: '220 kW Electric Boost' },
    ],
  },
  {
    id: 'chassis',
    title: 'MONOCOQUE SAFETY CELL',
    frame: '/images/herosection/ezgif-frame-270.png',
    frameNum: 'FRAME 270',
    icon: ShieldAlert,
    desc: 'Tubular carbon chassis incorporating integrated rollover structure and energy-absorbing honeycomb crash elements front and rear.',
    specs: [
      { key: 'Structure', val: 'Full Carbon Monocoque' },
      { key: 'Crash Rating', val: 'FIA Homologated' },
      { key: 'Rigidity', val: 'Class-leading 65 kN/mm' },
    ],
  },
];

export default function Engineering() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="engineering" className="py-24 px-6 md:px-12 bg-[#111214] relative z-20 text-[#F2F2F0] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono-tech text-xs tracking-widest text-[#F5C400] uppercase">
              ARCHITECTURAL DECONSTRUCTION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mt-2">
              INNER ARCHITECTURE
            </h2>
          </div>
          <p className="text-[#9A9A96] text-sm md:text-base font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Examine key structural milestones captured during the high-speed disassembly and reassembly timeline.
          </p>
        </div>

        {/* Interactive Module Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Module Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {engineeringModules.map((module, idx) => {
              const Icon = module.icon;
              const isActive = activeModule === idx;

              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(idx)}
                  className={`text-left p-5 rounded-xl transition-all duration-300 border flex items-center gap-4 ${
                    isActive
                      ? 'bg-[#17191B] border-[#F5C400] text-[#F2F2F0]'
                      : 'bg-[#0A0A0A]/40 border-white/5 text-[#9A9A96] hover:bg-[#17191B]/50 hover:text-[#F2F2F0]'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${isActive ? 'bg-[#F5C400] text-black' : 'bg-[#222528]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono-tech text-[10px] text-[#F5C400] tracking-widest">
                      {module.frameNum}
                    </div>
                    <div className="font-bold text-sm uppercase tracking-wide">
                      {module.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Large Image Preview & Specs */}
          <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
            {/* Image Viewer */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#17191B] mb-8 border border-white/5 group">
              <img
                src={engineeringModules[activeModule].frame}
                alt={engineeringModules[activeModule].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 font-mono-tech text-xs text-[#F5C400]">
                {engineeringModules[activeModule].frameNum} // HIGH-RES STILL
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content & Specs Breakdown */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold uppercase text-[#F2F2F0] mb-3">
                {engineeringModules[activeModule].title}
              </h3>
              <p className="text-[#9A9A96] text-sm md:text-base font-light mb-6 leading-relaxed">
                {engineeringModules[activeModule].desc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {engineeringModules[activeModule].specs.map((s) => (
                  <div key={s.key} className="bg-[#17191B] p-3 rounded-lg border border-white/5">
                    <span className="font-mono-tech text-[10px] text-[#5E6264] block uppercase">
                      {s.key}
                    </span>
                    <span className="font-mono-tech text-xs font-semibold text-[#F5C400]">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
