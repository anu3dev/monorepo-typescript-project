interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
  }>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ANURAG_RESUME_DATA_OLD = {
  name: 'Anurag Kumar',
  title:
    'Senior Software Engineer | Front-End Architect | Transitioning to Full-Stack (Java + Spring Boot) | AI & LLM Integration',
  location: 'Minneapolis, MN, USA',
  contact: {
    email: 'anu3dev@gmail.com',
    phone: '+1 (612) 456-6855',
    links: {
      Git: 'https://github.com/anu3dev',
      LinkedIn: 'https://www.linkedin.com/in/anu3dev',
      Portfolio: 'https://e2eonline.com',
    },
  },
  summary:
    'Senior Software Engineer with 9+ years of experience developing and optimizing large-scale, enterprise-grade web applications across banking, financial, and automotive domains. Proficient in JavaScript, TypeScript, React, Angular, HTML5, CSS3, and SCSS, with a strong focus on performance, scalability, accessibility (a11y), and component reusability. Experienced in Agile/Scrum development, code reviews, and cross-functional collaboration, contributing across the full SDLC — from requirements analysis and UI architecture to deployment and monitoring. Skilled in implementing micro-frontend architecture, reusable component libraries, and front-end performance optimization to deliver maintainable, high-quality software. Currently expanding full-stack expertise with Java, Spring Boot, RESTful APIs, GraphQL, Docker, and CI/CD pipelines — bridging modern frontend frameworks with robust backend services to deliver seamless, end-to-end digital solutions. Hands-on with RESTful API design, database integration, and containerized deployments, while exploring AI-powered development workflows, LLM-based assistants, and ML-driven automation to enhance software engineering productivity.',
  skills: {
    frontend: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Redux',
      'Accessibility (WCAG/a11y)',
      'Responsive Design',
      'Micro-Frontend Architecture',
    ],
    backend: ['Java', 'Spring Boot', 'Node'],
    build_and_tooling: [
      'Webpack',
      'Vite',
      'Babel',
      'ESLint',
      'Prettier',
      'NPM',
      'PNPM',
      'Yarn',
      'Maven',
      'Gradle',
      'GitLab CI/CD',
    ],
    monitoring_platforms: [
      'Splunk',
      'Kibana',
      'Quantum Metric',
      'Adobe Analytics (Site Cat)',
      'JIRA',
      'Confluence',
      'Postman',
    ],
    devops: [
      'Jenkins',
      'SonarQube',
      'Fortify',
      'Black Duck',
      'AEGIS',
      'GitLab CI',
    ],
    cloud_containers: ['Netlify', 'Docker', 'Render', 'Neon', 'Azure'],
  },
  experience: [
    {
      company: 'Wipro Limited',
      role: 'Tech Lead (Client: U.S. Bank)',
      duration: 'Mar 2023 – Present',
      location: 'Minneapolis, MN, USA',
    },
    {
      company: 'Wipro Limited',
      role: 'Senior Project Engineer (Client: U.S. Bank)',
      duration: 'Aug 2021 – Feb 2023',
      location: 'Pune, India',
    },
    {
      company: 'Krazy Mantra (Payroll – Wipro)',
      role: 'React Developer (Client: U.S. Bank)',
      duration: 'Jun 2021 – Jul 2021',
      location: 'Remote, India',
    },
    {
      company: 'Javnic Solutions',
      role: 'Front-End Developer',
      duration: 'Apr 2018 – May 2021',
      location: 'Noida, India',
    },
    {
      company: 'Cyient Limited',
      role: 'Junior GIS Engineer',
      duration: 'Jan 2016 – Mar 2018',
      location: 'Noida, India',
    },
  ],
  education: {
    degree:
      'Bachelor of Engineering (Electronics and Communication Engineering)',
    university: 'Rashtrasant Tukadoji Maharaj Nagpur University, India',
    duration: '2011–2015',
  },
  additional_details: {
    role_preferences:
      'Open to Full-Stack Developer roles with strong Front-End focus',
    work_authorization: 'H1B Visa (Valid)',
    availability: 'Open to Remote or Hybrid roles',
    current_location: 'U.S.A.',
  },
};

const ANURAG_RESUME_DATA = {
  name: 'Anurag Kumar',
  title:
    'Senior Software Engineer | Front-End Architect | Transitioning to Full-Stack (Java + Spring Boot) | AI & LLM Integration',
  location: 'Minneapolis, MN, USA',
  contact: {
    email: 'anu3dev@gmail.com',
    phone: '+1 (612) 456-6855',
    links: {
      Git: 'https://github.com/anu3dev',
      LinkedIn: 'https://www.linkedin.com/in/anu3dev',
      Portfolio: 'https://e2eonline.com',
    },
  },
  summary:
    'Senior Software Engineer with 9+ years of experience developing and optimizing enterprise-grade web applications across banking, financial, and automotive domains. Proficient in JavaScript, TypeScript, React, Angular, HTML5, CSS3, and SCSS, with strong focus on performance, scalability, accessibility (a11y), and reusability. Experienced in Agile/Scrum development, code reviews, and cross-functional collaboration, contributing across the full SDLC — from requirements analysis and UI architecture to deployment and monitoring. Skilled in micro-frontend architecture, reusable component libraries, and performance optimization. Currently expanding full-stack expertise with Java, Spring Boot, RESTful APIs, GraphQL, Docker, and CI/CD pipelines — bridging modern frontend frameworks with robust backend services. Exploring AI-powered development workflows, LLM-based assistants, and ML-driven automation to enhance engineering productivity.',
  skills: {
    frontend: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Redux',
      'Accessibility (WCAG/a11y)',
      'Responsive Design',
      'Micro-Frontend Architecture',
    ],
    backend: ['Java', 'Spring Boot (Hands-on Projects)', 'Node'],
    build_and_tooling: [
      'Webpack',
      'Vite',
      'Babel',
      'ESLint',
      'Prettier',
      'NPM',
      'PNPM',
      'Yarn',
      'Maven',
      'Gradle',
      'GitLab CI/CD',
    ],
    monitoring_platforms: [
      'Splunk',
      'Kibana',
      'Quantum Metric',
      'Adobe Analytics (Site Cat)',
      'JIRA',
      'Confluence',
      'Postman',
    ],
    devops: [
      'Jenkins',
      'SonarQube',
      'Fortify',
      'Black Duck',
      'AEGIS',
      'GitLab CI',
    ],
    cloud_containers: ['Netlify', 'Docker', 'Render', 'Neon', 'Azure'],
    ai_ml: ['OpenAI GPT APIs', 'Prompt Engineering', 'LLM Integration'],
  },
  experience: [
    {
      company: 'Wipro Limited',
      role: 'Tech Lead (Client: U.S. Bank)',
      duration: 'Mar 2023 – Present',
      location: 'Minneapolis, MN, USA',
      project_highlights: [
        'Leading the Onboarding V2 migration initiative for U.S. Bank — modernization of the existing onboarding micro-app into a Vite-based mono-repo architecture, supporting 13,000+ partner implementations (Edward Jones, State Farm, Union Bank).',
      ],
      key_contributions: [
        'Migrated legacy onboarding micro-app to a Vite-based mono-repo (Onboarding V2), improving build speed and scalability.',
        "Co-built 'Merge Mind', an internal AI-driven Merge Request review assistant leveraging GPT-4 within GitLab CI/CD pipelines.",
        'Built AEM integration for partner-driven content and styling, creating a config-driven architecture for white-labeled onboarding flows.',
        'Defined mono-repo architecture (apps/packages) and dependency strategy for scalable shared codebases.',
        'Mentored onsite–offshore UI teams; reviewed MRs enforcing TypeScript, ESLint, and SonarQube standards.',
        'Managed multi-environment deployments (IT, UAT, Pre-Prod, Prod, Banker, Branch, Pilot) using CI/CD automation.',
        'Monitored application performance using Splunk and Kibana, driving proactive defect triage and release improvements.',
      ],
      tech_stack: [
        'React',
        'TypeScript',
        'Vite',
        'PNPM',
        'Mono-repo Architecture',
        'AEM',
        'HTML5',
        'SCSS',
        'Webpack',
        'Jenkins',
        'GitLab CI/CD',
        'SonarQube',
        'Splunk',
        'Kibana',
        'REST APIs',
        'Accessibility (WCAG 2.1)',
      ],
    },
    {
      company: 'Wipro Limited',
      role: 'Senior Project Engineer (Client: U.S. Bank)',
      duration: 'Aug 2021 – Feb 2023',
      location: 'Pune, India',
      project_highlights: [
        'Developed U.S. Bank’s customer onboarding micro-application integrated within online and mobile platforms — managing Interstitial and Extended onboarding flows.',
      ],
      key_contributions: [
        'Architected micro-frontend integration for independent module deployment and faster parallel dev cycles.',
        'Designed reusable, accessibility-compliant components (WCAG 2.1) for web, tablet, and mobile channels.',
        'Optimized performance via lazy loading and code-splitting, cutting load time by 30%.',
        'Refactored state management with Redux Toolkit and React Query, reducing redundant API calls.',
        'Integrated Adobe Site Cat and analytics tagging; improved user journey tracking.',
        'Implemented CI/CD with Jenkins and GitLab; enforced SonarQube quality gates.',
        'Achieved 85% unit/integration test coverage with Jest, React Testing Library, and Cypress.',
      ],
      tech_stack: [
        'React',
        'JavaScript (ES6+)',
        'Redux Toolkit',
        'React Query',
        'HTML5',
        'CSS3',
        'SCSS',
        'REST APIs',
        'Adobe Analytics',
        'Jenkins',
        'GitLab CI/CD',
        'SonarQube',
        'AEGIS',
        'Webpack',
        'Accessibility (WCAG 2.1)',
      ],
    },
    {
      company: 'Krazy Mantra (Payroll – Wipro)',
      role: 'React Developer (Client: U.S. Bank)',
      duration: 'Jun 2021 – Jul 2021',
      location: 'Remote, India',
      project_highlights: [
        'Contributed to initial React-based micro-application setup for U.S. Bank’s digital onboarding platform.',
      ],
      key_contributions: [
        'Created React boilerplate with standardized folder structure, ESLint, Prettier, and Webpack configs.',
        'Integrated SonarQube for code coverage and quality analysis.',
        'Implemented Jenkins-based CI/CD for automated deployment pipelines.',
      ],
      tech_stack: [
        'React',
        'JavaScript (ES6+)',
        'Webpack',
        'ESLint',
        'Prettier',
        'Jenkins',
        'SonarQube',
        'GitLab CI/CD',
      ],
    },
    {
      company: 'Javnic Solutions',
      role: 'Front-End Developer',
      duration: 'Apr 2018 – May 2021',
      location: 'Noida, India',
      project_highlights: [
        'Led UI development for e-commerce, healthcare, and retail portals improving load speed, SEO ranking, and cross-device performance.',
      ],
      key_contributions: [
        'Delivered modular reusable components; improved page views by 22% through UX optimization.',
        'Implemented location-based search with debouncing and integrated payment gateways (Stripe, PayPal, Razorpay, Instamojo).',
        'Collaborated with design and backend teams to improve consistency and reduce time to market.',
      ],
      tech_stack: [
        'HTML5',
        'CSS3',
        'SCSS',
        'JavaScript (ES6+)',
        'React',
        'Redux',
        'REST APIs',
        'Stripe',
        'PayPal',
        'Razorpay',
        'Instamojo',
      ],
    },
    {
      company: 'Cyient Limited',
      role: 'Junior GIS Engineer',
      duration: 'Jan 2016 – Mar 2018',
      location: 'Noida, India',
      project_highlights: [
        'Developed Cartopia GIS Application for geospatial data capture and visualization.',
      ],
      key_contributions: [
        'Captured and digitized geospatial data improving GIS data accuracy.',
        'Automated log analysis with Tableau/SAS dashboards improving issue detection by 35%.',
        "Co-developed 'C-Pedia', an internal search platform for technical SOPs using React and Node.",
      ],
      tech_stack: [
        'HTML',
        'CSS',
        'JavaScript (ES6)',
        'Node.js',
        'Tableau',
        'SAS',
        'ArcGIS',
      ],
    },
  ],
  education: {
    degree:
      'Bachelor of Engineering (Electronics and Communication Engineering)',
    university: 'Rashtrasant Tukadoji Maharaj Nagpur University, India',
    duration: '2011–2015',
  },
  additional_details: {
    role_preferences:
      'Open to Full-Stack Developer roles with strong Front-End ownership',
    work_authorization: 'H1B Visa (Valid)',
    availability: 'Open to Remote or Hybrid opportunities',
    current_location: 'U.S.A.',
  },
  ai_innovation_projects: [
    {
      name: 'AI Anurag Assistant – Personal Portfolio Chatbot',
      description:
        'Built an AI-powered portfolio assistant using OpenAI GPT APIs and custom LLM prompts trained on my professional résumé and project data.',
      highlights: [
        'Designed conversational flows with contextual embeddings and fine-tuned responses for personalized, résumé-aware Q&A.',
        'Implemented secure API key management and dynamic prompt injection on Netlify.',
        'Integrated with portfolio (https://e2eonline.com) for interactive candidate engagement.',
      ],
      tech_stack: [
        'OpenAI GPT API',
        'React',
        'Node.js',
        'Netlify',
        'Embeddings',
        'Prompt Engineering',
      ],
    },
    {
      name: 'Merge Mind – Internal AI Tool (U.S. Bank)',
      description:
        'Internal AI-driven Merge Request (MR) review assistant leveraging GPT-4 within GitLab CI/CD pipelines.',
      highlights: [
        'Developed prompt strategies to evaluate code quality, maintainability, and security.',
        'Collaborated with DevOps to integrate AI inference into existing CI pipelines for real-time PR review automation.',
      ],
      tech_stack: [
        'GPT-4',
        'Python',
        'GitLab CI/CD',
        'Prompt Engineering',
        'SonarQube',
        'LLM Automation',
      ],
    },
    {
      name: 'AI-Powered Fraud Detection System – U.S. Bank Hackathon',
      description:
        'Conceptualized and built ML-driven fraud detection prototype during internal hackathon.',
      highlights: [
        'Designed anomaly detection model to flag suspicious transactions in real-time.',
        'Integrated behavioral pattern analysis for transaction monitoring.',
        'Model successfully identified previously missed fraud patterns and was shortlisted for pilot deployment.',
      ],
      tech_stack: [
        'Python',
        'Machine Learning',
        'Scikit-learn',
        'Pandas',
        'Anomaly Detection',
        'Data Visualization',
      ],
    },
  ],
};

export class OpenAIService {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';
  private conversationHistory: OpenAIMessage[] = [];

  constructor() {
    // Get API key from environment variables
    // Netlify only exposes VITE_ prefixed variables to client-side
    this.apiKey =
      (import.meta?.env?.VITE_OPENAI_API_KEY as string) || // Works for both local and Netlify
      '';

    // Initialize with system message containing resume data
    this.conversationHistory = [
      {
        role: 'system',
        content: `Here is Anurag Kumar's resume data in JSON format:\n\n${JSON.stringify(
          ANURAG_RESUME_DATA
        )}\n\nYou are Anurag's AI assistant. Answer questions about Anurag's background, experience, skills, and projects in a friendly and professional manner. Keep responses concise but informative. If asked about something not in the resume, politely mention that you can share information about Anurag's professional background, skills, and experience.`,
      },
    ];
  }

  async sendMessage(userMessage: string): Promise<string> {
    if (!this.apiKey) {
      return 'I apologize, but the AI service is not configured properly. Please check the API key configuration.';
    }

    try {
      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage,
      });

      const requestBody = {
        model: 'gpt-4o-mini',
        messages: this.conversationHistory,
        max_tokens: 500,
        temperature: 0.7,
      };

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenAI API error:', errorText);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: OpenAIResponse = await response.json();
      const assistantMessage =
        data.choices[0]?.message?.content ||
        "I apologize, but I couldn't process your request right now.";

      // Add assistant response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage,
      });

      // Keep conversation history manageable (last 20 messages)
      if (this.conversationHistory.length > 21) {
        // Keep system message and last 20 messages
        this.conversationHistory = [
          this.conversationHistory[0], // system message
          ...this.conversationHistory.slice(-20),
        ];
      }

      return assistantMessage;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);

      // Fallback to basic responses if API fails
      return this.getFallbackResponse(userMessage);
    }
  }

  private getFallbackResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('study') ||
      lowerMessage.includes('education') ||
      lowerMessage.includes('university')
    ) {
      return `Anurag studied ${ANURAG_RESUME_DATA.education.degree} at ${ANURAG_RESUME_DATA.education.university} from ${ANURAG_RESUME_DATA.education.duration}.`;
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return `Anurag has 9+ years of experience in software development. He's currently working as a Tech Lead at Wipro Limited (Client: U.S. Bank) since March 2023.`;
    }

    if (
      lowerMessage.includes('skills') ||
      lowerMessage.includes('technology')
    ) {
      return `Anurag specializes in frontend technologies like React, JavaScript, TypeScript, HTML5, CSS3, and SCSS. He's also expanding his backend skills with Java and Spring Boot.`;
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return `Anurag is currently located in ${ANURAG_RESUME_DATA.location} and is available for remote or hybrid roles.`;
    }

    return "I'm Anurag's AI assistant! I can tell you about his professional background, experience, skills, and education. What would you like to know?";
  }

  clearHistory(): void {
    // Reset to initial system message
    this.conversationHistory = [this.conversationHistory[0]];
  }

  getConversationLength(): number {
    return this.conversationHistory.length - 1; // Exclude system message
  }
}

export const openAIService = new OpenAIService();
