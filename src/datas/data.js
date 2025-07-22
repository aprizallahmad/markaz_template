// --- Data Aplikasi (Diperbarui dari Instagram & Blogspot) ---
const dataPesantren = {
  nama: "Ponpes Markazul Lughoh Al-Arobiyyah",
  pimpinan: "Tn. Guru Ahmad Al-farisi, S.Ag",
  lokasi: "Jl. Buncit Raya Pulo No. 17, Kalibata, Pancoran, Jakarta Selatan",
  kontak: "0896-9480-7287",
  email: "markazullughoh@gmail.com",
  sejarah:
    "Berawal dari sebuah cita-cita besar untuk membumikan Al-Qur'an & Bahasa Arab di seluruh lapisan masyarakat, Markazul Lughoh didirikan dengan harapan menjadi pusat pembelajaran Bahasa Arab yang unggul dan melahirkan generasi Qur'ani.",
  visi: "Mewujudkan generasi Rabbani yang memahami Al-Qur’an & Bahasa Arab.",
  misi: [
    "Mencetak para penghafal Al-Qur’an.",
    "Mencetak para kader da’i yang mahir berbahasa arab.",
    "Mempersiapkan calon mahasiswa/i yang ingin melanjutkan studinya ke Timur Tengah.",
    "Membuka program Bahasa Arab & Al-Qur'an untuk umum.",
  ],
  socialMedia: {
    instagram: "https://www.instagram.com/markazullughoh_official/",
    pimpinanInstagram: "https://www.instagram.com/ahmad_alfarisi_mawardi/",
  },
};

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
    pemateri: "Guru Ahmad Al-farisi, S.Ag",
    hari: "selasa",
    waktu: "Bada isya",
    lokasi: "Aula Utama",
  },
];

const dataKegiatan = [
  {
    nama: "Bahasa Arab Intensif",
    deskripsi:
      "Program unggulan untuk menguasai Bahasa Arab dari nol hingga mahir dalam waktu singkat.",
    gambar: "https://placehold.co/600x400/d9534f/ffffff?text=Bahasa+Arab",
  },
  {
    nama: "Program Tahfidzul Qur'an",
    deskripsi:
      "Membina santri untuk menghafal Al-Qur'an 30 Juz dengan bimbingan para hafidz.",
    gambar: "https://placehold.co/600x400/c9302c/ffffff?text=Tahfidz",
  },
  {
    nama: "Dauroh & Training",
    deskripsi:
      "Pelatihan dan program intensif tematik untuk memperdalam berbagai cabang ilmu syar'i.",
    gambar: "https://placehold.co/600x400/d43f3a/ffffff?text=Dauroh",
  },
  {
    nama: "Kelas Online & Offline",
    deskripsi:
      "Menyediakan program belajar Bahasa Arab dan Al-Qur'an untuk umum secara fleksibel.",
    gambar: "https://placehold.co/600x400/e6605d/ffffff?text=Kelas+Umum",
  },
  {
    nama: "Persiapan Studi Timur Tengah",
    deskripsi:
      "Program khusus untuk membekali calon mahasiswa dengan kemampuan bahasa dan akademik.",
    gambar: "https://placehold.co/600x400/ac2925/ffffff?text=Timur+Tengah",
  },
  {
    nama: "Kegiatan Ekstrakurikuler",
    deskripsi:
      "Mengembangkan potensi santri melalui berbagai kegiatan seperti olahraga dan kesenian.",
    gambar: "https://placehold.co/600x400/b32924/ffffff?text=Ekstrakurikuler",
  },
];

const guruData = [
  { id: 1, nama: "Ustadz Fulan", mapel: "Bahasa Arab" },
  { id: 2, nama: "Ustadzah Fulanah", mapel: "Tahfidz" },
];
const santriData = [
  { id: 1, nama: "Ahmad", kelas: "I'dad Lughowi" },
  { id: 2, nama: "Fatimah", kelas: "Tahfidz" },
];
const artikelData = [
  { id: 1, judul: "Keutamaan Bahasa Arab", penulis: "Admin" },
  { id: 2, judul: "Tips Menghafal Qur'an", penulis: "Admin" },
];

const strukturOrganisasi = {
  pembina: {
    id: 1,
    nama: `${dataPesantren.pimpinan}`,
    jabatan: "Pembina",
    bio: "Pembina utama Yayasan sekaligus Ponpes Markazul Lughoh.",
    url_photo: "/foto_anggota/guru.png",
  },
  dewanPenasihat: {
    label: "Dewan Penasihat",
    members: [
      {
        id: 2,
        nama: "Nasrullah, S.E",
        jabatan: "Dewan Penasihat",
        bio: "Memberikan nasihat dan arahan strategis.",
        url_photo: "/foto_anggota/nasrul.png",
        sub: [
          {
            id: 3,
            nama: "Sofyan Ubaidillah ",
            jabatan: "Penasihat",
            bio: "Memberikan nasihat dan arahan strategis.",
            url_photo: "/foto_anggota/ubai.png",
          },
        ],
      },
    ],
  },
  dewanPengawas: {
    label: "Dewan Pengawas",
    members: [
      {
        id: 4,
        nama: "Muhammad Taufik Hudaya, DBA, S.Ag, ME",
        jabatan: "Dewan Pengawas",
        bio: "Mengawasi jalannya operasional yayasan.",
        url_photo: "/foto_anggota/taufik.png",
      },
    ],
  },
  bph: {
    id: 5,
    nama: "Muhammad Sapto Aji, A.md",
    jabatan: "Ketua Umum",
    bio: "Memimpin dan bertanggung jawab atas keseluruhan kegiatan yayasan.",
    url_photo: "/foto_anggota/aji.png",
    sub: [
      {
        id: 6,
        nama: "Syaiful Ma'arif, S.Ag",
        jabatan: "Sekretaris Umum",
        bio: "Bertanggung jawab atas administrasi dan kesekretariatan.",
        url_photo: "/foto_anggota/ipul.png",
      },
      {
        id: 7,
        nama: "Aprizal Ahmad",
        jabatan: "Bendahara Umum",
        bio: "Mengelola keuangan yayasan.",
        url_photo: "",
      },
    ],
  },
  divisi: [
    {
      id: 9,
      ketua: {
        nama: "Azmi Zuhdi, S.Pd",
        jabatan: "Divisi Pendidikan & Dakwah",
        bio: "Memimpin dan bertanggung jawab atas keseluruhan kegiatan yayasan.",
        url_photo: "/foto_anggota/azmi.png",
      },
      sub: [
        {
          nama: "Ahmad Afriandi",
          jabatan: "Pondok Pesantren",
          url_photo: "/foto_anggota/andi.png",
          sub: [
            {
              nama: "Sulaeman",
              jabatan: "Pondok Pesantren",
              url_photo: "/foto_anggota/sulai2.png",
            },
          ],
        },
        {
          nama: "Pajar Abdullah",
          jabatan: "Majlis Taklim",
          url_photo: "pajar.png",
          sub: [
            {
              nama: "Mujimi",
              jabatan: "Majlis Taklim",
              url_photo: "",
            },
          ],
        },
        {
          nama: "Fadlan Ibnu Mubarok, S.Sos",
          jabatan: "TPQ",
          url_photo: "/foto_anggota/inu.png",
          sub: [],
        },
        {
          nama: "Ummu Aqila",
          jabatan: "Bimbel",
          url_photo: "",
          sub: [],
        },
      ],
    },
    {
      id: 10,
      ketua: {
        nama: "M Irfan Ramadhan, S.E",
        jabatan: "Divisi Pemberdayaan Ekonomi & Usaha",
        url_photo: "/foto_anggota/kipli.png",
      },
      sub: [
        {
          nama: "Renald Ghazali",
          jabatan: "Penjualan",
          url_photo: "/foto_anggota/renald.png",
          sub: [
            {
              nama: "Mukhlis Purnomo",
              jabatan: "Penjualan",
              url_photo: "/foto_anggota/muklis.png",
            },
          ],
        },
        {
          nama: "Muhammad Farras Majid",
          jabatan: "Pendanaan",
          url_photo: "/foto_anggota/faras.png",
          sub: [
            {
              nama: "Muhammad Syarif Hidayat",
              jabatan: "Pendanaan",
              url_photo: "/foto_anggota/syarif.png",
            },
            {
              nama: "Albert",
              jabatan: "Pendanaan",
              url_photo: "",
            },
            {
              nama: "Tijar Pradana, S.Kom",
              jabatan: "Pendanaan",
              url_photo: "/foto_anggota/tijar.png",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      ketua: {
        nama: "Fahrul Rozi, S.T",
        jabatan: "Divisi Sosial Kemasyarakatan",
        url_photo: "/foto_anggota/aung.png",
      },
      sub: [
        {
          nama: "Eka Juliana",
          jabatan: "Yatim & Dhuafa",
          url_photo: "",
          sub: [],
        },
        {
          nama: "Fauzan Irsandi",
          jabatan: "Sub Divisi Kemasyarakatan",
          url_photo: "",
          sub: [
            {
              nama: "Muhaimin",
              jabatan: "Sub Divisi Kemasyarakatan",
              url_photo: "/foto_anggota/muhaimin.png",
            },
            {
              nama: "Muhammad Annas",
              jabatan: "Sub Divisi Kemasyarakatan",
              url_photo: "/foto_anggota/anas.png",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      ketua: {
        nama: "Mulya Sagara, A.md. Sn",
        jabatan: "Divisi Media Kreatif",
        url_photo: "/foto_anggota/mulya.png",
      },
      sub: [
        {
          nama: "Rifqi Fahlevi, S.Ds",
          jabatan: "Design Kreatif",
          url_photo: "/foto_anggota/riki.png",
        },
      ],
    },
    {
      id: 13,
      ketua: {
        nama: "Ahmad Irfan Aprizal, S.Kom",
        jabatan: "Divisi IT & Tech",
        url_photo: "/foto_anggota/it.png",
      },
      sub: [],
    },
    {
      id: 15,
      ketua: {
        nama: "Muhammad Khairul Soleh",
        jabatan: "Divisi Keamanan & Sarpras",
        url_photo: "/foto_anggota/soleh.png",
      },
      sub: [
        {
          nama: "Roby Chandra P",
          jabatan: "Perawatan Inventaris",
          url_photo: "/foto_anggota/robi.png",
          sub: [],
        },
      ],
    },
  ],
};

export const lapakData = [
  {
    id: 1,
    nama: "Jasa Servis AC Profesional",
    harga: 75000,
    no_hp: "+62 823-9210-3761",
    kategori: "Jasa",
    subkategori: "Elektronik",
    rating: 1,
    penjual: "Roby",
    lokasi: "Jakarta Selatan",
    latitude: -6.273482,
    longitude: 106.828367,
    gambar: ["/lapak/robi/1.png", "/lapak/robi/2.png"],
  },
  {
    nama: "Adabul Insan",
    deskripsi_product:
      " Sebuah kitab yang berisikan tentang nasihat-nasihat bagaimana beretika (adab) yang baik terhadap sesama manusia ",
    harga: 100.0,
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: [
      "/lapak/markaz/SSI005.jpg",
      "/lapak/markaz/Adabul Insan.jpg",
      "/lapak/markaz/Adabul Insan...jpg",
    ],
  },
  {
    nama: "Kisah-Kisah Penuh Hikmah",
    deskripsi_product:
      "Sebuah kitab/buku yang berisikan tentang kisah-kisah dari para ulama yang diringkas dan mudah untuk dipahami. Mulai dari ulama salaf (terdahulu), ulama fiqih, ulama tasawuf, ulama hadits, ulama tafsir, dan ahlul bait",
    harga: 150.0,
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: [
      "/lapak/markaz/Salinan SSI006.jpg",
      "/lapak/markaz/Kisah Ulama..jpg",
      "/lapak/markaz/Kisah Ulama.jpg",
      "/markaz/Kisah Ulama(1).jpg",
    ],
  },
  {
    nama: "Kalam Guru",
    deskripsi_product:
      " Sebuah kitab/buku yang berisikan quote-qoute yang sangat relevan dengan kehidupan sehari-hari yang sangat dibutuhkan bagi setiap pelajar atau penuntut ilmu",
    harga: "80.000",
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: [
      "/lapak/markaz/buku kalam guru.jpg",
      "/lapak/markaz/Kalam Guru.jpg",
      "/lapak/markaz/Kalam Guru.jpg",
    ],
  },
  {
    nama: "Tathbiqi 1",
    deskripsi_product:
      " Sebuah kitab/buku untuk para pemula yang ingin belajar nahwu dengan metode tathbiqi (peneraran). kitab/buku ini juga merupakan materi tahapan awal untuk para santri di Ponpes Markazul Lughoh, baik yang mukim atau kalong (pulang pergi)",
    harga: "35.000",
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: ["", ""],
  },
  {
    nama: "Tathbiqi 2",
    deskripsi_product:
      " Sebuah kitab/buku untuk para pemula yang ingin belajar nahwu dan merupakan lanjutan dari tathbiqi 1. kitab/buku ini juga merupakan materi tahapan awal untuk para santri di Ponpes Markazul Lughoh, baik yang mukim atau kalong (pulang pergi)",
    harga: "70.000",
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: [
      "/lapak/markaz/SSI003.jpg",
      "/lapak/markaz/Tathbiqi 2.jpg",
      "/lapak/markaz/Tathbiqi 2..jpg",
    ],
  },
  {
    nama: "Imla",
    deskripsi_product:
      " Sebuah kitab/buku yang merupakan pedoman dalam menulis kalimat bahasa arab",
    harga: "30.000",
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: ["/lapak/markaz/imla_ book.jpg", ""],
  },
  {
    nama: "Hadiah Pengantin",
    deskripsi_product:
      "Sebuah kitab/buku yang berisikan ilmu fiqih dalam berumah tangga yang sangat dibutuhkan bagi seorang yang akan atau sudah menikah",
    harga: "80.000",
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: [
      "/lapak/markaz/buku hadiah pengantin.jpg",
      "/lapak/markaz/Hadiah Pengantin.jpg",
      "/lapak/markaz/Hadiah Pengantin..jpg",
    ],
  },
  {
    nama: "Adabussibyan",
    deskripsi_product:
      " Sebuah kitab yang berisikan tentang bagaimana adab-adab bagi anak kecil",
    harga: "35.000",
    no_hp: " +62 878-6523-0267",
    kategori: "Barang",
    subkategori: "Buku",
    terjual: "",
    rating: "",
    penjual: "Lapak Markaz",
    lokasi: "Jakarta Selatan",
    latitude: "-6.273482",
    longitude: "106.828367",
    gambar: ["", ""],
  },
];

const filterSubkategoriJasa = lapakData
  .filter((item) => item.kategori === "Jasa") // Filter item dengan kategori 'Jasa'
  .map((item) => item.subkategori);

const filterSubkategoriBarang = lapakData
  .filter((item) => item.kategori === "Barang") // Filter item dengan kategori 'Barang'
  .map((item) => item.subkategori);

const subkategoriJasa = [...new Set(filterSubkategoriJasa)];
const subkategoriBarang = [...new Set(filterSubkategoriBarang)];

export const kategoriLapak = {
  Jasa: subkategoriJasa,
  Barang: subkategoriBarang,
};

export {
  dataPesantren,
  dataKajian,
  dataKegiatan,
  guruData,
  strukturOrganisasi,
  santriData,
  artikelData,
};
