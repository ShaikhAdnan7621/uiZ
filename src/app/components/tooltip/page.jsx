"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Dropdown, { DropdownItem } from '@/Component/Dropdown'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import Tooltip from '@/Component/Tooltip'
import React, { useState } from 'react'

function Page() {

    const [TooltipConfig, setTooltipConfig] = useState({
        text: "This tooltip appears on the left.",
        position: "left",
        size: "xs",
        className: "",
    })

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Tooltip
            </h2>
            <div className="">
                <div className=' md:flex gap-2 items-center'>
                    <div className='h-36 md:grow w-full flex items-center justify-center'>
                        <Tooltip className={TooltipConfig.className} text={TooltipConfig.text} position={TooltipConfig.position} size={TooltipConfig.size}>
                            <span className='border border-gray-500/50/50 bg-gray-900 rounded-md p-2'>hover here</span>
                        </Tooltip>
                    </div>
                    <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                        <div className=' mb-4'>
                            <Label htmlFor='TooltipClassname' >className</Label>
                            <Input className="mt-2 w-full sm:w-72" type='text' placeholder='classes' id='className'
                                value={TooltipConfig.className}
                                onChange={(e) => { setTooltipConfig({ ...TooltipConfig, className: e.target.value }) }} />
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='TooltipText'>Text</Label>
                            <Input className="mt-2 w-full sm:w-72" id='TooltipText' type='text' placeholder='text'
                                value={TooltipConfig.text}
                                onChange={(e) => { setTooltipConfig({ ...TooltipConfig, text: e.target.value }) }} />
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='DropdownPositopn'>Position  </Label>
                            <Dropdown className="mt-2 w-full sm:w-72"
                                value={TooltipConfig.position}
                                onChange={(value) => { setTooltipConfig({ ...TooltipConfig, position: value }) }}
                            >
                                <DropdownItem value="left">Left</DropdownItem>
                                <DropdownItem value="right">Right</DropdownItem>
                                <DropdownItem value="top">Top</DropdownItem>
                                <DropdownItem value="bottom">Bottom</DropdownItem>
                            </Dropdown>

                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='c'>size</Label>
                            <Dropdown className="mt-2 w-full sm:w-72"
                                id='TooltipConfig'
                                value={TooltipConfig.size}
                                onChange={(value) => { setTooltipConfig({ ...TooltipConfig, size: value }) }}
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
                <AccordionItem open>
                    <AccordionTrigger>copy code</AccordionTrigger>
                    <AccordionContent>
                        <MdView >
                            {`    <Tooltip text="${TooltipConfig.text}" position="${TooltipConfig.position}" size="${TooltipConfig.size}" className="${TooltipConfig.className}">\n        <button>Hover Me</button>\n     <Tooltip>\n`}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger>Component Code</AccordionTrigger>
                    <AccordionContent>
                        <MdView>
                            {componentscode.Tooltip}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </section>
    )
}

export default Page