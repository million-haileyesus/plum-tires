function Footer() {
    return (
        <footer id="footer" className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="sm:col-span-2 lg:col-span-1">
                    <h1 className="text-3xl md:text-4xl text-black font-semibold font-[Space Grotesk]">
                        PLUM GENERAL LLC
                    </h1>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center mt-0">
                    <div className="flex flex-col space-y-2.5">
                        <p className="text-black text-sm pl-2.5 md:pl-0 md:text-lg font-normal font-[Poppins Extra Light]">
                            469-407-4875  <br/>
                            plumgeneralllc@gmail.com <br/>
                            11550 Plano Rd, Suite 124, <br/>
                            Dallas, TX 75243
                        </p>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center md:text-end text-xs md:text-lg border-t mt-6 border-slate-200">
                Copyright 2026 &copy; Plum General LLC All Right Reserved.
            </p>
        </footer>
    );
}

export default Footer;