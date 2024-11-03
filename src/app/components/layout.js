// src/app/components/layout.js
"use client";

import { usePathname } from 'next/navigation';
 import ScrollArea from '@/Component/ScrollArea';
 import Header from '@/uicomponents/Header';
 

export default function ComponentsLayout({ children }) {


    return (
        <div className='flex md:flex-row flex-col gap-2 h-[calc(100vh-84px)] max-h-[calc(100vh-84px)] '>
            <Header />
            <div className='w-full bg-stone-950 rounded-md'>
                <ScrollArea className='grow w-full max-h-full md:p-4 p-3'>
                    <main className='grow h-full'>{children}</main>
                    <footer className=" text-gray-100 py-6 px-4 mt-8 rounded-t-3xl">
                        <div className="container mx-auto text-center">
                            <h1 className="text-2xl font-bold text-gray-200 mb-4">uiZ Component Library</h1>
                            <p className="text-gray-400 mb-2">Building better user interfaces with modern web technologies.</p>
                            <div className="flex items-center justify-center space-x-2">
                                <p>
                                    Built by uiZ
                                    <a href="https://x.com/ShaikhAdnan7622/" className="text-blue-500 hover:underline">
                                        {" Shaikh Adnan"}
                                    </a>
                                </p>
                                <span className="text-gray-400">·</span>
                                <a href="#" className="text-blue-500 hover:underline">
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </footer>
                </ScrollArea>
            </div>
        </div>
    );
}
