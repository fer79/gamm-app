import Link from './Components/Link';
import CartModal from './Components/CartModal';
import HeroSection from './Components/HeroSection';
import ProductSection from './Components/ProductSection';

export default function App() {

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      <div className="text-white bg-bud-green text-center">30% OFF ALL ORDERS UNTIL 4/27</div>
      <nav className="flex flex-wrap justify-center text-bud-green py-4">
        <div className="hidden sm:block ml-auto">
          <Link value="HOME" active='active'></Link>
          <Link value="ITEM 1"></Link>
          <Link value="ITEM 2"></Link>
          <Link value="ITEM 3"></Link>
          <Link value="ITEM 4"></Link>
          <Link value="ITEM 5"></Link>
        </div>
        <div className="sm:hidden pl-2">Si</div>
        <div className="ml-auto"><CartModal></CartModal></div>
      </nav>
      <div className="bg-cover bg-center bg-fixed bg-sky-banner">
        <HeroSection></HeroSection>
      </div>
      <div className="text-center pt-10">
        <h1 className="font-bold text-4xl mb-4 text-bud-green">Featured Collection</h1>
      </div>
      <ProductSection></ProductSection>
    </div>
  )
}