import { Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-heading font-bold text-foreground">Bloom House</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/catalog"
              className={`transition-colors ${
                isActive("/catalog") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Заказать цветы
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Адрес
            </Link>
          </nav>

          <Link to="/catalog">
            <Button className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow">
              Заказать
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
