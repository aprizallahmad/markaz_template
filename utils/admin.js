import { CrudManager } from "../src/components/CrudManager";
import { BookTextIcon, GraduationCapIcon, NewspaperIcon, UsersIcon } from "../src/components/Icon";
import { artikelData, dataKajian, guruData, santriData } from "../src/datas/data";


export const cmsViews = {
    guru: {
        component: CrudManager,
        icon: UsersIcon,
        props: { title: "Manajemen Guru", icon: UsersIcon, data: guruData, fields: [{name: 'nama', label: 'Nama Guru', type: 'text'}, {name: 'mapel', label: 'Mata Pelajaran', type: 'text'}] }
    },
    santri: {
        component: CrudManager,
        icon: GraduationCapIcon,
        props: { title: "Manajemen Santri", icon: GraduationCapIcon, data: santriData, fields: [{name: 'nama', label: 'Nama Santri', type: 'text'}, {name: 'kelas', label: 'Kelas', type: 'text'}] }
    },
    artikel: {
        component: CrudManager,
        icon: NewspaperIcon,
        props: { title: "Manajemen Artikel", icon: NewspaperIcon, data: artikelData, fields: [{name: 'judul', label: 'Judul Artikel', type: 'text'}, {name: 'penulis', label: 'Penulis', type: 'text'}] }
    },
    kajian: {
        component: CrudManager,
        icon: BookTextIcon,
        props: { title: "Manajemen Kajian", icon: BookTextIcon, data: dataKajian.map((k, i)=> ({...k, id: i+1})), fields: [{name: 'tema', label: 'Tema Kajian', type: 'text'}, {name: 'pemateri', label: 'Pemateri', type: 'text'}, {name: 'lokasi', label: 'Lokasi', type: 'text'}] }
    },
};