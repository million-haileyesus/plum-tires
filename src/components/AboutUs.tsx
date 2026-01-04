function AboutUs() {
    return (
        <div id="about" className="flex justify-center items-start pt-1 px-4">
            <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 items-center relative gap-6 md:gap-0">

                {/* TEXT BLOCK: 'order-first' ensures this is at the top on mobile */}
                <div className="order-first md:order-none md:col-start-2 md:row-start-2 text-center max-w-md">
                    <h3 className="text-3xl md:text-6xl text-black font-bold font-[Space Grotesk]">
                        Our Mission
                    </h3>
                    <p className="text-xs md:text-lg text-black font-normal font-[Poppins Extra Light] mt-4">
                        PLUM Tires is dedicated to providing a wide
                        selection of affordable and accessible tire options to
                        meet all your needs. Our commitment is to ensure you
                        find the right tire for your vehicle, enhancing safety
                        and performance on the road.
                    </p>
                </div>

                {/* IMAGES: 'order-last' ensures these follow the text on mobile.
                    Translates are disabled on mobile using md: to prevent images flying off-screen. */}
                <img
                    src="/display_tire.png"
                    alt=""
                    className="
                        w-1/2 md:w-auto h-auto object-contain
                        md:col-start-1 md:row-start-2
                        md:self-center md:justify-self-end
                        md:-translate-y-40
                    "
                />

                <img
                    src="/display_warehouse.png"
                    alt=""
                    className="
                        w-1/2 md:w-auto h-auto object-contain
                        md:col-start-3 md:row-start-1
                        md:self-center md:justify-self-start
                        md:translate-y-47
                        md:-translate-x-7
                    "
                />

                <img
                    src="/display_tirestack.jpg"
                    alt=""
                    className="
                        w-1/2 md:w-auto h-auto object-contain
                        md:col-start-1 md:row-start-3
                        md:self-center md:justify-self-end
                        md:-translate-y-20
                        md:translate-x-27
                    "
                />

                <img
                    src="/display_landspider.jpg"
                    alt=""
                    className="
                        w-1/2 md:w-auto h-auto object-contain
                        md:col-start-3 md:row-start-2
                        md:self-center md:justify-self-start
                        md:translate-y-70
                        md:-translate-x-28
                    "
                />
            </div>
        </div>
    );
}

export default AboutUs;