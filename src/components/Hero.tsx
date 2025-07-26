import { Button } from "@/components/ui/button";
import heroImage from "@/assets/forex-hero-bg.jpg";

const Hero = () => {
  const handleJoinNow = () => {
    window.open("https://wa.me/254746293985", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent leading-tight">
            SCX Forex Signal
          </h1>
          
          {/* Shadow Core X Strategy */}
          <div className="text-2xl md:text-3xl font-semibold text-gold mb-4">
            Shadow Core X Strategy
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Sniper Forex Signals Powered by <span className="text-primary font-semibold">Smart Money Concepts (SMC)</span>, 
            <span className="text-primary font-semibold"> ICT</span>, and <span className="text-primary font-semibold">AI</span>
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">Real-time Alerts</h3>
              <p className="text-sm text-muted-foreground">Instant notifications</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-foreground mb-2">Multi-timeframe</h3>
              <p className="text-sm text-muted-foreground">Complete analysis</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">3-Level TP</h3>
              <p className="text-sm text-muted-foreground">Maximum profits</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">🔄</div>
              <h3 className="font-semibold text-foreground mb-2">Trade Management</h3>
              <p className="text-sm text-muted-foreground">Expert guidance</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleJoinNow}
            size="lg"
            className="bg-gradient-to-r from-primary to-gold-light hover:from-gold-light hover:to-primary text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join Now - Start Trading
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;