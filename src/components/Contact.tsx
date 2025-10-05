import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      details: ["ул. Цветочная, д. 15", "Москва, 123456"],
    },
    {
      icon: Phone,
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (926) 789-01-23"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bloomhouse.ru", "orders@bloomhouse.ru"],
    },
    {
      icon: Clock,
      title: "Режим работы",
      details: ["Пн-Вс: 9:00 - 21:00", "Без выходных"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь с выбором букета 
            и ответить на ваши вопросы.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-soft transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
