import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

export type RevealAnimationType =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'zoom'
  | 'fade'
  | 'mask'
  | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealAnimationType;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
  once = true,
  amount = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Animation specifications according to Master Prompt:
  // A - Slide From Left: initial translateX(-70px), opacity 0, duration 0.8s
  // B - Slide From Right: initial translateX(70px), opacity 0, duration 0.8s
  // C - Slide From Bottom: initial translateY(60px), opacity 0, duration 0.7s
  // D - Slide From Top: initial translateY(-60px), opacity 0, duration 0.7s
  // E - Zoom In: initial scale 0.9, opacity 0, spring-like
  // F - Fade In: initial opacity 0, smooth
  // G - Reveal With Mask: clipPath inset(100% 0 0 0) to inset(0% 0 0 0)
  const getVariants = (): Variants => {
    switch (direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -70 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration || 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
          },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 70 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration || 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
          },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration || 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
          },
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 260,
              damping: 24,
              delay,
            },
          },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: duration || 0.6, delay, ease: 'easeOut' },
          },
        };
      case 'mask':
        return {
          hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          visible: {
            opacity: 1,
            clipPath: 'inset(0% 0 0 0)',
            transition: { duration: duration || 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
          },
        };
      case 'none':
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration || 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Alternating Direction Card Component (Master Prompt Section 3):
// Card 1: Slide from left
// Card 2: Slide from bottom
// Card 3: Slide from right
// Card 4: Zoom in
// Card 5: Fade up
// Card 6: Slide from left (repeats)
// On hover: translateY(-6px), scale: 1.02, smooth shadow (250ms)
interface AlternatingCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  enableHover?: boolean;
  onClick?: () => void;
}

export const AlternatingCard: React.FC<AlternatingCardProps> = ({
  children,
  index,
  className = '',
  enableHover = true,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const pattern = index % 5;
  const staggerDelay = (index % 4) * 0.1;

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (pattern) {
      case 0:
        return { opacity: 0, x: -60, y: 0, scale: 1 };
      case 1:
        return { opacity: 0, x: 0, y: 55, scale: 1 };
      case 2:
        return { opacity: 0, x: 60, y: 0, scale: 1 };
      case 3:
        return { opacity: 0, x: 0, y: 0, scale: 0.92 };
      case 4:
      default:
        return { opacity: 0, x: 0, y: 45, scale: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : getInitial()
      }
      transition={{
        duration: 0.75,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
      whileHover={
        enableHover && !shouldReduceMotion
          ? {
              y: -6,
              scale: 1.02,
              transition: { duration: 0.25, ease: 'easeOut' },
            }
          : undefined
      }
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container for Groups
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.12,
  amount = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Section Header Title Reveal
interface TextRevealProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  const isCenter = align === 'center';

  return (
    <div
      ref={ref}
      className={`${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="text-[var(--accent)] text-xs sm:text-sm uppercase tracking-[3px] font-semibold">
            {badge}
          </span>
          <motion.span
            initial={shouldReduceMotion ? { width: 64 } : { width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="h-[2px] bg-[var(--accent)] inline-block"
          />
        </div>
      )}

      <motion.h2
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] leading-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
          className="mt-5 text-[var(--text-secondary)] leading-8 text-base sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
