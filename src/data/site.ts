export const profile = {
  name: "Athulya Ratnayake",
  role: "Research Assistant at the Multidisciplinary AI Research Center, University of Peradeniya",
  location: "Kandy, Sri Lanka",
  email: "ratnayakeathulya@gmail.com",
  biography:
    "I work at the intersection of mathematics, signal processing, and machine learning, with a strong interest in probability, statistics, stochastic signal processing, and the mathematical foundations of machine learning. My recent work spans remote sensing, demographic analysis, and implicit neural representations.",
  researchFocus: [
    "Mathematical foundations of machine learning",
    "Signal processing and remote sensing",
    "Demographic modeling and AI for social systems",
    "Implicit neural representations and restoration",
  ],
  socials: [
    {
      label: "Google Scholar",
      handle: "Publications and citations",
      url: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=qQGNVkIAAAAJ",
    },
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/athulya-ratnayake",
      url: "https://www.linkedin.com/in/athulya-ratnayake",
    },
    {
      label: "GitHub",
      handle: "github.com/athulya24453",
      url: "https://www.github.com/athulya24453",
    },
    {
      label: "Facebook",
      handle: "facebook.com/share/1AprsTdjzN",
      url: "https://www.facebook.com/share/1AprsTdjzN/",
    },
  ],
  metrics: [
    { label: "Publications", value: "6", note: "Journals, conference papers, and works under review" },
    { label: "Projects", value: "5", note: "Research and applied AI projects highlighted from the CV" },
    { label: "Articles", value: "2", note: "Long-form reflective engineering writing with full-screen reader" },
    { label: "Recognition", value: "Top 100", note: "Global IEEEXtreme placement in three consecutive years" },
  ],
};

export const publications = [
  {
    title:
      "Mamba-FCS: Joint Spatio-Frequency Feature Fusion, Change-Guided Attention, and SeK Loss for Enhanced Semantic Change Detection in Remote Sensing",
    authors:
      "Buddhi Wijenayake, Athulya Ratnayake, Praveen Sumanasekara, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath, Nichula Wasalathilaka",
    venue: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    doi: "https://doi.org/10.1109/JSTARS.2026.3663066",
    status: "Peer-reviewed journal",
  },
  {
    title:
      "Preprocessing Algorithm Leveraging Geometric Modeling for Scale Correction in Hyperspectral Images for Improved Unmixing Performance",
    authors:
      "Praveen Sumanasekara, Athulya Ratnayake, Buddhi Wijenayake, Keshawa Ratnayake, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath",
    venue: "Under second review at IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    doi: "https://doi.org/10.48550/arXiv.2508.08431",
    status: "Under review",
  },
  {
    title: "Devising PoPStat: A Metric to Assess Mortality Dynamics within Demographic Transition",
    authors:
      "Tharaka Fonseka, Buddhi Wijenayake, Athulya Ratnayake, Inosha Alwis, Supun Sudaraka Manathunga, Roshan Godaliyadda, Samath Dharmarathne, Vijitha Herath, Parakrama Ekanayake, Isuru Thilakasiri",
    venue: "Under review in IEEE Transactions on Computational Social Systems",
    doi: "https://doi.org/10.48550/arXiv.2501.11514",
    status: "Under review",
  },
  {
    title: "Enhanced SCanNet with CBAM and Dice Loss for Semantic Change Detection",
    authors:
      "Athulya Ratnayake, Buddhi Wijenayake, Praveen Sumanasekara, Roshan Godaliyadda, Vijitha Herath, Parakrama Ekanayake",
    venue: "2025 Moratuwa Engineering Research Conference (MERCon)",
    doi: "https://doi.org/10.1109/MERCon67903.2025.11217111",
    status: "Conference paper",
  },
  {
    title: "Precision Spatio-Temporal Feature Fusion for Robust Remote Sensing Change Detection",
    authors:
      "Buddhi Wijenayake, Athulya Ratnayake, Praveen Sumanasekara, Nichula Wasalathilaka, Mathivathanan Piratheepan, Roshan Godaliyadda, Mervyn Ekanayake, Vijitha Herath",
    venue: "IEEE 19th International Conference on Industrial and Information Systems (ICIIS) 2025",
    doi: "https://doi.org/10.48550/arXiv.2507.11523",
    status: "Conference paper",
  },
  {
    title:
      "PoPStat-COVID19: Leveraging Population Pyramids to Quantify Demographic Vulnerability to COVID-19",
    authors:
      "Buddhi Wijenayake, Athulya Ratnayake, Lelumi Edirisinghe, Uditha Wijeratne, Tharaka Fonseka, Roshan Godaliyadda, Samath Dharmaratne, Parakrama Ekanayake, Vijitha Herath, Insoha Alwis, Supun Manathunga",
    venue: "25th International Conference on Advances in ICT for Emerging Regions (ICTer) 2025",
    doi: "https://doi.org/10.48550/arXiv.2509.14213",
    status: "Conference paper",
  },
  {
    title:
      "Correlation Analysis of Age Structure Metrics and Cause-Specific Mortality: A Global and WHO Regional Comparison using the Top 5 Causes of Death in 2021",
    authors:
      "L Edirisinghe, B Wijenayake, A Ratnayake, T Fonseka, R Godalliyadda, S Dharmaratne, P Ekanayake, V Herath",
    venue: "1st International Conference on Applied Sciences (ICAS) 2025",
    doi: "",
    status: "Conference paper",
  },
];

export const projects = [
  {
    title: "Satellite Image-Based Remote Sensing for Change Detection and Landscape Mapping",
    period: "September 2024 - August 2025",
    category: "Undergraduate final year project",
    highlights: [
      "Designed a spatio-frequency fusion strategy with change-guided attention to better capture meaningful landscape transformations.",
      "Integrated CBAM into the decoder to suppress noise and sharpen change boundaries.",
      "Improved minority-class sensitivity with Dice Loss and loss functions tailored to changed-versus-unchanged separation.",
    ],
  },
  {
    title: "HeritageAI: NVIDIA-Supported Heritage Image Restoration Using Diffusion and INRs",
    period: "October 2023 - Present",
    category: "Ongoing research project",
    highlights: [
      "Contributing to an NVIDIA-funded heritage restoration project centered on generative AI for cultural preservation.",
      "Developing diffusion-based and implicit neural representation pipelines for restoring degraded historical photographs and documents.",
      "Implementing INR-driven denoising workflows that remove blemishes, noise, and structural artifacts in heritage imagery.",
    ],
  },
  {
    title: "A Data-Driven Demographic Analysis Approach for Understanding Mortality Variation Across Nations",
    period: "June 2023 - Present",
    category: "Ongoing research project",
    highlights: [
      "Developed PoPDivergence, a KL-divergence-based scalar to compare national population pyramids against an optimized reference.",
      "Introduced PoPStat to quantify demographic influence on disease-specific mortality across 371 global diseases.",
      "Benchmarked the method against HDI, GDP, median age, and life expectancy, showing stronger explanatory power for many diseases.",
    ],
  },
  {
    title: "Implicit Neural Representation",
    period: "September 2025 - Present",
    category: "Theoretical research",
    highlights: [
      "Studying implicit neural representations as continuous-function models for signals rather than discrete grids.",
      "Derived the Neural Tangent Kernel for a complex-valued INR architecture.",
      "Investigating efficient NTK computation using Jacobian-vector and vector-Jacobian products.",
    ],
  },
  {
    title: "Algorithm Development for Hyperspectral Unmixing",
    period: "September 2024 - August 2025",
    category: "Undergraduate research",
    highlights: [
      "Developed a preprocessing method that corrects large illumination-induced scale distortions before unmixing.",
      "Restored the simplex geometry assumed by the Linear Mixing Model to improve downstream abundance estimation.",
      "Introduced a perspective-projection-based scale-correction algorithm that reduced abundance estimation errors by roughly 50 percent across diverse unmixing methods.",
    ],
  },
];

export const achievements = [
  {
    title: "Manamperi Award (Engineering) - Merit Award",
    period: "2025",
    category: "Research recognition",
    details:
      "Awarded to an outstanding undergraduate engineering research project carried out at a faculty of engineering in a Sri Lankan university or higher education institute.",
  },
  {
    title: "Prof. W.P. Jayasekara Prize",
    period: "2025",
    category: "Departmental award",
    details:
      "Awarded for the best final year research project in Electrical and Electronic Engineering at the University of Peradeniya.",
  },
  {
    title: "IEEEXtreme Global Top 100 for Two Consecutive Years",
    period: "2023 and 2024",
    category: "Competitive programming",
    details:
      "Placed in the global top 100 in IEEEXtreme 17.0, and 18.0, becoming part of the first team from Sri Lanka to sustain that achievement across three consecutive years.",
  },
  {
    title: "IEEEXtreme 18.0",
    period: "2024",
    category: "Competitive programming",
    details: "Achieved Global Rank 66 and Country Rank 01 in Sri Lanka.",
  },
  {
    title: "IEEEXtreme 17.0",
    period: "2023",
    category: "Competitive programming",
    details: "Achieved Global Rank 65 and Country Rank 01 in Sri Lanka.",
  },
  {
    title: "Coders v11.0 All Island Competitive Programming Competition",
    period: "2024",
    category: "Competitive programming",
    details: "Champions.",
  },
  {
    title: "Realhack 5.0 Islandwide Hackathon",
    period: "2024",
    category: "Hackathon",
    details: "2nd runners-up.",
  },
  {
    title: "Cypher 2.0 All Island Competitive Programming Competition",
    period: "2024",
    category: "Competitive programming",
    details: "2nd runners-up.",
  },
  {
    title: "MoraXtreme 8.0 All Island Competitive Programming Competition",
    period: "2023",
    category: "Competitive programming",
    details: "Champions.",
  },
  {
    title: "Coders v10.0 All Island Competitive Programming Competition",
    period: "2023",
    category: "Competitive programming",
    details: "1st runners-up.",
  },
  {
    title: "Coders v9.0 All Island Competitive Programming Competition",
    period: "2022",
    category: "Competitive programming",
    details: "Champions.",
  },
  {
    title: "Shantha Bandara Inter-Faculty Debate Competition",
    period: "2022",
    category: "University competition",
    details: "Champions.",
  },
];

export const articles = [
  {
    id: "article-pascal-triangle",
    title: "Pascal's Triangle, Part I: The Visible Architecture of the Triangle",
    preview:
      "An exploration of Pascal's triangle as a visible mathematical structure, covering boundary entries, row symmetry, and the figurate-number sequences hidden in its diagonals.",
    pdfUrl: "/PascalTriangle_1.pdf",
    paragraphs: [
      "Pascal's triangle is one of the most familiar objects in elementary mathematics, yet it contains a surprising wealth of structure. Before turning to its algebraic role in binomial expansion, it is worthwhile to study the triangle simply as a pattern of numbers built from a very simple rule. In this article, I examine its visible architecture: the boundary entries, the symmetry of each row, and the remarkable sequences that arise along its shallow diagonals.",
      "The triangle is built according to a simple rule: the first and last entry in each row are 1, and every interior entry is obtained by adding the two entries directly above it. Although the rule is simple, several striking patterns already appear at this stage, and the purpose of the article is to establish the first of them.",
      "The first visible fact is that every row begins and ends with 1. This may look too simple to deserve attention, yet it plays an important role: the boundary of the triangle acts as a fixed frame from which all interior entries are generated.",
      "A second pattern is immediately apparent: each row reads the same from left to right as from right to left. This symmetry is not accidental. It follows directly from the recursive construction rule, and it means that the left half of the triangle already determines the right half.",
      "Moving from rows to diagonals reveals a new family of patterns. The second shallow diagonal gives the counting numbers 1, 2, 3, 4, and so on. The next shallow diagonal gives the triangular numbers 1, 3, 6, 10, 15, and these arise naturally from repeated addition rather than by external insertion.",
      "The pattern continues into higher diagonals. After the triangular numbers come the tetrahedral numbers, then the pentatope numbers, and more generally the simplex numbers. Each shallow diagonal is obtained by summing the previous one term by term, which shows that Pascal's triangle contains, in a systematic way, repeated sums of repeated sums of 1.",
      "This is one of the most appealing features of the triangle: visible patterns that are easy to observe but are not accidental. They emerge directly from the construction of the triangle itself.",
      "Even before one studies its algebraic significance, Pascal's triangle reveals a remarkable internal order. Its boundary remains fixed at 1, each row is symmetric, and its shallow diagonals generate whole families of figurate numbers. In the next article, I move from visible structure to algebraic meaning and show that the rows of Pascal's triangle are precisely the coefficients that appear in the expansion of (1 + x)^n.",
    ],
    closingHighlight:
      "The visible architecture of Pascal's triangle is not a coincidence; it is the natural consequence of a simple recursive rule unfolding into deep numerical structure.",
  },
  {
    id: "article-systems-observe-themselves",
    title: "When Systems Observe Themselves: Reflections on a Mathematical Paradox and Its Lessons for Engineering",
    preview:
      "A reflective article connecting Russell's paradox with self-reference, feedback, and stability in engineering systems.",
    pdfUrl: "",
    paragraphs: [
      "It is often assumed that most problems can be solved by observing the external environment. We measure, we analyse, and we act, correcting errors as they occur. Difficulties arise not necessarily from the complexity of the problem but from a failure to notice important factors beyond our immediate perception. There exists, however, a particular class of problems that occurs when a system begins to turn its attention inward. When a system evaluates its own actions and responds to them, the results can be unexpected.",
      "Self-reference may be helpful, allowing learning and correction. Yet history shows that it can also cause instability and, in extreme cases, a breakdown of logical consistency. Mathematics identified this phenomenon long before it was widely considered in engineering practice.",
      "In 1901, Bertrand Russell described what is now known as Russell's paradox. He asked whether it is possible to consider the set of all sets that do not contain themselves. At first glance, this question seems simple. Yet it leads to a contradiction. If such a set exists, it both contains itself and does not contain itself. This logical conflict demonstrates that even fundamental principles may fail when they are applied to themselves.",
      "This paradox has relevance beyond mathematics. In electrical and electronic engineering, similar situations occur in systems that use feedback. In a control loop, the output of a system is returned to its input, creating a form of self-reference. This principle is widely applied in vehicle cruise control, audio amplifiers, and robotic motion control. Feedback is essential because it allows systems to adjust to changing conditions and maintain stability.",
      "However, self-reference can also introduce risk. Positive feedback can change stability into oscillation. Excessive reliance on the system's own outputs can amplify small errors and produce unpredictable behaviour. In such cases, the system may no longer behave as expected. What was designed to stabilise can instead worsen the problem. Engineers must therefore limit feedback carefully to prevent such outcomes.",
      "It is important to note that these limitations do not arise from hardware flaws or environmental noise. Even with perfect knowledge of a system, self-reference can produce effects that are inherently uncertain. The paradox is embedded in the structure of the system itself. Russell's paradox teaches a clear lesson: logic may fail not because it is weak but because it is applied to itself without limitation.",
      "Engineering systems face the same challenge. Feedback allows control but can also produce instability. Self-correction may maintain equilibrium, but uncontrolled self-reference can cause systems to behave unpredictably. In both fields, the most powerful tools carry the greatest risks when not properly managed.",
      "We often trust models and equations because they appear precise and reliable. Yet even perfectly logical rules may give rise to unexpected results when a system observes and reacts to its own behaviour.",
    ],
    closingHighlight:
      "When a system is capable of observing itself and responding to its own actions, how can we ensure that it will regulate its behaviour rather than undermine its own logical coherence?",
  },
];
