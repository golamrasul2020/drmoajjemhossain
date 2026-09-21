/* =========================================================
   SITE_DATA — Single source of truth (simulated CMS layer)
   Replace values below with verified, real information.
========================================================= */
heroSlides: [
  {
    image: "", // set to real photo path later e.g. "assets/img/hero-1.jpg"
    visual: "hero-visual-brain",
    eyebrow: "Neurosurgeon & Neurotrauma Specialist",
    title: "Expert Care for the Brain, Spine & Neurotrauma",
    text: "Advanced neurosurgical and neurotrauma care focused on precision, recovery, and compassionate treatment.",
    ctaPrimary: { label: "Book an Appointment", href: "#appointment" },
    ctaSecondary: { label: "Explore Doctor Profile", href: "#profile" }
  },
  {
    image: "",
    visual: "hero-visual-spine",
    eyebrow: "Neurotrauma Expertise",
    title: "Specialized Neurotrauma Care When Every Detail Matters",
    text: "Comprehensive evaluation and treatment for traumatic brain and spinal injuries.",
    ctaPrimary: { label: "Explore Neurotrauma Services", href: "#neurotrauma" }
  },
  {
    image: "",
    visual: "hero-visual-pathway",
    eyebrow: "Advanced Clinical Care",
    title: "Precision. Experience. Compassion.",
    text: "Combining modern neurosurgical knowledge with individualized patient-centered care.",
    ctaPrimary: { label: "View Areas of Expertise", href: "#expertise" }
  }
]

const SITE_DATA = {

  seo: {
    title: "Dr. [Full Name] | Neurosurgeon & Neurotrauma Specialist",
    description: "Dr. [Full Name] is a board-certified neurosurgeon specializing in neurotrauma, brain and spine surgery at [Hospital Name], [City].",
    url: "https://www.example-doctor.com",
    ogImage: "assets/img/og-cover.jpg"
  },

  doctor: {
    name: "Dr. [Full Name]",
    designation: "MBBS, MS, MCh (Neurosurgery)",
    specialty: "Neurosurgeon & Neurotrauma Specialist",
    hospital: "[Hospital / Institute Name], [City]",
    photo: "assets/img/doctor-hero.jpg",
    photoProfile: "assets/img/doctor-profile.jpg",
    bioShort: "Dr. [Full Name] is a fellowship-trained neurosurgeon dedicated to the evaluation and treatment of traumatic brain and spinal injuries, combining advanced surgical technique with a patient-first philosophy.",
    bioLong: `Dr. [Full Name] completed formal training in Neurosurgery (MCh) at [Institute Name], following an MBBS and MS from [Medical College]. With specialized fellowship training in Neurotrauma & Critical Care Neurosurgery at [Fellowship Institute], Dr. [Name] has dedicated a career to the rapid, precise management of brain and spinal injuries, alongside elective cranial, spinal and neurovascular surgery.

    Dr. [Name] currently practices at [Hospital/Clinic Name], where the focus remains on evidence-based, individualized treatment plans developed in close collaboration with neurology, critical care, orthopedics, and rehabilitation teams.`,
    email: "contact@example-doctor.com",
    phone: "+91 00000 00000",
    address: "[Clinic/Hospital Address], [City], [State] - [PIN]",
    consultationHours: "Mon – Sat: 10:00 AM – 5:00 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      youtube: "#",
      researchgate: "#"
    }
  },

  stats: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 4000, suffix: "+", label: "Procedures Performed" },
    { value: 30, suffix: "+", label: "Publications" },
    { value: 12000, suffix: "+", label: "Patients Treated" }
  ],

  heroSlides: [
    {
      image: "assets/img/hero-1.jpg",
      eyebrow: "Neurosurgeon & Neurotrauma Specialist",
      title: "Expert Care for the Brain, Spine & Neurotrauma",
      text: "Advanced neurosurgical and neurotrauma care focused on precision, recovery, and compassionate treatment.",
      ctaPrimary: { label: "Book an Appointment", href: "#appointment" },
      ctaSecondary: { label: "Explore Doctor Profile", href: "#profile" }
    },
    {
      image: "assets/img/hero-2.jpg",
      eyebrow: "Neurotrauma Expertise",
      title: "Specialized Neurotrauma Care When Every Detail Matters",
      text: "Comprehensive evaluation and treatment for traumatic brain and spinal injuries.",
      ctaPrimary: { label: "Explore Neurotrauma Services", href: "#neurotrauma" }
    },
    {
      image: "assets/img/hero-3.jpg",
      eyebrow: "Advanced Clinical Care",
      title: "Precision. Experience. Compassion.",
      text: "Combining modern neurosurgical knowledge with individualized patient-centered care.",
      ctaPrimary: { label: "View Areas of Expertise", href: "#expertise" }
    }
  ],

  timeline: [
    { year: "20XX", title: "MBBS", detail: "[Medical College Name], [University]" },
    { year: "20XX", title: "MS (General Surgery)", detail: "[Institute Name]" },
    { year: "20XX", title: "MCh (Neurosurgery)", detail: "[Institute Name]" },
    { year: "20XX", title: "Fellowship – Neurotrauma & Critical Care", detail: "[Fellowship Institute]" },
    { year: "20XX – Present", title: "Consultant Neurosurgeon", detail: "[Hospital/Clinic Name]" }
  ],

  credentials: {
    memberships: ["Neurological Society of [Country]", "[National Association of Neurosurgeons]", "[Trauma Society Name]"],
    interests: ["Traumatic Brain Injury", "Spinal Trauma", "Neurovascular Surgery", "Skull Base Surgery"],
    awards: ["[Award / Recognition Name, Year]", "[Award / Recognition Name, Year]"]
  },

  expertise: [
    { icon: "bi-activity", category: "Neurotrauma", title: "Traumatic Brain Injury", desc: "Rapid evaluation and management of mild to severe traumatic brain injuries." },
    { icon: "bi-shield-exclamation", category: "Neurotrauma", title: "Intracranial Hemorrhage", desc: "Diagnosis and surgical/non-surgical management of intracranial bleeds." },
    { icon: "bi-bandaid", category: "Neurotrauma", title: "Skull Fractures", desc: "Assessment and treatment of simple and complex skull fractures." },
    { icon: "bi-cpu", category: "Neurosurgery", title: "Brain Tumor Surgery", desc: "Surgical management of benign and malignant intracranial tumors." },
    { icon: "bi-diagram-3", category: "Neurosurgery", title: "Neurovascular Conditions", desc: "Management of aneurysms, AVMs and other vascular neurosurgical conditions." },
    { icon: "bi-person-arms-up", category: "Spine", title: "Spinal Trauma", desc: "Evaluation and treatment of traumatic spinal injuries and fractures." },
    { icon: "bi-lightning-charge", category: "Spine", title: "Spinal Cord Injury", desc: "Comprehensive care pathways for acute and chronic spinal cord injury." },
    { icon: "bi-arrow-repeat", category: "Spine", title: "Degenerative Spine Disorders", desc: "Management of disc herniation, stenosis and degenerative conditions." }
  ],

  treatments: [
    {
      id: "tbi-management",
      category: "Neurotrauma",
      title: "Traumatic Brain Injury Management",
      overview: "Structured evaluation and treatment pathway for patients presenting with head injury.",
      indications: ["History of head trauma", "Altered consciousness", "Focal neurological deficit"],
      diagnosis: ["Clinical neurological examination", "CT / MRI brain imaging", "Continuous neuro-monitoring where indicated"],
      options: ["Observation & monitoring", "Medical management", "Surgical decompression (where indicated)"],
      recovery: "Recovery pathways vary by injury severity and are guided by ongoing clinical assessment.",
      faqs: [{ q: "Is surgery always required?", a: "No. Many head injuries are managed conservatively; treatment depends on clinical findings." }]
    },
    {
      id: "spinal-trauma-care",
      category: "Spine",
      title: "Spinal Trauma Care",
      overview: "Assessment and management of acute spinal injuries, including fracture stabilization.",
      indications: ["Post-traumatic back/neck pain", "Neurological deficit after injury", "Suspected spinal fracture"],
      diagnosis: ["X-ray / CT / MRI spine", "Neurological assessment"],
      options: ["Bracing & conservative care", "Spinal stabilization surgery"],
      recovery: "A coordinated rehabilitation plan is developed based on injury level and severity.",
      faqs: [{ q: "Will I need surgery?", a: "This depends on stability of the spine and neurological status, determined after imaging and examination." }]
    },
    {
      id: "brain-tumor-surgery",
      category: "Brain",
      title: "Brain Tumor Surgery",
      overview: "Surgical planning and resection of intracranial tumors using modern techniques.",
      indications: ["Radiologically confirmed intracranial mass", "New neurological symptoms"],
      diagnosis: ["MRI with contrast", "Multidisciplinary tumor board review"],
      options: ["Surgical resection", "Biopsy", "Combined management with oncology"],
      recovery: "Post-operative recovery is monitored closely with structured follow-up imaging.",
      faqs: [{ q: "Are all brain tumors operated on?", a: "Not always — management depends on tumor type, location and patient factors." }]
    },
    {
      id: "emergency-craniotomy",
      category: "Emergency Neurosurgery",
      title: "Emergency Decompressive Craniotomy",
      overview: "Time-critical surgical intervention for select cases of raised intracranial pressure.",
      indications: ["Significant mass effect on imaging", "Deteriorating neurological status"],
      diagnosis: ["Emergency CT imaging", "Rapid neurological assessment"],
      options: ["Decompressive craniotomy", "Continued ICU monitoring"],
      recovery: "Recovery is closely monitored in a critical care setting with staged rehabilitation planning.",
      faqs: [{ q: "What determines the need for emergency surgery?", a: "This is determined by clinical presentation and imaging findings assessed by the treating team." }]
    },
    {
      id: "post-op-rehab",
      category: "Follow-up & Rehabilitation",
      title: "Post-Operative Follow-Up & Rehabilitation Coordination",
      overview: "Structured follow-up pathway coordinating rehabilitation after neurosurgical treatment.",
      indications: ["Post-surgical recovery", "Post-neurotrauma rehabilitation needs"],
      diagnosis: ["Periodic clinical review", "Functional assessment"],
      options: ["Physiotherapy coordination", "Cognitive rehabilitation referral", "Scheduled imaging follow-up"],
      recovery: "Follow-up frequency is individualized based on the nature of injury or surgery performed.",
      faqs: [{ q: "How long is follow-up required?", a: "Duration varies by case and is discussed during consultation." }]
    }
  ],

  whyChoose: [
    { icon: "bi-clipboard2-pulse", title: "Specialized Neurotrauma Expertise", desc: "Focused training and experience in acute brain and spine injury management." },
    { icon: "bi-graph-up-arrow", title: "Evidence-Based Clinical Approach", desc: "Treatment decisions grounded in current clinical guidelines and research." },
    { icon: "bi-heart-pulse", title: "Patient-Centered Care", desc: "Individualized attention throughout diagnosis, treatment and recovery." },
    { icon: "bi-people", title: "Multidisciplinary Collaboration", desc: "Coordinated care with neurology, critical care and rehabilitation teams." },
    { icon: "bi-search", title: "Advanced Diagnostic Evaluation", desc: "Comprehensive imaging and neurological assessment protocols." },
    { icon: "bi-calendar2-check", title: "Comprehensive Follow-Up", desc: "Structured post-treatment monitoring and recovery support." }
  ],

  hospitals: [
    {
      name: "[Hospital Name]",
      department: "Department of Neurosurgery",
      address: "[Full Address], [City]",
      phone: "+91 00000 00000",
      schedule: "Mon, Wed, Fri: 10:00 AM – 2:00 PM",
      mapEmbed: ""
    },
    {
      name: "[Clinic Name]",
      department: "Neurotrauma & Spine Clinic",
      address: "[Full Address], [City]",
      phone: "+91 00000 00001",
      schedule: "Tue, Thu, Sat: 3:00 PM – 6:00 PM",
      mapEmbed: ""
    }
  ],

  publications: [
    { year: 2023, title: "Outcomes in Decompressive Craniectomy for Severe TBI: A Review", authors: "[Author A], [Author B], [Doctor Name]", journal: "[Journal Name]", link: "#" },
    { year: 2022, title: "Management Trends in Spinal Cord Injury: A Retrospective Analysis", authors: "[Doctor Name], [Author C]", journal: "[Journal Name]", link: "#" },
    { year: 2021, title: "Neurovascular Complications Following Head Trauma", authors: "[Doctor Name], [Author D]", journal: "[Journal Name]", link: "#" }
  ],

  articles: [
    { category: "Head Injury", image: "assets/img/article-1.jpg", title: "Understanding Concussion: What Patients Should Know", readTime: "4 min read", date: "2024-01-10", summary: "An overview of concussion symptoms, evaluation, and general recovery expectations." },
    { category: "Spine Health", image: "assets/img/article-2.jpg", title: "Signs You Shouldn't Ignore: Back Pain After Injury", readTime: "5 min read", date: "2024-02-02", summary: "General guidance on when post-injury back pain warrants medical evaluation." },
    { category: "Surgery Preparation", image: "assets/img/article-3.jpg", title: "Preparing for Neurosurgery: A General Guide", readTime: "6 min read", date: "2024-03-15", summary: "What patients can generally expect when preparing for a scheduled neurosurgical procedure." },
    { category: "Recovery & Rehabilitation", image: "assets/img/article-4.jpg", title: "Life After Brain Injury: Understanding Rehabilitation", readTime: "7 min read", date: "2024-04-05", summary: "A general look at rehabilitation pathways following traumatic brain injury." }
  ],

  faqs: [
    { q: "When should I consult a neurosurgeon?", a: "Consultation is generally advised for persistent neurological symptoms, head/spine trauma, or when referred by another physician for further evaluation." },
    { q: "What does a neurotrauma specialist treat?", a: "A neurotrauma specialist manages injuries to the brain, skull and spine resulting from trauma, including their surgical and non-surgical treatment." },
    { q: "How is a traumatic brain injury evaluated?", a: "Evaluation typically involves a clinical neurological examination combined with imaging such as CT or MRI, as determined by the treating physician." },
    { q: "What happens during a neurosurgical consultation?", a: "The consultation typically includes a review of history, neurological examination, and discussion of any prior imaging or reports." },
    { q: "What should I bring to my consultation?", a: "Prior medical records, imaging (CT/MRI films or discs), a list of current medications, and referral letters if applicable." },
    { q: "How can I prepare for surgery?", a: "Pre-operative instructions are provided individually based on the planned procedure and overall health status." },
    { q: "What does post-operative follow-up involve?", a: "Follow-up generally includes clinical review, wound assessment, and imaging if required, scheduled according to the procedure performed." }
  ],

  testimonials: [
    { name: "Patient A.", category: "Neurotrauma Care", text: "The explanation of every step of my treatment gave me and my family real confidence during a very stressful time." },
    { name: "Anonymous Patient", category: "Spine Surgery", text: "I felt genuinely listened to throughout my consultation and recovery follow-ups." },
    { name: "Patient R.", category: "Brain Tumor Surgery", text: "Clear communication before and after surgery made a difficult experience much easier to manage." }
  ]
};