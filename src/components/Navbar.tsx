"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, MessageCircle, Facebook, Mail } from "lucide-react";

interface NavbarProps {
    themeColor: string;
}

export default function Navbar({ themeColor }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="border-[3px] border-white/90 rounded-full px-6 py-1.5 flex items-center justify-center">
                            <span className="font-bold text-2xl tracking-tight text-white/90 lowercase">durex</span>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
                        <button className="hover:text-white transition-colors uppercase tracking-wider text-sm">Shop</button>
                        <button className="hover:text-white transition-colors uppercase tracking-wider text-sm">About</button>
                        <button className="hover:text-white transition-colors uppercase tracking-wider text-sm">Health Benefits</button>
                    </div>

                    {/* Shop Now Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-white hover:scale-105"
                        style={{
                            backgroundColor: themeColor,
                            boxShadow: `0 0 20px ${themeColor}80`,
                        }}
                    >
                        Shop Now
                    </button>
                </div>
            </motion.nav>

            {/* Contact Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: themeColor }} />

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2">Build Your Vision</h3>
                            <p className="text-white/70 mb-8">
                                To develop a premium, interactive website like this, get in touch with our team.
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                                    <div className="text-sm text-white/50 uppercase tracking-wider font-semibold">Business Name</div>
                                    <div className="text-lg text-white font-medium">Seyaruu Digital</div>
                                </div>

                                <a
                                    href="https://wa.me/94766176255"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center gap-4 group hover:bg-[#25D366]/20 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[#25D366] font-semibold">WhatsApp</div>
                                        <div className="text-lg text-white font-medium">0766176255</div>
                                    </div>
                                </a>

                                <a
                                    href="https://www.facebook.com/dilshandew"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center gap-4 group hover:bg-[#1877F2]/20 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                        <Facebook className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[#1877F2] font-semibold">Facebook</div>
                                        <div className="text-white font-medium truncate">dilshandew</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:dilshan2020dila@gmail.com"
                                    className="p-4 rounded-2xl bg-[#EA4335]/10 border border-[#EA4335]/20 flex items-center gap-4 group hover:bg-[#EA4335]/20 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#EA4335] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-[#EA4335] font-semibold">Email</div>
                                        <div className="text-white font-medium truncate">dilshan2020dila@gmail.com</div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
