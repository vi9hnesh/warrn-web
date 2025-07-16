import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-24 pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-muted-foreground font-semibold mb-10">How Do We Create Magic?</h2>
          <p className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Streamlined incident response
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, modern, and effective.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Gradient background effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[500px] bg-gradient-to-r from-muted to-muted/50 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Detection Card */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-border/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Detection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamlessly integrate with your existing monitoring tools or manually create alerts. Get instant notifications when incidents occur.
              </p>
            </div>

            {/* Response Card */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-border/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Response</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically notify the right team members and collaborate in real-time through integrated communication channels.
              </p>
            </div>

            {/* Resolution Card */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-border/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Resolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Document the resolution process, capture learnings, and continuously improve your incident response workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-muted-foreground text-2xl mt-14">
              Stop Worrying, Start Responding!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
