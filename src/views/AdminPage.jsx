import { useState } from "react";
import { cmsViews } from "../../utils/admin";
import { LogOutIcon } from "../components/Icon";


export const AdminPage = ({ handleLogout, dataKajian, setDataKajian }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeView, setActiveView] = useState('guru');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Nama admin atau password salah.');
        }
    };
    
    const ActiveComponent = cmsViews[activeView].component;

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-2 text-red-800">Login Admin</h1>
                    <p className="text-center text-gray-600 mb-6">Silakan masuk untuk melanjutkan.</p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Nama Admin</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full">
                                Masuk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-white shadow-lg md:min-h-screen p-4 flex-shrink-0">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-red-800">CMS Dashboard</h2>
                    </div>
                    <nav className="flex-grow">
                        <ul>
                            {Object.keys(cmsViews).map(view => {
                                const Icon = cmsViews[view].icon;
                                return (
                                <li key={view} className="mb-2">
                                    <button onClick={() => setActiveView(view)} className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left ${activeView === view ? 'bg-red-100 text-red-700 font-bold' : 'text-gray-600 hover:bg-gray-100'}`}>
                                        <Icon className="w-5 h-5" />
                                        <span>{cmsViews[view].props.title.replace('Manajemen ','')}</span>
                                    </button>
                                </li>
                            )})}
                        </ul>
                    </nav>
                     <div className="mt-6 border-t pt-4">
                        <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left text-red-600 hover:bg-red-100">
                            <LogOutIcon className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8">
                   <ActiveComponent {...cmsViews[activeView].props} />
                </main>
            </div>
        </div>
    );
};