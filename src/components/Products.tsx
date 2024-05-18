import { HiArrowLongRight } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = () => {
  const products = [
    {
      price: 97,
      discount: 0.1,
      name: "Stackable Chair",
      img: "./images/product1.png",
    },

    {
      price: 95,
      discount: 0.31,
      name: "Vintage Chair",
      img: "./images/product2.png",
    },

    {
      price: 45,
      discount: 0.22,
      name: "Lamp Tool",
      img: "./images/product3.png",
    },

    {
      price: 55,
      discount: 0.18,
      name: "Stylish Chair",
      img: "./images/product4.png",
    },

    {
      price: 55,
      discount: 0.36,
      name: "Hand Base Lamp",
      img: "./images/product5.png",
    },

    {
      price: 95,
      discount: 0.31,
      name: "Vintage Chair",
      img: "./images/product6.png",
    }
  ]

  return (
    <div id="products" className="px-16 flex flex-col">

      <div className="flex sm:flex-row flex-col gap-8 items-center justify-between w-full py-8">
        <h1 className="md:text-4xl text-3xl font-bold text-primary">Products</h1>
        <div className="flex flex-row items-center gap-4">
          <p className="text-lg text-gray-600">See All</p>
          <HiArrowLongRight className="text-3xl" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <p className="text-gray-900">All</p>
        <p className="text-gray-600">Bed</p>
        <p className="text-gray-600">Sofa</p>
        <p className="text-gray-600">Chair</p>
        <p className="text-gray-600">Light</p>
      </div>


      <div className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-40 py-16">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div className="bg-neutral-100 p-12 gap-8 rounded-sm w-[300px] h-[300px] flex flex-col relative">
              <h3 className="text-2xl">{product.name}</h3>
              <div className="flex flex-row gap-8 items-center">
                <p className="text-lg text-gray-900">${Math.floor(product.price * (1 - product.discount)).toFixed(2)}</p>
                <p className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</p>
              </div>

              <div className="absolute -top-4 right-4 rounded-full bg-stone-400 p-2 text-center">
                <AiOutlineShoppingCart className="text-xl text-white"/>
              </div>
            </div>
            <img src={product.img} alt={product.name} height={250} className="-mt-[40%] z-10 h-[250px]"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products