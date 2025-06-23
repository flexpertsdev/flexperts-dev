
# Flexperts Design System

A comprehensive design system for Flexperts.dev built with React, Tailwind CSS, and shadcn/ui components.

## 🎨 Brand Identity

### Mission
**Turn Your Vision Into Reality**  
Transform ideas into market-ready products through AI-powered tools, expert development services, and collaborative partnerships.

### Visual Philosophy
- **Apple-inspired minimalism**: Clean, spacious, purposeful design
- **Glassmorphism effects**: Subtle transparency with backdrop blur
- **Beautiful simplicity**: Every element serves a clear purpose
- **Generous whitespace**: Breathing room between all sections
- **Subtle depth**: Minimal shadows, focus on layering and transparency

---

## 🎯 Color System

### Primary Palette
```css
/* Primary Green - Flexperts signature color */
--primary-50: #DCFCE7    /* Very light green backgrounds */
--primary-100: #BBF7D0   /* Light green accents */
--primary-400: #22C55E   /* Main brand green */
--primary-500: #22C55E   /* Primary buttons and highlights */
--primary-600: #16A34A   /* Darker green for hover states */
--primary-700: #15803D   /* Deep green for emphasis */
```

### Neutral Palette
```css
/* Neutral grays for text and backgrounds */
--neutral-50: #F9FAFB    /* Light backgrounds */
--neutral-100: #F3F4F6   /* Card backgrounds */
--neutral-300: #D1D5DB   /* Borders and dividers */
--neutral-600: #4B5563   /* Secondary text */
--neutral-700: #374151   /* Body text */
--neutral-800: #1F2937   /* Headings */
--neutral-900: #111827   /* Primary text */
```

### Semantic Colors
```css
--success: #10B981       /* Success states */
--error: #EF4444         /* Error states and warnings */
--white: #FFFFFF         /* Pure white for contrast */
```

### Usage Guidelines
- **Primary Green**: CTAs, links, brand elements, active states
- **Neutral Dark (900)**: Main headings and primary text
- **Neutral Medium (600)**: Secondary text and descriptions
- **Neutral Light (50-100)**: Backgrounds and subtle sections
- **White**: Card backgrounds, button text, high contrast elements

---

## ✍️ Typography

### Font Family
**Quicksand** - Used exclusively across all text elements
```css
font-family: 'Quicksand', sans-serif;
```

### Type Scale & Hierarchy

#### Display Text (Hero Headlines)
```css
.text-5xl md:text-7xl {
  font-size: 3rem → 4.5rem;
  font-weight: 700 (Bold);
  line-height: tight;
  color: neutral-900;
}
```

#### Large Headlines (Section Titles)
```css
.text-4xl md:text-5xl {
  font-size: 2.25rem → 3rem;
  font-weight: 700 (Bold);
  color: neutral-900;
}
```

#### Medium Headlines (Card Titles)
```css
.text-2xl {
  font-size: 1.5rem;
  font-weight: 600 (SemiBold);
  color: neutral-900;
}
```

#### Small Headlines (Feature Titles)
```css
.text-xl {
  font-size: 1.25rem;
  font-weight: 600 (SemiBold);
  color: neutral-900;
}
```

#### Body Text (Large)
```css
.text-xl md:text-2xl {
  font-size: 1.25rem → 1.5rem;
  font-weight: 400 (Normal);
  color: neutral-600;
  line-height: relaxed;
}
```

#### Body Text (Regular)
```css
.text-base {
  font-size: 1rem;
  font-weight: 400 (Normal);
  color: neutral-600;
}
```

### Text Gradient Effect
```css
.text-gradient {
  background: linear-gradient(to right, primary-600, primary-400);
  background-clip: text;
  color: transparent;
}
```

---

## 🏗️ Layout System

### Container Structure
```tsx
// Standard page container
<div className="container mx-auto px-4">
  // Content
</div>

// Maximum width containers for focused content
<div className="container mx-auto max-w-2xl">  // Forms
<div className="container mx-auto max-w-4xl">  // Cards
<div className="container mx-auto max-w-6xl">  // Wide content
```

### Section Padding
```css
/* Standard section spacing */
.py-24        /* 6rem top/bottom padding */
.px-4         /* 1rem left/right padding */

/* Background sections */
.py-24.px-4.bg-gradient-to-br.from-primary-50/20.to-neutral-50
```

### Grid Systems

#### Three-Column Feature Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  // Three equal columns on desktop, stacked on mobile
</div>
```

#### Two-Column Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  // Two columns on desktop, stacked on mobile
</div>
```

#### Form Grid (Name Fields)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  // Compact two-column for form fields
</div>
```

---

## 🧱 Component Library

### Glass Card Component
```tsx
// Primary glassmorphism card
<div className="glass-card border-0">
  // Content
</div>

// CSS Implementation
.glass-card {
  backdrop-blur: md;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
}
```

### Button Styles

#### Primary Button
```tsx
<Button className="bg-primary-500 hover:bg-primary-600 text-white">
  Call to Action
</Button>
```

#### Outline Button
```tsx
<Button 
  variant="outline" 
  className="border-primary-500 text-primary-600 hover:bg-primary-50"
>
  Secondary Action
</Button>
```

#### Neutral Outline Button
```tsx
<Button 
  variant="outline" 
  className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
>
  Tertiary Action
</Button>
```

### Card Components

#### Feature Card
```tsx
<Card className="glass-card border-0">
  <CardHeader>
    <CardTitle className="text-xl">Feature Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-neutral-600 mb-6">Description text</p>
    <Button className="w-full bg-primary-500 hover:bg-primary-600">
      Action
    </Button>
  </CardContent>
</Card>
```

#### Pricing Card
```tsx
<Card className="glass-card border-0 ring-2 ring-primary-500"> // Featured
  <CardHeader>
    <CardTitle className="text-xl">Plan Name</CardTitle>
    <div className="text-3xl font-bold text-primary-600">$99</div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 mb-6">
      <li>✅ Feature item</li>
    </ul>
    <Button className="w-full">Select Plan</Button>
  </CardContent>
</Card>
```

### Icon Containers

#### Numbered Circles (Process Steps)
```tsx
<div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
  <span className="text-white font-bold text-xl">1</span>
</div>
```

#### Icon Containers (Features)
```tsx
<div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
  <span className="text-white font-bold">AI</span>
</div>
```

### Form Elements

#### Input Field with Label
```tsx
<div>
  <label className="block text-sm font-medium text-neutral-700 mb-2">
    Field Label
  </label>
  <Input placeholder="Placeholder text" />
</div>
```

#### Textarea Field
```tsx
<div>
  <label className="block text-sm font-medium text-neutral-700 mb-2">
    Field Label
  </label>
  <Textarea placeholder="Placeholder text" />
</div>
```

---

## 📐 Spacing System

### Component Spacing
```css
/* Section margins */
.mb-6         /* 1.5rem - Standard component bottom margin */
.mb-12        /* 3rem - Large section spacing */
.mb-16        /* 4rem - Extra large section spacing */

/* Content spacing */
.space-y-2    /* 0.5rem - List items */
.space-y-4    /* 1rem - Form fields */
.space-y-6    /* 1.5rem - Card content */
.space-y-8    /* 2rem - Grid items */

/* Padding */
.p-6          /* 1.5rem - Card padding */
.px-4.py-2    /* Button padding */
.px-8.py-3    /* Large button padding */
```

### Gap System
```css
.gap-4        /* 1rem - Form grid gaps */
.gap-8        /* 2rem - Feature grid gaps */
```

---

## 🎭 Interactive States

### Hover Effects
```css
/* Buttons */
.hover:bg-primary-600        /* Primary button hover */
.hover:bg-primary-50         /* Outline button hover */
.hover:bg-neutral-50         /* Neutral button hover */

/* Cards */
.hover:bg-white/15           /* Glass card hover */
.transition-all.duration-300 /* Smooth transitions */

/* Icons */
.group-hover:scale-105       /* Icon scale on card hover */
.transition-transform        /* Smooth icon animations */
```

### Focus States
```css
.focus-visible:outline-none
.focus-visible:ring-2
.focus-visible:ring-ring
.focus-visible:ring-offset-2
```

### Transitions
```css
.transition-colors     /* Color transitions */
.transition-all        /* All property transitions */
.duration-300         /* 300ms timing */
```

---

## 📱 Responsive Design

### Breakpoint Strategy
```css
/* Mobile First Approach */
.grid-cols-1                    /* Mobile: Single column */
.md:grid-cols-2                 /* Tablet: Two columns */
.md:grid-cols-3                 /* Desktop: Three columns */

/* Typography scaling */
.text-5xl.md:text-7xl          /* Hero text scaling */
.text-xl.md:text-2xl           /* Subheading scaling */

/* Button layouts */
.flex-col.sm:flex-row          /* Stack buttons on mobile */
.w-full.sm:w-auto              /* Full width on mobile */
```

### Container Responsive Behavior
```css
/* Mobile */
.px-4                          /* 1rem side padding */

/* Tablet and up */
.container.mx-auto             /* Centered with auto margins */

/* Desktop */
.max-w-2xl                     /* Forms: 672px max */
.max-w-4xl                     /* Cards: 896px max */
.max-w-6xl                     /* Wide content: 1152px max */
```

---

## 🎨 Background Patterns

### Page Backgrounds
```css
/* Main page background */
.min-h-screen.bg-gradient-to-br.from-neutral-50.to-primary-50/20

/* Section backgrounds */
.bg-gradient-to-br.from-primary-50/20.to-neutral-50
```

### Special Background Elements
```css
/* EU Warning Banner */
.bg-red-50.border.border-red-200.rounded-lg.p-6
```

---

## 📋 Content Patterns

### Hero Section Structure
```tsx
<section className="py-24 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
      Main Headline
      <span className="text-gradient block">Accent Line</span>
    </h1>
    <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Supporting description text
    </p>
    {/* CTA Buttons */}
  </div>
</section>
```

### Process Steps Pattern
```tsx
<div className="text-center">
  <div className="w-16 h-16 bg-primary-{500+step} rounded-full flex items-center justify-center mx-auto mb-6">
    <span className="text-white font-bold text-xl">{stepNumber}</span>
  </div>
  <h3 className="text-xl font-semibold text-neutral-900 mb-4">Step Title</h3>
  <p className="text-neutral-600">Step description</p>
</div>
```

### Feature List Pattern
```tsx
<ul className="space-y-2 mb-6">
  <li>✅ Feature description</li>
  <li>✅ Another feature</li>
</ul>
```

---

## 🔧 Implementation Guidelines

### CSS Custom Properties
```css
:root {
  --primary: 142 71% 45%;           /* HSL for primary color */
  --primary-foreground: 0 0% 100%; /* White text on primary */
  --background: 0 0% 100%;         /* Page background */
  --foreground: 222.2 84% 4.9%;    /* Text color */
}
```

### Tailwind Configuration
```javascript
// Extend default Tailwind with custom values
extend: {
  fontFamily: {
    sans: ['Quicksand', 'sans-serif'],
  },
  colors: {
    primary: {
      50: '#DCFCE7',
      500: '#22C55E',
      600: '#16A34A',
    },
  },
  backdropBlur: {
    'xs': '2px',
  },
}
```

### Component Best Practices

1. **Consistency**: Always use the same patterns for similar components
2. **Accessibility**: Include proper ARIA labels and semantic HTML
3. **Performance**: Use CSS classes over inline styles
4. **Responsiveness**: Test all components on mobile, tablet, and desktop
5. **Glassmorphism**: Apply backdrop-blur sparingly for visual hierarchy

---

## 📚 Usage Examples

### Complete Page Section
```tsx
<section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
        Section Title
      </h2>
      <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
        Section description
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature cards here */}
    </div>
  </div>
</section>
```

### Form Section
```tsx
<Card className="glass-card border-0">
  <CardHeader>
    <CardTitle className="text-2xl text-center">Form Title</CardTitle>
  </CardHeader>
  <CardContent className="space-y-6">
    {/* Form fields here */}
    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white text-lg py-3">
      Submit Action
    </Button>
  </CardContent>
</Card>
```

This design system ensures consistency across all pages while maintaining flexibility for different content types and use cases.
