import { useEffect, useRef, useState } from "react";
import { fileToBase64, linkify } from "../utils/chatbot";
import { FileTextIcon, MessageCircleIcon, PaperclipIcon, SendIcon, XIcon } from "../components/Icon";



export const Chatbot = ({ setShowAdminLink, dataPesantren }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [inputType, setInputType] = useState("text");
    const [isLoading, setIsLoading] = useState(false);
    const [isBackendReady, setIsBackendReady] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);
    const chatWindowRef = useRef(null); // >>>>> ganti disini
    const chatIconRef = useRef(null); // >>>>> ganti disini
    const inputRef = useRef(null);

    const VITE_BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
    const BASE_API_URL =
        import.meta.env.MODE === 'development'
            ? 'http://localhost:3000' // URL backend lokal saat development
            : VITE_BACKEND_API_URL;   // URL backend Vercel saat production (sudah di-deploy)


    useEffect(() => {
        // Cukup set state awal saat komponen dimuat
        setMessages([{ type: 'text', text: `Assalamualaikum! Ada yang bisa saya bantu terkait ${dataPesantren.nama}?`, sender: "bot" }]);
        setIsBackendReady(true);
    }, []);

    // >>>>> ganti disini (mulai)
    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);
    useEffect(() => {
        if (isOpen && !isLoading) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, isLoading]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (chatWindowRef.current && !chatWindowRef.current.contains(event.target) && chatIconRef.current && !chatIconRef.current.contains(event.target)) {
                if (isOpen) {
                    setIsOpen(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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

    // >>>>> Dapatkan API Key dari Environment Variables Frontend
    const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;

    // Fungsi baru untuk berinteraksi dengan backend lokal Anda
    const getBackendResponse = async (prompt, fileData = null) => {
        console.error("prompt :", prompt);

        const payload = { prompt };
        if (fileData) {
            payload.file = fileData;
        }

        try {
            let response
            const commonHeaders = { // >>>>> Buat objek header umum
                'X-API-Key': VITE_APP_API_KEY, // >>>>> Sertakan API Key di sini
                // ... header lainnya yang mungkin diperlukan
            };

            if (inputType == 'image') {
                const formData = new FormData();
                formData.append('image', fileData); // 'image' adalah nama field yang diharapkan Multer (upload.single('image'))
                formData.append('prompt', prompt); // Tambahkan prompt juga jika diperlukan
                response = await fetch(`${BASE_API_URL}/api/generate-from-image`, {
                    method: 'POST',
                    body: formData,
                    headers: commonHeaders, // >>>>> Gunakan objek header umum
                });
            } else {
                response = await fetch(`${BASE_API_URL}/api/generate-text`, {
                    method: 'POST',
                    headers: {
                        ...commonHeaders,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Gagal menghubungi server.');
            }
            const message = await response.json();
            // console.log("response: =====> ", message);

            // Asumsi backend mengembalikan format: { type: 'text'/'image', content: '...' }
            return await message;

        } catch (error) {
            // console.error("Error calling local backend:", error);
            setShowAdminLink(true);
            return {
                type: 'text',
                text: `Maaf, Untuk Sementara Fitur ini belum bisa dipakai: ${error.message}`
            };
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if ((!input.trim() && !uploadedFile) || isLoading || !isBackendReady) return;
        // console.log("handleSendMessage uploadedFile:", uploadedFile); // Tambahkan ini
        setIsLoading(true);
        const userPrompt = input || "Tolong jelaskan isi file ini.";
        let filePayload = null;
        // console.log("input:", input); // Tambahkan ini

        // Menampilkan pesan pengguna di UI terlebih dahulu
        if (uploadedFile) {
            if (uploadedFile.type === 'image') {
                setInputType('image')
                const base64Data = await fileToBase64(uploadedFile.file);
                filePayload = {
                    mimeType: uploadedFile.file.type,
                    data: uploadedFile.file
                };
                setMessages(prev => [...prev, { type: 'image', text: userPrompt, file: uploadedFile, sender: 'user' }]);
            } else {
                setInputType('text')
                setMessages(prev => [...prev, { type: 'text', text: `Saya telah menerima file "${uploadedFile.file.name}". Namun, saat ini saya hanya dapat menganalisis konten dari file gambar.`, sender: 'bot' }]);
                setUploadedFile(null);
                setInput("");
                setIsLoading(false);
                return;
            }
        } else {
            setInputType('text')
            setMessages(prev => [...prev, { type: 'text', text: userPrompt, sender: 'user' }]);
        }

        // Membersihkan input setelah ditampilkan
        setInput("");
        setUploadedFile(null);

        // Mengirim permintaan ke backend
        const backendResponse = await getBackendResponse(userPrompt, filePayload);

        // Menampilkan respons dari backend
        if (backendResponse.type === 'image') {
            setMessages(prev => [...prev, { type: 'image', src: backendResponse.text, sender: 'bot' }]);
        } else {
            setMessages(prev => [...prev, { type: 'text', text: backendResponse.text, sender: 'bot' }]);
        }
        const teks = backendResponse.text
        const kataKunci = import.meta.env.VITE_KEY_WORD_ADMIN;
        if (teks.toLowerCase().includes(kataKunci.toString().toLowerCase())) {
            setShowAdminLink(true);
        }
        console.log("chat response:", backendResponse.text);
        setIsLoading(false);
    };

    return (
        <>
            <div ref={chatIconRef} className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 z-50 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
                <button onClick={() => setIsOpen(true)} className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-110 transition-transform" aria-label="Buka Chat">
                    <MessageCircleIcon className="w-8 h-8" />
                </button>
            </div>
            <div ref={chatWindowRef} className={`fixed bottom-0 right-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 w-full h-full sm:w-96 sm:h-[70vh] sm:max-h-[600px] sm:bottom-6 sm:right-6' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className={`bg-white rounded-t-lg sm:rounded-lg shadow-2xl flex flex-col h-full w-full overflow-hidden`}>
                    <div className="flex-shrink-0 flex justify-between items-center p-4 bg-red-500 text-white">
                        <h3 className="font-bold">Asisten Virtual</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:text-yellow-300" aria-label="Tutup Chat">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex my-2 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`px-4 py-2 rounded-2xl max-w-xs lg:max-w-md shadow-sm ${msg.sender === 'bot' ? 'bg-red-100 text-gray-800 rounded-bl-none' : 'bg-blue-500 text-white rounded-br-none'}`}>
                                    {msg.type === 'image' && <img src={msg.src} alt="Gambar buatan AI" className="rounded-lg shadow-md max-w-full" />}
                                    {msg.type === 'text' && <p className="text-sm" dangerouslySetInnerHTML={{ __html: linkify(msg.text) }} />}
                                    {msg.type === 'file_info' && <p className="text-sm italic text-gray-500">{msg.text}</p>}
                                    {msg.type === 'user_upload' && (
                                        <div className="flex flex-col gap-2">
                                            {msg.file?.type === 'image' && <img src={msg.file.preview} alt="Pratinjau unggahan" className="rounded-lg max-w-full" />}
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
                                <FileTextIcon className="w-8 h-8 text-gray-600" />
                            }
                            <span className="text-sm text-gray-700 mx-2 truncate">{uploadedFile.file.name}</span>
                            <button onClick={() => setUploadedFile(null)} className="p-1 text-red-500 hover:text-red-700"><XIcon className="w-4 h-4" /></button>
                        </div>
                    )}
                    <div className="flex-shrink-0 p-4 border-t bg-white">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*,.pdf,.doc,.docx,.mp3" name="input-chat" />
                            <button type="button" onClick={() => fileInputRef.current.click()} className="p-2 text-gray-500 hover:text-red-600" aria-label="Lampirkan file">
                                <PaperclipIcon className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                value={input}
                                ref={inputRef}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Apa yang anda pikirkan..."
                                className="flex-1 w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
                                disabled={isLoading || !isBackendReady}
                                aria-label="Pesan Chat"
                            />
                            <button type="submit" disabled={isLoading || !isBackendReady} className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" aria-label="Kirim Pesan">
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};