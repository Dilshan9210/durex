"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
    product: Product;
    progress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, progress }: Props) {
    // Define opacity transformations for the 4 sections based on progress

    // Section 1: 0 to 0.15
    const opacity1 = useTransform(progress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.05, 0.15, 0.2], [50, 0, 0, -50]);

    // Section 2: 0.25 to 0.4
    const opacity2 = useTransform(progress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
    const y2 = useTransform(progress, [0.2, 0.25, 0.35, 0.4], [50, 0, 0, -50]);

    // Section 3: 0.45 to 0.6
    const opacity3 = useTransform(progress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
    const y3 = useTransform(progress, [0.4, 0.45, 0.55, 0.6], [50, 0, 0, -50]);

    // Section 4: 0.65 to 0.80
    const opacity4 = useTransform(progress, [0.6, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
    const y4 = useTransform(progress, [0.6, 0.65, 0.8, 0.85], [50, 0, 0, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6 sm:p-12 md:p-24 overflow-hidden z-20">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute top-1/4 left-1/2 md:left-24 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-full max-w-xl text-center md:text-left drop-shadow-2xl"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-white">
                    {product.section1.title}
                </h1>
                <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-medium">
                    {product.section1.subtitle}
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute top-1/3 right-1/2 md:right-24 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-full max-w-lg text-center md:text-right drop-shadow-2xl"
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white">
                    {product.section2.title}
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed">
                    {product.section2.subtitle}
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute bottom-[20%] left-1/2 md:left-24 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-full max-w-lg text-center md:text-left drop-shadow-2xl"
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white">
                    {product.section3.title}
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed">
                    {product.section3.subtitle}
                </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute top-1/4 right-1/2 md:right-24 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-full max-w-lg text-center md:text-right drop-shadow-2xl"
            >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-white">
                    {product.section4.title}
                </h2>
                {product.section4.subtitle && (
                    <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-medium leading-relaxed">
                        {product.section4.subtitle}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
