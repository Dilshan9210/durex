export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col space-y-4">
                    <div className="border-[3px] w-max border-white/90 rounded-full px-6 py-1.5 flex items-center justify-center mb-2">
                        <span className="font-bold text-2xl tracking-tight text-white/90 lowercase">durex</span>
                    </div>
                    <p className="text-gray-400 text-sm hover:text-white transition-colors">
                        Explore your senses with our premium collection of flavours, designed for ultimate pleasure and confidence.
                    </p>
                </div>

                <div className="flex flex-col space-y-3">
                    <h4 className="font-semibold text-lg mb-2">Shop</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Strawberry</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Chocolate</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Bubblegum</a>
                </div>

                <div className="flex flex-col space-y-3">
                    <h4 className="font-semibold text-lg mb-2">Legal</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a>
                </div>

                <div className="flex flex-col space-y-3">
                    <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                    <p className="text-gray-400 text-sm">Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
                    <div className="flex mt-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-white border border-gray-700 border-r-0 w-full"
                        />
                        <button className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm hover:text-gray-300 transition-colors">
                © {new Date().getFullYear()} Durex Flavours Showcase. Not associated with Reckitt directly. Educational/Demo Purposes Only.
            </div>
        </footer>
    );
}
