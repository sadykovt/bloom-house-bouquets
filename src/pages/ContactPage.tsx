import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Contact />
        
        {/* Yandex Map */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-soft">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c5c8f8e8f8e8f8e8f8e8f8e8f8e8f8e&amp;source=constructor"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Bloom House на карте"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
