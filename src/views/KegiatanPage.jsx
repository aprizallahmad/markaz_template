import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { works } from "../datas/dummy";
import { Card, CardContent } from "@mui/material";
import imagePlaceholder from "../assets/placeholder.svg"; // Placeholder image for works

export const KegiatanPage = ({ dataKegiatan }) => {
    const categories = ["all", "kajian", "kegiatan", "profil"];
    const [selectedCategory, setSelectedCategory] = useState("all");
    const linkClasses = (category) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${selectedCategory === category
            ? "bg-red-700 text-white"
            : "text-gray-700 hover:bg-red-600 hover:text-white"
        }`;
    const filteredKegiatan = works.filter((work) =>
        selectedCategory === "all" ? true : work.category === selectedCategory
    );
    

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center mb-2 text-red-800">Program & Kegiatan</h1>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Kami menyediakan berbagai program yang dirancang untuk memenuhi kebutuhan umat dalam mempelajari Al-Qur'an dan Bahasa Arab.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dataKegiatan.map((kegiatan, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <img src={kegiatan.gambar} alt={kegiatan.nama} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{kegiatan.nama}</h2>
                                <p className="text-gray-600 leading-relaxed">{kegiatan.deskripsi}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className=" py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className={linkClasses(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <motion.div
                        layout
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-8"
                    >
                        <AnimatePresence>
                            {filteredKegiatan.map((work) => (
                                <motion.div
                                    key={work.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="overflow-hidden bg-zinc-900">
                                        <CardContent className="p-0">
                                            <div className="group relative">
                                                <img
                                                    src={imagePlaceholder}
                                                    alt={work.title}
                                                    className="transition-transform duration-500 group-hover:scale-105 h-[200px] w-[600px]"
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <h3 className="text-xl font-semibold text-white">
                                                        {work.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm text-gray-300">
                                                        {work.year}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}