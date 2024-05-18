const Hero = () => {
    return (
        <div id="home" className="flex w-full mt-14">
            <div className="w-[25vw] relative items-center md:flex hidden">
                
                <div className="w-full flex justify-center items-center h-full">
                    <div className="grid grid-rows-8 grid-cols-7 gap-2 mb-80 z-10">
                        {Array.from({ length: 56 }).map((_, i) => (
                            <div key={i} className="h-[3px] w-[3px] bg-black rounded-full"></div>
                        ))}
                    </div>
                </div>

                <div className="2xl:w-[25vw] lg:w-[32vw] md:w-[45vw] 2xl:h-[25vw] lg:h-[32vw] md:h-[45vw] absolute lg:left-40 left-10 bg-white bg-opacity-30 backdrop-blur-lg gap-4 border border-white border-opacity-20 rounded-sm flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold text-primary">We Help You Make Modern Interior</h2>
                    <p className="text-base text-gray-600">We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
                </div>
            </div>

            <div className="md:w-[75vw] md:static relative w-full flex ">
                <img src="./images/hero.png" />

                <div className="w-[50vw] h-[50vw] md:hidden absolute inset-0 p-2 text-center m-auto bg-white bg-opacity-30 backdrop-blur-lg gap-2 border border-white border-opacity-20 rounded-sm flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-primary">We Help You Make Modern Interior</h2>
                    <p className="text-sm text-gray-600">We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero