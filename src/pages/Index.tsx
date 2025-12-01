import { Header } from "@/components/Header";
import { StepCard } from "@/components/StepCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InfoCard } from "@/components/InfoCard";
import { User, Hash, FileQuestion, CheckCircle2, AlertCircle, Send } from "lucide-react";

const Index = () => {
  const regNo = "22BCE9991";
  const lastTwoDigits = parseInt(regNo.slice(-2));
  const isOdd = lastTwoDigits % 2 !== 0;
  const questionType = isOdd ? "Question 1 (Odd)" : "Question 2 (Even)";

  const requestBody = JSON.stringify({
    name: "Your Name",
    regNo: regNo,
    email: "your.email@example.com"
  }, null, 2);

  const submitBody = JSON.stringify({
    finalQuery: "SELECT * FROM your_table WHERE condition = value"
  }, null, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(199_89%_48%/0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary font-medium">Java Qualifier Challenge</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Webhook Integration</span>
              <br />
              <span className="text-foreground">Challenge Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Build a Spring Boot app that generates webhooks, solves SQL problems, and submits solutions via JWT authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 -mt-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <InfoCard 
            icon={<Hash className="w-5 h-5" />}
            label="Registration No"
            value={regNo}
          />
          <InfoCard 
            icon={<FileQuestion className="w-5 h-5" />}
            label="Last 2 Digits"
            value={`${lastTwoDigits} (${isOdd ? 'Odd' : 'Even'})`}
            highlight
          />
          <InfoCard 
            icon={<User className="w-5 h-5" />}
            label="Assigned Question"
            value={questionType}
          />
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Implementation Steps</span>
          </h2>

          <StepCard 
            step={1} 
            title="Generate Webhook" 
            description="On app startup, send a POST request to generate your unique webhook URL and access token."
            badge="POST"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Endpoint:</span>
                <code className="px-2 py-1 rounded bg-secondary text-primary font-mono text-xs">
                  https://bfhldevapigw.healthrx.co.in/hiring/generateWebhook/JAVA
                </code>
              </div>
              <CodeBlock 
                code={requestBody}
                title="Request Body"
                language="json"
              />
            </div>
          </StepCard>

          <StepCard 
            step={2} 
            title="Receive Response" 
            description="You'll receive a webhook URL and an accessToken for JWT authentication."
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">webhook</p>
                  <p className="text-sm text-muted-foreground">Your unique URL to submit the answer</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">accessToken</p>
                  <p className="text-sm text-muted-foreground">JWT token for Authorization header</p>
                </div>
              </div>
            </div>
          </StepCard>

          <StepCard 
            step={3} 
            title="Solve SQL Problem" 
            description={`Based on your registration number ending in ${lastTwoDigits} (${isOdd ? 'odd' : 'even'}), you'll solve ${questionType}.`}
          >
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Your Assignment: {questionType}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {isOdd 
                    ? "Odd registration numbers receive Question 1 - a specific SQL challenge."
                    : "Even registration numbers receive Question 2 - a different SQL challenge."
                  }
                </p>
              </div>
            </div>
          </StepCard>

          <StepCard 
            step={4} 
            title="Submit Solution" 
            description="Send your final SQL query to the webhook URL with JWT authentication."
            badge="POST"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Endpoint:</span>
                <code className="px-2 py-1 rounded bg-secondary text-primary font-mono text-xs">
                  https://bfhldevapigw.healthrx.co.in/hiring/testWebhook/JAVA
                </code>
              </div>
              
              <CodeBlock 
                code={`Authorization: <your_access_token>
Content-Type: application/json`}
                title="Headers"
                language="http"
              />
              
              <CodeBlock 
                code={submitBody}
                title="Request Body"
                language="json"
              />
            </div>
          </StepCard>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="border-t border-border bg-card/30">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="gradient-text">Requirements Checklist</span>
            </h2>
            
            <div className="grid gap-4">
              {[
                { text: "Use RestTemplate or WebClient with Spring Boot", done: false },
                { text: "No controller/endpoint should trigger the flow", done: false },
                { text: "Use @PostConstruct or CommandLineRunner for startup logic", done: false },
                { text: "Include JWT in Authorization header for submission", done: false },
                { text: "Submit public GitHub repo with code and JAR file", done: false },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <Send className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Submission</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Submit your work via the Microsoft Forms link with your public GitHub repository.
              </p>
              <a
                href="https://forms.office.com/r/WFzAwgbNQb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
              >
                Submit Solution
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            Bajaj Finserv Health | Qualifier 1 | JAVA Challenge
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Registration: {regNo} • {questionType}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
