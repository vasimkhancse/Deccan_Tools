export const cncMachinery = [
  {
    id: 'widma-lx5-plus',
    name: 'WIDMA ECOGRIND LX5+',
    type: '5 Axis CNC Tool & Cutter Grinding Machine',
    image: '/images/machinery/widma-lx5-plus.png',
    description: '5 Axis CNC Tool & Cutter Grinding Machine suitable for manufacturing and regrinding standard and complex round tools such as Ball Nose End Mills, Multi Helix End Mills, Roughing End Mills, Drills, Form Stepdrills, Form Cutters, and Reamers. Both carbide and HSS material can be ground.',
    suitableTools: [
      'Ball Nose End Mills',
      'Multi Helix End Mills',
      'Roughing End Mills',
      'Drills',
      'Form Stepdrills',
      'Form Cutters',
      'Reamers'
    ],
    materials: ['Carbide', 'HSS'],
    system: 'Siemens system',
    software: 'Profsim module software',
    highlight: 'Advanced 5-Axis Precision with Simulation'
  },
  {
    id: 'widma-lx5',
    name: 'WIDMA ECOGRIND LX5',
    type: '5 Axis CNC Tool & Cutter Grinding Machine',
    image: '/images/machinery/widma-lx5.png',
    description: '5 Axis CNC Tool & Cutter Grinding Machine suitable for manufacturing and regrinding standard and complex round tools with high precision repeatability and rigid construction.',
    suitableTools: [
      'Standard Round Tools',
      'Complex Round Tools',
      'Drills & Stepdrills',
      'End Mills',
      'Reamers'
    ],
    materials: ['Solid Carbide', 'HSS'],
    system: 'Siemens system',
    software: 'Profsim module software',
    highlight: 'High Accuracy & Dependable Output'
  },
  {
    id: 'anca-fx5e',
    name: 'ANCA FX5E LINEAR',
    type: '5 Axis CNC Tool & Cutter Grinding Machine',
    image: '/images/machinery/anca-fx5e.png',
    description: '5 Axis CNC Tool & Cutter Grinding Machine suitable for manufacturing complex round tools such as End Mills, Multi Helix End Mills, Roughing End Mills, Form Stepdrills, Form Cutters, and Reamers.',
    suitableTools: [
      'End Mills',
      'Multi Helix End Mills',
      'Roughing End Mills',
      'Form Stepdrills',
      'Form Cutters',
      'Reamers'
    ],
    materials: ['Solid Carbide', 'HSS'],
    system: 'ANCA AMC5 G2',
    software: 'Tool Room Module',
    highlight: 'Linear Motor Precision & Fast Setup'
  },
  {
    id: 'anca-fx5',
    name: 'ANCA FX5 LINEAR',
    type: '5 Axis CNC Tool & Cutter Grinding Machine',
    image: '/images/machinery/anca-fx5.png',
    description: '5 Axis CNC Tool & Cutter Grinding Machine suitable for manufacturing complex round tools such as End Mills, Multi Helix End Mills, Roughing End Mills, Form Stepdrills, Form Cutters, and Reamers.',
    suitableTools: [
      'End Mills',
      'Multi Helix End Mills',
      'Roughing End Mills',
      'Form Stepdrills',
      'Form Cutters',
      'Reamers'
    ],
    materials: ['Solid Carbide', 'HSS'],
    system: 'ANCA AMC5 G2',
    software: 'Tool Room Module',
    highlight: 'Complex Geometry Grinding Specialist'
  },
  {
    id: 'grindstar-w4-pro',
    name: 'GRINDSTAR W4 PRO',
    type: 'High Precision CNC Tool & Cutter Grinding Machine',
    image: '/images/machinery/grindstar-w4-pro.png',
    description: 'The GrindStar W4 Pro CNC machine is a versatile, computer-controlled machine that can perform a wide range of manufacturing operations with high accuracy and precision. It is designed to meet the demands of high output and precision manufacturing.',
    suitableTools: [
      'Ball Nose End Mills',
      'Multi Helix End Mills',
      'Roughing End Mills',
      'Drills & Step Drills',
      'Form Cutters',
      'Reamers',
      'Custom Special Tools'
    ],
    materials: ['Solid Carbide', 'HSS'],
    system: 'Advanced Multi-Axis CNC System',
    software: 'Precision Tool Grinding Software',
    highlight: 'High Output & Micron-Level Precision'
  },
];

export const inspectionEquipment = [
  {
    id: 'zoller-smile-420',
    name: 'ZOLLER SMILE 420',
    type: 'CNC Inspection & Presetting Machine',
    image: '/images/inspection/zoller-smile-420.png',
    system: 'ZOLLER pilot 3.0',
    description: 'ZOLLER pilot 3.0 provides user-friendly device software and image processing for high precision cutting tool measurement and presetting.',
    features: [
      'Intuitive graphical guidance',
      'Precise measurement results',
      'Production-relevant tool data',
      'Complex measuring capabilities',
      'Tool presetting',
      'Measuring',
      'Testing'
    ]
  },
  {
    id: 'speroni-magis-400',
    name: 'SPERONI MAGIS 400',
    type: 'High Precision Tool Presetter & Measuring System',
    image: '/images/inspection/speroni-magis-400.png',
    system: 'Speroni Control & Measurement System',
    description: 'State-of-the-art tool presetting and measuring system delivering micron-level accuracy and Industry 4.0 data exchange.',
    features: [
      'Tool management',
      'Inspection',
      'User management',
      'CAM interfacing',
      'Manual and CNC configurations',
      'Industry 4.0 integration'
    ]
  },
  {
    id: 'mitutoyo-profile-projector',
    name: 'MITUTOYO PROFILE PROJECTOR',
    type: 'Optical Profile Measuring System',
    image: '/images/inspection/mitutoyo-profile-projector.png',
    system: 'Mitutoyo Optical Metrology System',
    description: 'High-precision optical profile projector for non-contact 2D dimensional inspection, contour verification, and cutting angle analysis.',
    features: [
      'High-magnification optical projection',
      'Non-contact 2D contour verification',
      'Precise profile angle measurement',
      'Edge and corner radius inspection',
      'Strict quality validation for special tools'
    ]
  }
];

export const conventionalMachinery = [
  {
    id: 'sigma-utc-200m',
    name: 'SIGMA UTC 200M',
    type: 'Conventional Universal Tool & Cutter Grinder',
    image: '/images/conventional/sigma-utc-200m.png',
    description: 'Reliable conventional tool and cutter grinder utilized for preparatory grinding, specialized manual tool sharpening, and customized tooling setups.',
    features: [
      'Universal cutter grinding capability',
      'Manual precision feed adjustments',
      'High operational flexibility for special grinding',
      'Versatile tooling and fixture support'
    ]
  },
  {
    id: 'hmt-k130',
    name: 'HMT K130 CG MACHINE',
    type: 'Precision Cylindrical Grinding Machine',
    image: '/images/conventional/hmt-k130.png',
    description: 'Heavy-duty precision cylindrical grinder utilized for blank preparation, accurate shank sizing, and concentric diameter grinding.',
    features: [
      'Rigid cast iron bed for vibration dampening',
      'Precision cylindrical shank grinding',
      'High roundness and concentricity tolerances',
      'Consistent OD grinding for solid carbide blanks'
    ]
  },
  {
    id: 'shigiya-gp30b',
    name: 'SHIGIYA GP-30(40)B',
    type: 'High Precision Cylindrical Grinding Machine',
    image: '/images/conventional/shigiya-gp30b.png',
    description: 'Heavy-duty precision cylindrical grinder engineered for tool blank preparation, accurate shank sizing, concentric diameter grinding, and outer diameter (OD) finishing of solid carbide and high-speed steel tools.',
    features: [
      'High-rigidity cast iron machine bed for thermal stability and vibration dampening',
      'Sub-micron OD cylindrical grinding and shank sizing tolerances (< 1 µm)',
      'Dead-center / live-center precision workhead system for minimal runout',
      'Micro-feed wheelhead adjustment for precision diameter grinding',
      'Consistent OD grinding for carbide tool blanks and specialized step shafts'
    ]
  },
  {
    id: 'aspire-20w-laser',
    name: 'ASPIRE STD 20W FIBER LASER',
    type: 'Fiber Laser Marking & Identification Machine',
    image: '/images/machinery/aspire-20w-laser.webp',
    system: 'Sino-Galvo F-Theta Optical Head & i3 Controller',
    description: 'Dedicated 20W fiber laser marking station engineered for ultra-crisp, permanent identification, laser etching of tool specifications, flute diameters, and 2D DataMatrix traceability codes on solid carbide and HSS cutting tools.',
    features: [
      'High-speed Sino-Galvo scanner head with 150×150 mm marking area',
      '600mm motorized Indian Z-axis with AC beam delivery',
      'Permanent micro-etching of tool geometries and custom customer branding',
      'High-contrast, non-contact thermal marking preserving cutting edge integrity',
      '350×350 mm aluminum working plate with dedicated industrial i3 workstation'
    ]
  }
];
