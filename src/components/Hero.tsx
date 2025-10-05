import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            Bloom House
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Дарит радость и эмоции с каждым букетом
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Создаём незабываемые цветочные композиции для самых важных моментов вашей жизни. 
            Свежие цветы, быстрая доставка, внимание к деталям.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow text-lg px-8 py-6"
              >
                Заказать букет
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
