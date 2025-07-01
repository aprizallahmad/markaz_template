import { useState } from "react";


export const LoginModal = ({ onClose, onLoginSuccess, navigateTo}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false); // State to toggle between login/register

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to your authentication backend.
        console.log(`Attempting to ${isRegisterMode ? 'register' : 'login'} with:`, { email, password });

        // Simulate a successful login/registration by setting a dummy token in localStorage
        if (email && password) {
            localStorage.setItem('accessToken', 'dummy_token_123_abc'); // Store a dummy token
            onLoginSuccess(); // Call the success callback
            onClose(); // Close the modal
            // Optionally, navigate to a different page after successful login/registration
            // if (navigateTo) navigateTo('/dashboard');
        } else {
            // In a real app, display a user-friendly message, not an alert
            // For now, using a simple message in the console.
            console.log('Please enter both email and password.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 w-full max-w-sm relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
                    {isRegisterMode ? 'Daftar Akun' : 'Masuk ke Akun Anda'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-700 dark:text-white dark:border-slate-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-700 dark:text-white dark:border-slate-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-200"
                        >
                            {isRegisterMode ? 'Daftar' : 'Masuk'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsRegisterMode(!isRegisterMode)}
                            className="inline-block align-baseline font-bold text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500"
                        >
                            {isRegisterMode ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};