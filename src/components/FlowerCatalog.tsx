import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import rosesBouquet from "@/assets/roses-bouquet.jpg";
import tulipsBouquet from "@/assets/tulips-bouquet.jpg";
import luxuryBouquet from "@/assets/luxury-bouquet.jpg";
import sunflowersBouquet from "@/assets/sunflowers-bouquet.jpg";
import liliesBouquet from "@/assets/lilies-bouquet.jpg";
import springBouquet from "@/assets/spring-bouquet.jpg";
import gardenRosesBouquet from "@/assets/garden-roses-bouquet.jpg";
import orchidsBouquet from "@/assets/orchids-bouquet.jpg";
import wildflowersBouquet from "@/assets/wildflowers-bouquet.jpg";
import carnationsBouquet from "@/assets/carnations-bouquet.jpg";
import gerberaBouquet from "@/assets/gerbera-bouquet.jpg";
import chrysanthemumBouquet from "@/assets/chrysanthemum-bouquet.jpg";

type Category = "Все" | "Розы" | "Тюльпаны" | "Лилии" | "Орхидеи" | "Полевые" | "Смешанные";

const FlowerCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Все");

  const categories: Category[] = ["Все", "Розы", "Тюльпаны", "Лилии", "Орхидеи", "Полевые", "Смешанные"];

  const bouquets = [
    {
      id: 1,
      name: "Классические розы",
      price: "450,000 UZS",
      image: rosesBouquet,
      description: "Элегантный букет из красных роз — идеальный подарок для выражения чувств",
      category: "Розы" as Category,
    },
    {
      id: 2,
      name: "Нежность",
      price: "360,000 UZS",
      image: tulipsBouquet,
      description: "Романтичная композиция с тюльпанами и пионами в пастельных тонах",
      category: "Тюльпаны" as Category,
    },
    {
      id: 3,
      name: "Премиум букет",
      price: "700,000 UZS",
      image: luxuryBouquet,
      description: "Роскошная композиция с гортензиями и орхидеями для особых случаев",
      category: "Смешанные" as Category,
    },
    {
      id: 4,
      name: "Солнечное настроение",
      price: "320,000 UZS",
      image: sunflowersBouquet,
      description: "Яркий букет из подсолнухов для позитивного настроения",
      category: "Смешанные" as Category,
    },
    {
      id: 5,
      name: "Белые лилии",
      price: "480,000 UZS",
      image: liliesBouquet,
      description: "Изысканные белые лилии для торжественных событий",
      category: "Лилии" as Category,
    },
    {
      id: 6,
      name: "Весенний сад",
      price: "390,000 UZS",
      image: springBouquet,
      description: "Свежая весенняя композиция с нарциссами и фрезиями",
      category: "Смешанные" as Category,
    },
    {
      id: 7,
      name: "Садовые розы",
      price: "520,000 UZS",
      image: gardenRosesBouquet,
      description: "Пышные садовые розы нежно-розового оттенка",
      category: "Розы" as Category,
    },
    {
      id: 8,
      name: "Экзотические орхидеи",
      price: "650,000 UZS",
      image: orchidsBouquet,
      description: "Роскошные фаленопсисы для ценителей экзотики",
      category: "Орхидеи" as Category,
    },
    {
      id: 9,
      name: "Полевые цветы",
      price: "280,000 UZS",
      image: wildflowersBouquet,
      description: "Натуральная композиция из полевых цветов",
      category: "Полевые" as Category,
    },
    {
      id: 10,
      name: "Гвоздики",
      price: "310,000 UZS",
      image: carnationsBouquet,
      description: "Классический букет из ярких гвоздик",
      category: "Смешанные" as Category,
    },
    {
      id: 11,
      name: "Герберы",
      price: "340,000 UZS",
      image: gerberaBouquet,
      description: "Жизнерадостные герберы в ярких тонах",
      category: "Смешанные" as Category,
    },
    {
      id: 12,
      name: "Хризантемы",
      price: "300,000 UZS",
      image: chrysanthemumBouquet,
      description: "Осенние хризантемы для особого случая",
      category: "Смешанные" as Category,
    },
  ];

  const filteredBouquets = selectedCategory === "Все" 
    ? bouquets 
    : bouquets.filter(bouquet => bouquet.category === selectedCategory);

  return (
    <section id="catalog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Заказать цветы
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите идеальный букет для ваших близких. Все композиции создаются из свежих цветов 
            в день доставки.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-gradient-primary text-primary-foreground shadow-soft"
                  : "border-2 border-border hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Bouquets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredBouquets.map((bouquet, index) => (
            <Card 
              key={bouquet.id}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {bouquet.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {bouquet.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {bouquet.price}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                  >
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
