import { useState } from "react";
import { XIcon } from "./Icon";

export const PersonilModal = ({ personil, onClose }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false); // State untuk melacak error gambar

  const getImageUrl = () => {
    // Pastikan personil dan url_photo ada
    if (personil && personil.url_photo) {
      return personil.url_photo;
    }
    // Jika tidak ada url_photo, gunakan placeholder dengan inisial nama
    // Pastikan personil.nama tidak null/undefined sebelum split
    const initials = personil?.nama
      ? personil.nama.split(" ").map((n) => n[0]).join("")
      : "NA"; // Fallback jika nama juga tidak ada
    return `https://placehold.co/200x200/d9534f/ffffff?text=${initials}`;
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // Gambar berhasil dimuat, sembunyikan loading
    setImageError(false); // Reset error state
  };

  const handleImageError = () => {
    setIsImageLoading(false); // Gambar gagal dimuat, sembunyikan loading
    setImageError(true); // Set error state
    // Opsional: Anda bisa mengganti src gambar ke fallback yang berbeda di sini
    // atau biarkan placeholder bawaan jika url_photo null.
  };


  if (!personil) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center relative transform transition-all duration-300 scale-95 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <XIcon className="w-6 h-6" />
        </button>
        {isImageLoading && (
          // Spinner Loading (contoh Tailwind CSS)
          <div className="w-60 h-80 rounded-3xl mx-auto mb-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
            <svg className="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}

        {imageError && !isImageLoading && (
            // Gambar fallback jika terjadi error
            <img
                src="https://via.placeholder.com/200x200/cccccc/ffffff?text=Error" // Gambar fallback saat error
                alt="Error memuat gambar"
                className="w-60 h-80 rounded-3xl mx-auto mb-4 border-2 object-cover"
            />
        )}
        <img
          src={getImageUrl()}
          alt={personil.nama}
          className={`w-60 h-80 rounded-3xl mx-auto mb-4 border-2 object-cover ${isImageLoading || imageError ? 'hidden' : ''}`}
          onLoad={handleImageLoad} // Panggil saat gambar berhasil dimuat
          onError={handleImageError} // Panggil saat gambar gagal dimuat
          style={{ display: isImageLoading || imageError ? 'none' : 'block' }}
        />
        <h3 className="text-2xl font-bold text-red-800"> {personil.nama} </h3>
        {/* <p className="text-lg text-red-600 font-semibold mb-4">
          {" "}
          {personil.jabatan}{" "}
        </p> */}
        <p className="text-gray-600"> {personil.bio} </p>
      </div>
    </div>
  );
};