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
        <div id="products" className="flex flex-col pt-14 gap-20">

            <div className="flex justify-evenly lg:items-start items-center flex-col gap-10">
                <h2 className="title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Products</h2>
                <p className="text-gray-600 sm:max-w-sm max-w-xs lg:text-start text-center">Explore premium furniture and lighting solutions. Discover stylish chairs and unique lamps at discounted prices.</p>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-x-16 gap-y-20">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div className="bg-neutral-100 p-12 gap-8 rounded-sm w-[20vw] h-[20vw] min-w-sm min-w-80 min-h-80 flex flex-col relative">
                            <h3 className="text-2xl">{product.name}</h3>
                            <div className="flex flex-row gap-8 items-center">
                                <p className="text-lg text-gray-900">${Math.floor(product.price * (1 - product.discount)).toFixed(2)}</p>
                                <p className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</p>
                            </div>

                            <div className="absolute -top-4 right-4 rounded-full bg-stone-400 p-2 text-center">
                                <AiOutlineShoppingCart className="text-xl text-white" />
                            </div>
                        </div>
                        <img src={product.img} alt={product.name} height={250} className="-mt-[40%] z-10 h-[250px]" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
