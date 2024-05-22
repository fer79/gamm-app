export default function App() {
  return (
  <body class="relative flex min-h-screen flex-col overflow-hidden bg-white">
    <div class="text-white bg-bud-green text-center">30% OFF ALL ORDERS UNTIL 4/27</div>
    <nav class="flex flex-wrap justify-center text-bud-green py-4">
      <div class="">
        <a class="px-4 underline font-bold decoration-2" href="#">HOME</a>
        <a class="px-4 hover:text-lime-300" href="#">ITEM 1</a>
        <a class="px-4 hover:text-lime-300" href="#">ITEM 2</a>
        <a class="px-4 hover:text-lime-300" href="#">ITEM 3</a>
        <a class="px-4 hover:text-lime-300" href="#">ITEM 4</a>
        <a class="px-4 hover:text-lime-300" href="#">ITEM 5</a>
      </div>
      <div class="justify-self-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-2 px-4 sm:h-6"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg></div>
    </nav>
    <div class="bg-cover bg-center bg-fixed bg-sky-banner">
      <div class="text-bud-green">Lorem ipsum dolor sit amet</div>
    </div>
  </body>
  )
}