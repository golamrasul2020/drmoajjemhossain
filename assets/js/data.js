/* =========================================================
   SITE_DATA - single source of truth for the website
========================================================= */
const DOCTOR_NAME = "Prof. Dr. Md. Moajjem Hossain Talukder";

const SITE_DATA = {
  seo: {
    title: `${DOCTOR_NAME} | Neurosurgeon & Neurospine Specialist`,
    description: `${DOCTOR_NAME} is a neurosurgeon specializing in brain, spine and neurotrauma care.`,
    url: "https://www.example-doctor.com",
    ogImage: "assets/img/og-cover.jpg"
  },

  doctor: {
    name: DOCTOR_NAME,
    designation: "MBBS, MS, MCh (Neurosurgery)",
    specialty: "Neurosurgeon & Neurotrauma Specialist",
    hospital: "National Institute of Neurosciences & Hospital, Dhaka",
    photo: "assets/img/doctor-hero.jpg",
    photoProfile: "assets/img/doctor-profile.jpg",
    bioShort: `${DOCTOR_NAME} is a renowned neurosurgeon with extensive experience in treating complex brain, spine and neurotrauma conditions.`,
    bioLong: `${DOCTOR_NAME} provides evidence-based, individualized neurosurgical care with a focus on brain, spine and neurotrauma conditions.`,
    email: "contact@example-doctor.com",
    phone: "+880 0000 000000",
    address: "National Institute of Neurosciences & Hospital, Agargaon, Dhaka, Bangladesh",
    consultationHours: "Saturday – Thursday: 10:00 AM – 5:00 PM",
    social: { linkedin: "#", twitter: "#", youtube: "#", researchgate: "#" }
  },

  heroSlides: [
    {
      image: "assets/img/hero-1.jpg",
      eyebrow: "Neurosurgeon & Neurotrauma Specialist",
      title: `Expert Care by ${DOCTOR_NAME}`,
      text: "Advanced neurosurgical and neurotrauma care focused on precision, recovery and compassion.",
      ctaPrimary: { label: "Book an Appointment", href: "#appointment" },
      ctaSecondary: { label: "Explore Doctor Profile", href: "#profile" }
    },
    {
      image: "assets/img/hero-2.jpg",
      eyebrow: "Neurotrauma Expertise",
      title: "Specialized Brain and Spine Care",
      text: "Comprehensive evaluation and treatment for traumatic brain and spinal injuries.",
      ctaPrimary: { label: "Explore Services", href: "#neurotrauma" }
    },
    {
      image: "assets/img/hero-3.jpg",
      eyebrow: "Advanced Clinical Care",
      title: "Precision. Experience. Compassion.",
      text: "Individualized, patient-centered neurosurgical care.",
      ctaPrimary: { label: "View Expertise", href: "#expertise" }
    }
  ],

  stats: [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 4000, suffix: "+", label: "Procedures Performed" },
    { value: 30, suffix: "+", label: "Publications" },
    { value: 12000, suffix: "+", label: "Patients Treated" }
  ],

  timeline: [
    { year: "MBBS", title: "Medical Education", detail: "Medical training and clinical practice" },
    { year: "MS", title: "General Surgery", detail: "Advanced surgical training" },
    { year: "MCh", title: "Neurosurgery", detail: "Specialist neurosurgical training" },
    { year: "Present", title: "Consultant Neurosurgeon", detail: "Brain, spine and neurotrauma care" }
  ],

  credentials: {
    memberships: ["Neurological Society", "National Association of Neurosurgeons", "Trauma Society"],
    interests: ["Traumatic Brain Injury", "Spinal Trauma", "Neurovascular Surgery", "Skull Base Surgery"],
    awards: ["Clinical Excellence Recognition", "Patient Care Award"]
  },

  expertise: [
    { icon: "bi-activity", category: "Neurotrauma", title: "Traumatic Brain Injury", desc: "Evaluation and management of traumatic brain injuries." },
    { icon: "bi-shield-exclamation", category: "Neurotrauma", title: "Intracranial Hemorrhage", desc: "Diagnosis and treatment of intracranial bleeding." },
    { icon: "bi-cpu", category: "Neurosurgery", title: "Brain Tumor Surgery", desc: "Surgical management of intracranial tumors." },
    { icon: "bi-person-arms-up", category: "Spine", title: "Spinal Trauma", desc: "Treatment of traumatic spinal injuries and fractures." },
    { icon: "bi-lightning-charge", category: "Spine", title: "Spinal Cord Injury", desc: "Comprehensive care for spinal cord injury." },
    { icon: "bi-arrow-repeat", category: "Spine", title: "Degenerative Spine Disorders", desc: "Management of disc, stenosis and degenerative conditions." }
  ],

  treatments: [
    { id: "tbi-management", category: "Neurotrauma", title: "Traumatic Brain Injury Management", overview: "Structured evaluation and treatment for head injury.", indications: ["Head trauma", "Altered consciousness"], diagnosis: ["Neurological examination", "CT / MRI"], options: ["Observation", "Medical management", "Surgery where indicated"], recovery: "Recovery depends on injury severity.", faqs: [{ q: "Is surgery always required?", a: "No. Treatment depends on clinical findings." }] },
    { id: "spinal-trauma-care", category: "Spine", title: "Spinal Trauma Care", overview: "Assessment and management of acute spinal injuries.", indications: ["Back or neck pain after trauma", "Neurological deficit"], diagnosis: ["X-ray / CT / MRI"], options: ["Conservative care", "Spinal stabilization"], recovery: "Rehabilitation is individualized.", faqs: [{ q: "Will I need surgery?", a: "This depends on imaging and neurological status." }] },
    { id: "brain-tumor-surgery", category: "Brain", title: "Brain Tumor Surgery", overview: "Surgical planning and treatment of intracranial tumors.", indications: ["Intracranial mass", "Neurological symptoms"], diagnosis: ["MRI with contrast"], options: ["Resection", "Biopsy", "Combined care"], recovery: "Follow-up imaging guides recovery.", faqs: [{ q: "Are all brain tumors operated on?", a: "No. Treatment depends on the individual case." }] }
  ],

  whyChoose: [
    { icon: "bi-clipboard2-pulse", title: "Specialized Expertise", desc: "Focused brain, spine and neurotrauma experience." },
    { icon: "bi-heart-pulse", title: "Patient-Centered Care", desc: "Individualized attention throughout treatment." },
    { icon: "bi-people", title: "Multidisciplinary Collaboration", desc: "Coordinated care with specialist teams." }
  ],

  hospitals: [
    {
      name: "National Institute of Neurosciences & Hospital",
      department: "Department of Neurosurgery",
      address: "Agargaon, Sher-e-Bangla Nagar, Dhaka 1207, Bangladesh",
      phone: "+880 0000 000000",
      schedule: "Saturday – Thursday: 10:00 AM – 5:00 PM",
      mapEmbed: ""
    },
    {
      name: "Neurotrauma & Spine Clinic",
      department: "Neurotrauma and Spine Consultation",
      address: "Dhaka, Bangladesh",
      phone: "+880 0000 000001",
      schedule: "By appointment",
      mapEmbed: ""
    }
  ],

  publications: [],
  articles: [],
  faqs: [
    { q: "When should I consult a neurosurgeon?", a: "Consultation is advised for persistent neurological symptoms, head or spine trauma, or referral by another physician." },
    { q: "What does a neurotrauma specialist treat?", a: "Neurotrauma specialists manage injuries affecting the brain, skull and spine." },
    { q: "What should I bring to my consultation?", a: "Bring previous medical records, imaging, medication lists and referral letters where applicable." }
  ],
  testimonials: [
    { name: "Patient A.", category: "Neurotrauma Care", text: "The explanation of every step gave my family confidence." },
    { name: "Anonymous Patient", category: "Spine Surgery", text: "I felt listened to throughout my consultation and recovery." }
  ]
};
