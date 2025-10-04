import ApartmentList from "@/components/molecules/ApartmentsList";
import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";

export default function ApartmentsPage() {
  return (
    <div className="p-6">
      <Header />
      <main className="container mx-auto px-4">
        <ApartmentList/>
      </main>
      <Footer />
    </div>
  );
}
