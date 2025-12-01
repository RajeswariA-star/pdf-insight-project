import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

export const InfoCard = ({ icon, label, value, highlight }: InfoCardProps) => {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'}`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${highlight ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className={`font-semibold ${highlight ? 'text-primary' : 'text-foreground'}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};
