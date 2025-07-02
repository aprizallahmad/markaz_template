import { useState } from "react";
import { PersonCard } from "../components/PersonCard";
import { PersonilModal } from "../components/PersonilModal";

export const ProfilPage = ({dataPesantren, strukturOrganisasi}) => {
  const [selectedPersonil, setSelectedPersonil] = useState(null);

  return (
    <div className="">
      {selectedPersonil && (
        <PersonilModal
          personil={selectedPersonil}
          onClose={() => setSelectedPersonil(null)}
        />
      )}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-red-800">
          Profil Markazul Lughoh
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Sejarah & Cita-Cita
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {dataPesantren.sejarah}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Visi</h2>
            <p className="text-gray-700 leading-relaxed">
              {dataPesantren.visi}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Misi</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              {dataPesantren.misi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bagian Struktur Organisasi */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
            {" "}
            Struktur Organisasi{" "}
          </h2>
          <div className="flex flex-col items-center space-y-12">
            {/* Level Pembina, Penasihat, Pengawas */}
            <div className="flex flex-wrap justify-center z-10">
              <PersonCard
                person={strukturOrganisasi.pembina}
                onClick={() => setSelectedPersonil(strukturOrganisasi.pembina)}
              />
            </div>
            <div className="w-full h-1 bg-slate-300 rounded-2xl max-w-md mx-auto relative -top-6">
              {" "}
            </div>
            <div className="flex flex-wrap justify-center gap-40  -top-6  ">
              {strukturOrganisasi.dewanPenasihat.members.map((p) => (
                <div
                  key={p.id}
                  className="flex  flex-col items-center space-y-4 mt-[-60px]"
                >
                  <div className="w-1 h-8 bg-slate-300 rounded-2xl"> </div>
                  <PersonCard
                    key={p.id}
                    person={p}
                    onClick={() => setSelectedPersonil(p)}
                    className="z-10"
                  />
                  {p.sub.length > 0 && (
                    <div className="w-1 h-4 bg-slate-300 rounded-2xl"> </div>
                  )}
                  <div className="flex flex-col items-center space-y-2 ">
                    {p.sub.map((subdiv) => (
                      <div
                        key={subdiv.nama}
                        className="text-center bg-gray-100 p-2 rounded-md shadow-sm w-36 cursor-pointer transform hover:scale-105 hover:shadow-xl transition-all duration-75"
                        onClick={() => setSelectedPersonil(subdiv)}
                      >
                        <p className="text-xs font-semibold"> {subdiv.nama} </p>
                        <p className="text-xs text-gray-500">
                          {" "}
                          {subdiv.jabatan}{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {strukturOrganisasi.dewanPengawas.members.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col items-center space-y-4 mt-[-60px]"
                >
                  <div className="w-1 h-8 bg-slate-300 rounded-2xl"> </div>

                  <PersonCard
                    key={p.id}
                    person={p}
                    onClick={() => setSelectedPersonil(p)}
                  />
                </div>
              ))}
            </div>

            {/* Garis Vertikal */}
            <div className="w-1 h-12 bg-slate-300 rounded-2xl "> </div>

            {/* Level BPH */}
            <div className="relative flex justify-center z-10">
              <PersonCard
                person={strukturOrganisasi.bph}
                onClick={() => setSelectedPersonil(strukturOrganisasi.bph)}
                className="mt-[-40px]"
              />
            </div>
            <div className="w-full h-1 bg-slate-300 rounded-2xl max-w-md mx-auto relative -top-6">
              {" "}
            </div>
            <div className="flex flex-wrap justify-center gap-40  -top-6  ">
              {strukturOrganisasi.bph.sub.map((p) => (
                <div
                  key={p.id}
                  className="flex  flex-col items-center space-y-4 mt-[-60px]"
                >
                  <div className="w-1 h-8 bg-slate-300 rounded-2xl"> </div>
                  <PersonCard
                    key={p.id}
                    person={p}
                    onClick={() => setSelectedPersonil(p)}
                    className="z-10"
                  />
                  {p.length > 0 && <div className="w-1 h-4 bg-slate-300 rounded-2xl"> </div>}
                </div>
              ))}
            </div>

            {/* Level Divisi */}
            <div className="w-full h-1 bg-slate-300 rounded-2xl max-w-5xl mx-auto "> </div>
            <div className="relative grid  md:grid-cols-5 lg:grid-cols-6 gap-8  w-full max-w-6xl">
              {strukturOrganisasi.divisi.map((div) => (
                <div
                  key={div.id}
                  className="flex flex-col items-center space-y-4 mt-[-40px]"
                >
                  <div className="w-1 h-8 bg-slate-300 rounded-2xl"> </div>
                  <PersonCard
                    person={div.ketua}
                    onClick={() => setSelectedPersonil(div.ketua)}
                    className=" h-72 z-10"
                  />
                  {div.sub.length > 0 && (
                    <div className="w-1 h-4 bg-slate-300 rounded-2xl"> </div>
                  )}
                  <div className="flex flex-col items-center space-y-2 ">
                    {div.sub.map((subdiv) => (
                      <div key={subdiv.nama}>
                        <div
                          className="text-center bg-gray-200  p-2 rounded-md shadow-sm w-36 cursor-pointer transform hover:scale-105 hover:shadow-xl transition-all duration-75"
                          onClick={() => setSelectedPersonil(subdiv)}
                        >
                          <p className="text-xs font-semibold">
                            {" "}
                            {subdiv.nama}{" "}
                          </p>
                          <p className="text-xs text-gray-500">
                            {" "}
                            {subdiv.jabatan}{" "}
                          </p>
                        </div>

                        {subdiv.sub?.map((subsub) => (
                          <div
                            key={subsub.nama}
                            className="text-center bg-gray-400 p-1 rounded-md shadow-sm w-36 mt-1 cursor-pointer transform hover:scale-105 hover:shadow-xl transition-all duration-75"
                            onClick={() => setSelectedPersonil(subsub)}
                          >
                            <p className="text-xs font-semibold">
                              {subsub.nama}
                            </p>
                            <p className="text-xs text-gray-500">
                              {subsub.jabatan}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
