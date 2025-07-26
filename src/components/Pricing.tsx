import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const handleMonthlySubscription = () => {
    window.open("https://wa.me/254746293985?text=I%20want%20to%20subscribe%20to%20SCX%20Monthly%20Plan%20($35/month)", "_blank");
  };

  const handleLifetimeSubscription = () => {
    window.open("https://wa.me/254746293985?text=I%20want%20to%20get%20SCX%20Lifetime%20Access%20($1000)", "_blank");
  };

  const features = [
    "Real-time forex signals",
    "Smart Money Concepts (SMC) analysis",
    "ICT methodology insights",
    "AI-powered market predictions",
    "3-level take profit targets",
    "Risk management guidance",
    "Multi-timeframe analysis",
    "Trade setup explanations",
    "WhatsApp signal delivery",
    "24/7 trading support"
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your journey to profitable forex trading with SCX
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="bg-card border-primary/30 hover:border-primary/60 transition-all duration-300 relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Monthly Plan</CardTitle>
                <div className="text-5xl font-bold text-primary mb-2">$35</div>
                <p className="text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-primary text-lg">✅</div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={handleMonthlySubscription}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                >
                  Start Monthly Plan
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime Plan */}
            <Card className="bg-gradient-to-br from-card to-secondary border-gold/50 hover:border-gold transition-all duration-300 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Lifetime Access</CardTitle>
                <div className="text-5xl font-bold text-gold mb-2">$1000</div>
                <p className="text-muted-foreground">one-time payment</p>
                <p className="text-sm text-primary mt-2">Save $420 per year!</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-gold text-lg">✅</div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {/* Lifetime Exclusive Features */}
                  <div className="border-t border-gold/30 pt-3 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-gold text-lg">⭐</div>
                      <span className="text-gold font-semibold">Priority support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-gold text-lg">⭐</div>
                      <span className="text-gold font-semibold">Exclusive strategy updates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-gold text-lg">⭐</div>
                      <span className="text-gold font-semibold">VIP community access</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleLifetimeSubscription}
                  className="w-full bg-gradient-to-r from-gold to-primary hover:from-primary hover:to-gold text-black font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Lifetime Access
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-12">
            <div className="bg-card/50 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-primary mb-2">7-Day Money Back Guarantee</h3>
              <p className="text-muted-foreground">
                Not satisfied with our signals? Get a full refund within 7 days, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;