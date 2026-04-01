import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Footer } from '@/components/layout/Footer';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { fetchProducts } from '@/lib/api';

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

// panggil data api memakai server components
export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  const { products, currentPage, lastPage } = await fetchProducts(page);

  return (
    <main className="min-h-screen bg-white">
      <Navbar products={products} />
      <Hero />
      <CatalogSection products={products} currentPage={currentPage} lastPage={lastPage} />
      <Footer />
    </main>
  );
}
