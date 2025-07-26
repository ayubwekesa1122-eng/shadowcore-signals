import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      country: "UK",
      text: "SCX signals have completely transformed my trading. The precision is incredible - I've hit 85% of my trades in the last month!",
      profit: "+$2,850"
    },
    {
      name: "David K.",
      country: "USA",
      text: "The Shadow Core X strategy is pure gold. Finally, signals that actually work with proper risk management.",
      profit: "+$4,220"
    },
    {
      name: "Ahmed R.",
      country: "UAE",
      text: "Best investment I've made. The AI + human combination gives me confidence in every trade. Highly recommended!",
      profit: "+$3,100"
    },
    {
      name: "Maria L.",
      country: "Spain",
      text: "ICT and SMC concepts explained so clearly. I've learned more in 2 months than in 2 years of solo trading.",
      profit: "+$1,950"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Trader Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our community is achieving with SCX Forex Signal
            </p>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Active Traders</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <p className="text-muted-foreground">Win Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.3M+</div>
              <p className="text-muted-foreground">Profits Generated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Market Coverage</p>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.country}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-500 font-bold text-lg">{testimonial.profit}</div>
                      <div className="text-xs text-muted-foreground">Last 30 days</div>
                    </div>
                  </div>
                  
                  <div className="text-primary text-2xl mb-3">⭐⭐⭐⭐⭐</div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <div className="bg-card/50 border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">Why Traders Trust SCX</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold text-foreground mb-1">Secure & Reliable</h4>
                  <p className="text-sm text-muted-foreground">Consistent performance since launch</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-foreground mb-1">Transparent Results</h4>
                  <p className="text-sm text-muted-foreground">All signals tracked and verified</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-foreground mb-1">Proven Strategy</h4>
                  <p className="text-sm text-muted-foreground">SMC + ICT + AI combination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;