# Flexperts Design System Documentation

## Overview

The Flexperts Design System is a comprehensive set of UI components, patterns, and guidelines built with a mobile-first approach. It features a consistent green color scheme, glassmorphism effects, and the Quicksand font family throughout.

## Design Principles

1. **Simplicity** - Clean, minimal design that focuses on functionality
2. **Purpose** - Every element serves a clear user need
3. **Responsive** - Seamless experience across all devices

## Core Foundations

### Color Palette

```css
/* Primary Colors - Green Theme */
--primary-50: #DCFCE7;
--primary-100: #BBF7D0;
--primary-200: #86EFAC;
--primary-300: #4ADE80;
--primary-400: #22C55E;
--primary-500: #22C55E; /* Main brand color */
--primary-600: #16A34A;
--primary-700: #15803D;
--primary-800: #166534;
--primary-900: #14532D;

/* Neutral Colors */
--neutral-50: #F9FAFB;
--neutral-100: #F3F4F6;
--neutral-200: #E5E7EB;
--neutral-300: #D1D5DB;
--neutral-400: #9CA3AF;
--neutral-500: #6B7280;
--neutral-600: #4B5563;
--neutral-700: #374151;
--neutral-800: #1F2937;
--neutral-900: #111827;

/* Semantic Colors */
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--info: #3B82F6;
```

### Typography

**Font Family**: Quicksand (300, 400, 500, 600, 700)

#### Desktop Typography Scale
- Display: 72px (7xl)
- H1: 48px (5xl)
- H2: 36px (4xl)
- H3: 30px (3xl)
- Body: 16px (base)
- Caption: 14px (sm)

#### Mobile Typography Scale
- Display: 48px
- H1: 32px
- H2: 28px
- H3: 20px
- Body: 16px
- Caption: 14px

### Spacing System

- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

### Breakpoints

- `sm`: 640px - Tablets
- `md`: 768px - Small laptops
- `lg`: 1024px - Desktops
- `xl`: 1280px - Large desktops

## Components

### Buttons

#### Primary Button
```html
<button class="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]">
  Click Me
</button>
```

#### Button Variants
- Primary (green background)
- Secondary (white with border)
- Ghost (transparent with hover)
- Icon buttons (square with icon)

### Form Elements

#### Input Fields
- Always use green focus states: `focus:border-green-500 focus:ring-2 focus:ring-green-200`
- No blue accents anywhere
- Consistent rounded corners: `rounded-lg`

#### Button Radios (Mobile Preferred)
Instead of traditional radio buttons, use button-style radios:
```html
<label class="button-radio">
  <input type="radio" name="option" value="1">
  <span class="button-radio-label">Option 1</span>
</label>
```

### Cards

#### Glass Card Effect
```css
.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Navigation

#### Desktop Navigation
- Horizontal nav bar with hover states
- Sticky top positioning
- Transparent background with blur on scroll

#### Mobile Navigation
- Bottom navigation bar with 5 items max
- Icon + label format
- Active state with primary color
- Fixed positioning at bottom

### Tab Bars

1. **Desktop Tabs** - Underline style with active border
2. **Mobile Tabs** - Scrollable horizontal tabs
3. **Icon Tabs** - Tabs with icons and labels
4. **Segmented Control** - iOS-style toggle between options

### Accordions

- Expandable/collapsible content sections
- Smooth transitions
- Clear open/closed indicators
- Support for icons

### Modal Dialogues

1. **Desktop Modal** - Centered overlay with backdrop
2. **Form Modal** - Modal with form inputs
3. **Full Screen Modal** - Mobile-specific full screen takeover

### Bottom Sheets & Action Sheets

- Mobile-specific pattern
- Rounded top corners
- Drag handle indicator
- Maximum 85vh height

### Floating Action Buttons (FAB)

1. **Standard FAB** - 56px circular button
2. **Mini FAB** - 40px circular button
3. **Extended FAB** - FAB with text label
4. **Speed Dial** - FAB with expandable mini actions

### Sliders

- Green accent color for thumb and track
- Support for discrete steps
- Value labels and ranges
- Custom styled variations

### Multi-Step Forms

#### Progress Indicators
1. **Numbered Steps** - Circles with numbers connected by lines
2. **Dot Progress** - Simple dots showing current position
3. **Progress Bar** - Percentage-based linear progress

#### Best Practices
- Show clear progress
- Allow backwards navigation
- Save progress between steps

### Typeform Style Forms

- One question at a time
- Large, focused typography
- Conversational tone
- Keyboard shortcuts (Enter to proceed)
- Multiple choice with letter indicators (A, B, C)

### Mobile-Specific Components

#### Chips & Filters
```html
<button class="chip">Filter</button>
<button class="chip selected">Selected</button>
```

#### Mobile App Bars
- Back navigation on secondary screens
- Search integration
- Action buttons aligned right

#### Chat Interface
- WhatsApp-style bubbles
- Sent messages: Green with tail on right
- Received messages: Gray with tail on left
- Typing indicators

### Mobile Gestures

#### Supported Gestures
- **Tap**: Primary action, selection
- **Double Tap**: Zoom, like, quick action
- **Long Press**: Context menu, selection mode
- **Swipe**: Navigation, dismiss, reveal actions
- **Pinch**: Zoom in/out
- **Pull down**: Refresh content
- **Edge swipe**: Back navigation, menu reveal

#### Swipe Actions
- Green background for positive actions (archive, complete)
- Red background for destructive actions (delete)
- Smooth reveal animations

## Responsive Design Patterns

### Navigation
- **Desktop**: Horizontal top nav bar
- **Mobile**: Bottom navigation or hamburger menu

### Forms
- **Desktop**: Multi-column layouts
- **Mobile**: Single column stack

### Cards & Grids
- **Desktop**: 3-4 column grids
- **Mobile**: 1-2 columns or horizontal scroll

### Touch Targets
- Primary actions: 44x44px minimum
- Secondary actions: 36x36px minimum
- 8px minimum spacing between targets

## Implementation Guidelines

### Focus States
Always use green focus indicators:
```css
focus:outline-none
focus:border-primary-500
focus:ring-2 focus:ring-green-200
```

### Hover States
- Scale transform for buttons: `hover:scale-[1.02]`
- Background color changes
- Smooth transitions: `transition-all duration-200`

### Loading States
- Skeleton screens with animated shimmer
- Spinner with green primary color
- Progress indicators for long operations

### Empty States
- Centered illustration or icon
- Clear message about the empty state
- Primary action button to resolve

### Error States
- Red color for error messages
- Clear error descriptions
- Suggested actions to resolve

## Accessibility

1. **Color Contrast**: Ensure WCAG AA compliance
2. **Focus Indicators**: Always visible, never remove outline
3. **Touch Targets**: Minimum 44x44px on mobile
4. **Screen Readers**: Proper ARIA labels
5. **Keyboard Navigation**: All interactive elements accessible

## Animation Guidelines

- Use subtle animations (200-300ms duration)
- Ease-in-out timing functions
- Transform and opacity for performance
- Avoid animating layout properties

## Mobile-First Approach

1. Design for mobile screens first
2. Progressive enhancement for larger screens
3. Touch-friendly interfaces
4. Performance optimization for mobile networks
5. Offline-first considerations

## Special Patterns

### No Scrollbars
Global scrollbar hiding while maintaining scroll functionality:
```css
/* Hide scrollbar for all browsers */
::-webkit-scrollbar { display: none; }
-ms-overflow-style: none;
scrollbar-width: none;
```

### Glassmorphism Effects
```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Text Gradients
```css
background: linear-gradient(to right, var(--primary-600), var(--primary-400));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Component Usage Examples

### Creating a Mobile-First Card
```html
<div class="glass-card rounded-xl p-6 mb-4">
  <h3 class="text-xl font-semibold mb-2">Card Title</h3>
  <p class="text-neutral-600">Card content goes here...</p>
  <button class="mt-4 bg-primary-500 text-white px-4 py-2 rounded-lg">
    Action
  </button>
</div>
```

### Implementing a Bottom Sheet
```html
<div class="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl p-6 transform transition-transform">
  <div class="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
  <!-- Bottom sheet content -->
</div>
```

### Building a Typeform Question
```html
<div class="min-h-screen flex items-center justify-center p-8">
  <div class="max-w-2xl w-full text-center">
    <h1 class="text-4xl font-bold mb-8">What's your name? 👋</h1>
    <input type="text" class="text-2xl border-b-2 border-gray-300 pb-2 text-center focus:border-green-500 outline-none w-full max-w-md">
    <button class="mt-8 bg-green-500 text-white px-8 py-3 rounded-lg">
      Continue →
    </button>
  </div>
</div>
```

## Best Practices

1. **Consistency**: Use design tokens for all colors, spacing, and typography
2. **Performance**: Optimize images, use lazy loading, minimize JavaScript
3. **Accessibility**: Test with screen readers, keyboard navigation
4. **Mobile Experience**: Test on real devices, consider thumb reach
5. **Progressive Enhancement**: Core functionality works without JavaScript

## Quick Reference

### Common Classes
- Glass effect: `glass-card`
- Text gradient: `text-gradient`
- Primary button: `bg-primary-500 hover:bg-primary-600`
- Card padding: `p-6` or `p-8`
- Border radius: `rounded-lg` or `rounded-xl`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`

### Mobile Utilities
- Hide scrollbar: `hide-scrollbar`
- Bottom sheet: `rounded-t-2xl`
- FAB position: `fixed bottom-4 right-4`
- Safe area padding: `pb-safe` (for iPhone notch)

This design system is built to scale with the Flexperts platform while maintaining consistency and delivering an exceptional user experience across all devices.