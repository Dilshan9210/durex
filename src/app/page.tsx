"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import { ChevronLeft, ChevronRight, ShoppingCart, ShieldCheck, Box, ArrowRight } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProduct = products[currentIndex];

  useEffect(() => {
    // Reset scroll when switching products
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main
      className="min-h-screen transition-colors duration-1000 ease-in-out relative flex flex-col"
      style={{ background: activeProduct.gradient }}
    >
      <div className="relative z-20">
        <Navbar themeColor={activeProduct.themeColor} />
      </div>

      {/* Main Content Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1 flex flex-col"
        >
          {/* Scroll Experience */}
          <ProductBottleScroll product={activeProduct} />

          {/* Details Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{activeProduct.detailsSection.title}</h2>
              <p className="text-xl text-white/80 leading-relaxed">{activeProduct.detailsSection.description}</p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                {activeProduct.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-sm text-white/60 mb-1 font-medium">{stat.label}</div>
                    <div className="text-lg font-bold text-white tracking-tight">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] md:aspect-square bg-black/20 rounded-[2rem] border border-white/10 flex items-center justify-center p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="w-full h-full rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center text-white/40 text-lg font-medium tracking-widest uppercase italic bg-cover bg-center"
                style={{ backgroundColor: `${activeProduct.themeColor}40` }}
              >
                {/* Fallback box for the detail visualization */}
                <div className="text-center px-4">
                  {activeProduct.detailsSection.imageAlt}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Freshness/Test Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full bg-black/30 py-24 backdrop-blur-md relative z-20"
          >
            <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
              <ShieldCheck className="w-16 h-16 mx-auto text-white/80" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{activeProduct.freshnessSection.title}</h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">{activeProduct.freshnessSection.description}</p>
            </div>
          </motion.section>

          {/* Buy Now Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-20"
          >
            <div className="bg-white/5 border border-white/20 rounded-[2rem] p-8 md:p-16 backdrop-blur-xl flex flex-col md:flex-row gap-12 items-center justify-between shadow-2xl">
              <div className="space-y-6 flex-1">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                  Get {activeProduct.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {activeProduct.buyNowSection.processingParams.map((param, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/90 border border-white/10 backdrop-blur-md">
                      {param}
                    </span>
                  ))}
                </div>
                <div className="space-y-4 text-white/80 pt-6 border-t border-white/10 mt-6">
                  <div className="flex items-start gap-4">
                    <Box className="w-6 h-6 shrink-0 mt-0.5" />
                    <p>{activeProduct.buyNowSection.deliveryPromise}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 shrink-0 mt-0.5" />
                    <p>{activeProduct.buyNowSection.returnPolicy}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-[2rem] border border-white/20 w-full md:w-96 shrink-0 flex flex-col items-center text-center space-y-6 shadow-xl backdrop-blur-lg">
                <div>
                  <div className="text-6xl font-black tracking-tighter text-white">{activeProduct.buyNowSection.price}</div>
                  <div className="text-white/60 mt-2 font-medium uppercase tracking-wider text-sm">{activeProduct.buyNowSection.unit}</div>
                </div>
                <button
                  className="w-full py-4 rounded-full font-bold text-lg text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  style={{ backgroundColor: activeProduct.themeColor, boxShadow: `0 10px 40px -10px ${activeProduct.themeColor}` }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.section>

          {/* Next Flavor Button */}
          <div className="w-full py-24 md:py-32 bg-[#0f1115] relative z-20 flex flex-col items-center justify-center space-y-8">
            <div className="text-white/50 text-sm md:text-base font-bold tracking-[0.3em] uppercase">
              Continue The Journey
            </div>
            <motion.button
              onClick={nextProduct}
              whileHover={{ backgroundColor: activeProduct.themeColor, color: "#ffffff", borderColor: activeProduct.themeColor }}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg flex items-center gap-3 transition-colors duration-300 border-[3px] border-white shadow-xl"
            >
              Next Flavor <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <Footer />

      {/* Fixed Navigation Arrows */}
      <div className="relative z-20">
        <div className="fixed top-1/2 -translate-y-1/2 left-4 md:left-8 z-[60] pointer-events-none">
          <button
            onClick={prevProduct}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white flex items-center justify-center text-white transition-all hover:scale-110 shadow-2xl pointer-events-auto"
            style={{ backgroundColor: activeProduct.themeColor }}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="fixed top-1/2 -translate-y-1/2 right-4 md:right-8 z-[60] pointer-events-none">
          <button
            onClick={nextProduct}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white flex items-center justify-center text-white transition-all hover:scale-110 shadow-2xl pointer-events-auto"
            style={{ backgroundColor: activeProduct.themeColor }}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      {/* Fixed Bottom Menu */}
      <div className="relative z-20">
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60]">
          <div className="bg-black/30 backdrop-blur-2xl border border-white/20 p-2 rounded-full flex gap-2 shadow-2xl">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${currentIndex === i ? "bg-white text-black shadow-lg shadow-white/20 scale-105" : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
              >
                {p.name.replace('Durex ', '')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
