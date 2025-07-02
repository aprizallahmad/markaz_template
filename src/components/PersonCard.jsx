


export const PersonCard = ({ person, onClick, className = "" }) => (
  <div
    className={`bg-white p-3 rounded-lg shadow-md text-center cursor-pointer transform hover:scale-150 hover:shadow-xl transition-all duration-75 w-40 flex-shrink-0 ${className}`}
    onClick={onClick}
  >
    <img
      src={person.url_photo ||
        
        `https://placehold.co/150x200/d9534f/ffffff?text=${person.nama
          .split(" ")
          .map((n) => n[0])
          .join("")}`
      }
      alt={person.nama}
      className="w-full h-48 object-cover rounded-md mb-2 bg-gray-200"
    />
    {/* <h4 className="font-bold text-sm text-gray-800"> {person.nama} </h4> */}
    <p className="text-xs text-red-600"> {person.jabatan} </p>
  </div>
);