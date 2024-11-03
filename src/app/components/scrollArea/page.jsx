"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import MdView from '@/Component/Mdview'
import ScrollArea from '@/Component/ScrollArea'
import React from 'react'

function Page() {

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                ScrollArea
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='md:grow w-full flex items-center justify-center'>
                    <ScrollArea className={"w-[50vw] h-[50vh] mx-auto"} >
                        <div
                            className='w-screen h-screen'
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                                backgroundSize: '100px 100px', // Adjust grid size here
                                backgroundColor: '#000000', // Optional: set a background color
                            }}
                        >
                        </div>
                    </ScrollArea>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <ScrollArea className={"w-[50vw] h-[50vh] mx-auto"} > \n        \n    </ScrollArea>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.ScrollArea}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page