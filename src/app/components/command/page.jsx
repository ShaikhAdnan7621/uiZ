"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import { Command, CommandGroup, CommandItem, CommandItemIcon, CommandItemSuggestionText, CommandItemText } from '@/Component/Command'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Command
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='py-10 md:grow w-full flex items-center justify-center '>
                    <div className='w-96 mx-auto sticky'>
                        <Command onSearch={(term) => { setSearchTerm(term) }} searchablebaricon="🔍" className='w-full'>
                            <CommandGroup title="Actions">
                                <CommandItem onClick={() => console.log('Edit clicked!')} isActive={searchTerm === 'Edit'}>
                                    <CommandItemIcon>✏️</CommandItemIcon>
                                    <CommandItemText>Edit</CommandItemText>
                                    <CommandItemSuggestionText>Ctrl+E</CommandItemSuggestionText>
                                </CommandItem>
                                <CommandItem onClick={() => console.log('Delete clicked!')}>
                                    <CommandItemIcon>🗑️</CommandItemIcon>
                                    <CommandItemText>Delete</CommandItemText>
                                </CommandItem>
                            </CommandGroup>
                            <CommandGroup title="Settings">
                                <CommandItem>
                                    <CommandItemIcon>⚙️</CommandItemIcon>
                                    <CommandItemText>General</CommandItemText>
                                </CommandItem>
                                <CommandItem>
                                    <CommandItemIcon>🎨</CommandItemIcon>
                                    <CommandItemText>Appearance</CommandItemText>
                                </CommandItem>
                            </CommandGroup>
                        </Command>
                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <Command onSearch={${(term) => { setSearchTerm(term) }}} searchablebaricon="🔍" className='w-full'>\n        <CommandGroup title="Actions">\n            <CommandItem onClick={() => console.log('Edit clicked!')} isActive={searchTerm === 'Edit'}>\n                <CommandItemIcon>✏️</CommandItemIcon>\n                <CommandItemText>Edit</CommandItemText>\n                <CommandItemSuggestionText>Ctrl+E</CommandItemSuggestionText>\n            </CommandItem>\n            <CommandItem onClick={() => console.log('Delete clicked!')}>\n                <CommandItemIcon>🗑️</CommandItemIcon>\n                <CommandItemText>Delete</CommandItemText>\n            </CommandItem>\n        </CommandGroup>\n        <CommandGroup title="Settings">\n            <CommandItem>\n                <CommandItemIcon>⚙️</CommandItemIcon>\n                <CommandItemText>General</CommandItemText>\n            </CommandItem>\n            <CommandItem>\n                <CommandItemIcon>🎨</CommandItemIcon>\n                <CommandItemText>Appearance</CommandItemText>\n            </CommandItem>\n        </CommandGroup>\n    </Command>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Command}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section >
    )
}

export default Page