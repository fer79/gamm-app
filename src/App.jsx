import Link from './Components/Link';
import Product from './Components/Product';
import CartModal from './Components/CartModal';
import HeroSection from './Components/HeroSection';

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
      <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="swiper-pagination">
          <Product id='1' productImg='/img/product-2.png' price='176.98'></Product>
          <Product id='2' productImg='/img/product-3.png' price='186.27'></Product>
          <Product id='3' productImg='/img/product-4.png' price='162.35'></Product>
          <Product id='4' productImg='/img/product-5.png' price='140.03'></Product>
          <Product id='5' productImg='/img/product-2.png' price='152.45'></Product>
          <Product id='6' productImg='/img/product-3.png' price='166.96'></Product>
          <Product id='7' productImg='/img/product-4.png' price='190.18'></Product>
          <Product id='8' productImg='/img/product-5.png' price='120.83'></Product>

          <Product id='9' productImg='/img/product-4.png' price='590.18'></Product>
          <Product id='10' productImg='/img/product-3.png' price='666.96'></Product>
          <Product id='11' productImg='/img/product-2.png' price='752.45'></Product>
          <Product id='12' productImg='/img/product-5.png' price='540.03'></Product>
          <Product id='13' productImg='/img/product-4.png' price='862.35'></Product>
          <Product id='14' productImg='/img/product-3.png' price='686.27'></Product>
          <Product id='15' productImg='/img/product-2.png' price='776.98'></Product>
        </div>
      </section>
    </div>
  )
}