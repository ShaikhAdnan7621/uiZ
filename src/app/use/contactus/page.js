"use client"
import React, { useState } from 'react';
import Input from '@/Component/Input';
import Label from '@/Component/Label';
import Button from '@/Component/Button';
import Alert from '@/Component/Alert';


export default function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState('info'); // Default alert type
    const [alertMessage, setAlertMessage] = useState('');


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your actual API endpoint for sending the form data
            const response = await fetch('/api/contact', { // Example API route
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlertVisible(true);
                setAlertType('success');
                setAlertMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                // Optionally, reset the form fields here
            } else {
                setAlertVisible(true);
                setAlertType('error');
                const errorData = await response.json();
                setAlertMessage(errorData.message || 'An error occurred while sending your message.');
                console.error('Error sending message:', response.status, errorData);
            }
        } catch (error) {
            setAlertVisible(true);
            setAlertType('error');
            setAlertMessage('An unexpected error occurred.');
            console.error('Error sending message:', error);
        }
    };


    return (
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 min-h-screen p-8 flex flex-col items-center justify-center relative">
            <img src="https://ideogram.ai/assets/image/lossless/response/7GhNr9zpS2GrxzGzB9ZH-A" alt="Contact Us Background" className="w-screen absolute z-0 object-cover h-screen" />

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl mt-16 z-10">

                <h1 className="text-2xl font-bold text-center mb-4 text-slate-900">Contact Us</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Label htmlFor="name">Name:</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />

                    <Label htmlFor="email">Email:</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    <Label htmlFor="message">Message:</Label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md p-2 resize-y"
                        rows="4"
                    />

                    <Button type="submit" variant="primary">
                        Send Message
                    </Button>
                </form>


                {alertVisible && (
                    <Alert
                        variant={alertType}
                        size="md"
                        onClose={() => setAlertVisible(false)}
                    >
                        {alertMessage}
                    </Alert>
                )}
            </div>
        </div>
    );
}