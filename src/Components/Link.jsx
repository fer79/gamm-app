export default function Link({ value = '', active = ''}) {
  return (
    <>
      { (active == "active") ? (
        <a className="block md:inline-block px-4 underline font-bold decoration-2" href="#">{value}</a>
      ) : (
        <a className="block md:inline-block px-4 hover:text-lime-300" href="#">{value}</a>
      )}
    </>
  );
}