const Companies = () => {
    const companiesLogos = [
        "./icon/Microsoft.svg",
        "./icon/Mashable.svg",
        "./icon/Fortune.svg",
        "./icon/Entrepreneur.svg",
        "./icon/Business web.svg"
    ];

    return (
        <div className="bg-gray-100 py-12 my-16 overflow-hidden text-center w-full">
            <h2 className="text-xl mb-6">TRUSTED BY OVER 1K+ COMPANIES</h2>
            <div className="flex justify-end items-center w-[200vw] gap-4 overflow-x-scroll hide-scroll-bar animate-marquee">
                {companiesLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={logo} className="h-6 mr-2" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies