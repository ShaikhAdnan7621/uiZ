"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Dropdown, { DropdownItem } from '@/Component/Dropdown'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {


    const [inputConfig, setInputConfig] = useState({
        className: ' w-72',
        placeholder: 'Enter text here',
        type: 'text',
        value: '',
    });


    const handleInputChange = (e) => {
        setInputConfig({ ...inputConfig, value: e.target.value });
    };

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Input
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='h-36 md:grow w-full flex items-center justify-center'>
                    <Input
                        className={inputConfig.className}
                        placeholder={inputConfig.placeholder}
                        type={inputConfig.type}
                        value={inputConfig.value}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                    <div className=' mb-4'>
                        <Label htmlFor='inputPlaceholder'>Placeholder</Label>
                        <Input
                            className="mt-2 w-full sm:w-72"
                            type='text'
                            id='inputPlaceholder'
                            placeholder='Placeholder'
                            value={inputConfig.placeholder}
                            onChange={(e) => setInputConfig({ ...inputConfig, placeholder: e.target.value })}
                        />
                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='inputType'>Type</Label>
                        <Dropdown
                            className="mt-2 w-full sm:w-72"
                            id='inputType'
                            value={inputConfig.type}
                            onChange={(value) => { setInputConfig({ ...inputConfig, type: value }) }}
                        >
                            <DropdownItem value="text">Text</DropdownItem>
                            <DropdownItem value="email">Email</DropdownItem>
                            <DropdownItem value="password">Password</DropdownItem>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <Input \n        className={${inputConfig.className}} \n        placeholder={${inputConfig.placeholder}} \n        type={${inputConfig.type}} \n        value={${inputConfig.value}} \n        onChange={console.log(e.target.value)} \n    />`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Input}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page