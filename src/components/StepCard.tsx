import { ReactNode } from "react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  children: ReactNode;
  badge?: string;
  badgeType?: "post" | "get";
}

export const StepCard = ({ step, title, description, children, badge, badgeType = "post" }: StepCardProps) => {
  return (
    <div className="relative animate-slide-up" style={{ animationDelay: `${step * 0.1}s` }}>
      <div className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      
      <div className="flex gap-4">
        <div className="step-indicator shrink-0 z-10">
          {step}
        </div>
        
        <div className="flex-1 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {badge && (
              <span className={`api-badge ${badgeType === "post" ? "api-badge-post" : "bg-primary/20 text-primary"}`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="bg-card rounded-xl border border-border p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
