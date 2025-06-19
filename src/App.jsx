import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- Ikon SVG ---
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);
const BuildingIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);
const CalendarDaysIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const SchoolIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>
);
const MessageCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);
const SendIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
const InstagramIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);
const PaperclipIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
    </svg>
);
const FileTextIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
);

// --- Data Aplikasi (Diperbarui dari Instagram & Blogspot) ---
const dataPesantren = {
    nama: "Pondok Pesantren Markazul Lughoh Al-Arobiyyah",
    pimpinan: "Ustadz Ahmad Alfarisi, S.Pd.I",
    lokasi: "Jl. Buncit Raya Pulo No. 17, Kalibata, Pancoran, Jakarta Selatan",
    kontak: "0812-2229-3444",
    email: "markazullughoh@gmail.com",
    sejarah: "Berawal dari sebuah cita-cita besar untuk membumikan Al-Qur'an & Bahasa Arab di seluruh lapisan masyarakat, Markazul Lughoh didirikan dengan harapan menjadi pusat pembelajaran Bahasa Arab yang unggul dan melahirkan generasi Qur'ani.",
    visi: "Mewujudkan generasi Rabbani yang menguasai Al-Qur’an & Bahasa Arab.",
    misi: [
        "Mencetak para penghafal Al-Qur’an.",
        "Mencetak para kader da’i yang mahir berbahasa arab.",
        "Mempersiapkan calon mahasiswa/i yang ingin melanjutkan studinya ke Timur Tengah.",
        "Membuka program Bahasa Arab & Al-Qur'an untuk umum."
    ],
    socialMedia: {
        instagram: 'https://www.instagram.com/markazullughoh_official/',
        pimpinanInstagram: 'https://www.instagram.com/ahmad_alfarisi_mawardi/'
    }
}

const dataKajian = [
  {
    tema: "Kajian Tafsir Al-Qur'an",
    pemateri: "Asatidz Markazul Lughoh",
    tanggal: "Setiap Pekan (Hubungi Kontak)",
    waktu: "Ba'da Maghrib - Selesai",
    lokasi: "Kampus Markazul Lughoh",
  },
  {
    tema: "Pembelajaran Bahasa Arab Intensif",
    pemateri: "Tim Pengajar",
    tanggal: "Setiap Hari (Sesuai Program)",
    waktu: "Pagi & Sore",
    lokasi: "Ruang Kelas",
  },
  {
    tema: "Dauroh & Pelatihan Bahasa",
    pemateri: "Pengajar Tamu & Internal",
    tanggal: "Periodik (Lihat Pengumuman)",
    waktu: "Sesuai Jadwal",
    lokasi: "Aula Utama",
  },
  {
    tema: "Mahya",
    pemateri: "Ustadz Ahmad Alfarisi, S.Pd.I",
    hari : "selasa",
    waktu: "Bada isya",
    lokasi: "Aula Utama",
  },
];

const dataKegiatan = [
  {
    nama: "Bahasa Arab Intensif",
    deskripsi: "Program unggulan untuk menguasai Bahasa Arab dari nol hingga mahir dalam waktu singkat.",
    gambar: "https://placehold.co/600x400/d9534f/ffffff?text=Bahasa+Arab",
  },
  {
    nama: "Program Tahfidzul Qur'an",
    deskripsi: "Membina santri untuk menghafal Al-Qur'an 30 Juz dengan bimbingan para hafidz.",
    gambar: "https://placehold.co/600x400/c9302c/ffffff?text=Tahfidz",
  },
  {
    nama: "Dauroh & Training",
    deskripsi: "Pelatihan dan program intensif tematik untuk memperdalam berbagai cabang ilmu syar'i.",
    gambar: "https://placehold.co/600x400/d43f3a/ffffff?text=Dauroh",
  },
  {
    nama: "Kelas Online & Offline",
    deskripsi: "Menyediakan program belajar Bahasa Arab dan Al-Qur'an untuk umum secara fleksibel.",
    gambar: "https://placehold.co/600x400/e6605d/ffffff?text=Kelas+Umum",
  },
  {
    nama: "Persiapan Studi Timur Tengah",
    deskripsi: "Program khusus untuk membekali calon mahasiswa dengan kemampuan bahasa dan akademik.",
    gambar: "https://placehold.co/600x400/ac2925/ffffff?text=Timur+Tengah",
  },
  {
    nama: "Kegiatan Ekstrakurikuler",
    deskripsi: "Mengembangkan potensi santri melalui berbagai kegiatan seperti olahraga dan kesenian.",
    gambar: "https://placehold.co/600x400/b32924/ffffff?text=Ekstrakurikuler",
  },
];


// --- Komponen Halaman ---

const HomePage = ({ navigateTo }) => (
  <div>
    <div className="relative bg-red-800 text-white py-20 sm:py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">Selamat Datang di</h1>
            <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-300 mb-6 animate-fade-in-up">{dataPesantren.nama}</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{dataPesantren.visi}</p>
            <button onClick={() => navigateTo('profil')} className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Mengenal Kami
            </button>
        </div>
    </div>
    <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <BuildingIcon className="w-12 h-12 text-red-600 mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Lembaga Terpercaya</h3>
                    <p className="text-gray-600">Pusat pendidikan Al-Qur'an dan Bahasa Arab di Jakarta Selatan.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <CalendarDaysIcon className="w-12 h-12 text-red-600 mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Program Beragam</h3>
                    <p className="text-gray-600">Menyediakan kelas reguler, intensif, dauroh, online, dan offline.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <SchoolIcon className="w-12 h-12 text-red-600 mx-auto mb-4"/>
                    <h3 className="text-xl font-bold mb-2">Visi Jelas</h3>
                    <p className="text-gray-600">Mencetak kader da'i dan penghafal Al-Qur'an yang mahir berbahasa Arab.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2 text-red-800">Program Unggulan</h2>
            <p className="text-center text-gray-600 mb-10">Beberapa program utama yang kami tawarkan.</p>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-red-100">
                <div className="p-8">
                    <div className="tracking-wide text-sm text-red-600 font-semibold">{dataKegiatan[0].nama}</div>
                    <h3 className="block mt-1 text-2xl leading-tight font-bold text-black">Fokus Penguasaan Bahasa Arab</h3>
                    <p className="mt-4 text-gray-500">{dataKegiatan[0].deskripsi}</p>
                </div>
            </div>
             <div className="text-center mt-8">
                <button onClick={() => navigateTo('kegiatan')} className="text-red-600 font-semibold hover:underline">
                    Lihat Semua Program &rarr;
                </button>
            </div>
        </div>
    </div>
  </div>
);

const ProfilPage = () => (
    <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-red-800">Profil Markazul Lughoh</h1>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold text-red-700 mb-4">Sejarah & Cita-Cita</h2>
                <p className="text-gray-700 leading-relaxed">{dataPesantren.sejarah}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-red-700 mb-4">Visi</h2>
                    <p className="text-gray-700 leading-relaxed">{dataPesantren.visi}</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-red-700 mb-4">Misi</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                        {dataPesantren.misi.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-700 mb-4">Pimpinan</h2>
                 <img src="https://placehold.co/150x150/e0e0e0/333333?text=Foto" alt="Foto Pimpinan" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-200" />
                <h3 className="text-xl font-semibold text-gray-800">{dataPesantren.pimpinan}</h3>
                <p className="text-red-600">Pimpinan & Pengasuh Utama</p>
            </div>
        </div>
    </div>
);

const KajianPage = () => (
    <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-2 text-red-800">Info Kajian & Program</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Jadwal bersifat fleksibel. Untuk informasi terbaru dan pendaftaran, silakan hubungi kontak kami.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataKajian.map((kajian, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-l-4 border-red-500">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{kajian.tema}</h2>
                            <p className="text-red-700 font-semibold mb-4">{kajian.pemateri}</p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p><span className="font-semibold">Hari/Tgl:</span> {kajian.tanggal || kajian.hari}</p>
                                <p><span className="font-semibold">Waktu:</span> {kajian.waktu}</p>
                                <p><span className="font-semibold">Tempat:</span> {kajian.lokasi}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const KegiatanPage = () => (
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
    </div>
);


// --- Komponen Chatbot ---
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isApiReady, setIsApiReady] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const messagesEndRef = useRef(null);
    const chatSession = useRef(null);
    const fileInputRef = useRef(null);
    const apiKeyRef = useRef("AIzaSyBxaAMgjmoXIiLVFGR6IPvBREJ3TrLq7pI");

    useEffect(() => {
        const API_KEY = apiKeyRef.current;
        const PLACEHOLDER_KEY = "AIzaSyBxaAMgjmoXIiLVFGR6IPvBREJ3TrLq7pI";
        if (!API_KEY || API_KEY != PLACEHOLDER_KEY) {
            console.error("API Key untuk Google Generative AI belum diatur.");
            setMessages([{ type: 'text', text: "Konfigurasi Asisten AI belum lengkap.", sender: "bot" }]);
            setIsApiReady(false);
            return;
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const systemPrompt = `Anda adalah asisten virtual untuk ${dataPesantren.nama}. 
        Tugas Anda adalah menjawab pertanyaan pengunjung dengan ramah, sopan, dan informatif dalam Bahasa Indonesia. 
        Selalu kaitkan jawaban Anda dengan konteks pesantren ini. 
        Data Pesantren: ${JSON.stringify(dataPesantren)}, 
        Kajian: ${JSON.stringify(dataKajian)}, 
        Kegiatan: ${JSON.stringify(dataKegiatan)}. 
        Jika pengguna mengunggah gambar atau file , analisis gambar atau file tersebut. 
        Untuk semua permintaan lainnya, jawablah secara normal.`;
        
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        chatSession.current = model.startChat({ history: [] });
        setMessages([{ type: 'text', text: `Assalamualaikum! Ada yang bisa saya bantu terkait ${dataPesantren.nama}?`, sender: "bot" }]);
        setIsApiReady(true);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);
    
    const fileToGenerativePart = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Data = reader.result.split(',')[1];
                resolve({
                    inlineData: {
                        mimeType: file.type,
                        data: base64Data,
                    },
                });
            };
            reader.onerror = (err) => reject(err);
            reader.readAsDataURL(file);
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedFile({
                    file,
                    preview: reader.result,
                    type: 'image'
                });
            };
            reader.readAsDataURL(file);
        } else {
             setUploadedFile({
                file,
                preview: null,
                type: 'document'
            });
            setMessages(prev => [...prev, {
                type: 'file_info',
                text: `File "${file.name}" siap diunggah.`,
                sender: 'user'
            }]);
        }
    };


    const generateImage = async (prompt) => {
        setMessages(prev => [...prev, { type: 'text', text: `Baik, saya akan coba buatkan gambar "${prompt}"...`, sender: 'bot' }]);
        const imageApiPrompt = `professional photo of ${prompt}, high detail, high quality, centered`;
        const payload = { instances: [{ prompt: imageApiPrompt }], parameters: { "sampleCount": 1 } };
        const API_KEY = apiKeyRef.current;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${API_KEY}`;
        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`Image API Error: ${response.statusText}`);
            const result = await response.json();
            if (result.predictions && result.predictions[0]?.bytesBase64Encoded) {
                const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
                setMessages(prev => [...prev, { type: 'image', src: imageUrl, sender: 'bot' }]);
            } else { throw new Error("No image data in response."); }
        } catch (error) {
            console.error("Error generating image:", error);
            setMessages(prev => [...prev, { type: 'text', text: 'Maaf, saya tidak bisa membuat gambar saat ini.', sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if ((!input.trim() && !uploadedFile) || isLoading || !isApiReady) return;

        setIsLoading(true);
        const promptForLlm = input || "Tolong analisis file ini.";
        let messageParts = [promptForLlm];
        
        if (uploadedFile) {
             if (uploadedFile.type === 'image') {
                const imagePart = await fileToGenerativePart(uploadedFile.file);
                messageParts.push(imagePart);
                setMessages(prev => [...prev, { type: 'user_upload', text: input, file: uploadedFile, sender: 'user' }]);
            } else {
                setMessages(prev => [...prev, {type: 'text', text: `Saya telah menerima file "${uploadedFile.file.name}". Namun, saat ini saya hanya dapat menganalisis konten dari file gambar.`, sender: 'bot'}]);
                setUploadedFile(null);
                setInput("");
                setIsLoading(false);
                return;
            }
        } else {
            setMessages(prev => [...prev, { type: 'text', text: input, sender: 'user' }]);
        }
        
        setUploadedFile(null);
        setInput("");
        
        try {
            if (promptForLlm.match(/buatkan gambar|draw an image/i)) {
                 await generateImage(promptForLlm);
                 return;
            }

            if (!chatSession.current) throw new Error("Sesi chat belum diinisialisasi.");
            
            const result = await chatSession.current.sendMessage(messageParts);
            const response = result.response;
            const text = response.text();

            if (text.startsWith('[GENERATE_IMAGE:')) {
                const imagePrompt = text.match(/\[GENERATE_IMAGE:(.*)\]/)?.[1]?.trim();
                if (imagePrompt) {
                    await generateImage(imagePrompt);
                } else {
                    setMessages(prev => [...prev, { type: 'text', text: "Maaf, saya tidak mengerti gambar apa yang harus dibuat.", sender: 'bot' }]);
                }
            } else {
                setMessages(prev => [...prev, { type: 'text', text, sender: "bot" }]);
            }
        } catch (error) {
            console.error("Error saat mengirim pesan ke Gemini:", error);
            setMessages(prev => [...prev, { type: 'text', text: "Maaf, terjadi kesalahan saat menghubungi asisten.", sender: "bot" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 z-50 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
                <button onClick={() => setIsOpen(true)} className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-110 transition-transform" aria-label="Buka Chat">
                    <MessageCircleIcon className="w-8 h-8"/>
                </button>
            </div>
            <div className={`fixed bottom-0 right-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 w-full h-full sm:w-96 sm:h-[70vh] sm:max-h-[600px] sm:bottom-6 sm:right-6' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className={`bg-white rounded-t-lg sm:rounded-lg shadow-2xl flex flex-col h-full w-full overflow-hidden`}>
                    <div className="flex-shrink-0 flex justify-between items-center p-4 bg-red-700 text-white">
                        <h3 className="font-bold">Asisten Virtual</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:text-yellow-300" aria-label="Tutup Chat">
                            <XIcon className="w-6 h-6"/>
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex my-2 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`px-4 py-2 rounded-2xl max-w-xs lg:max-w-md shadow-sm ${msg.sender === 'bot' ? 'bg-red-100 text-gray-800 rounded-bl-none' : 'bg-blue-500 text-white rounded-br-none'}`}>
                                    {msg.type === 'image' && <img src={msg.src} alt="Gambar buatan AI" className="rounded-lg shadow-md max-w-full" />}
                                    {msg.type === 'text' && <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />}
                                    {msg.type === 'file_info' && <p className="text-sm italic text-gray-500">{msg.text}</p>}
                                    {msg.type === 'user_upload' && (
                                        <div className="flex flex-col gap-2">
                                            {msg.file.type === 'image' && <img src={msg.file.preview} alt="Pratinjau unggahan" className="rounded-lg max-w-full" />}
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start my-2">
                                <div className="px-4 py-2 rounded-2xl bg-red-100 text-gray-800 rounded-bl-none">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                     {uploadedFile && (
                        <div className="p-2 border-t bg-gray-100 flex items-center justify-between">
                           {uploadedFile.type === 'image' ? 
                                <img src={uploadedFile.preview} className="w-12 h-12 rounded object-cover" /> : 
                                <FileTextIcon className="w-8 h-8 text-gray-600"/>
                           }
                           <span className="text-sm text-gray-700 mx-2 truncate">{uploadedFile.file.name}</span>
                           <button onClick={() => setUploadedFile(null)} className="p-1 text-red-500 hover:text-red-700"><XIcon className="w-4 h-4"/></button>
                        </div>
                    )}
                    <div className="flex-shrink-0 p-4 border-t bg-white">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                             <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*,.pdf,.doc,.docx" />
                             <button type="button" onClick={() => fileInputRef.current.click()} className="p-2 text-gray-500 hover:text-red-600" aria-label="Lampirkan file">
                                <PaperclipIcon className="w-5 h-5"/>
                             </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isApiReady ? "Ketik pertanyaan Anda..." : "API Key tidak valid"}
                                className="flex-1 w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
                                disabled={isLoading || !isApiReady}
                                aria-label="Pesan Chat"
                            />
                            <button type="submit" disabled={isLoading || !isApiReady} className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" aria-label="Kirim Pesan">
                                <SendIcon className="w-5 h-5"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

// --- Komponen Tata Letak (Layout) ---
const Navbar = ({ navigateTo, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { id: 'home', text: 'Beranda' },
        { id: 'profil', text: 'Profil' },
        { id: 'kegiatan', text: 'Program' },
        { id: 'kajian', text: 'Info Kajian' },
    ];
    const linkClasses = (pageId) => `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${currentPage === pageId ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-red-600 hover:text-white'}`;
    const mobileLinkClasses = (pageId) => `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${currentPage === pageId ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-red-600 hover:text-white'}`;
    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <button onClick={() => navigateTo('home')} className="flex items-center space-x-3">
                           <img src="https://i.imgur.com/2m27xJg.png" alt="Logo Markazul Lughoh" className="h-10 w-10"/>
                           <span className="text-xl font-bold text-red-800 hidden sm:block">Markazul Lughoh</span>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <button key={link.id} onClick={() => navigateTo(link.id)} className={linkClasses(link.id)}>
                                    {link.text}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-red-600 focus:outline-none">
                            <span className="sr-only">Buka menu</span>
                            {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navLinks.map(link => (
                            <button key={link.id} onClick={() => {navigateTo(link.id); setIsMenuOpen(false);}} className={mobileLinkClasses(link.id) + ' w-full text-left'}>
                                {link.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
const Footer = () => (
    <footer className="bg-red-800 text-white">
        <div className="container mx-auto px-6 py-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-bold mb-2">{dataPesantren.nama}</h3>
                    <p className="text-red-200">{dataPesantren.lokasi}</p>
                    <p className="text-red-200">Email: {dataPesantren.email}</p>
                    <p className="text-red-200">Telp: {dataPesantren.kontak}</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Tautan Cepat</h3>
                    <ul className="text-red-200">
                        <li><a href="#/profil" className="hover:text-yellow-300">Pendaftaran</a></li>
                        <li><a href="#/profil" className="hover:text-yellow-300">Donasi & Wakaf</a></li>
                        <li><a href="#/kegiatan" className="hover:text-yellow-300">Galeri</a></li>
                        <li><a href="#/profil" className="hover:text-yellow-300">Kontak Kami</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-bold mb-2">Ikuti Kami</h3>
                    <p className="text-red-200 mb-3">Dapatkan update terbaru dari kegiatan kami melalui media sosial.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href={dataPesantren.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-red-200 hover:text-yellow-300">
                            <InstagramIcon className="w-6 h-6"/>
                            <span className="sr-only">Instagram Pesantren</span>
                        </a>
                         <a href={dataPesantren.socialMedia.pimpinanInstagram} target="_blank" rel="noopener noreferrer" className="text-red-200 hover:text-yellow-300">
                            <InstagramIcon className="w-6 h-6"/>
                            <span className="sr-only">Instagram Pimpinan</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-red-700 text-center text-red-300 text-sm">
                <p>&copy; {new Date().getFullYear()} {dataPesantren.nama}. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

// --- Komponen Utama Aplikasi ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  useEffect(() => {
    document.title = `Markazul Lughoh | ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;
    window.scrollTo(0, 0);
  }, [currentPage]);
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'profil':
        return <ProfilPage />;
      case 'kajian':
        return <KajianPage />;
      case 'kegiatan':
        return <KegiatanPage />;
      case 'home':
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };
  return (
    <div className="bg-white font-sans">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
