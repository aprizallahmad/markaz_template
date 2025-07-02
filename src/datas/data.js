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
    url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389980224112033852/WhatsApp_Image_2025-07-02_at_8.48.26_PM.jpeg?ex=68669776&is=686545f6&hm=a187ef8c2da68413d8c066de513adeeb644d72190f18f29916769cc9c35f287b&=&format=webp"
  },
  dewanPenasihat: {
    label: "Dewan Penasihat",
    members: [
      {
        id: 2,
        nama: "Nasrullah, S.E",
        jabatan: "Dewan Penasihat",
        bio: "Memberikan nasihat dan arahan strategis.",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946067474448455/IMG-20220324-WA0002.jpg?ex=686677a6&is=68652626&hm=73db0d28f5574861fdf7fd4ced5df83b8ad11d9926556a514ec182043a4e3c9d&=&format=webp",
        sub: [
          {
            id: 3,
            nama: "Sofyan Ubaidillah ",
            jabatan: "Penasihat",
            bio: "Memberikan nasihat dan arahan strategis.",
            url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389996705881260113/1751193395238_-_Ubaidillah_Sofyan.jpg?ex=6866a6cf&is=6865554f&hm=3ee986db420904c21b07c4e0f345cddb3dddfbac30fa73f2155af88ca7ef4812&=&format=webp",
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
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389993000419201054/IMG-20220324-WA0032.jpg?ex=6866a35c&is=686551dc&hm=c6dcd8af8a0ab69cd16ecca4f815523e46eb5b3bd916060eb85cc5064e0d4d86&=&format=webp",
      },
    ],
  },
  bph: {
    id: 5,
    nama: "Muhammad Sapto Aji, A.md",
    jabatan: "Ketua Umum",
    bio: "Memimpin dan bertanggung jawab atas keseluruhan kegiatan yayasan.",
    url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946068065583164/IMG-20220324-WA0004.jpg?ex=686677a6&is=68652626&hm=8d56e6b7fbd103335922e42beb07749395c088bf61773a78a9f058c891c425ea&=&format=webp",
    sub: [
      {
        id: 6,
        nama: "Syaiful Ma'arif, S.Ag",
        jabatan: "Sekretaris Umum",
        bio: "Bertanggung jawab atas administrasi dan kesekretariatan.",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946067100897341/IMG-20220314-WA0000.jpg?ex=686677a6&is=68652626&hm=105c7cc7972ac8e55d669aa9939ff240d9e01541b4babacf731179160135d11a&=&format=webp",
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
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992998972035264/IMG_20201203_212741_-_azmi_zuhdi.jpg?ex=6866a35b&is=686551db&hm=c923f16509f9919bb562803a699141f697ceb9057c5e79432cc824c8ee58e5c6&=&format=webp",
      },
      sub: [
        {
          nama: "Ahmad Afriandi",
          jabatan: "Pondok Pesantren",
          url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946066690117632/IMG-20220307-WA0003.jpg?ex=686677a6&is=68652626&hm=b76e4ab6da8b4363f2e90db9cd017a026bcdf42768bb7d1bbd11b6cf7ab5cd09&=&format=webp",
          sub: [{
            nama: "Sulaeman", jabatan: "Pondok Pesantren",
            url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389993000138051665/IMG-20220324-WA0030.jpg?ex=6866a35c&is=686551dc&hm=0a19b3c26bbc34c36e04ca6f1ada572946da3e993c4e1e171e0e897b3b72321f&=&format=webp",
          }],
        },
        {
          nama: "Pajar Abdullah",
          jabatan: "Majlis Taklim",
          url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992997789241505/16082910600031065009704_-_fajar_abdullah.jpg?ex=6866a35b&is=686551db&hm=f683a0c7afb2de11dd51612bb8a5e87bfa7afc8dcb34ec0e67d89cd07c94d1f5&=&format=webp",
          sub: [{
            nama: "Mujimi", jabatan: "Majlis Taklim",
            url_photo: "",
          }],
        },
        {
          nama: "Fadlan Ibnu Mubarok, S.Sos.", jabatan: "TPQ",
          url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946099938234540/IMG-20220319-WA0001.jpg?ex=686677ae&is=6865262e&hm=8ef3f67a54b005b5621bf5efed5d5905b42477717eefbf837a00a76d8518e322&=&format=webp", sub: []
        },
        {
          nama: "Ummu Aqila", jabatan: "Bimbel",
          url_photo: "", sub: []
        },
      ],
    },
    {
      id: 10,
      ketua: {
        nama: "M Irfan Ramadhan, S.E",
        jabatan: "Divisi Pemberdayaan Ekonomi & Usaha",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946066278813926/IMG-20220307-WA0001.jpg?ex=686677a6&is=68652626&hm=4c36ff4ddb76ea480d1619c82dda083cea35945cb3fbe33747d3c506f33a222a&=&format=webp"
      },
      sub: [
        {
          nama: "Renald Ghazali",
          jabatan: "Penjualan",
          url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992997139255296/1607009096234202170353_-_Aprizal_Ahmad.jpg?ex=6866a35b&is=686551db&hm=30e54299bf0065d849def48566a9f274af0dd8c8cedd7db5bbf5566e2ca53346&=&format=webp", 
          sub: [{ nama: "Mukhlis Purnomo", jabatan: "Penjualan",
            url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946067738558656/IMG-20220324-WA0003.jpg?ex=686677a6&is=68652626&hm=034ed35ebeff0d58b8a9475235b9cd3bcff5f93d0c035657948354c5d5a0472c&=&format=webp",  }],
        },
        {
          nama: "Muhammad Farras Majid",
          jabatan: "Pendanaan",
          url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1390033725802287126/09b48983-31b8-41e9-a472-74443a8922ea.jpeg?ex=6866c949&is=686577c9&hm=e425b34ecd9e58301a2dfa4ec2a776d59fda446d81b074e8ed6dc41a3105870c&=&format=webp",
          sub: [
            {
              nama: "Muhammad Syarif Hidayat", jabatan: "Pendanaan",
              url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389993007456976998/IMG-20250629-WA0006_-_Yuni_Rahayu.jpg?ex=6866a35d&is=686551dd&hm=8ddb06ffc4df0a57a4cf23121698709b77ae954e772482ca0137f8c527b90568&=&format=webp",
            },
            {
              nama: "Albert", jabatan: "Pendanaan",
              url_photo: "",
            },
            {
              nama: "Tijar Pradana, S.Kom", jabatan: "Pendanaan",
              url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992999450050730/IMG-20190605-WA0014_-_Max_White.jpg?ex=6866a35b&is=686551db&hm=f7d55c03fdc7a7dea8567d8976b9a7ce3be0f525cb09b1480c4749f0c29dcf47&=&format=webp",
            },
            
          ],
        },
      ],
    },
    {
      id: 11,
      ketua: {
        nama: "Fahrul Rozi, S.T", jabatan: "Divisi Sosial Kemasyarakatan",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946065947725906/IMG-20220307-WA0000.jpg?ex=686677a6&is=68652626&hm=8265314fabe1eb52e5e1b9d91b8b5c2efc1c00f3374628b5bf4a84ca5430e89e&=&format=webp",
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
              nama: "Muhaimin", jabatan: "Sub Divisi Kemasyarakatan",
              url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992994400374915/20211109_204314_-_Muhaimin_Goo.jpg?ex=6866a35a&is=686551da&hm=97abe29bf79d2c2f9f167f606433f5c9fe18307cf7a9e9c7d1e4ed2d109b9591&=&format=webp",
            },
            {
              nama: "Muhammad Annas", jabatan: "Sub Divisi Kemasyarakatan",
              url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946065154871396/IMG_20220310_084548.jpg?ex=686677a5&is=68652625&hm=e6d0d4352f341206e679902547985dbcade530872fd7714084c3c61e2d10042b&=&format=webp",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      ketua: {
        nama: "Mulya Sagara, A.md. Sn", jabatan: "Divisi Media Kreatif",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389993007742320840/mulya_-_Mulya_Sagara.jpg?ex=6866a35d&is=686551dd&hm=f1597d945a3c10426c8e8144665ffe09b6073c95897ecad8c894c0f2bbd98151&=&format=webp",
      },
      sub: [{
        nama: "Rifqi Fahlevi, S.Ds", jabatan: "Design Kreatif",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946064517201930/20220324_204840.png?ex=686677a5&is=68652625&hm=53cd03de9426a11704210e4e4233053b62fa4a3a8eaa3f1f3ecfeb1f0fb62815&=&format=webp",
      }],
    },
    {
      id: 13,
      ketua: {
        nama: "Ahmad Irfan Aprizal, S.Kom", jabatan: "Divisi IT & Tech",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389946099648823346/IMG-20220318-WA0000.jpg?ex=686677ae&is=6865262e&hm=c2ccb734411434c55a3c7e213981d8860e9e0ec553fa293d4bf4256e0a94a7ad&=&format=webp",
      },
      sub: [],
    },
    {
      id: 15,
      ketua: {
        nama: "Muhammad Khairul Soleh", jabatan: "Divisi Keamanan & Sarpras",
        url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992998250479668/Bang_Goceng_-_Khairul_Soleh.jpg?ex=6866a35b&is=686551db&hm=00b2a3e7badb707329c60dae9940cf3cbf39c57a8c7ab2c5d5432e5df114522b&=&format=webp",
      },
      sub: [
        {
          nama: "Roby Chandra P",
          jabatan: "Perawatan Inventaris",
          url_photo: "https://media.discordapp.net/attachments/1121142802663882752/1389992995990012146/20250629_071323_-_Robby_candra_Pramadi.jpg?ex=6866a35b&is=686551db&hm=51b53ec441a3bfa36d372bcb71bd3c79478b1b404354f1927378498c195ccfec&=&format=webp",
          sub: [],
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
