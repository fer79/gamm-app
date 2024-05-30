import Link from './Components/Link';
import CartModal from './Components/CartModal';
import HeroSection from './Components/HeroSection';
import ProductSection from './Components/ProductSection';

import { CartProvider } from './CartContext';

export default function App() {

  return (
    <CartProvider>
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      <div className="text-white bg-bud-green text-center">30% OFF ALL ORDERS UNTIL 4/27</div>
      <nav className="flex flex-wrap justify-center text-bud-green py-4">
        <div className="sm:hidden pl-2">
          <svg onClick={() => {const navToggle = document.getElementsByClassName("toggle");
                              for (let i = 0; i < navToggle.length; i++) {
                              navToggle.item(i).classList.toggle("hidden");
                              }}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 fill-current text-bud-green hover:fill-current hover:text-lime-300"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <div className="toggle hidden sm:block ml-auto">
          <Link value="HOME" active='active'></Link>
          <Link value="ITEM 1"></Link>
          <Link value="ITEM 2"></Link>
          <Link value="ITEM 3"></Link>
          <Link value="ITEM 4"></Link>
          <Link value="ITEM 5"></Link>
        </div>
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
    </CartProvider>
  )
}