'use client';
import { useState } from 'react';
import ScrollArea from '@/Component/ScrollArea';
import Input from '@/Component/Input';
import Button from '@/Component/Button';
import Tooltip from '@/Component/Tooltip';
import axios from 'axios';
import MdView from '@/Component/Mdview';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const sendMessage = async () => {
        if (userInput.trim()) {
            const newMessage = { text: userInput, sender: 'user' };
            try {
                // Use functional state update to ensure correct message state is sent

                const messageHistory = messages.map(({ sender, text }) => ({
                    role: sender === 'user' ? 'user' : 'model',
                    parts: [{ text }],
                }));

                const data = {
                    message: userInput,
                    history: messageHistory,
                };


                // Add a temporary processing message
                setMessages(prevMessages => [...prevMessages, { text: "I'm processing your request...", sender: 'model' }]);

                const response = await axios.post('/api/Chat', { data });

                if (response.data && response.data.response) {
                    // Replace the processing message with the actual response
                    setMessages(prevMessages => [
                        ...prevMessages.slice(0, -1), // Remove processing message
                        { text: response.data.response, sender: 'model' },
                    ]);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (error) {
                console.error('Error sending message:', error);
                // Remove processing message and show error message
                setMessages(prevMessages => [
                    ...prevMessages.slice(0, -1),
                    { text: `Oops! There was an error: ${error.message}`, sender: 'model' },
                ]);
            }
        }
    };
    const handleClick = async () => {
        if (userInput.trim()) {
            const newMessage = { text: userInput, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setUserInput('');
            await sendMessage();  // Await the sendMessage function
        }
    }


    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-700 to-pink-700 p-4">
            <div className="rounded-lg max-w-6xl mx-auto shadow-lg overflow-hidden bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white ">
                <ScrollArea className="p-4 h-[600px]" orientation="vertical">
                    <div className="flex flex-col space-y-4"> {/* Removed space-y-reverse */}
                        {messages.length === 0 ? (
                            <h1 className="text-5xl text-center mx-auto font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 w-fit">
                                Hi there! How can I help you today
                            </h1>
                        ) : (
                            messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender === 'user' ? 'text-right' : 'text-left'} my-2`}>
                                    <p className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                                        <MdView >
                                            {message.text}
                                        </MdView>
                                       
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </ScrollArea>

                <div className="p-4 border-t border-gray-600 bg-gray-800">
                    <div className="flex items-center">
                        <Input
                            className="flex-grow mr-2 rounded-lg border border-gray-400 px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            placeholder="Type your message..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <Tooltip text="Send Message">
                            <Button
                                variant="primary"
                                size="md"
                                className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-4 py-2 shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
                                onClick={handleClick}
                            >
                                Send
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chatbot;
