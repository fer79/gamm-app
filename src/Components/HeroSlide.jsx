import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function HeroSlide({title = '', phrase = '', productImg = ''}) {
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-normal text-bud-green">{title}</h1>
          <p className="mb-8 leading-relaxed font-normal text-bud-green hidden sm:block">{phrase}</p>
          <div className="md:absolute md:bottom-40 justify-center my-6">
            <PrimaryButton value='Shop Now'></PrimaryButton>
            <SecondaryButton value='Take the Quiz'></SecondaryButton>
          </div>
          <div className="md:absolute flex md:bottom-28 justify-center">
            <div className="pr-2"><button className="prevHero py-2 px-4 rounded-full bg-transparent border-2 border-bud-green hover:bg-lime-300 hover:border-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-bud-green"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button></div>
            <button className="nextHero py-2 px-4 rounded-full bg-bud-green border-2 border-bud-green  mr-4 hover:bg-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
          </div>
        </div>
        <div className="flex lg:max-w-lg lg:w-full order-first sm:order-last mb-16 md:mb-0">
          <img className="object-cover object-center h-96 rounded" alt="hero" src={productImg} />
        </div>
      </div>
    </>
  )
}