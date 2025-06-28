// --- Data Aplikasi (Diperbarui dari Instagram & Blogspot) ---
const dataPesantren = {
  nama: "Ponpes Markazul Lughoh Al-Arobiyyah",
  pimpinan: "Ustadz Ahmad Alfarisi, S.Pd.I",
  lokasi: "Jl. Buncit Raya Pulo No. 17, Kalibata, Pancoran, Jakarta Selatan",
  kontak: "0812-2229-3444",
  email: "markazullughoh@gmail.com",
  sejarah:
    "Berawal dari sebuah cita-cita besar untuk membumikan Al-Qur'an & Bahasa Arab di seluruh lapisan masyarakat, Markazul Lughoh didirikan dengan harapan menjadi pusat pembelajaran Bahasa Arab yang unggul dan melahirkan generasi Qur'ani.",
  visi: "Mewujudkan generasi Rabbani yang menguasai Al-Qur’an & Bahasa Arab.",
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
    pemateri: "Ustadz Ahmad Alfarisi, S.Pd.I",
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
    nama: "Ustadz Ahmad Al Farisy, S. Pdi",
    jabatan: "Pembina",
    bio: "Pembina utama yayasan.",
  },
  dewanPenasihat: {
    label: "Dewan Penasihat",
    members: [
      {
        id: 2,
        nama: "Nasrullah",
        jabatan: "Penasihat",
        bio: "Memberikan nasihat dan arahan strategis.",
        sub: [
          {
            id: 3,
            nama: "Ubaidillah",
            jabatan: "Penasihat",
            bio: "Memberikan nasihat dan arahan strategis.",
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
        nama: "Muhammad Taufik Hudaya",
        jabatan: "Ketua Dewan Pengawas",
        bio: "Mengawasi jalannya operasional yayasan.",
      },
    ],
  },
  bph: {
    ketua: {
      id: 5,
      nama: "Muhammad Sapto Aji",
      jabatan: "Ketua Umum",
      bio: "Memimpin dan bertanggung jawab atas keseluruhan kegiatan yayasan.",
    },
    sekretaris: {
      id: 6,
      nama: "Syaiful Ma'arif",
      jabatan: "Sekretaris Umum",
      bio: "Bertanggung jawab atas administrasi dan kesekretariatan.",
    },
    bendahara: {
      id: 7,
      nama: "Ahmad Irfan Aprizal",
      jabatan: "Bendahara Umum",
      bio: "Mengelola keuangan yayasan.",
    },
  },
  divisi: [
    {
      id: 9,
      ketua: {
        nama: "Azmi Zuhdi, S. Pd.",
        jabatan: "Divisi Pendidikan & Dakwah",
      },
      sub: [
        {
          nama: "Ahmad Afriandi",
          jabatan: "Pondok Pesantren",
          sub: [{ nama: "Sulaeman", jabatan: "Pondok Pesantren" }],
        },
        {
          nama: "Pajar Abdullah",
          jabatan: "Majlis Taklim",
          sub: [{ nama: "Jimi", jabatan: "Majlis Taklim" }],
        },
        { nama: "Fadlan Ibnu M.", jabatan: "TPQ", sub: [] },
        { nama: "Ummu Aqila", jabatan: "Bimbel", sub: [] },
      ],
    },
    {
      id: 10,
      ketua: {
        nama: "M Irfan Ramadhan",
        jabatan: "Divisi Pemberdayaan Ekonomi & Usaha",
      },
      sub: [
        {
          nama: "Renald Ghazali",
          jabatan: "Penjualan",
          sub: [{ nama: "Mukhlis Purnomo", jabatan: "Div Penjualan" }],
        },
        {
          nama: "Tijar Pradana",
          jabatan: "Div Pendanaan",
          sub: [
            { nama: "Albert", jabatan: "Divisi Pendanaan" },
            { nama: "M. Farras Majid", jabatan: "Divisi Pendanaan" },
            { nama: "Syarif", jabatan: "Divisi Pendanaan" },
          ],
        },
      ],
    },
    {
      id: 11,
      ketua: { nama: "Fahrul Rozi", jabatan: "Divisi Sosial Kemasyarakatan" },
      sub: [
        {
          nama: "Eka Juliana",
          jabatan: "Yatim & Dhuafa",
          sub: [
          ],
        },
        {
          nama: "Fauzan Irsandi",
          jabatan: "Sub Divisi Kemasyarakatan",
          sub: [
            { nama: "Muhaimin", jabatan: "Sub Divisi Kemasyarakatan" },
            { nama: "Muhammad Annas", jabatan: "Sub Divisi Kemasyarakatan" },
          ],
        },
         
      ],
    },
    {
      id: 12,
      ketua: { nama: "Mulya Sagara", jabatan: "Divisi Media Kreatif" },
      sub: [{ nama: "Rifqi Fahlevi", jabatan: "Design Kreatif" }],
    },
    {
      id: 15,
      ketua: { nama: "M. Khairul Soleh", jabatan: "Divisi Keamanan & Sarpras" },
      sub: [
         {
          nama: "Roby",
          jabatan: "Perawatan Inventaris",
          sub: [
          ],
        },
      ],
    },
  ],
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
