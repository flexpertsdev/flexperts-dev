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

    // Update onboarding data based on current step
    const updatedData = { ...onboardingData };
    switch (currentStep) {
      case 'name':
        updatedData.name = input;
        break;
      case 'email':
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
    const flow = onboardingFlow[currentStep];
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