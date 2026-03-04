"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Product } from "@/data/products";
import ProductTextOverlays from "./ProductTextOverlays";

interface Props {
    product: Product;
}

export default function ProductBottleScroll({ product }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 240;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
    useEffect(() => {
        let isMounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        // Fast loading sequence
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Ensure path format matches ezgif-frame-001.jpg
            const frameString = String(i).padStart(3, '0');
            img.src = `${product.folderPath}/ezgif-frame-${frameString}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount && isMounted) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }

        return () => {
            isMounted = false;
        };
    }, [product]);

    const drawFrame = useCallback((imgs: HTMLImageElement[], index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !imgs[index] || !imgs[index].complete) return;

        requestAnimationFrame(() => {
            const ctx = canvas.getContext("2d", { alpha: true });
            if (!ctx) return;

            const clientWidth = canvas.clientWidth;
            const clientHeight = canvas.clientHeight;
            if (clientWidth === 0 || clientHeight === 0) return;

            const dpr = window.devicePixelRatio || 1;
            const displayWidth = Math.round(clientWidth * dpr);
            const displayHeight = Math.round(clientHeight * dpr);

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            const img = imgs[index];

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            // object-cover logic: use Math.max to cover the entire canvas
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.drawImage(
                img,
                0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
        });
    }, []);

    // Initial draw
    useEffect(() => {
        if (images.length > 0) {
            drawFrame(images, 0);
        }
    }, [images, drawFrame]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (images.length > 0) {
                const currentProgress = scrollYProgress.get();
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(currentProgress * frameCount)
                );
                drawFrame(images, frameIndex);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress, drawFrame]);

    // Map scroll to frame
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );
        drawFrame(images, frameIndex);
    });

    return (
        <div ref={containerRef} className="relative w-full h-[500vh]">
            <div
                className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center transition-colors duration-1000"
                style={{ background: product.gradient }}
            >
                {/* Full-bleed edge-to-edge container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Subtle dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 mix-blend-multiply" />
                </div>
                {/* Text stays on top */}
                <div className="relative z-20 w-full h-full">
                    <ProductTextOverlays product={product} progress={scrollYProgress} />
                </div>
            </div>
        </div>
    );
}
