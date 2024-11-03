"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Button from '@/Component/Button'
import Checkbox from '@/Component/Checkbox'
import Dropdown, { DropdownItem } from '@/Component/Dropdown'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {

    const [buttonConfig, setbuttonConfig] = useState({
        variant: "outline",
        size: "md",
        className: "",
        disabled: false,
    })

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl mt-3 text-center font-semibold">Buttons</h2>
            <div className="">
                <div className=' md:flex gap-2 items-center'>
                    <div className='h-36 md:grow w-full flex items-center justify-center'>
                        <Button
                            className={buttonConfig.className}
                            variant={buttonConfig.variant}
                            size={buttonConfig.size}
                            disabled={buttonConfig.disabled}
                        >
                            Default
                        </Button>
                    </div>
                    <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                        <div className=' mb-4'>
                            <Label htmlFor='ButtonClassName'>className</Label>
                            <Input className="mt-2 w-full sm:w-72" type='text' placeholder='classes' id='ButtonClassName'
                                value={buttonConfig.className}
                                onChange={(e) => { setbuttonConfig({ ...buttonConfig, className: e.target.value }) }} />
                        </div>
                        <div className=' w-full sm:w-72'>
                           <div className='flex h-full justify-normal items-center'>
                           <Checkbox
                                checked={buttonConfig.disabled}
                                className=' '
                                onChange={(checked) => { setbuttonConfig({ ...buttonConfig, disabled: checked }) }}
                                id={"lable1"} />
                            <Label htmlFor={"lable1"}>Disabled</Label>
                           </div>
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='ButtonVariant' >variant</Label>
                            <Dropdown id={'ButtonVariant'} className="mt-2 w-full sm:w-72" 
                                value={buttonConfig.variant}
                                onChange={(value) => { setbuttonConfig({ ...buttonConfig, variant: value }) }}
                            >
                                <DropdownItem value="default">default</DropdownItem>
                                <DropdownItem value="outline">Outline</DropdownItem>
                                <DropdownItem value="primary">Primary</DropdownItem>
                                <DropdownItem value="secondary">Secondary</DropdownItem>
                                <DropdownItem value="danger">Danger</DropdownItem>
                                <DropdownItem value="success">Success</DropdownItem>
                                <DropdownItem value="warning">Warning</DropdownItem>
                                <DropdownItem value="info">Info</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor={"buttonsize"} >size</Label>
                            <Dropdown id={"buttonsize"} className="mt-2 w-full sm:w-72" 
                                value={buttonConfig.size}
                                onChange={(value) => { setbuttonConfig({ ...buttonConfig, size: value }) }}
                            >
                                <DropdownItem value="xs">Extra Small</DropdownItem>
                                <DropdownItem value="sm">Small</DropdownItem>
                                <DropdownItem value="md">Medium</DropdownItem>
                                <DropdownItem value="lg">Large</DropdownItem>
                                <DropdownItem value="xl">Extra Large</DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <AccordionItem open >
                    <AccordionTrigger>copy code</AccordionTrigger>
                    <AccordionContent>
                        <MdView >
                            {`    <button variant="${buttonConfig.variant}" size="${buttonConfig.size}" className="${buttonConfig.className}">\n        Default\n     <button>\n`}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem >
                    <AccordionTrigger>Component Code</AccordionTrigger>
                    <AccordionContent  >
                        <MdView>
                            {componentscode.button}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </section>
    )
}

export default Page