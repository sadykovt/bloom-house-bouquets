import { Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-heading font-bold text-foreground">Bloom House</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Заказать цветы
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Адрес
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection("catalog")}
            className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
          >
            Заказать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
