import { Heart, Truck, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "С любовью",
      description: "Каждый букет создаём с вниманием к деталям и заботой о ваших эмоциях",
    },
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "Доставим свежие цветы в течение нескольких часов по всему городу",
    },
    {
      icon: Star,
      title: "Только лучшее",
      description: "Работаем с проверенными поставщиками, гарантируем свежесть цветов",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            О нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Bloom House — это больше, чем просто цветочный магазин. Мы создаём незабываемые 
            моменты радости, вкладывая душу в каждую композицию. Наша миссия — дарить эмоции 
            и делать ваши особенные дни ещё ярче.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-soft transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
