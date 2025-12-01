import { Webhook, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 card-glow">
              <Webhook className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground">Webhook Challenge</h1>
              <p className="text-xs text-muted-foreground">Bajaj Finserv Health</p>
            </div>
          </div>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">View on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
