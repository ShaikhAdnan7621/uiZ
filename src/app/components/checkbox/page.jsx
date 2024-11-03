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

    const labelsizes = {
        xs: ' text-xs',
        sm: ' text-sm',
        md: ' text-base',
        lg: ' text-lg',
        xl: ' text-xl',
    };


    const [CheckBoxConfig, setCheckBoxConfig] = useState({
        checked: false,
        className: "",
        variant: 'default',
        size: 'md',
    })

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Checkbox
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='h-36 md:grow w-full flex items-center justify-center'>
                    <Checkbox
                        checked={CheckBoxConfig.checked}
                        onChange={(checked) => { setCheckBoxConfig({ ...CheckBoxConfig, checked: checked }) }}
                        id={"lable1"}
                        variant={CheckBoxConfig.variant}
                        size={CheckBoxConfig.size}
                        className={CheckBoxConfig.className}
                    />
                    <Label htmlFor={"lable1"} className={`${labelsizes[CheckBoxConfig.size]} `}>Default</Label>
                </div>
                <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                    <div className=' mb-4'>
                        <Dropdown className="mt-2 w-full sm:w-72"
                            value={CheckBoxConfig.variant}
                            onChange={(value) => { setCheckBoxConfig({ ...CheckBoxConfig, variant: value }) }}
                        >
                            <DropdownItem value="default">Default</DropdownItem>
                            <DropdownItem value="outline">outline</DropdownItem>
                            <DropdownItem value="secondary">secondary</DropdownItem>
                            <DropdownItem value="danger">danger</DropdownItem>
                            <DropdownItem value="warning">warning</DropdownItem>
                            <DropdownItem value="info">info</DropdownItem>
                        </Dropdown>
                    </div>
                    <div className=' mb-4'>
                        <Dropdown className="mt-2 w-full sm:w-72"
                            value={CheckBoxConfig.size}
                            onChange={(value) => { setCheckBoxConfig({ ...CheckBoxConfig, size: value }) }}
                        >
                            <DropdownItem value="xs">Extra Small</DropdownItem>
                            <DropdownItem value="sm">Small</DropdownItem>
                            <DropdownItem value="md">Medium</DropdownItem>
                            <DropdownItem value="lg">Large</DropdownItem>
                            <DropdownItem value="xl">Extra Large</DropdownItem>
                        </Dropdown>
                    </div>
                    <div className=' mb-4'>
                        <Input className="mt-2 w-full sm:w-72" type='text' placeholder='classes'
                            value={CheckBoxConfig.className}
                            onChange={(e) => { setCheckBoxConfig({ ...CheckBoxConfig, className: e.target.value }) }} />
                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <Checkbox \n        checked={'${CheckBoxConfig.checked}'} \n        onChange={(checked) => {console.log(checked)}} \n        id={"lable1"} \n        variant={'${CheckBoxConfig.variant}'} \n        size={'${CheckBoxConfig.size}'} \n        className={'${CheckBoxConfig.className}'} \n    /> \n    <Label htmlFor={"lable1"} className={'${labelsizes[CheckBoxConfig.size]}'}>Default</Label>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Checkbox}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page