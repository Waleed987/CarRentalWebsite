import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage(){
    const navigate = useNavigate();
    const [form,setform] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });
    const [error, setError] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setform((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        // Validate passwords match
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (form.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/user/signup', {
                email: form.email,
                password: form.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log('Signup successful, navigating to dashboard...');
                navigate('/dashboard');
            } else {
                setError('Signup failed: ' + response.data.msg);
            }
            
            setform({
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Signup error:', error);
            setError(error.response?.data?.msg || 'An error occurred during signup');
        }
    };

    return(
        <>
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <img 
                    src="/src/assets/loginc1.png" 
                    alt="car" 
                    className="h-full w-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 min-h-screen flex justify-center items-center p-4">
                <div className="w-full max-w-md">
                    {/* Glassmorphism card */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Create Account
                            </h1>
                            <p className="text-white/80 text-lg">Join our car rental community</p>
                        </div>

                        {/* Error message */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg text-red-200 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6"> 
                            {/* Email field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-white font-semibold text-lg">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input 
                                        value={form.email} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25" 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Password field */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-white font-semibold text-lg">
                                    Password
                                </label>
                                <div className="relative">
                                    <input 
                                        value={form.password} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25" 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Confirm Password field */}
                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="block text-white font-semibold text-lg">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input 
                                        value={form.confirmPassword} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/25" 
                                        type="password" 
                                        name="confirmPassword" 
                                        id="confirmPassword" 
                                        placeholder="Confirm your password"
                                        required
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Submit button */}
                            <button 
                                type="submit" 
                                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-purple-700 hover:to-pink-600 text-white font-bold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300/50 active:scale-95"
                            >
                                <span className="flex items-center justify-center">
                                    Create Account
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </span>
                            </button>

                            {/* Additional links */}
                            <div className="text-center space-y-2 mt-6">
                                <p className="text-white/60 text-sm">
                                    Already have an account? 
                                    <a onClick={() => navigate('/login')} className="text-purple-300 hover:text-purple-200 ml-1 font-semibold transition-colors duration-300 cursor-pointer">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Floating elements for decoration */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignupPage; 