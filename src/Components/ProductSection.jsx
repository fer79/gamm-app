import Product from './Product';
import "../index.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function ProductSection() {

  const data = [
    <Product id='1' productImg='/img/product-2.png' price='176.98'></Product>,
    <Product id='2' productImg='/img/product-3.png' price='186.27'></Product>,
    <Product id='3' productImg='/img/product-4.png' price='162.35'></Product>,
    <Product id='4' productImg='/img/product-5.png' price='140.03'></Product>,
    <Product id='9' productImg='/img/product-4.png' price='590.18'></Product>,
    <Product id='12' productImg='/img/product-5.png' price='540.03'></Product>,
    <Product id='11' productImg='/img/product-2.png' price='752.45'></Product>,
    <Product id='10' productImg='/img/product-3.png' price='666.96'></Product>,
    <Product id='5' productImg='/img/product-2.png' price='152.45'></Product>,
    <Product id='6' productImg='/img/product-3.png' price='166.96'></Product>,
    <Product id='7' productImg='/img/product-4.png' price='190.18'></Product>,
    <Product id='8' productImg='/img/product-5.png' price='120.83'></Product>,
    <Product id='13' productImg='/img/product-4.png' price='862.35'></Product>,
    <Product id='15' productImg='/img/product-2.png' price='776.98'></Product>,
    <Product id='14' productImg='/img/product-3.png' price='686.27'></Product>
  ];

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return (index >= page * 8) & (index < (page + 1) * 8);
      })
    );
  }, [page]);

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {filterData && filterData.map((item, index) => <>{item}</>)}
      </section>
      <div className="flex justify-center m-6">
        <ReactPaginate
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          onPageChange={(event) => setPage(event.selected)}
          breakLabel="..."
          pageCount={Math.ceil(data.length / 8)}
          previousLabel={
            <button className="py-2 px-4 rounded-full bg-transparent border-2 border-bud-green hover:bg-lime-300 hover:border-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-bud-green"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
          }
          nextLabel={
            <button className="py-2 px-4 rounded-full bg-bud-green border-2 border-bud-green  mr-4 hover:bg-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
          }
        />
      </div>
    </>
  );
}