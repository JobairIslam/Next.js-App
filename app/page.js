"use client";
import React from 'react'
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ThreeDCardDemo } from "@/components/Card";


const accordionData = [
  { id: "item-1", question: "What is Next.js?", answer: "Next.js is a React framework for production." },
  { id: "item-2", question: "How do I use Next.js?", answer: "You can use Next.js by creating a new project with `create-next-app`." },
  { id: "item-3", question: "What is Radix UI?", answer: "Radix UI provides accessible, unstyled components for building design systems." },
  { id: "item-4", question: "How to style in Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework." },
  { id: "item-5", question: "What is the Server-side Rendering?", answer: "SSR is a technique where the page is generated on the server per request." }
];


export default function page() {
  return (
    <div className='container'>
      <div className='accordian pb-8 max-w-[500px]  mx-auto'>
         <Accordion type="single" collapsible>
        {accordionData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
       <div className="grid grid-cols-1  lg:grid-cols-2 gap-3 p-6">
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      
    </div>
    </div>
    
  )
}
