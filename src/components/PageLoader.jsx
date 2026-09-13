import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Centered Page Transition Loader featuring a Realistic Chrome Vanadium Combination Spanner (Wrench)
 * gripping a precision hex bolt, executing authentic torque tightening strokes with specular chrome sweeps.
 */
export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Smooth transition time allowing the spanner tightening action to be appreciated
    const timer = setTimeout(() => {
      setLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 pointer-events-none"
      role="status"
      aria-label="Loading page..."
    >
      <div className="relative flex flex-col items-center justify-center p-8 select-none bg-white/95 rounded-2xl shadow-2xl border border-slate-200/80 max-w-[280px] w-full mx-4">
        
        {/* Main Animation Stage */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          
          {/* Outer Precision Calibrated Dial */}
          <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-1.5 rounded-full border-2 border-transparent border-t-brandRed-600/80 border-r-brandRed-600/30 animate-spin" style={{ animationDuration: '1.5s' }}></div>
          
          {/* Subtle Radial Glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brandRed-500/10 via-slate-200/20 to-transparent blur-md"></div>

          {/* Precision Real Spanner SVG Stage */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
          >
            <defs>
              {/* Ultra-Realistic Chrome Mirror Gradient */}
              <linearGradient id="realMirrorChrome" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="15%" stopColor="#F1F5F9" />
                <stop offset="32%" stopColor="#94A3B8" />
                <stop offset="48%" stopColor="#334155" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="52%" stopColor="#475569" />
                <stop offset="70%" stopColor="#E2E8F0" />
                <stop offset="85%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              {/* Recessed Handle Satin Industrial Finish */}
              <linearGradient id="handleRecess" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="25%" stopColor="#334155" />
                <stop offset="50%" stopColor="#64748B" />
                <stop offset="75%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              {/* Edge Specular Polish Gradient */}
              <linearGradient id="specularEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#CBD5E1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
              </linearGradient>

              {/* Stainless Steel Hex Bolt Gradients */}
              <linearGradient id="hexFacetLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
              <linearGradient id="hexFacetMid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="hexFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>

              {/* Dynamic Chrome Sheen Overlay Gradient */}
              <linearGradient id="gleamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Drop Shadow Filter */}
              <filter id="wrenchShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* STATIC / INTERACTING HEX BOLT & WASHER (Pivot point at x=60, y=30) */}
            <g className="bolt-tighten-pulse">
              {/* Machined Washer Base */}
              <circle cx="60" cy="30" r="14" fill="#64748B" stroke="#334155" strokeWidth="0.8" />
              <circle cx="60" cy="30" r="13" fill="url(#hexFacetMid)" stroke="#CBD5E1" strokeWidth="0.6" />
              
              {/* 3D Chamfered Hexagonal Bolt Head */}
              {/* Facet Top-Left */}
              <polygon points="60,21 51,25.5 51,34.5 60,30" fill="url(#hexFacetLight)" stroke="#0F172A" strokeWidth="0.4" />
              {/* Facet Top-Right */}
              <polygon points="60,21 69,25.5 69,34.5 60,30" fill="url(#hexFacetMid)" stroke="#0F172A" strokeWidth="0.4" />
              {/* Facet Bottom */}
              <polygon points="51,34.5 60,39 69,34.5 60,30" fill="url(#hexFacetDark)" stroke="#0F172A" strokeWidth="0.4" />
              
              {/* Central Pilot / Allen Recess */}
              <circle cx="60" cy="30" r="3.2" fill="#0F172A" stroke="#475569" strokeWidth="0.5" />
              <circle cx="60" cy="30" r="1.5" fill="#DC2626" opacity="0.9" />
            </g>

            {/* REAL COMBINATION SPANNER (Rotating on Bolt Pivot at x=60, y=30) */}
            <g className="spanner-torque-motion" filter="url(#wrenchShadow)">
              
              {/* Main Solid Chrome Forged Outer Profile */}
              <path
                d="
                  M52,24
                  C49,20 49,15 54,12
                  C60,9 69,11 72,17
                  C74,21 73,26 69,29
                  L66,42
                  C65,48 66,74 65,82
                  C68,85 71,90 70,97
                  C69,104 62,109 55,108
                  C48,107 43,101 44,94
                  C45,88 48,84 53,81
                  L52,42
                  C51,34 50,30 48,27
                  Z
                "
                fill="url(#realMirrorChrome)"
                stroke="#1E293B"
                strokeWidth="1"
              />

              {/* Realistic Open-End Wrench Jaws Cutout (15-degree offset hugging the bolt) */}
              <path
                d="
                  M54,12
                  C56,15 57,21 54,26
                  L61,31
                  L67,23
                  C68,19 66,14 62,11
                  Z
                "
                fill="#E2E8F0"
                opacity="0.95"
              />

              {/* Open-End Inner Gripping Flat Contacts */}
              <line x1="54" y1="26" x2="61" y2="31" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="61" y1="31" x2="67" y2="23" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />

              {/* Handle I-Beam Recessed Central Panel (Satin Finished Web) */}
              <rect
                x="55.5"
                y="45"
                width="7"
                height="35"
                rx="2"
                fill="url(#handleRecess)"
                stroke="#0F172A"
                strokeWidth="0.8"
              />

              {/* Embossed Brand & Spec Markings on Handle */}
              <g transform="rotate(90, 59, 62.5)">
                <text
                  x="59"
                  y="63.5"
                  fontSize="4.2"
                  fontWeight="900"
                  fontFamily="'Rajdhani', sans-serif"
                  letterSpacing="0.8"
                  fill="#FFFFFF"
                  textAnchor="middle"
                  opacity="0.9"
                >
                  DECCAN CR-V
                </text>
              </g>

              {/* Lower Box / Ring End - 12-Point Socket Broach */}
              <circle cx="57" cy="95" r="9.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.8" />
              <circle cx="57" cy="95" r="6" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.2" />
              
              {/* 12-Point Bi-Hex Teeth Notches */}
              <path
                d="
                  M57,89.5 L57,100.5
                  M51.5,95 L62.5,95
                  M53.1,91.1 L60.9,98.9
                  M53.1,98.9 L60.9,91.1
                "
                stroke="#DC2626"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
              <circle cx="57" cy="95" r="2.5" fill="#0F172A" />

              {/* Specular Chrome Reflection Highlight Bevels */}
              <path
                d="M54,12 C60,9 68,11 71,16"
                stroke="url(#specularEdge)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <line x1="64.5" y1="44" x2="63.5" y2="80" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.8" />
              <line x1="53.5" y1="44" x2="54.5" y2="80" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />

              {/* Dynamic Chrome Gleam Sweep Band */}
              <rect
                className="chrome-glint-sweep"
                x="45"
                y="35"
                width="28"
                height="8"
                fill="url(#gleamGradient)"
                opacity="0"
              />
            </g>

            {/* Torque Contact Micro-Sparks / Energy Points */}
            <circle cx="61" cy="31" r="1" fill="#FFFFFF" className="animate-ping" />
          </svg>
        </div>

        {/* Industrial Brand Label & Live Status */}
        <div className="mt-4 flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandRed-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brandRed-600"></span>
            </span>
            <span className="text-xs font-black tracking-widest text-slate-800 font-heading uppercase">
              DECCAN TOOLINGS
            </span>
          </div>
          <span className="text-[10px] font-semibold text-slate-400 tracking-wider mt-0.5 uppercase">
            Precision Engineering
          </span>
        </div>

      </div>
    </div>
  );
}

