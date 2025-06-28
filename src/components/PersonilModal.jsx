import { XIcon } from "./Icon";

export const PersonilModal = ({ personil, onClose }) => {
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
        <img
          src={
            personil.foto ||
            "https://placehold.co/200x200/d9534f/ffffff?text=Foto"
          }
          alt={personil.nama}
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-200"
        />
        <h3 className="text-2xl font-bold text-red-800"> {personil.nama} </h3>
        <p className="text-lg text-red-600 font-semibold mb-4">
          {" "}
          {personil.jabatan}{" "}
        </p>
        <p className="text-gray-600"> {personil.bio} </p>
      </div>
    </div>
  );
};