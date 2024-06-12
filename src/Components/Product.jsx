import { useContext } from "react";
import CartContext from '../CartContext';

export default function Product({ id = '', productImg = '', price = ''}) {

  const { addToCart, toggleModal } = useContext(CartContext);

  return (
    <div key={id} className="relative bg-white border rounded-lg shadow-[rgba(0,0,0,0.5)_4px_2px_4px_0px] transform transition duration-500 hover:scale-105">
      <div className="flex justify-center">
        <img className="rounded-md p-2 object-fill w-96" src={productImg} loading="lazy" />
      </div>
      <div className="px-4 pb-2">
        <div className="p-2 md:flex items-center text-center">
          <h5 className="text-xl font-semibold text-black">${price}</h5>
          <div className="md:absolute md:right-0"><button onClick={() => {addToCart({id, price, productImg}); toggleModal();}} className="uppercase py-2 px-2 md:mr-4 rounded-full bg-bud-green border-2 text-white text-md hover:bg-lime-300">Buy Now</button></div>
        </div>
      </div>
    </div>
  );
}