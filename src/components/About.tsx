import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About SCX
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Built by <span className="text-primary font-semibold">Ayub & GPT-4o</span>, combining the power of 
            <span className="text-gold font-semibold"> BEAST</span> + 
            <span className="text-gold font-semibold"> PHANTOM X</span> + 
            <span className="text-gold font-semibold"> Shadow Core</span> for sniper precision.
          </p>

          {/* Strategy Components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🦁</div>
                <h3 className="text-xl font-bold text-primary mb-3">BEAST</h3>
                <p className="text-muted-foreground">
                  Aggressive market entry strategies with institutional-level precision
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👻</div>
                <h3 className="text-xl font-bold text-primary mb-3">PHANTOM X</h3>
                <p className="text-muted-foreground">
                  Advanced SMC concepts for stealth market manipulation detection
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌑</div>
                <h3 className="text-xl font-bold text-primary mb-3">Shadow Core</h3>
                <p className="text-muted-foreground">
                  AI-powered analysis combining ICT methodology with smart money flow
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-card/50 to-secondary/50 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Why SCX is Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">✅</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Human + AI Collaboration</h4>
                  <p className="text-muted-foreground text-sm">Expert trader Ayub combined with GPT-4o intelligence</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">✅</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Triple Strategy Fusion</h4>
                  <p className="text-muted-foreground text-sm">BEAST + PHANTOM X + Shadow Core working in harmony</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">✅</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Institutional-Grade Analysis</h4>
                  <p className="text-muted-foreground text-sm">SMC and ICT concepts for professional edge</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">✅</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sniper Precision</h4>
                  <p className="text-muted-foreground text-sm">High probability setups with maximum profit potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;