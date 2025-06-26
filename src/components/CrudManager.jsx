import { useRef, useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";
import { EditIcon, PlusCircleIcon, Trash2Icon } from "./Icon";


export const CrudManager = ({ title, icon: Icon, data: initialData, fields }) => {
    const [data, setData] = useState(initialData);
    const [showForm, setShowForm] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [modalState, setModalState] = useState({ isOpen: false, type: '', data: null });
    const formRef = useRef(null);

    const handleAdd = () => {
        setCurrentItem(null);
        setShowForm(true);
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setShowForm(true);
    };

    const requestDelete = (item) => {
        setModalState({ isOpen: true, type: 'delete', data: item });
    };
    
    const requestSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newItem = { id: currentItem ? currentItem.id : Date.now() };
        fields.forEach(field => {
            newItem[field.name] = formData.get(field.name);
        });
        setModalState({isOpen: true, type: 'save', data: newItem});
    };
    
    const confirmAction = () => {
        const { type, data: actionData } = modalState;
        if (type === 'delete') {
            setData(data.filter(d => d.id !== actionData.id));
        } else if (type === 'save') {
             if(currentItem){
                setData(data.map(d => d.id === currentItem.id ? actionData : d));
            } else {
                setData([...data, actionData]);
            }
            setShowForm(false);
            setCurrentItem(null);
        }
        closeModal();
    };

    const closeModal = () => {
        setModalState({ isOpen: false, type: '', data: null });
    };

    return (
        <div>
            <ConfirmationModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                onConfirm={confirmAction}
                title={modalState.type === 'delete' ? 'Konfirmasi Hapus' : 'Konfirmasi Simpan'}
            >
                {modalState.type === 'delete' 
                    ? `Anda yakin ingin menghapus data "${modalState.data?.nama || modalState.data?.judul || modalState.data?.tema}"?` 
                    : `Anda yakin ingin menyimpan perubahan ini?`}
            </ConfirmationModal>

            <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                        <Icon className="w-8 h-8 text-red-600" />
                        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    </div>
                    <button onClick={handleAdd} className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                        <PlusCircleIcon className="w-5 h-5" />
                        <span>Tambah Baru</span>
                    </button>
                </div>
                
                {showForm && (
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-red-200">
                        <h3 className="text-xl font-semibold mb-4">{currentItem ? 'Edit' : 'Tambah'} {title}</h3>
                        <form ref={formRef} onSubmit={requestSave}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {fields.map(field => (
                                    <div key={field.name}>
                                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            id={field.name}
                                            defaultValue={currentItem ? currentItem[field.name] : ''}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Batal</button>
                                <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Simpan</button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-red-50">
                            <tr>
                                {fields.map(field => <th key={field.name} className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{field.label}</th>)}
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map(item => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    {fields.map(field => <td key={field.name} className="py-4 px-6 whitespace-nowrap">{item[field.name]}</td>)}
                                    <td className="py-4 px-6 whitespace-nowrap flex space-x-3">
                                        <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-900"><EditIcon className="w-5 h-5"/></button>
                                        <button onClick={() => requestDelete(item)} className="text-red-600 hover:text-red-900"><Trash2Icon className="w-5 h-5"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};