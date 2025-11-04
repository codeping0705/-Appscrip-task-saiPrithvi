import Header from '@/header/layout';
import SubHeadDescription from '@/description/layout';
import ProductPage from '@/products/layout';
import Footer from '@/footer/layout';
import './index.css'

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <SubHeadDescription />
      <ProductPage />
      <Footer />
    </div>
  );
}