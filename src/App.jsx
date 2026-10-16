import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import {
  Terminal,
  Cpu,
  Volume2,
  VolumeX,
  Sparkles,
  Layers,
  Code2,
  Database,
  Radio,
  ShieldAlert,
  ChevronRight,
  ExternalLink,
  Activity,
  Server,
  Zap,
  Compass,
  Maximize2,
  X,
  RefreshCw,
  Sliders,
  User,
  MapPin,
  Dumbbell,
  Dna,
  Globe,
  Bot,
  Wrench,
  ChevronDown,
  ChevronUp,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';

// ============================================================================
// HELPER COMPONENT: "CONTROL" (FBC) STYLE CLASSIFIED REDACTION TAG
// ============================================================================
const Redacted = ({ label = '[REDACTED]' }) => (
  <span
    className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded bg-red-950/50 border border-red-500/40 font-mono text-[11px] font-bold tracking-wider text-red-400 select-none shadow-[0_0_10px_rgba(239,68,68,0.15)]"
    title="Classified Level-5 Clearance Required"
  >
    {label}
  </span>
);

// ============================================================================
// DATA CONSTANTS: HARIS K K PORTFOLIO ARCHITECTURE (CLASSIFIED EDITION)
// ============================================================================

const BOOT_LOGS = [
  '[0.000012] Initializing UBUNTU-SRV-01 (6.8.0-generic x86_64) // Host: [REDACTED]...',
  '[0.041280] Mounting /dev/nvme0n1p2 (AHCI Mode Enabled) -> /root/polychron.online [OK]',
  '[0.089410] Establishing SSH Tunnel & WebSocket Telemetry Stream -> ws://127.0.0.1:8080/telemetry [OK]',
  '[0.142900] Loading [REDACTED] Local LLM Engine + Neural Text-to-Speech Pipeline [OK]',
  '[0.210450] Initializing Deep Q-Learning Policy Network & Experience Replay Buffer [OK]',
  '[0.294100] Calibrating ESP32 / ESP8266 / Arduino Uno Serial Actuators & NFC Kill-Switch [OK]',
  '[0.358920] Compiling WebGL Obsidian Rhombus Geometry & 88-Shard Fracture Matrix [OK]',
  '[0.419000] Architect Identity Verified: HARIS K K // Sector: [REDACTED] (Coords: [REDACTED]) [ONLINE]',
];

const DOSSIER_TABS = [
  {
    id: 'identity',
    label: '01 // WHO I AM',
    title: 'Full-Stack, AI & Embedded Systems Architect',
    summary:
      'I am Haris K K, a systems builder operating out of [REDACTED] who engineers software and hardware across the entire computing stack—from bare-metal ESP32 microcontrollers and self-hosted Ubuntu servers to local AI voice assistants and high-contrast full-stack applications.',
    highlights: [
      'Architecting across hardware & software: bridging microcontroller sensor loops with FastAPI/Flask backends and reactive 3D/glassmorphic frontends.',
      'Disciplined execution: balancing Class 12 CBSE academics and [REDACTED] protocols with structured strength training.',
      'Dark cinematic UI philosophy: crafting tactile geometric layouts (like 5-node diamond navigators and telemetry HUDs) that feel like operating a spacecraft.',
    ],
    stats: [
      { label: 'BASE LOCATION', value: '[REDACTED]' },
      { label: 'PRIMARY DOMAIN', value: 'polychron.online' },
      { label: 'ACADEMIC LEVEL', value: 'Class 12 CBSE' },
      { label: 'TRAINING DISCIPLINE', value: '[REDACTED]' },
    ],
  },
  {
    id: 'hardware',
    label: '02 // HARDWARE & LAB',
    title: 'Polychron Robotics, IoT & Bare-Metal Home Lab',
    summary:
      'Software means more when it moves physical matter or runs on self-managed silicon. My hardware work centers on autonomous robotics, physical security switches, and self-hosted Linux infrastructure.',
    highlights: [
      'Polychron Autonomous Robot: Engineered circuit wiring, relay actuation, and Bluetooth/ESP32 control logic for a road-cleaning robot and all-terrain walking platform.',
      'NFC Network Kill-Switch: Built a physical hardware interrupt system using microcontrollers and relay modules to sever or restore network pathways on command.',
      'Self-Hosted Ubuntu Server: Configured bare-metal node [REDACTED] running Ubuntu Server OS with custom disk partition tables, BIOS AHCI tuning, and remote SSH/SCP workflows.',
    ],
    stats: [
      { label: 'MCU STACK', value: 'ESP32 / ESP8266 / Uno' },
      { label: 'HARDWARE BUS', value: 'UART / I2C / Relays / NFC' },
      { label: 'INFRASTRUCTURE', value: 'Ubuntu Server // [REDACTED]' },
      { label: 'CLOUD & DNS', value: 'GCP + polychron.online' },
    ],
  },
  {
    id: 'software',
    label: '03 // AI & FULL-STACK',
    title: '[REDACTED] AI, Deep RL & Full-Stack Ecosystems',
    summary:
      'From low-latency voice assistants running local language models to desktop and web platforms backed by relational databases, every project is engineered for speed and clarity.',
    highlights: [
      '[REDACTED] Local AI Voice Assistant: Python-driven local LLM orchestration paired with a custom low-latency Text-to-Speech (TTS) audio pipeline.',
      'Deep Q-Learning Agent: Reinforcement learning neural network trained via Bellman updates and epsilon-greedy exploration to master arcade environments.',
      'The Forge & Full-Stack Suites: Created "The Forge" gym management desktop suite (featuring a 5-node diamond/rhombus section navigator, dedicated "Power lifts" training hub, and MySQL backend), alongside Polychat and FocusFlight.',
    ],
    stats: [
      { label: 'AI / ML CORE', value: 'Local LLMs + Deep Q-RL' },
      { label: 'BACKEND STACK', value: 'Python / FastAPI / Flask' },
      { label: 'FRONTEND / UI', value: 'React / Three.js / NiceGUI' },
      { label: 'DATA ENGINES', value: 'MySQL / Supabase / SQLite' },
    ],
  },
];

const PROJECTS = [
  {
    id: 'SHARD-01',
    title: 'POLYCHRON // AUTONOMOUS ROBOTICS',
    category: 'Robotics, Microcontrollers & IoT',
    tagline: 'Road-cleaning & all-terrain robotics powered by ESP32, sensor fusion, and high-current relay logic.',
    description:
      'Designed the complete hardware wiring schematic, actuator distribution, and microcontroller firmware for the Polychron autonomous road-cleaning robot and an all-terrain walking robot. Integrates environmental telemetry sensors, Bluetooth command links, and an NFC hardware kill-switch.',
    tech: ['ESP32 / ESP8266', 'Arduino Uno', 'Relay Modules', 'Bluetooth Serial', 'NFC Kill-Switch', 'C++ / Python'],
    metrics: [
      { label: 'Control Latency', value: '< 12ms' },
      { label: 'Actuator Channels', value: '8-Ch Relay' },
      { label: 'Safety Protocol', value: 'NFC Hardware Cut' },
    ],
    architecture: [
      'ESP32 Dual-Core Telemetry & Motor PWM Controller',
      'Environmental Sensor Array -> Closed-Loop Feedback Logic Gates',
      'High-Current Relay Isolation Board & Physical NFC Kill-Switch',
      'Bluetooth / Wi-Fi Telemetry Bridge -> Ubuntu Server Logger',
    ],
    accent: '#06b6d4',
  },
  {
    id: 'SHARD-02',
    title: '[REDACTED] // LOCAL AI & DEEP RL CORE',
    category: 'Artificial Intelligence & Reinforcement Learning',
    tagline: 'Offline LLM voice assistant with neural TTS synthesis alongside a Deep Q-Learning autonomous agent.',
    description:
      'A dual-pillar AI engineering suite. Pillar 1 is [REDACTED] a Python-based local language model voice assistant featuring custom wake-word routing, context memory, and a fluid Text-to-Speech (TTS) pipeline. Pillar 2 is a Deep Q-Network (DQN) reinforcement learning agent trained via experience replay to autonomously master arcade game physics.',
    tech: ['Python', 'Local LLMs', 'Neural TTS Pipeline', 'Deep Q-Learning (RL)', 'PyTorch / NumPy', 'AsyncIO'],
    metrics: [
      { label: 'TTS Voice Latency', value: '185ms' },
      { label: 'RL Policy Convergence', value: '450 Episodes' },
      { label: 'Cloud Dependency', value: '0% (100% Local)' },
    ],
    architecture: [
      'Voice Input Stream -> Local LLM Inference Engine -> Neural TTS Synthesizer',
      'DQN State Tensor -> Convolutional/Dense Policy Net -> Q-Value Action Selector',
      'Experience Replay Buffer + Target Network Bellman Optimizer',
      'Zero-Cloud Local Execution on Ubuntu / PyCharm Environment',
    ],
    accent: '#a855f7',
  },
  {
    id: 'SHARD-03',
    title: 'THE FORGE // DIAMOND-UI GYM SUITE',
    category: 'Desktop Architecture & Relational DB',
    tagline: 'Role-based gym management desktop system featuring a 5-node diamond/rhombus navigator and MySQL core.',
    description:
      'Engineered for a Class 12 CBSE computer science software architecture assignment, The Forge reimagines desktop management UIs with a dark cinematic aesthetic. Features secure desktop authentication, role-based dashboards built around an interactive 5-node diamond/rhombus section selector (including a dedicated "Power lifts" training module), and a normalized MySQL relational backend.',
    tech: ['Python', 'NiceGUI', 'MySQL', 'Role-Based Auth', '5-Node Diamond UI', 'Custom CSS Shaders'],
    metrics: [
      { label: 'Navigator Topology', value: '5-Node Rhombus' },
      { label: 'Core Training Node', value: 'Power Lifts' },
      { label: 'Query Execution', value: '3.8ms (MySQL)' },
    ],
    architecture: [
      '5-Node Diamond/Rhombus Interactive Section Selector (Power Lifts, Members, Plans, Telemetry, Admin)',
      'Role-Based Desktop Authentication & Session Guard',
      'Python / NiceGUI Reactive Event Loop',
      'Normalized MySQL Relational Schema with ACID Transactions',
    ],
    accent: '#ef4444',
  },
  {
    id: 'SHARD-04',
    title: 'POLYCHAT & FOCUSFLIGHT // FULL-STACK',
    category: 'Full-Stack Web & Cloud Architecture',
    tagline: 'Real-time communication, gamified deep-work telemetry, and high-velocity e-commerce platforms.',
    description:
      'A trio of full-stack web applications: Polychat (low-latency multi-room messaging), FocusFlight (productivity & study session flight-deck tracker tailored for intense academic & coding blocks), and a full-featured e-commerce car marketplace backed by React, FastAPI/Flask, and Supabase/SQLite.',
    tech: ['React', 'FastAPI / Flask', 'Supabase', 'MySQL / SQLite', 'Tailwind CSS', 'REST / WebSockets'],
    metrics: [
      { label: 'Realtime Sync', value: 'Sub-30ms' },
      { label: 'Backend API', value: 'FastAPI Async' },
      { label: 'Domain Node', value: 'polychron.online' },
    ],
    architecture: [
      'React Single-Page Client with Dark Glassmorphic UI',
      'FastAPI / Flask Asynchronous REST & WebSocket Gateway',
      'Supabase Realtime & PostgreSQL / SQLite Persistence Layer',
      'Deployed & Routed via polychron.online & Polychron PaaS',
    ],
    accent: '#38bdf8',
  },
];

const SKILL_NODES = [
  { id: 'python', name: 'Python 3.12', domain: 'AI & Backend', level: '98%', connections: ['fastapi', 'llm', 'dqn', 'mysql'] },
  { id: 'react', name: 'React & Three.js', domain: 'Full-Stack', level: '94%', connections: ['js', 'fastapi', 'supabase'] },
  { id: 'js', name: 'JavaScript (ES6+)', domain: 'Full-Stack', level: '93%', connections: ['react', 'fastapi'] },
  { id: 'fastapi', name: 'FastAPI & Flask', domain: 'Full-Stack', level: '95%', connections: ['python', 'supabase', 'mysql', 'ubuntu'] },
  { id: 'supabase', name: 'Supabase', domain: 'Infra & DB', level: '91%', connections: ['react', 'fastapi', 'mysql'] },
  { id: 'mysql', name: 'MySQL & SQLite', domain: 'Infra & DB', level: '95%', connections: ['python', 'fastapi'] },
  { id: 'llm', name: 'Local LLMs & TTS', domain: 'AI & RL', level: '92%', connections: ['python', 'dqn', 'ubuntu'] },
  { id: 'dqn', name: 'Deep Q-Learning (RL)', domain: 'AI & RL', level: '90%', connections: ['python', 'llm'] },
  { id: 'esp32', name: 'ESP32 / ESP8266', domain: 'Hardware & IoT', level: '96%', connections: ['arduino', 'ubuntu', 'python'] },
  { id: 'arduino', name: 'Arduino & Relays', domain: 'Hardware & IoT', level: '95%', connections: ['esp32'] },
  { id: 'ubuntu', name: 'Ubuntu Server & SSH', domain: 'Infra & DB', level: '94%', connections: ['fastapi', 'esp32', 'llm'] },
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Boot & Mode State
  const [booting, setBooting] = useState(true);
  const [bootStep, setBootStep] = useState(0);
  const [interfaceMode, setInterfaceMode] = useState('NEURAL'); // 'STANDARD' | 'NEURAL'

  // Live Telemetry & Stress Simulator State
  const [cpuLoad, setCpuLoad] = useState(24);
  const [ramUsage, setRamUsage] = useState(42);
  const [tempC, setTempC] = useState(44);
  const [pingMs, setPingMs] = useState(14);
  const [isManualStress, setIsManualStress] = useState(false);
  const [mobileTelemetryOpen, setMobileTelemetryOpen] = useState(false);

  // Scroll & Section Navigation State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // About Dossier & Interactive UI State
  const [activeDossierTab, setActiveDossierTab] = useState('identity');
  const [activeProject, setActiveProject] = useState(null);
  const [selectedSkillDomain, setSelectedSkillDomain] = useState('ALL');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Web Audio API State
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef(null);
  const droneGainRef = useRef(null);
  const filterNodeRef = useRef(null);
  const pannerNodeRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'Connected to haris@ubuntu-srv-01 (Node: [REDACTED] // Ubuntu Server x86_64).',
    },
    {
      type: 'info',
      text: 'Type "help" or tap a quick command chip below to inspect Haris K K\'s systems.',
    },
  ]);

  // Refs for Three.js & Cursor
  const mountRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mouseNormalizedRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const cpuRef = useRef(cpuLoad);

  // Keep refs synced for 60fps Three.js animation loop
  useEffect(() => {
    cpuRef.current = cpuLoad;
  }, [cpuLoad]);

  // --------------------------------------------------------------------------
  // 1. TERMINAL BOOT SEQUENCE
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!booting) return;
    if (bootStep < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setBootStep((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timer);
    }
  }, [booting, bootStep]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && booting) {
        setBooting(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [booting]);

  // --------------------------------------------------------------------------
  // 2. LIVE UBUNTU SERVER TELEMETRY ENGINE
  // --------------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad((prev) => {
        if (isManualStress) return prev;
        const delta = Math.floor(Math.random() * 7) - 3;
        return Math.min(95, Math.max(14, prev + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isManualStress]);

  useEffect(() => {
    setRamUsage(Math.min(96, Math.round(28 + cpuLoad * 0.58)));
    setTempC(Math.round(37 + cpuLoad * 0.46));
    setPingMs(Math.round(11 + (cpuLoad / 100) * 19));

    if (audioEnabled && filterNodeRef.current && audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime;
      const targetFreq = 95 + (cpuLoad / 100) * 360 + scrollRef.current * 240;
      filterNodeRef.current.frequency.setTargetAtTime(targetFreq, now, 0.25);
    }
  }, [cpuLoad, audioEnabled]);

  // --------------------------------------------------------------------------
  // 3. SCROLL TRACKING & ACTIVE SECTION OBSERVER
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      scrollRef.current = progress;
      setScrollProgress(progress);

      // Update active section for navigation bars
      const sections = ['hero', 'about', 'projects', 'skills', 'terminal'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      if (audioEnabled && osc1Ref.current && osc2Ref.current && audioCtxRef.current) {
        const now = audioCtxRef.current.currentTime;
        osc1Ref.current.frequency.setTargetAtTime(55 + progress * 27.5, now, 0.15);
        osc2Ref.current.frequency.setTargetAtTime(82.41 + progress * 41.2, now, 0.15);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [audioEnabled]);

  // --------------------------------------------------------------------------
  // 4. CUSTOM MAGNETIC CURSOR & TOUCH TRACKING
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handlePointerMove = (clientX, clientY) => {
      const nx = (clientX / window.innerWidth) * 2 - 1;
      const ny = -(clientY / window.innerHeight) * 2 + 1;
      mouseNormalizedRef.current = { x: nx, y: ny };

      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        cursorRingRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      if (audioEnabled && pannerNodeRef.current && audioCtxRef.current) {
        const now = audioCtxRef.current.currentTime;
        pannerNodeRef.current.pan.setTargetAtTime(Math.max(-0.85, Math.min(0.85, nx)), now, 0.1);
      }
    };

    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [audioEnabled]);

  // --------------------------------------------------------------------------
  // 5. WEB AUDIO API GENERATIVE SPATIAL DRONE
  // --------------------------------------------------------------------------
  const toggleSpatialAudio = () => {
    if (!audioEnabled) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const panner = ctx.createStereoPanner();
      const masterGain = ctx.createGain();

      // Deep cinematic interstellar harmonic fifth (A1 + E2)
      osc1.type = 'sawtooth';
      osc1.frequency.value = 55.0;

      osc2.type = 'triangle';
      osc2.frequency.value = 82.41;

      filter.type = 'lowpass';
      filter.frequency.value = 160;
      filter.Q.value = 4.5;

      masterGain.gain.value = 0.001;
      masterGain.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + 1.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(panner);
      panner.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      audioCtxRef.current = ctx;
      osc1Ref.current = osc1;
      osc2Ref.current = osc2;
      filterNodeRef.current = filter;
      pannerNodeRef.current = panner;
      droneGainRef.current = masterGain;
      setAudioEnabled(true);
    } else {
      if (audioCtxRef.current && droneGainRef.current) {
        const ctx = audioCtxRef.current;
        droneGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
        setTimeout(() => {
          ctx.close();
          audioCtxRef.current = null;
        }, 450);
      }
      setAudioEnabled(false);
    }
  };

  // --------------------------------------------------------------------------
  // 6. THREE.JS 3D OBSIDIAN RHOMBUS & FRACTURING SHARD ENGINE
  // --------------------------------------------------------------------------
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Master Group
    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    // 1. Central Obsidian Rhombus
    const rhombusGeo = new THREE.OctahedronGeometry(2.05, 0);
    rhombusGeo.scale(1, 1.48, 1);

    const rhombusMat = new THREE.MeshPhysicalMaterial({
      color: 0x090d16,
      metalness: 0.9,
      roughness: 0.14,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.12,
      flatShading: true,
    });
    const coreRhombus = new THREE.Mesh(rhombusGeo, rhombusMat);
    universeGroup.add(coreRhombus);

    // Glowing Wireframe Cage
    const wireGeo = new THREE.WireframeGeometry(rhombusGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.55,
    });
    const wireframeMesh = new THREE.LineSegments(wireGeo, wireMat);
    wireframeMesh.scale.setScalar(1.03);
    coreRhombus.add(wireframeMesh);

    // Inner Singularity Energy Core
    const innerGeo = new THREE.OctahedronGeometry(0.85, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    universeGroup.add(innerCore);

    // Gyroscopic Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(3.4, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.32,
    });
    const orbitalRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    orbitalRing1.rotation.x = Math.PI / 2.3;
    universeGroup.add(orbitalRing1);

    const ringGeo2 = new THREE.TorusGeometry(4.2, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.22,
    });
    const orbitalRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    orbitalRing2.rotation.y = Math.PI / 3;
    orbitalRing2.rotation.x = Math.PI / 4;
    universeGroup.add(orbitalRing2);

    // 2. Mathematical Fracturing Shards
    const shardCount = 88;
    const shardGroup = new THREE.Group();
    universeGroup.add(shardGroup);

    const shardBaseGeo = new THREE.TetrahedronGeometry(0.24, 0);
    const shardMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.35,
      flatShading: true,
    });

    const shards = [];
    for (let i = 0; i < shardCount; i++) {
      const mesh = new THREE.Mesh(shardBaseGeo, shardMat);
      const phi = Math.acos(1 - (2 * (i + 0.5)) / shardCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const dir = new THREE.Vector3(
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi) * 1.35,
        Math.cos(phi)
      ).normalize();

      const homeRadius = 1.65 + (i % 5) * 0.14;
      const orbitRadius = 4.6 + (i % 7) * 0.85;

      const scaleY = 0.7 + (i % 4) * 0.45;
      mesh.scale.set(0.8, scaleY, 0.8);

      mesh.rotation.set(i * 0.4, i * 0.7, i * 0.2);

      shardGroup.add(mesh);
      shards.push({
        mesh,
        dir,
        homeRadius,
        orbitRadius,
        speedOffset: 0.4 + (i % 6) * 0.18,
        phase: i * 0.35,
      });
    }

    // 3. Deep Space Particle Starfield
    const starCount = 1200;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 75;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 75;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 65 - 10;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xe2e8f0,
      size: 0.065,
      transparent: true,
      opacity: 0.65,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 4. Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const primaryLight = new THREE.PointLight(0x06b6d4, 4.5, 30);
    primaryLight.position.set(5, 6, 6);
    scene.add(primaryLight);

    const secondaryLight = new THREE.PointLight(0xa855f7, 3.5, 30);
    secondaryLight.position.set(-6, -5, 4);
    scene.add(secondaryLight);

    // Responsive Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const scroll = scrollRef.current;
      const load = cpuRef.current;

      // Dynamic color shift
      let activeHex = 0x06b6d4; // Cryo Cyan
      if (load >= 75) {
        activeHex = 0xef4444; // Overdrive Crimson
      } else if (load >= 45) {
        activeHex = 0xa855f7; // Neural Purple
      }
      const targetColor = new THREE.Color(activeHex);
      primaryLight.color.lerp(targetColor, 0.05);
      wireMat.color.lerp(targetColor, 0.05);
      innerMat.color.lerp(targetColor, 0.05);
      ringMat1.color.lerp(targetColor, 0.05);
      shardMat.emissive.lerp(targetColor, 0.05);

      const speedMultiplier = 1 + (load / 100) * 2.2;

      // Rotations
      coreRhombus.rotation.y += 0.0045 * speedMultiplier;
      coreRhombus.rotation.x = Math.sin(elapsed * 0.5) * 0.18 + scroll * 1.4;

      const coreScale = Math.max(0.42, 1 - scroll * 0.55);
      coreRhombus.scale.setScalar(coreScale);

      innerCore.rotation.y -= 0.012 * speedMultiplier;
      innerCore.rotation.z += 0.008 * speedMultiplier;
      const pulse = 1 + Math.sin(elapsed * 3.2) * 0.12;
      innerCore.scale.setScalar(pulse);

      orbitalRing1.rotation.z += 0.003 * speedMultiplier;
      orbitalRing2.rotation.x -= 0.004 * speedMultiplier;
      orbitalRing2.rotation.y += 0.002 * speedMultiplier;

      // Fracture Math
      const fractureFactor = Math.min(1, scroll * 1.55);
      const jitterAmplitude = load > 75 ? 0.09 : 0.025;

      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];
        const radius =
          s.homeRadius + (s.orbitRadius - s.homeRadius) * fractureFactor;
        const orbitAngle = elapsed * 0.24 * s.speedOffset * (0.4 + fractureFactor);

        const cosA = Math.cos(orbitAngle);
        const sinA = Math.sin(orbitAngle);

        const baseX = s.dir.x * radius;
        const baseZ = s.dir.z * radius;

        const rotatedX = baseX * cosA - baseZ * sinA;
        const rotatedZ = baseX * sinA + baseZ * cosA;
        const verticalWave =
          s.dir.y * radius + Math.sin(elapsed * 1.6 + s.phase) * (0.22 + fractureFactor * 0.45);

        const turbulence = Math.sin(elapsed * 14 + s.phase) * jitterAmplitude;

        s.mesh.position.set(
          rotatedX + turbulence,
          verticalWave + turbulence,
          rotatedZ
        );

        s.mesh.rotation.x += 0.01 * s.speedOffset * speedMultiplier;
        s.mesh.rotation.y += 0.014 * s.speedOffset * speedMultiplier;
      }

      // Parallax
      const targetCamX = mouseNormalizedRef.current.x * 1.45;
      const targetCamY = mouseNormalizedRef.current.y * 1.05;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;

      const isMobileScreen = window.innerWidth < 768;
      const baseZ = isMobileScreen ? 12.8 : 10.6;
      const targetCamZ = baseZ - scroll * 2.4;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      starField.rotation.y = elapsed * 0.018;
      starField.rotation.x = scroll * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // --------------------------------------------------------------------------
  // 7. INTERACTIVE UBUNTU CLI COMMAND HANDLER
  // --------------------------------------------------------------------------
  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const nextHistory = [
      ...terminalHistory,
      { type: 'command', text: `haris@ubuntu-srv-01:~$ ${rawCmd}` },
    ];

    if (cmd === 'help') {
      nextHistory.push({
        type: 'response',
        text: 'Available commands:\n  whoami       -> Display Architect Identity & Classified Dossier\n  about        -> Jump to About Haris K K Dossier\n  projects     -> List engineered hardware, AI & full-stack systems\n  skills       -> Inspect full-stack, AI/RL & hardware matrix\n  neofetch     -> Display UBUNTU-SRV-01 hardware & OS summary\n  telemetry    -> Read real-time server metrics\n  stress <val> -> Set server CPU load (10-98) to test 3D shaders\n  contact      -> Display direct communication channels\n  clear        -> Clear terminal buffer',
      });
    } else if (cmd === 'whoami' || cmd === 'about') {
      nextHistory.push({
        type: 'response',
        text: 'HARIS K K // Full-Stack Developer, AI/RL Engineer & Robotics Builder\nLocation   : [REDACTED] // Coords: [REDACTED]\nAcademic   : Class 12 CBSE // Directive: [REDACTED]\nHardware   : ESP32, ESP8266, Arduino Uno, Relays, NFC Network Kill-Switch\nHome Server: Bare-Metal Node [REDACTED] running Ubuntu Server (SSH/SCP + polychron.online)\nDiscipline : [REDACTED] + Deep Software Architecture',
      });
    } else if (cmd === 'projects') {
      nextHistory.push({
        type: 'response',
        text: '1. [SHARD-01] POLYCHRON       -> Autonomous road-cleaning & walking robotics (ESP32 + Relays)\n2. [SHARD-02] [REDACTED] & RL     -> Local LLM Voice Assistant (TTS) + Deep Q-Learning Agent\n3. [SHARD-03] THE FORGE       -> 5-Node Diamond UI Gym Desktop Suite ("Power lifts" + MySQL)\n4. [SHARD-04] POLYCHAT/FLIGHT -> Full-Stack React, FastAPI & Supabase Web Ecosystems',
      });
    } else if (cmd === 'skills') {
      nextHistory.push({
        type: 'response',
        text: ' Full-Stack : Python, JavaScript, React, Three.js, FastAPI, Flask, NiceGUI\n Databases  : MySQL, SQLite, Supabase\n AI & ML    : Local LLM Integrations, Neural TTS Pipelines, Deep Q-Learning (RL)\n Hardware   : ESP32, ESP8266, Arduino Uno, Bluetooth, Relays, Environmental Sensors\n DevOps/Lab : Ubuntu Server, PyCharm, Git, SSH/SCP, Google Cloud Platform',
      });
    } else if (cmd === 'neofetch') {
      nextHistory.push({
        type: 'response',
        text: `       _._          haris@ubuntu-srv-01\n    .-'   '-.       -------------------\n   /         \\      OS: Ubuntu Server 24.04 LTS x86_64\n  |  O     O  |     Host: Bare-Metal Node [REDACTED]\n  |   .---.   |     Kernel: 6.8.0-generic (AHCI Mode)\n   \\  '---'  /      Domain: polychron.online\n    '-.   .-'       CPU Load: ${cpuLoad}% | Temp: ${tempC}°C | RAM: ${ramUsage}%\n       '-'          Clearance: LEVEL-5 [REDACTED]`,
      });
    } else if (cmd === 'telemetry') {
      nextHistory.push({
        type: 'response',
        text: `[LIVE TELEMETRY // UBUNTU-SRV-01]\nCPU Load : ${cpuLoad}% (${cpuLoad >= 75 ? 'OVERDRIVE CRIMSON' : cpuLoad >= 45 ? 'NEURAL PURPLE' : 'CRYO CYAN'})\nMemory   : ${ramUsage}% allocated\nCore Temp: ${tempC}°C\nLatency  : ${pingMs}ms via WebSocket Bridge`,
      });
    } else if (cmd.startsWith('stress')) {
      const parts = cmd.split(' ');
      const val = parseInt(parts[1], 10);
      if (!isNaN(val) && val >= 10 && val <= 98) {
        setIsManualStress(true);
        setCpuLoad(val);
        nextHistory.push({
          type: 'response',
          text: `[OK] Overriding UBUNTU-SRV-01 CPU load to ${val}%. Observe 3D Obsidian Rhombus shader & lighting shift.`,
        });
      } else {
        nextHistory.push({
          type: 'error',
          text: 'Usage: stress <10-98> (Example: stress 92)',
        });
      }
    } else if (cmd === 'contact') {
      nextHistory.push({
        type: 'response',
        text: 'Domain  : https://polychron.online\nSector  : [REDACTED]\nStatus  : Open for high-impact engineering collaborations & technical builds.',
      });
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      nextHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" for available commands.`,
      });
    }

    setTerminalHistory(nextHistory);
    setTerminalInput('');
  };

  // Dynamic Theme Helpers
  const themeState = useMemo(() => {
    if (cpuLoad >= 75) {
      return {
        name: 'OVERDRIVE // HIGH LOAD',
        accentText: 'text-red-400',
        accentBorder: 'border-red-500/40',
        accentBg: 'bg-red-500/10',
        badgeBg: 'bg-red-500/20 text-red-300 border-red-500/40',
        glowShadow: 'shadow-[0_0_30px_rgba(239,68,68,0.22)]',
      };
    }
    if (cpuLoad >= 45) {
      return {
        name: 'AI INFERENCE // ACTIVE',
        accentText: 'text-purple-400',
        accentBorder: 'border-purple-500/40',
        accentBg: 'bg-purple-500/10',
        badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
        glowShadow: 'shadow-[0_0_30px_rgba(168,85,247,0.22)]',
      };
    }
    return {
      name: 'NOMINAL // CRYO STATE',
      accentText: 'text-cyan-400',
      accentBorder: 'border-cyan-500/40',
      accentBg: 'bg-cyan-500/10',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      glowShadow: 'shadow-[0_0_30px_rgba(6,182,212,0.22)]',
    };
  }, [cpuLoad]);

  const filteredSkills = useMemo(() => {
    if (selectedSkillDomain === 'ALL') return SKILL_NODES;
    return SKILL_NODES.filter((s) => s.domain === selectedSkillDomain);
  }, [selectedSkillDomain]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentDossier =
    DOSSIER_TABS.find((t) => t.id === activeDossierTab) || DOSSIER_TABS[0];

  // Helper to render "[REDACTED]" tokens inside strings with the FBC badge
  // Updated with case-insensitive regex to catch [redacted] variations
  const renderWithRedactions = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/\[redacted\]/i);
    if (parts.length === 1) return text;
    return parts.map((part, idx) => (
      <React.Fragment key={idx}>
        {part}
        {idx < parts.length - 1 && <Redacted />}
      </React.Fragment>
    ));
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* =====================================================================
          CUSTOM MAGNETIC CURSOR (DESKTOP ONLY)
      ===================================================================== */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 pointer-events-none z-[90] hidden lg:block transition-transform duration-75 ease-out"
      />
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-9 h-9 -ml-4 -mt-4 rounded-full border ${themeState.accentBorder} pointer-events-none z-[90] hidden lg:block transition-transform duration-150 ease-out`}
      />

      {/* =====================================================================
          FIXED 3D THREE.JS WEBGL CANVAS BACKGROUND
      ===================================================================== */}
      <div
        ref={mountRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Radial Vignette for High Text Legibility */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_25%,rgba(3,7,18,0.82)_100%)]"
        aria-hidden="true"
      />

      {/* =====================================================================
          NEURAL HUD CORNER BRACKETS (WHEN IN NEURAL INTERFACE MODE)
      ===================================================================== */}
      {interfaceMode === 'NEURAL' && (
        <div className="fixed inset-3 sm:inset-5 z-20 pointer-events-none hidden sm:block">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500/40" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-500/40" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/40" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500/40" />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col items-end gap-1.5 font-mono text-[10px] text-slate-500">
            <span>FRACTURE: {Math.round(scrollProgress * 100)}%</span>
            <div className="w-1 h-28 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-red-500 transition-all duration-150"
                style={{ height: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span>CORE_Z</span>
          </div>
        </div>
      )}

      {/* =====================================================================
          BOOT SEQUENCE OVERLAY MODAL
      ===================================================================== */}
      {booting && (
        <div className="fixed inset-0 z-[100] bg-[#030712]/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950/90 p-5 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs sm:text-sm tracking-wider text-slate-200">
                  UBUNTU-SRV-01 // KERNEL BOOTLOADER
                </span>
              </div>
              <button
                onClick={() => setBooting(false)}
                className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition"
              >
                SKIP [ESC]
              </button>
            </div>

            {/* Boot Log Output */}
            <div className="font-mono text-xs sm:text-sm space-y-2 mb-6 min-h-[210px] text-slate-300">
              {BOOT_LOGS.slice(0, bootStep).map((line, idx) => (
                <div key={idx} className="leading-relaxed break-words">
                  <span className="text-cyan-400 mr-2">&gt;</span>
                  {renderWithRedactions(line)}
                </div>
              ))}
              {bootStep < BOOT_LOGS.length && (
                <div className="text-cyan-400 animate-pulse">_</div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between font-mono text-xs text-slate-400 mb-1.5">
                <span>INITIALIZING EVENT HORIZON ARCHITECTURE</span>
                <span>{Math.round((bootStep / BOOT_LOGS.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 transition-all duration-200"
                  style={{ width: `${(bootStep / BOOT_LOGS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Interface Mode Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setInterfaceMode('NEURAL');
                  setBooting(false);
                }}
                className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 transition"
              >
                <Sparkles className="w-4 h-4" />
                Enter Neural HUD Mode
              </button>
              <button
                onClick={() => {
                  setInterfaceMode('STANDARD');
                  setBooting(false);
                }}
                className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition"
              >
                <Layers className="w-4 h-4 text-slate-400" />
                Standard Minimal Mode
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TOP NAVIGATION BAR
      ===================================================================== */}
      <header className="fixed top-0 inset-x-0 z-40 bg-slate-950/75 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Identity */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-inner group-hover:border-cyan-400 transition">
              <span className="font-mono font-bold text-sm text-cyan-400">HK</span>
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white flex items-center gap-2">
                HARIS K K
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="font-mono text-[10px] text-slate-400 hidden sm:block">
                polychron.online // UBUNTU-SRV-01
              </div>
            </div>
          </button>

          {/* Desktop Section Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            {[
              { id: 'hero', label: '00 // CORE' },
              { id: 'about', label: '01 // ABOUT ME' },
              { id: 'projects', label: '02 // SYSTEMS' },
              { id: 'skills', label: '03 // MATRIX' },
              { id: 'terminal', label: '04 // CLI' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls (Audio + HUD Toggle) */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSpatialAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs border transition ${
                audioEnabled
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                  : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title="Toggle Web Audio API Spatial Space Drone"
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span className="hidden sm:inline">DRONE: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SOUND: OFF</span>
                </>
              )}
            </button>

            <button
              onClick={() =>
                setInterfaceMode((m) => (m === 'NEURAL' ? 'STANDARD' : 'NEURAL'))
              }
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-slate-700 transition"
            >
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>HUD: {interfaceMode}</span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          MOBILE BOTTOM QUICK-NAVIGATION DOCK (PHONES & SMALL TABLETS)
      ===================================================================== */}
      <nav
        aria-label="Mobile Quick Navigation"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 px-2 py-1.5 flex items-center justify-around"
      >
        {[
          { id: 'hero', label: 'Core', icon: Compass },
          { id: 'about', label: 'About Me', icon: User },
          { id: 'projects', label: 'Systems', icon: Layers },
          { id: 'skills', label: 'Matrix', icon: Cpu },
          { id: 'terminal', label: 'CLI', icon: Terminal },
        ].map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition ${
                isActive
                  ? 'text-cyan-400 bg-cyan-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <IconComponent className="w-4 h-4 mb-0.5" />
              <span className="font-mono text-[10px] tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* =====================================================================
          LIVE UBUNTU SERVER TELEMETRY HUD (DESKTOP PANEL + MOBILE PILL)
      ===================================================================== */}
      {/* Mobile Compact Telemetry Pill */}
      <div className="fixed bottom-16 right-3 z-30 md:hidden">
        {!mobileTelemetryOpen ? (
          <button
            onClick={() => setMobileTelemetryOpen(true)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full bg-slate-950/90 backdrop-blur-xl border ${themeState.accentBorder} shadow-lg`}
          >
            <Server className={`w-3.5 h-3.5 ${themeState.accentText}`} />
            <span className="font-mono text-xs text-slate-200">
              SRV-01: {cpuLoad}%
            </span>
            <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
          </button>
        ) : (
          <div className="w-72 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-800 p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Server className={`w-4 h-4 ${themeState.accentText}`} />
                <span className="font-mono text-xs font-bold text-white">
                  UBUNTU-SRV-01 TELEMETRY
                </span>
              </div>
              <button
                onClick={() => setMobileTelemetryOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3 font-mono text-xs">
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">CPU</div>
                <div className={`font-bold ${themeState.accentText}`}>
                  {cpuLoad}%
                </div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">RAM</div>
                <div className="font-bold text-slate-200">{ramUsage}%</div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">TEMP</div>
                <div className="font-bold text-slate-200">{tempC}°C</div>
              </div>
            </div>
            <label className="block font-mono text-[10px] text-slate-400 mb-1">
              STRESS TEST 3D SHADER (CPU LOAD: {cpuLoad}%)
            </label>
            <input
              type="range"
              min="10"
              max="98"
              value={cpuLoad}
              onChange={(e) => {
                setIsManualStress(true);
                setCpuLoad(Number(e.target.value));
              }}
              className="w-full accent-cyan-400 cursor-pointer mb-2"
            />
            <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
              <button
                onClick={() => {
                  setIsManualStress(true);
                  setCpuLoad(20);
                }}
                className="py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
              >
                Cryo (20%)
              </button>
              <button
                onClick={() => {
                  setIsManualStress(true);
                  setCpuLoad(58);
                }}
                className="py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300"
              >
                AI (58%)
              </button>
              <button
                onClick={() => {
                  setIsManualStress(true);
                  setCpuLoad(92);
                }}
                className="py-1 rounded bg-red-500/10 border border-red-500/30 text-red-300"
              >
                Max (92%)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Fixed Bottom-Left Telemetry Simulator */}
      <aside className="fixed bottom-5 left-5 z-30 hidden md:block w-80 rounded-2xl bg-slate-950/85 backdrop-blur-2xl border border-slate-800/90 p-4 shadow-2xl">
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Activity className={`w-4 h-4 ${themeState.accentText}`} />
            <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
              NODE: UBUNTU-SRV-01
            </span>
          </div>
          <span
            className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${themeState.badgeBg}`}
          >
            {pingMs}ms LIVE
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3 font-mono">
          <div className="bg-slate-900/80 rounded-xl p-2 border border-slate-800/80">
            <div className="text-[10px] text-slate-400">CPU LOAD</div>
            <div className={`text-sm font-bold ${themeState.accentText}`}>
              {cpuLoad}%
            </div>
          </div>
          <div className="bg-slate-900/80 rounded-xl p-2 border border-slate-800/80">
            <div className="text-[10px] text-slate-400">MEMORY</div>
            <div className="text-sm font-bold text-slate-200">{ramUsage}%</div>
          </div>
          <div className="bg-slate-900/80 rounded-xl p-2 border border-slate-800/80">
            <div className="text-[10px] text-slate-400">THERMAL</div>
            <div className="text-sm font-bold text-slate-200">{tempC}°C</div>
          </div>
        </div>

        {/* Interactive Server Stress Slider */}
        <div className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-800/80">
          <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Sliders className="w-3 h-3 text-cyan-400" />
              STRESS-TEST 3D CORE
            </span>
            {isManualStress && (
              <button
                onClick={() => setIsManualStress(false)}
                className="text-cyan-400 hover:underline flex items-center gap-0.5"
              >
                <RefreshCw className="w-2.5 h-2.5" /> Auto
              </button>
            )}
          </div>
          <input
            type="range"
            min="10"
            max="98"
            value={cpuLoad}
            onChange={(e) => {
              setIsManualStress(true);
              setCpuLoad(Number(e.target.value));
            }}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 mb-2"
          />
          <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
            <button
              onClick={() => {
                setIsManualStress(true);
                setCpuLoad(20);
              }}
              className="py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 transition"
            >
              Cryo (20%)
            </button>
            <button
              onClick={() => {
                setIsManualStress(true);
                setCpuLoad(58);
              }}
              className="py-1 rounded bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 transition"
            >
              AI Train (58%)
            </button>
            <button
              onClick={() => {
                setIsManualStress(true);
                setCpuLoad(92);
              }}
              className="py-1 rounded bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 transition"
            >
              Overdrive (92%)
            </button>
          </div>
        </div>
      </aside>

      {/* =====================================================================
          MAIN SCROLLABLE CONTENT STREAM
      ==================================================================== */}
      <main className="relative z-10 pt-20 pb-28 md:pb-24">
        {/* -------------------------------------------------------------------
            SECTION 00: HERO // THE EVENT HORIZON
        ------------------------------------------------------------------- */}
        <section
          id="hero"
          className="min-h-[88vh] max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center py-12 sm:py-20"
        >
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs text-cyan-300 tracking-wide">
                ARCHITECT: HARIS K K // SECTOR: <Redacted />
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                {themeState.name}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
              ENGINEERING{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                INTELLIGENCE
              </span>{' '}
              ACROSS SILICON &amp; SPACE.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 bg-slate-950/65 backdrop-blur-md p-4 rounded-2xl border border-slate-800/80">
              I am <strong className="text-white font-semibold">Haris K K</strong>—a
              full-stack software developer, local AI &amp; reinforcement learning
              engineer, and robotics builder. welcome to my paradise!!
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition"
              >
                <User className="w-4 h-4" />
                Read Architect Dossier
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-mono text-xs sm:text-sm transition"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                Explore Fractured Shards
              </button>

              <button
                onClick={() => scrollToSection('terminal')}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-slate-300 border border-slate-800 font-mono text-xs sm:text-sm transition"
              >
                <Terminal className="w-4 h-4 text-purple-400" />
                Ubuntu CLI
              </button>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 01: ABOUT ME // HARIS K K ARCHITECT DOSSIER
        ------------------------------------------------------------------- */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20"
        >
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              01 // ARCHITECT DOSSIER &amp; IDENTITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              About Haris K K
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: High-Clarity Identity Profile Card */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/25 via-slate-900 to-purple-500/25 border border-cyan-500/40 flex items-center justify-center font-mono text-2xl font-black text-cyan-300 shadow-inner">
                  HK
                </div>
                <div>
                  <span className="inline-block font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-1">
                    SYSTEM ARCHITECT ONLINE
                  </span>
                  <h3 className="text-2xl font-bold text-white">Haris K K</h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    Full-Stack • AI &amp; RL • Robotics &amp; IoT
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Operating as a <strong className="text-white">Systems Architect</strong>,
                I build systems that connect high-contrast interfaces to real-world
                hardware and intelligent backends—from autonomous ESP32 robots and
                local LLM voice pipelines to full-stack web and desktop software.
              </p>

              {/* Key Personal & Technical Badges */}
              <div className="space-y-3 font-mono text-xs mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">SECTOR &amp; TELEMETRY</div>
                    <div className="text-slate-200">
                      Coords: <Redacted />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90">
                  <Server className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">
                      SELF-HOSTED LAB &amp; DOMAIN
                    </div>
                    <div className="text-slate-200">
                      Ubuntu Home Server <Redacted /> • polychron.online
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90">
                  <Dumbbell className="w-4 h-4 text-red-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">
                      ACADEMIC &amp; DAILY DISCIPLINE
                    </div>
                    <div className="text-slate-200">
                      Class 12 CBSE • <Redacted />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>IDE: PyCharm + SSH CLI</span>
                <span className="text-cyan-400">100% Bare-Metal Ready</span>
              </div>
            </div>

            {/* Right Column: Interactive Multi-Tab Architect Dossier */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-slate-800">
                {DOSSIER_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDossierTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl font-mono text-xs transition ${
                      activeDossierTab === tab.id
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {renderWithRedactions(currentDossier.title)}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {renderWithRedactions(currentDossier.summary)}
                </p>

                <div className="space-y-3 mb-6">
                  {currentDossier.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/85 border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {renderWithRedactions(item)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  {currentDossier.stats.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/95 border border-slate-800"
                    >
                      <div className="text-[10px] text-slate-400 mb-1">
                        {st.label}
                      </div>
                      <div className="text-xs font-bold text-cyan-300 flex flex-wrap gap-1">
                        {renderWithRedactions(st.value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 02: THE FRACTURED CORE // FEATURED SYSTEMS & PROJECTS
        ------------------------------------------------------------------- */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                02 // FRACTURED RHOMBUS DATA DRIVES
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Engineered Systems
              </h2>
            </div>
            <p className="font-mono text-xs text-slate-400 max-w-md">
              Select any holographic shard below to inspect its hardware/software
              architecture, latency benchmarks, and stack topology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-slate-800 hover:border-cyan-500/60 p-6 sm:p-8 transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-300 border border-slate-800">
                      {project.id}
                    </span>
                    <span className="text-slate-400">{project.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition mb-2">
                    {renderWithRedactions(project.title)}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {renderWithRedactions(project.tagline)}
                  </p>

                  <div className="grid grid-cols-3 gap-2.5 mb-6 font-mono">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90"
                      >
                        <div className="text-[10px] text-slate-400 truncate">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          {renderWithRedactions(m.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-cyan-400 group-hover:text-cyan-300">
                    <span>INSPECT SYSTEM ARCHITECTURE</span>
                    <Maximize2 className="w-4 h-4 group-hover:scale-110 transition" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 03: THE ENGINE ROOM // SKILL TOPOLOGY MATRIX
        ------------------------------------------------------------------- */}
        <section
          id="skills"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                03 // THE ENGINE ROOM
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Interactive Skill Matrix
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {['ALL', 'Full-Stack', 'AI & RL', 'Hardware & IoT', 'Infra & DB'].map(
                (domain) => (
                  <button
                    key={domain}
                    onClick={() => setSelectedSkillDomain(domain)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs transition ${
                      selectedSkillDomain === domain
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {domain}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((node) => {
                const isHighlighted =
                  hoveredSkill === node.id ||
                  (hoveredSkill &&
                    SKILL_NODES.find((n) => n.id === hoveredSkill)?.connections.includes(
                      node.id
                    ));

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setHoveredSkill(node.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() =>
                      setHoveredSkill((prev) => (prev === node.id ? null : node.id))
                    }
                    className={`p-4 rounded-2xl border transition cursor-pointer ${
                      isHighlighted
                        ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/85 border-slate-800/90 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-1.5">
                      <span>{node.domain}</span>
                      <span className="text-cyan-400 font-bold">{node.level}</span>
                    </div>
                    <div className="text-base font-bold text-white mb-3">
                      {node.name}
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                        style={{ width: node.level }}
                      />
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 flex flex-wrap gap-1">
                      <span className="text-slate-500">LINKS:</span>
                      {node.connections.map((c) => (
                        <span
                          key={c}
                          className="px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 04: INTERACTIVE UBUNTU SERVER CLI TERMINAL
        ------------------------------------------------------------------- */}
        <section
          id="terminal"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20"
        >
          <div className="mb-8">
            <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              04 // DIRECT SHELL ACCESS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ubuntu Server CLI
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-950/95 backdrop-blur-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-300 truncate">
                  haris@ubuntu-srv-01: ~/polychron.online (SSH)
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyan-400 hidden sm:inline">
                bash // 80x24
              </span>
            </div>

            <div className="px-4 sm:px-6 py-3 bg-slate-900/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
              <span className="font-mono text-[11px] text-slate-400 shrink-0">
                QUICK EXEC:
              </span>
              {[
                'whoami',
                'projects',
                'skills',
                'neofetch',
                'telemetry',
                'stress 90',
                'stress 24',
                'clear',
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => executeCommand(chip)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 font-mono text-xs shrink-0 transition"
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3 max-h-96 overflow-y-auto">
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`whitespace-pre-wrap leading-relaxed flex flex-wrap items-center gap-y-1 ${
                    item.type === 'command'
                      ? 'text-cyan-300 font-bold'
                      : item.type === 'error'
                      ? 'text-red-400'
                      : item.type === 'system'
                      ? 'text-purple-300'
                      : 'text-slate-300'
                  }`}
                >
                  {renderWithRedactions(item.text)}
                </div>
              ))}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeCommand(terminalInput);
                }}
                className="flex items-center gap-2 pt-2 border-t border-slate-900"
              >
                <span className="text-emerald-400 font-bold shrink-0">
                  haris@ubuntu-srv-01:~$
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type a command (e.g., whoami, neofetch, projects)..."
                  className="w-full bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-xs shrink-0"
                >
                  RUN
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          PROJECT ARCHITECTURE MODAL
      ===================================================================== */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[95] bg-slate-950/85 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-slate-950 border border-cyan-500/50 p-6 sm:p-8 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
              <div>
                <span className="font-mono text-xs text-cyan-400 flex flex-wrap gap-1">
                  {renderWithRedactions(activeProject.id)} // {renderWithRedactions(activeProject.category)}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 flex flex-wrap gap-1">
                  {renderWithRedactions(activeProject.title)}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {renderWithRedactions(activeProject.description)}
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-3">
                SYSTEM ARCHITECTURE &amp; DATA PIPELINE
              </div>
              <div className="space-y-2">
                {activeProject.architecture.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{renderWithRedactions(step)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 flex items-center"
                >
                  {renderWithRedactions(t)}
                </span>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition"
              >
                Close Schematic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
