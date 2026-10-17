/**
 * Factual Course Data for Certification in Clinical Taping (CCT) / Tapedia
 * Source of Truth: https://www.e-physioneeds.com/courses/Certification-in-Taping-64525a61e4b070504d0f60c3
 */

import heroAthleteTape from '../assets/images/hero_athlete_tape_1792140960116.jpg';
import physioApplyingTape from '../assets/images/physio_applying_tape_1792140962068.jpg';
import rehabAnkleTape from '../assets/images/rehab_ankle_tape_1792140960680.jpg';
import runnerKneeTape from '../assets/images/runner_knee_tape_1792140959979.jpg';

export interface PricingPlan {
  currency: string;
  symbol: string;
  price: number;
  mrp: number;
  label: string;
  badge: string;
  country: string;
}

export const PRICING_PLANS: Record<string, PricingPlan> = {
  INR: {
    currency: 'INR',
    symbol: '₹',
    price: 3600,
    mrp: 12000,
    label: 'Lifetime Access',
    badge: '🔥 Special Offer · 70% Off',
    country: 'India & South Asia'
  },
  USD: {
    currency: 'USD',
    symbol: '$',
    price: 49,
    mrp: 160,
    label: 'Lifetime Access',
    badge: '🔥 Global Online Launch Special',
    country: 'Worldwide (USD)'
  }
};

export const OFFICIAL_LOGO_URL = 'https://d502jbuhuh9wk.cloudfront.net/logos/62bd97c60cf2f0525dc732d0.png?v=9';

export const ENROLLMENT_URL = 'https://www.e-physioneeds.com/courses/Certification-in-Taping-64525a61e4b070504d0f60c3';

export const WHATSAPP_CONTACTS = [
  { phone: '+919990100373', display: '+91 99901 00373', name: 'Academic Counselor 1' },
  { phone: '+919990993318', display: '+91 99909 93318', name: 'Academic Counselor 2' },
  { phone: '+918800220066', display: '+91 88002 20066', name: 'Academic Counselor 3' }
];

export const VIMEO_VIDEOS = {
  heroPromo: {
    id: '1200955429',
    url: 'https://player.vimeo.com/video/1200955429?badge=0&autopause=1&player_id=0&app_id=58479&dnt=1&playsinline=1&quality=auto',
    title: 'Clinical Taping Certification Official Preview',
    caption: 'Official course introduction by Dr. Chakshu Bansal'
  },
  promo2: {
    id: '1200985356',
    url: 'https://player.vimeo.com/video/1200985356?badge=0&autopause=1&player_id=0&app_id=58479&dnt=1&playsinline=1&quality=auto',
    title: 'Tape Application & Dynamic Reasoning Preview',
    caption: 'Deep-dive into multi-tape systems & tension mechanics'
  },
  demo1: {
    id: '1097151255',
    url: 'https://player.vimeo.com/video/1097151255?badge=0&autopause=1&player_id=0&app_id=58479&dnt=1&playsinline=1&quality=auto',
    title: 'Practical Demo Video 1: Clinical Taping Essentials',
    caption: 'Step-by-step clinical taping technique and skin preparation'
  },
  demo2: {
    id: '1200958266',
    url: 'https://player.vimeo.com/video/1200958266?badge=0&autopause=1&player_id=0&app_id=58479&dnt=1&playsinline=1&quality=auto',
    title: 'Practical Demo Video 2: Technique-Based Taping Demo',
    caption: 'Targeted muscle facilitation, tendon unloading & joint support'
  },
  demo3: {
    id: '1200958267',
    url: 'https://player.vimeo.com/video/1200958267?badge=0&autopause=1&player_id=0&app_id=58479&dnt=1&playsinline=1&quality=auto',
    title: 'More Practical Demos: Real Course Learning Experience',
    caption: 'Complex injury management and combination layering'
  },
  certificateVideo: {
    id: '1200956325',
    url: 'https://player.vimeo.com/video/1200956325?badge=0&autopause=1&dnt=1&playsinline=1&quality=auto',
    title: 'Hard Copy / Certificate Packaging Video',
    caption: 'Unboxing the official verifiable hard-copy certificate & credentials'
  }
};

export const ACCREDITATION_LOGOS = [
  {
    name: 'IRAP Accreditation',
    src: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1787662298/1_tgac2n.png',
    badge: 'International Register of Associated Professionals'
  },
  {
    name: 'Physioneeds Academy',
    src: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1787662299/2_lwn0bz.png',
    badge: 'London, United Kingdom'
  },
  {
    name: 'CPD Standards Office',
    src: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1787662299/3_z6biju.png',
    badge: '8 CPD Hours Accredited'
  },
  {
    name: 'Skill India',
    src: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1787662299/4_hbl3e5.png',
    badge: 'Professional Upskilling'
  },
  {
    name: 'GeM Government e-Marketplace',
    src: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1787662299/5_awd9yl.png',
    badge: 'Registered Provider'
  }
];

export const FOUR_TAPING_SYSTEMS = [
  {
    id: 'kinesiology',
    title: 'Kinesiology Taping',
    role: 'Pain modulation, fascia release, muscle facilitation & lymphatic drainage',
    colorName: 'Electric Cyan & Hot Pink',
    colorHex: '#0284c7',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/40',
    tapeAccent: 'from-sky-500 to-blue-600',
    image: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1781342109/ChatGPT_Image_Jun_13_2026_02_44_23_PM_dme77n.png',
    description: 'Elastic cotton or synthetic tape with wave-pattern acrylic adhesive that lifts the epidermis, improves micro-circulation, decompresses pain receptors, and guides muscular function without restricting range of motion.',
    points: [
      'Facilitates weak muscles & inhibits overactive hypertonic fibers',
      'Fascial glide and lymphatic fluid clearance',
      'Provides subtle neuro-sensory feedback throughout active movement',
      'Gentle recoil stretch ranging from 10% to 75% tension'
    ],
    cases: 'Patellofemoral pain, rotator cuff tendinopathy, postural kyphosis, delayed onset muscle soreness.'
  },
  {
    id: 'rigid',
    title: 'Rigid Taping',
    role: 'Strict mechanical joint stabilization & ligament locking',
    colorName: 'Zinc Oxide Tan & White',
    colorHex: '#eab308',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40',
    tapeAccent: 'from-amber-500 to-yellow-600',
    image: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1781342333/ChatGPT_Image_Jun_13_2026_02_48_32_PM_mad59g.png',
    description: 'Inelastic strapping tape applied over hypo-allergenic undertape (Fixomull/Hypafix) to mechanically restrict pathological ranges of motion and protect compromised ligaments during intense load.',
    points: [
      'High tensile strength for robust mechanical joint immobilization',
      'Ligament unloading following acute sprains (e.g. ATFL, MCL)',
      'Subtalar and ankle mortise lock during collision sports',
      'Prevents joint extremes without entirely disabling performance'
    ],
    cases: 'Acute lateral ankle sprains, acromioclavicular (AC) joint separation, turf toe, wrist stabilization.'
  },
  {
    id: 'semi-elastic',
    title: 'Semi-Elastic Taping',
    role: 'Controlled dynamic motion & assisted functional recoil',
    colorName: 'Cobalt Blue & Black',
    colorHex: '#6366f1',
    badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/40',
    tapeAccent: 'from-indigo-500 to-purple-600',
    image: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1781342590/ChatGPT_Image_Jun_13_2026_02_52_41_PM_wnznrb.png',
    description: 'Combines the supportive firmness of rigid tape with elastic mechanical spring recoil. Allows controlled deceleration and energy return in running, cutting, and jumping athletes.',
    points: [
      'Balances stabilization with athletic agility and functional mobility',
      'Absorbs peak deceleration shock at the end of joint travel',
      'Essential for rehabilitation bridging from bed rest to on-court training',
      'Reduces muscle strain risk during high-velocity eccentric loading'
    ],
    cases: 'Hamstring eccentric overload, plantar fasciitis, Achilles tendinopathy, groin adductor strains.'
  },
  {
    id: 'sports',
    title: 'Sports Taping',
    role: 'On-field fast application, combat taping & Return-to-Play (RTP)',
    colorName: 'High-Visibility Red & Black',
    colorHex: '#ef4444',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40',
    tapeAccent: 'from-rose-500 to-red-600',
    image: 'https://res.cloudinary.com/dnckhtzkd/image/upload/v1781342732/ChatGPT_Image_Jun_13_2026_02_54_41_PM_yzjsn1.png',
    description: 'Rapid on-field protocols developed for matchday emergencies, contact sports, and quick-turnaround tournament environments. Designed to withstand sweat, high friction, and heavy impact.',
    points: [
      'Quick handling and tear techniques under sideline clock pressure',
      'Sweat-resistant adhesive anchoring and anti-friction chafing wraps',
      'Pre-match preventative strapping and in-game emergency management',
      'Standardized return-to-play testing protocols with tape applied'
    ],
    cases: 'InBL basketball court sprains, rugby scrum ear/shoulder wraps, football hamstring wraps, sprinter quad support.'
  }
];

export const CLINICAL_APPLICATIONS = [
  {
    title: 'Patellar Tracking & Knee Alignment',
    condition: 'Patellofemoral Pain Syndrome (PFPS)',
    bodyArea: 'Knee & Quadriceps',
    system: 'Kinesiology + Semi-Elastic',
    image: runnerKneeTape,
    summary: 'Corrects lateral patellar tilt, unloads the infrapatellar tendon, and enhances vastus medialis obliquus (VMO) neuromotor firing during deep squatting and running strides.'
  },
  {
    title: 'Rotator Cuff & Shoulder Instability',
    condition: 'Subacromial Impingement & Anterior Laxity',
    bodyArea: 'Glenohumeral Joint & Scapula',
    system: 'Rigid Mechanical Lock + Kinesio Fascia',
    image: physioApplyingTape,
    summary: 'Depresses the humeral head to prevent subacromial pinching, repositions the scapula into upward rotation, and stabilizes anterior joint translation during overhead sports.'
  },
  {
    title: 'Lateral Ankle Sprain & ATFL Protection',
    condition: 'Inversion Sprains & Chronic Instability',
    bodyArea: 'Ankle Mortise & Subtalar Joint',
    system: 'Rigid Figure-of-6 & Heel Lock',
    image: rehabAnkleTape,
    summary: 'Prevents sudden inversion and plantarflexion collapse while maintaining active dorsiflexion propulsion for sprinting, jumping, and court pivoting.'
  },
  {
    title: 'Postural Kyphosis & Cervicothoracic Fatigue',
    condition: 'Upper Crossed Syndrome & Tech-Neck',
    bodyArea: 'Thoracic Spine & Scapular Retractors',
    system: 'X-Pattern & Y-Strip Kinesiology Tape',
    image: heroAthleteTape,
    summary: 'Constant gentle proprioceptive retraction cue across the rhomboids and lower trapezius, relieving anterior chest tightness and neck extensor spasm.'
  }
];

export const CURRICULUM_MODULES = [
  {
    number: '01',
    title: 'Fundamentals of Clinical Taping',
    summary: 'Introduction to clinical taping, skin and fascia mechanics, basic application rules, skin preparation, tension physics, and safety precautions.',
    hours: '1.0 CPD Hour',
    lessons: [
      'Evolution of therapeutic taping: From rigid casting to dynamic kinesiology',
      'Skin histology, mechanoreceptors (Merkel, Meissner, Pacinian, Ruffini) & tactile gating',
      'Fascial anatomy, biotensegrity & inter-muscular force transmission',
      'Contraindications, red flags, fragility testing & adhesive allergy mitigation'
    ]
  },
  {
    number: '02',
    title: 'Types of Tapes & Structural Properties',
    summary: 'Deep dive into kinesiology tapes, rigid zinc-oxide tapes, semi-elastic dynamic tapes, and specialized sports tapes.',
    hours: '0.8 CPD Hour',
    lessons: [
      'Material science: Elastic recoil vs mechanical lock comparison',
      'Weave elasticity, acrylic adhesive wave geometry & breathability',
      'Under-wraps, cohesive bandages, fixomull anchors & skin prep sprays',
      'Proper cutting techniques: I-strips, Y-strips, Fan cuts, Web cuts & Donut holes'
    ]
  },
  {
    number: '03',
    title: 'Physiological & Biomechanical Effects of Taping',
    summary: 'Physiological taping, biomechanical taping, pain modulation, edema clearance, and neuromuscular movement support.',
    hours: '0.8 CPD Hour',
    lessons: [
      'The Gate Control Theory of pain modulation through cutaneous tactile stimulation',
      'Decompressing the subcutaneous lymphatic space for accelerated bruise and hematoma reabsorption',
      'Biomechanical load redistribution: Levers, vectors, and moment arm alterations',
      'Psychological and movement confidence enhancement in competitive athletes'
    ]
  },
  {
    number: '04',
    title: 'Taping for Muscles, Tendons & Ligaments',
    summary: 'Muscle facilitation, muscle inhibition, tendon offloading, and structural ligament protection.',
    hours: '1.0 CPD Hour',
    lessons: [
      'Origin-to-insertion application for muscle facilitation (weak or inhibited muscle groups)',
      'Insertion-to-origin application for muscle inhibition (cramped or hypertonic fibers)',
      'Mechanical unloading bands for patellar tendon, Achilles tendon & tennis elbow',
      'Direct ligament reinforcement and joint capsular support'
    ]
  },
  {
    number: '05',
    title: 'Musculoskeletal Taping: Regional Applications',
    summary: 'Shoulder, knee, ankle, spine, elbow, wrist pain reduction, joint stabilization, and functional athletic support.',
    hours: '1.2 CPD Hours',
    lessons: [
      'Shoulder complex: Subacromial decompression, AC joint sprain & scapular setting',
      'Spine & pelvis: Lumbar paraspinal unloading, SI joint stability & thoracic posture',
      'Knee joint: Patellar tracking, meniscus unloading, MCL/LCL stability & Hoffa fat pad relief',
      'Foot & ankle: Plantar fasciitis arch cradle, Achilles tendon strap & ankle mortise lock'
    ]
  },
  {
    number: '06',
    title: 'Special Populations: Neuro, Paediatric, Sports & Women’s Health',
    summary: 'Targeted taping adaptations for neurological deficits, paediatric developmental milestones, athletic performance, and women’s health.',
    hours: '0.8 CPD Hour',
    lessons: [
      'Neurological taping: Hypotonic postural activation, spasticity management & foot drop',
      'Paediatric rehabilitation: Torticollis, in-toeing, CP alignment & sensory stimulation',
      'Women’s health: Diastasis recti support, pregnancy round ligament relief & pelvic floor',
      'Geriatric considerations: Fragile skin protocols, gentle removal & balance support'
    ]
  },
  {
    number: '07',
    title: 'Postural & Biomechanical Correction',
    summary: 'Postural alignment, biomechanical fault assessment, vector-based correction, and movement pattern optimization.',
    hours: '0.8 CPD Hour',
    lessons: [
      'Identifying kinetic chain dysfunctions: Pronation distortion syndrome & pelvic tilt',
      'Vector taping to guide joint centration during dynamic functional movements',
      'Upper crossed syndrome: Anterior shoulder rollout & cervical decompression',
      'Lower crossed syndrome: Gluteal activation & anterior pelvic tilt correction'
    ]
  },
  {
    number: '08',
    title: 'Combination Taping & Advanced Multi-Layer Techniques',
    summary: 'Multi-layer hybrid taping, synergy between rigid and elastic materials, and complex sports trauma management.',
    hours: '0.8 CPD Hour',
    lessons: [
      'Layering rules: When to combine rigid base anchors with elastic dynamic recoil strips',
      'Hybrid sports taping for multi-directional high-impact contact sports',
      'Customized tension gradient techniques for complex multi-plane joint laxity',
      'Dressing and taping integration over surgical incisions and open wounds'
    ]
  },
  {
    number: '09',
    title: 'Case-Based Practical Demonstrations & Clinical Planning',
    summary: 'Clinical case demonstrations, taping selection algorithms, on-court treatment planning, and practical exam walkthrough.',
    hours: '0.8 CPD Hour',
    lessons: [
      'Real-world patient case 1: Marathon runner with acute ITB friction syndrome',
      'Real-world patient case 2: Professional basketball player with chronic recurrent ankle sprain',
      'Real-world patient case 3: Desk worker with severe chronic cervicogenic headache & thoracic kyphosis',
      'Treatment planning rubric: Integrating taping as a purposeful adjunct alongside manual therapy & rehab'
    ]
  }
];

export const FAQS = [
  {
    category: 'Clinical Reasoning & Evidence',
    question: 'How does CCT teach clinical reasoning rather than just visual taping patterns?',
    answer: 'CCT does not teach you to memorize static lines on an anatomy chart. Dr. Chakshu Bansal emphasizes the underlying mechanics: skin histology, mechanoreceptor stimulation, fascial glide, and biomechanical vector angles. You learn why to choose a specific tape, how to calculate tension (e.g., 10-15% for lymphatic drainage vs. 50-75% for mechanical correction), and how to assess patient response immediately.'
  },
  {
    category: 'Clinical Reasoning & Evidence',
    question: 'Can taping be used as a stand-alone therapy, or should it be combined with exercise?',
    answer: 'Yes, CCT explicitly teaches that taping is an adjunct to comprehensive assessment-led rehabilitation. Taping temporarily unloads irritated tissue, gates pain, and provides sensory proprioception so that your corrective exercises, manual therapy, and movement retraining can be performed with greater confidence and proper biomechanics.'
  },
  {
    category: 'Clinical Reasoning & Evidence',
    question: 'Is clinical taping supported by scientific evidence?',
    answer: 'CCT is completely transparent about clinical evidence: taping is best utilized as a supportive adjunct. Studies demonstrate statistically significant benefits for short-term pain relief, sensory feedback, proprioceptive awareness, and joint stability when combined with active exercise. The course teaches you realistic, evidence-grounded patient expectations.'
  },
  {
    category: 'Curriculum & Experience',
    question: 'How is CCT structured across the four taping systems?',
    answer: 'CCT is a 1-month programme carrying 8 CPD Hours. It is structured from foundations (skin mechanics, tape science, safety) through the four individual tape types (kinesiology, rigid, semi-elastic, sports), into body-region applications, special populations (neuro, paediatrics, women’s health), biomechanical correction, combination taping, and clinical case demonstrations.'
  },
  {
    category: 'Curriculum & Experience',
    question: 'Is the course self-paced with pre-recorded demo videos?',
    answer: 'Yes! All practical demonstrations are pre-recorded in crisp high definition with multiple camera angles (close-up on tension, hand placement, and anchor cuts). You receive lifetime access, allowing you to watch, pause, practice on a colleague or patient, and revisit whenever you encounter a rare clinical presentation.'
  },
  {
    category: 'Curriculum & Experience',
    question: 'Is there an in-person hands-on workshop option?',
    answer: 'Yes. While the online certification is completely self-contained with comprehensive demo videos, learners who want supervised, in-person practice can attend practical workshops and clinical observership at Arunalaya Healthcare, Patel Nagar, New Delhi.'
  },
  {
    category: 'Instructor & Leadership',
    question: 'Who is the lead instructor for the CCT course?',
    answer: 'The course is designed and taught by Dr. Chakshu Bansal, Ph.D. Scholar (America), Master in Physiotherapy (Musculoskeletal), Certified Taping Master Trainer (Canada), Founder of Physioneeds Academy, and Creator of Tapedia (the world\'s first encyclopedia of taping techniques). She served as Lead Physio for InBL Pro 2025 and co-developed KinetiKinetic Manual Therapy (KKMT) with academic guidance from Prof. (Dr.) Krishna N. Sharma.'
  },
  {
    category: 'Eligibility & Requirements',
    question: 'Do I need prior specialisation or advanced degrees to enrol?',
    answer: 'No advanced prior specialisation is required. The course is open to physiotherapists (BPT, MPT), physiotherapy students/interns, sports therapists, manual therapists, athletic trainers, and rehab practitioners. The curriculum starts from foundational principles and progresses systematically to advanced multi-layer sports applications.'
  },
  {
    category: 'Certification & Credential',
    question: 'What certificate do I receive upon completion, and may I use a suffix?',
    answer: 'Upon successful completion, you receive the official "Certification in Clinical Taping" issued by Physioneeds Academy, London, UK and delivered by Physioneeds Academy India (Ashira Innovations Pvt Ltd). You earn the authorized right to use the professional suffix "CCT" (Certified in Clinical Taping) alongside your name. The certificate includes a verifiable registration ID and QR code.'
  },
  {
    category: 'Certification & Credential',
    question: 'How many CPD points or CEUs does CCT provide?',
    answer: 'The Certification in Clinical Taping carries 8 CPD Hours, accredited by the CPD Standards Office and backed by international recognitions from IAOTH (UK) and IRAP.'
  },
  {
    category: 'Comparison',
    question: 'What is the difference between CCT and CKT?',
    answer: 'Choose CCT (Certification in Clinical Taping) if you want the comprehensive 4-in-1 umbrella: kinesiology tape, rigid zinc oxide tape, semi-elastic dynamic tape, and fast sports tape. Choose CKT (Certification in Kinesiology Taping) if you want an exhaustive, 130+ technique deep dive solely focused on the elastic kinesio method. Many clinicians start with CCT for multi-system clinical breadth.'
  },
  {
    category: 'Enrolment & Support',
    question: 'What happens after I enrol?',
    answer: 'You receive instant login access to the entire video lecture series, practical demos, and clinical case library. You are also welcomed into our student community with direct academic support and mentor access from Dr. Chakshu Bansal and our clinical faculty.'
  },
  {
    category: 'Enrolment & Support',
    question: 'Can international physiotherapists outside India enrol?',
    answer: 'Yes! Physioneeds Academy has trained clinicians across 191 countries. The online platform accepts international cards, PayPal, and local payment methods with country-adjusted pricing.'
  },
  {
    category: 'Enrolment & Support',
    question: 'How can I speak to an academic counsellor before enrolling?',
    answer: 'You can connect directly with our academic team on WhatsApp or phone at +91 99901 00373, +91 99909 93318, or +91 88002 20066. Our counsellors will answer any syllabus, payment, or certificate questions.'
  }
];
