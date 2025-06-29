// --- Komponen Halaman (Tidak berubah) ---
import { useEffect, useRef, useState } from "react";
import { BuildingIcon, CalendarDaysIcon, SchoolIcon } from "../components/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { works } from "../datas/dummy";
import { Card, CardContent } from "@mui/material";
import imagePlaceholder from "../assets/placeholder.svg"; // Placeholder image for works

export const HomePage = ({ navigateTo , dataKegiatan, dataPesantren }) => {
  const canvasRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "kajian", "kegiatan", "profil"];
  const filteredKegiatan = works.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  );
  const linkClasses = (category) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      selectedCategory === category
        ? "bg-red-700 text-white"
        : "text-gray-700 hover:bg-red-600 hover:text-white"
    }`;

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100; // Number of particles to create.

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1; // Random size between 0.1 and 2.1
        this.speedX = Math.random() * 2 - 1; // Random speed between -1 and 1
        this.speedY = Math.random() * 2 - 1; // Random speed between -1 and 1
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Semi-transparent white
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw a circle
        ctx.fill(); // Fill the circle
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId; // Variable to hold the requestAnimationFrame ID for cleanup.
    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    // Add resize event listener.
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); //

  return (
    <div>
      <div className="relative py-20 sm:py-32 rounded-b-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full bg-black"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.p
            className="max-w-[600px] text-xl text-gray-400 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Selamat Datang di
          </motion.p>
          <motion.h2
            className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl gradient-text text-red-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            {dataPesantren?.nama}
          </motion.h2>
          <motion.p
            className=" text-lg text-gray-400 sm:text-xl md:text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {dataPesantren?.visi}
          </motion.p>

          <motion.button
            onClick={() => navigateTo("profil")}
            className="bg-blue-500 hover:bg-blue-800 text-red-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Mengenal Kami
          </motion.button>
        </div>
      </div>

      <div className=" py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <BuildingIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lembaga Terpercaya</h3>
              <p className="text-gray-600">
                Pusat pendidikan Al-Qur'an dan Bahasa Arab di Jakarta Selatan.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <CalendarDaysIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Program Beragam</h3>
              <p className="text-gray-600">
                Menyediakan kelas reguler, intensif, dauroh, online, dan
                offline.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <SchoolIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visi Jelas</h3>
              <p className="text-gray-600">
                Mencetak kader da'i dan penghafal Al-Qur'an yang mahir berbahasa
                Arab.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2 text-red-800">
            Program Unggulan
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Beberapa program utama yang kami tawarkan.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-red-100">
            <div className="p-8">
              <div className="tracking-wide text-sm text-red-600 font-semibold">
                {dataKegiatan?.[0].nama}
              </div>
              <h3 className="block mt-1 text-2xl leading-tight font-bold text-black">
                Fokus Penguasaan Bahasa Arab
              </h3>
              <p className="mt-4 text-gray-500">{dataKegiatan?.[0].deskripsi}</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigateTo("kegiatan")}
              className="text-red-600 font-semibold hover:underline"
            >
              Lihat Semua Program &rarr;
            </button>
          </div>
        </div>
      </div>
      <section className=" py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white mb-12 flex flex-wrap justify-center gap-4">
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
};
