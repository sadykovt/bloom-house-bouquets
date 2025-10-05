import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import rosesBouquet from "@/assets/roses-bouquet.jpg";
import tulipsBouquet from "@/assets/tulips-bouquet.jpg";
import luxuryBouquet from "@/assets/luxury-bouquet.jpg";

const FlowerCatalog = () => {
  const bouquets = [
    {
      id: 1,
      name: "Классические розы",
      price: "3500 ₽",
      image: rosesBouquet,
      description: "Элегантный букет из красных роз — идеальный подарок для выражения чувств",
    },
    {
      id: 2,
      name: "Нежность",
      price: "2800 ₽",
      image: tulipsBouquet,
      description: "Романтичная композиция с тюльпанами и пионами в пастельных тонах",
    },
    {
      id: 3,
      name: "Премиум букет",
      price: "5500 ₽",
      image: luxuryBouquet,
      description: "Роскошная композиция с гортензиями и орхидеями для особых случаев",
    },
  ];

  return (
    <section id="catalog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Заказать цветы
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите идеальный букет для ваших близких. Все композиции создаются из свежих цветов 
            в день доставки.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bouquets.map((bouquet, index) => (
            <Card 
              key={bouquet.id}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  {bouquet.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {bouquet.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {bouquet.price}
                  </span>
                  <Button className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowerCatalog;
