import { useState, useCallback } from "react";
import { ChatMessage, OnboardingData, OnboardingStep } from "@/types/chat";
import { useNavigate } from "react-router-dom";

const generateId = () => Math.random().toString(36).substring(2, 15);

const onboardingFlow: Record<OnboardingStep, { 
  message: string; 
  options?: string[];
  inputType?: 'text' | 'email' | 'options';
  nextStep: (data: OnboardingData, input?: string) => OnboardingStep;
}> = {
  welcome: {
    message: "👋 Welcome to Flexperts! I'm here to help you get started. Let's create your account and understand how we can best serve you.\n\nReady to begin?",
    options: ["Let's go!", "Tell me more first"],
    inputType: 'options',
    nextStep: (data, input) => input === "Tell me more first" ? 'welcome' : 'name'
  },
  name: {
    message: "Great! First, what's your name?",
    inputType: 'text',
    nextStep: () => 'email'
  },
  email: {
    message: "Nice to meet you! What's your email address?",
    inputType: 'email',
    nextStep: () => 'company'
  },
  company: {
    message: "What company or organization are you with? (You can say 'personal' if this is for personal projects)",
    inputType: 'text',
    nextStep: () => 'role'
  },
  role: {
    message: "What's your role?",
    options: ["Founder/CEO", "Developer", "Product Manager", "Designer", "Marketing", "Other"],
    inputType: 'options',
    nextStep: () => 'project-type'
  },
  'project-type': {
    message: "What type of project are you looking to build?",
    options: ["Web Application", "Mobile App", "API/Backend", "Full Stack Platform", "Not sure yet"],
    inputType: 'options',
    nextStep: () => 'experience'
  },
  experience: {
    message: "How would you describe your technical experience?",
    options: ["Non-technical", "Some coding experience", "Professional developer", "Tech lead/Architect"],
    inputType: 'options',
    nextStep: () => 'goals'
  },
  goals: {
    message: "What are your main goals with Flexperts? (Select all that apply)",
    options: ["Learn to code", "Build an MVP", "Scale my product", "Find technical talent", "Get expert guidance"],
    inputType: 'options',
    nextStep: () => 'timeline'
  },
  timeline: {
    message: "When are you looking to start?",
    options: ["Immediately", "Within a week", "Within a month", "Just exploring"],
    inputType: 'options',
    nextStep: () => 'budget'
  },
  budget: {
    message: "What's your budget range for this project?",
    options: ["< $1,000", "$1,000 - $5,000", "$5,000 - $20,000", "$20,000+", "Not sure yet"],
    inputType: 'options',
    nextStep: () => 'summary'
  },
  summary: {
    message: "Perfect! Let me summarize what you've told me...",
    inputType: 'text',
    nextStep: () => 'complete'
  },
  complete: {
    message: "🎉 Welcome to Flexperts! Your account has been created and we've tailored your experience based on your needs. Let's get you started!",
    options: ["Go to Dashboard"],
    inputType: 'options',
    nextStep: () => 'complete'
  }
};

export const useOnboarding = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: generateId(),
      type: 'bot',
      content: onboardingFlow.welcome.message,
      timestamp: new Date(),
      options: onboardingFlow.welcome.options
    }
  ]);
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [isTyping, setIsTyping] = useState(false);

  const addBotMessage = useCallback((content: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: generateId(),
        type: 'bot',
        content,
        timestamp: new Date(),
        options
      }]);
      setIsTyping(false);
    }, 800);
  }, []);

  const handleUserInput = useCallback((input: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: generateId(),
      type: 'user',
      content: input,
      timestamp: new Date()
    }]);

    // Check if input is asking for help or clarification
    const lowerInput = input.toLowerCase();
    const isQuestion = lowerInput.includes('?') || 
                      lowerInput.includes('what') || 
                      lowerInput.includes('how') || 
                      lowerInput.includes('why') ||
                      lowerInput.includes('help') ||
                      lowerInput.includes('explain');
    
    const wantsToGoBack = lowerInput.includes('back') || 
                         lowerInput.includes('previous') || 
                         lowerInput.includes('change') ||
                         lowerInput.includes('edit');

    // Handle going back
    if (wantsToGoBack) {
      addBotMessage("I understand you want to go back. What would you like to change?", [
        "My name", 
        "My email", 
        "My company", 
        "My role", 
        "Continue with current info"
      ]);
      return;
    }

    // Handle specific edit requests
    if (input === "My name") {
      setCurrentStep('name');
      addBotMessage("Sure! What's your name?");
      return;
    } else if (input === "My email") {
      setCurrentStep('email');
      addBotMessage("What's your email address?");
      return;
    } else if (input === "My company") {
      setCurrentStep('company');
      addBotMessage("What company or organization are you with?");
      return;
    } else if (input === "My role") {
      setCurrentStep('role');
      addBotMessage("What's your role?", onboardingFlow.role.options);
      return;
    } else if (input === "Continue with current info") {
      // Continue with the current flow
      const currentFlow = onboardingFlow[currentStep];
      addBotMessage(currentFlow.message, currentFlow.options);
      return;
    }

    if (isQuestion) {
      // Provide contextual help based on current step
      let helpMessage = "";
      switch (currentStep) {
        case 'welcome':
          helpMessage = "I'm here to help you get started with Flexperts! We offer three ways to build: You Build (learn with AI), We Build (we build for you), and Build Together (collaborate with our devs). Ready to create your account?";
          break;
        case 'name':
          helpMessage = "I just need your first name or what you'd like to be called. This helps us personalize your experience!";
          break;
        case 'email':
          helpMessage = "Your email will be used to create your account and for important updates. We'll never spam you!";
          break;
        case 'company':
          helpMessage = "This helps us understand your context. If you're working on personal projects, just type 'personal'. For startups or companies, share the name!";
          break;
        case 'role':
          helpMessage = "Your role helps us tailor the experience. Are you technical? Business-focused? Design-oriented? This helps us recommend the right approach.";
          break;
        case 'project-type':
          helpMessage = "Understanding what you want to build helps us match you with the right experts and resources. Don't worry if you're not sure yet!";
          break;
        case 'experience':
          helpMessage = "Your technical experience level helps us recommend whether you should build yourself with AI guidance, have us build for you, or collaborate together.";
          break;
        case 'goals':
          helpMessage = "Your goals help us understand what success looks like for you. Are you learning? Building a business? Looking for help?";
          break;
        case 'timeline':
          helpMessage = "This helps us understand your urgency and plan accordingly. No pressure - we work with all timelines!";
          break;
        case 'budget':
          helpMessage = "Budget helps us recommend the right service tier. We have options for every budget, including free learning resources!";
          break;
        default:
          helpMessage = "I'm here to help! Feel free to ask any questions about Flexperts or the onboarding process.";
      }
      
      addBotMessage(helpMessage);
      
      // Re-ask the current question after providing help
      setTimeout(() => {
        const currentFlow = onboardingFlow[currentStep];
        addBotMessage(currentFlow.message, currentFlow.options);
      }, 1500);
      
      return;
    }

    // Update onboarding data based on current step
    const updatedData = { ...onboardingData };
    
    // Validate input based on step
    const flow = onboardingFlow[currentStep];
    let isValidInput = true;
    
    // Check if user selected a valid option when options are available
    if (flow.options && !flow.options.includes(input) && flow.inputType === 'options') {
      // Allow free-form input but suggest using options
      addBotMessage(`I see you typed "${input}". You can either click one of the options above or continue with your answer. Would you like to proceed with "${input}"?`, ["Yes, use my answer", "No, let me choose from options"]);
      
      // Store the pending input temporarily
      (updatedData as any).pendingInput = input;
      (updatedData as any).pendingStep = currentStep;
      setOnboardingData(updatedData);
      return;
    }
    
    // Handle pending confirmations
    if ((onboardingData as any).pendingInput && input === "Yes, use my answer") {
      input = (onboardingData as any).pendingInput;
      setCurrentStep((onboardingData as any).pendingStep);
      delete (updatedData as any).pendingInput;
      delete (updatedData as any).pendingStep;
    } else if ((onboardingData as any).pendingInput && input === "No, let me choose from options") {
      delete (updatedData as any).pendingInput;
      delete (updatedData as any).pendingStep;
      setOnboardingData(updatedData);
      
      // Re-show the current step's options
      const currentFlow = onboardingFlow[currentStep];
      addBotMessage("No problem! Here are the options again:", currentFlow.options);
      return;
    }
    
    switch (currentStep) {
      case 'name':
        updatedData.name = input;
        break;
      case 'email':
        // Basic email validation
        if (!input.includes('@') || !input.includes('.')) {
          addBotMessage("That doesn't look like a valid email address. Please enter a valid email (e.g., name@example.com)");
          return;
        }
        updatedData.email = input;
        break;
      case 'company':
        updatedData.company = input;
        break;
      case 'role':
        updatedData.role = input;
        break;
      case 'project-type':
        updatedData.projectType = input;
        break;
      case 'experience':
        updatedData.experience = input;
        break;
      case 'goals':
        updatedData.goals = [...(updatedData.goals || []), input];
        break;
      case 'timeline':
        updatedData.timeline = input;
        break;
      case 'budget':
        updatedData.budget = input;
        break;
    }
    setOnboardingData(updatedData);

    // Determine next step
    const nextStep = flow.nextStep(updatedData, input);

    // Handle special cases
    if (currentStep === 'welcome' && input === "Tell me more first") {
      addBotMessage("Flexperts offers three ways to build:\n\n• **You Build** - Learn to code with AI-powered guidance\n• **We Build** - Our experts build for you\n• **Build Together** - Collaborate with our developers\n\nWe'll help you choose the best path based on your needs. Ready to start?", ["Let's go!"]);
      return;
    }

    if (nextStep === 'summary') {
      const summary = `
Here's what I've learned about you:

**Name:** ${updatedData.name}
**Email:** ${updatedData.email}
**Company:** ${updatedData.company}
**Role:** ${updatedData.role}
**Project Type:** ${updatedData.projectType}
**Experience Level:** ${updatedData.experience}
**Timeline:** ${updatedData.timeline}
**Budget:** ${updatedData.budget}

Based on this, I recommend the **${
  updatedData.experience === 'Non-technical' ? 'We Build' : 
  updatedData.experience === 'Some coding experience' ? 'You Build' : 
  'Build Together'
}** approach for your project.

Shall we create your account and get started?`;
      
      addBotMessage(summary, ["Create my account", "Let me edit something"]);
    } else if (nextStep === 'complete') {
      // Handle account creation
      setTimeout(() => {
        navigate('/app');
      }, 2000);
      addBotMessage(onboardingFlow.complete.message, onboardingFlow.complete.options);
    } else {
      const nextFlow = onboardingFlow[nextStep];
      addBotMessage(nextFlow.message, nextFlow.options);
    }

    setCurrentStep(nextStep);
  }, [currentStep, onboardingData, addBotMessage, navigate]);

  return {
    messages,
    currentStep,
    onboardingData,
    isTyping,
    handleUserInput,
    inputType: onboardingFlow[currentStep].inputType || 'text'
  };
};