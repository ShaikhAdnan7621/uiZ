'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/Component/Input';
import Button from '@/Component/Button';
import Alert from '@/Component/Alert';
import Label from '@/Component/Label';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowSuccessAlert(true);
        setTimeout(() => {
            setShowSuccessAlert(false);
            router.push('/login'); // Navigate to the login page after signup
        }, 3000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-blue-500">
            <div className="bg-gray-900 shadow-2xl rounded-md p-10 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h1>

                {/* Neon Design: Add a subtle glow effect to the form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div className="relative">
                        <Label htmlFor="email">Email:</Label>
                        <Input 
                            id="email" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email" 
                            className="bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <Label htmlFor="password">Password:</Label>
                        <Input 
                            id="password" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password" 
                            className="bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            required
                        />
                    </div>

                    {/* Signup Button */}
                    <Button type="submit" variant="primary" className="w-full">
                        Sign Up
                    </Button>
                </form>

                {/* Success Alert */}
                {showSuccessAlert && (
                    <Alert variant="success" onClose={() => setShowSuccessAlert(false)}>
                        Signup successful! Redirecting to login...
                    </Alert>
                )}
            </div>
        </div>
    );
}