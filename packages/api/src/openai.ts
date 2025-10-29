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

const ANURAG_RESUME_DATA = {
  name: 'Anurag Kumar',
  title:
    'Senior Software Engineer | Front-End Specialist | Transitioning to Full-Stack (Java + Spring Boot)',
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
    'Senior Software Engineer with 9+ years of experience building and optimizing enterprise-scale web applications across banking, financial, and automotive domains. Expert in JavaScript, TypeScript, React, Angular, HTML5, CSS3, and SCSS, with strong focus on performance, scalability, accessibility (a11y), and reusability. Skilled in Agile/Scrum development, code reviews, and cross-functional collaboration across SDLC — from UI architecture to deployment. Expanding full-stack proficiency in Java, Spring Boot, RESTful APIs, GraphQL, Docker, and CI/CD pipelines for seamless end-to-end solutions.',
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
