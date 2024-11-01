// src/components/Accordion.tsx

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils' // Função utilitária para classnames
import { ChevronDown } from 'lucide-react' // Ícone de seta para baixo, se você estiver usando
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = AccordionPrimitive.Item

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex h-10 items-center rounded-xl justify-between bg-slate-50 p-4 text-left text-sm font-medium text-slate-800 hover:bg-slate-300',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200 ease-in-out" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn('overflow-hidden text-sm text-slate-600', className)}
    {...props}
  >
    <div className="p-4">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
