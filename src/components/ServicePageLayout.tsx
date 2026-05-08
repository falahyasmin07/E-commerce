import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface ScopeItem {
  title: string;
  description: string;
}

export interface ServicePageLayoutProps {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  introTitle: string;
  introBody: string;
  valueTitle: string;
  valueBullets: string[];
  scopeTitle: string;
  scopeItems: ScopeItem[];
  whyTitle: string;
  whyBody: string;
  ctaTitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export function ServicePageLayout({
  heroEyebrow,
  heroHeadline,
  heroSubheadline,
  introTitle,
  introBody,
  valueTitle,
  valueBullets,
  scopeTitle,
  scopeItems,
  whyTitle,
  whyBody,
  ctaTitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: ServicePageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      
      {/* 1. HERO SECTION (Deep Blue / Industrial) */}
      <section className="relative overflow-hidden bg-[#06113C] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06113C] via-[#1E3A8A] to-[#06113C] opacity-90" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a6ea810_1px,transparent_1px),linear-gradient(to_bottom,#4a6ea810_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="inline-block mb-4 px-3 py-1 border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold tracking-wider uppercase">
            {heroEyebrow}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-heading">
            {heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl">
            {heroSubheadline}
          </p>
        </div>
      </section>

      {/* 2. PROBLEM FRAMING (Light Theme) */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">
            {introTitle}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-body">
            {introBody}
          </p>
        </div>
      </section>

      {/* 3. VALUE / OUTCOMES SECTION (Darker Slate Theme) */}
      <section className="py-24 px-6 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">
            {valueTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueBullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-none">
                <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-lg text-slate-200 font-body leading-relaxed">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SCOPE BLOCKS (Light Theme - Flat Industrial Cards) */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">
              {scopeTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col p-8 bg-white border border-slate-200 rounded-none hover:border-slate-400 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow font-body text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY EDGE PULSAR (White Theme) */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">
            {whyTitle}
          </h2>
          <div className="pl-6 border-l-2 border-blue-600">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-body">
              {whyBody}
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA (Deep Blue Theme) */}
      <section className="py-24 px-6 bg-[#06113C] text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 font-heading">
            {ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-none h-14 px-8 bg-blue-600 hover:bg-blue-700 hover:-translate-y-[1px] text-white text-lg font-bold tracking-wide uppercase transition-all"
            >
              <Link href={primaryCtaHref}>
                {primaryCtaText}
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none h-14 px-8 border-slate-400 text-slate-200 bg-transparent hover:bg-white/10 hover:text-white text-lg font-bold tracking-wide uppercase transition-all"
            >
              <Link href={secondaryCtaHref}>
                {secondaryCtaText}
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
