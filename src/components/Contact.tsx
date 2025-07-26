import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/254746293985", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:scxforexsignal@gmail.com", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to start your profitable forex journey? Contact us today!
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Contact */}
            <Card className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all duration-300 group cursor-pointer" onClick={handleWhatsApp}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h3 className="text-2xl font-bold text-primary mb-3">WhatsApp</h3>
                <p className="text-xl font-mono text-foreground mb-4">+254746293985</p>
                <p className="text-muted-foreground mb-6">
                  Get instant responses and join our signal group
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
                >
                  Message on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all duration-300 group cursor-pointer" onClick={handleEmail}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Email</h3>
                <p className="text-lg text-foreground mb-4 break-all">scxforexsignal@gmail.com</p>
                <p className="text-muted-foreground mb-6">
                  For detailed inquiries and support
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Action Buttons */}
          <div className="bg-gradient-to-r from-card/50 to-secondary/50 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Ready to Start Trading?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-gradient-to-r from-primary to-gold-light hover:from-gold-light hover:to-primary text-black font-bold px-8 py-4 text-lg"
              >
                Join SCX Signals Now
              </Button>
              <Button 
                onClick={() => window.open("https://wa.me/254746293985?text=I%20have%20questions%20about%20SCX%20Forex%20Signal", "_blank")}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                Ask Questions
              </Button>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold text-foreground mb-3">Trading Hours & Support</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-primary">Market Analysis:</span><br />
                24/5 (Mon-Fri)
              </div>
              <div>
                <span className="font-semibold text-primary">Signal Delivery:</span><br />
                Real-time alerts
              </div>
              <div>
                <span className="font-semibold text-primary">Support Response:</span><br />
                Within 2 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;