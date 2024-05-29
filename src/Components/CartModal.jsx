import { useState } from "react";
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function CartModal() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const isCartEmpty = true; // cartItems.length === 0;

  return (
    <>
      <svg onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 px-4 fill-current text-bud-green hover:fill-current hover:text-lime-300"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                  <div className="flex items-center justify-between p-5 rounded-t">
                    <div className="ml-auto"><h3 className="text-3xl font-semibold">Shopping Cart</h3></div>
                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}></button>
                  </div>

                  <div id="cart-body" className="flex items-center justify-between">
                    {isCartEmpty ? (
                    <img src="/img/empty-cart.png" className="w-100 h-80 rounded-lg border-t border-solid"/>
                    ) : (
                    <div className="flex items-start py-4 px-6 border-t border-solid">
                      <img src="/img/product-2.png" className="w-25 h-20 rounded-lg pr-10"/>
                      <div className="ml-auto">
                        <p className="text-black mt-4">$9.99</p>
                      </div>
                      <div className="pl-20"><button className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-500 text-white rounded-lg">Remove</button></div>
                    </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-6 border-t border-solid">
                    <div className="text-black font-bold">Total: $9.99</div>
                    <PrimaryButton value='Check Out'></PrimaryButton>
                  </div>
                  <div className="flex items-center justify-end p-10 border-t border-solid rounded-b">
                    <SecondaryButton value='Continue Shopping' onClick={toggleModal}></SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
}
