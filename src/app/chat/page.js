'use client';
import { Breadcrumb, BreadcrumbDropdown, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/Component/Breadcrumb';
import Button from '@/Component/Button';
import MdView from '@/Component/Mdview';
import ScrollArea from '@/Component/ScrollArea';
import Tooltip from '@/Component/Tooltip';
import axios from 'axios';
import { useState } from 'react';

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
        <div className="flex flex-col h-[calc(100vh-84px)] max-h-[calc(100vh-84px)] bg-stone-950 rounded-md"> {/* Added background color */}
            <ScrollArea className="max-h-full flex-grow p-4 overflow-y-auto"> {/* Added overflow-y-auto */}
                <div className="flex flex-col gap-4 ">
                    {messages.length === 0 ? (
                        <div className='h-36'>
                            <h1 className="text-6xl leading-snug text-center mx-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 w-fit">
                                Welcome to uiZ!
                            </h1>
                            <h1 className="text-3xl leading-snug text-center mx-auto font-bold text-gray-500 w-fit">
                                What can I create for you today?
                            </h1>
                        </div>
                    ) : (
                        messages.map((message, index) => (
                            <div key={index} className={`message  ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'} my-2`}>
                                <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                                    <MdView >
                                        {message.text}
                                    </MdView>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </ScrollArea>

            <div className="p-2 border-t border-gray-700 bg-gray-900 m-2 rounded-md">
                <div className="flex gap-2 items-end">
                    <textarea
                        className=" flex-grow min-h-12 max-h-52 text-white mt-1 p-2 block w-full rounded-md placeholder:text-gray-400 bg-gray-900  sm:text-sm focus:border disabled:bg-gray-900/90 disabled:cursor-not-allowed focus:outline-none focus:ring-0 focus:border-none"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <div className=' h-full justify-center items-end'>
                        <Button
                            variant="primary"
                            size="md"
                            className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-4 py-2 shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
                            onClick={handleClick}

                        >
                            Run
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
