const Hero = () => {
    return (
        <div className="flex w-full">
            <div className="w-[25vw] relative items-center flex">
                <div className="w-full flex justify-center items-center h-full">

                    <div className="grid grid-rows-8 grid-cols-7 gap-2 mb-80 z-10">
                        {Array.from({ length: 56 }).map((_, i) => (
                            <div key={i} className="h-[3px] w-[3px] bg-black rounded-full"></div>
                        ))}
                    </div>

                </div>
                <div className="absolute left-10 w-[35vw] h-[35vw] bg-white bg-opacity-30 backdrop-blur-lg gap-4 border border-white border-opacity-20 rounded-sm px-6 flex flex-col justify-center items-center">
                    <h2 className="text-5xl">We Help You Make Modern Interior</h2>
                    <p className="text-base">We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
                </div>
            </div>

            <div className="w-[75vw]">
                <img src="./images/hero.png" />
            </div>
        </div>
    )
}

export default Hero