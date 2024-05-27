export default function ProductImage({ productImg = '', price = ''}) {
  return (
    <div className="w-62 bg-white shadow rounded-xl duration-500 hover:scale-105">
      <img src={productImg} className="w-100 h-80 rounded-lg"/>
      <div className="px-4 py-3 w-62">
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black my-3">{price}</p>
            <div className="ml-auto">
              <button className="uppercase py-2 px-2 rounded-lg bg-bud-green border-2 text-white text-md mr-4 hover:bg-lime-300">Buy Now</button>
            </div>
          </div>
      </div>
    </div>
  );
}