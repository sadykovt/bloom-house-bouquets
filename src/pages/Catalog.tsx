import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowerCatalog from "@/components/FlowerCatalog";

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <FlowerCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
