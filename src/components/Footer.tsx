import { Flower2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Flower2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-heading font-bold text-foreground">Bloom House</span>
          </div>
          <p className="text-muted-foreground text-center max-w-md">
            Дарим радость и эмоции с каждым букетом. Заказывайте прямо сейчас!
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Bloom House. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
