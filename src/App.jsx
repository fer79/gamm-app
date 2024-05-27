import CartModal from './Components/CartModal';
import Product from './Components/Product';
import PrimaryButton from './Components/PrimaryButton';
import SecondaryButton from './Components/SecondaryButton';

export default function App() {

  return (
  <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
    <div className="text-white bg-bud-green text-center">30% OFF ALL ORDERS UNTIL 4/27</div>
    <nav className="flex flex-wrap justify-center text-bud-green py-4">
      <div className="ml-auto">
        <a className="px-4 underline font-bold decoration-2" href="#">HOME</a>
        <a className="px-4 hover:text-lime-300" href="#">ITEM 1</a>
        <a className="px-4 hover:text-lime-300" href="#">ITEM 2</a>
        <a className="px-4 hover:text-lime-300" href="#">ITEM 3</a>
        <a className="px-4 hover:text-lime-300" href="#">ITEM 4</a>
        <a className="px-4 hover:text-lime-300" href="#">ITEM 5</a>
      </div>
      <div className="ml-auto"><CartModal></CartModal></div>
    </nav>
    <div className="bg-cover bg-center bg-fixed bg-sky-banner">
      <div className="container mx-auto px-6 flex relative py-16 text-bud-green">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
          <h1 className="text-2xl sm:text-6xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm sm:text-base my-6">Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.</p>
          <div className="flex my-6">
            <PrimaryButton value='Shop Now'></PrimaryButton>
            <SecondaryButton value='Take the Quiz'></SecondaryButton>
          </div>
          <div className="flex my-6">
            <a href="#" className="py-2 px-4 rounded-full bg-transparent border-2 border-bud-green hover:bg-lime-300 hover:border-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-bud-green"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></a>
            <a href="#" className="py-2 px-4 rounded-full bg-bud-green border-2 border-bud-green  mr-4 hover:bg-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img src="/img/product-1.png" className="m-auto"/>
        </div>
      </div>
    </div>
    <div className="text-center pt-10">
      <h1 className="font-bold text-4xl mb-4 text-bud-green">Featured Collection</h1>
    </div>
    <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <Product productImg='/img/product-2.png' price='$176.98'></Product>
      <Product productImg='/img/product-3.png' price='$186.27'></Product>
      <Product productImg='/img/product-4.png' price='$162.35'></Product>
      <Product productImg='/img/product-5.png' price='$140.03'></Product>
      <Product productImg='/img/product-2.png' price='$152.45'></Product>
      <Product productImg='/img/product-3.png' price='$166.96'></Product>
      <Product productImg='/img/product-4.png' price='$190.18'></Product>
    </section>
  </div>
  )
}