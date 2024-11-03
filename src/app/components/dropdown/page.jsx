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

    const [dropdownConfig, setDropdownConfig] = useState({
        searchable: false,
        placeholder: 'Select an option',
        multiple: false,
        className: ' w-52',
        value: '', // For single select
        values: [], // For multiple select
    });
    const handleDropdownChange = (newValue) => {
        if (dropdownConfig.multiple) {
            setDropdownConfig({ ...dropdownConfig, values: newValue });
        } else {
            setDropdownConfig({ ...dropdownConfig, value: newValue });
        }
    };
    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Dropdown
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='h-36 md:grow w-full flex items-center justify-center'>
                    <Dropdown
                        className={dropdownConfig.className}
                        placeholder={dropdownConfig.placeholder}
                        multiple={dropdownConfig.multiple}
                        value={dropdownConfig.multiple ? dropdownConfig.values : dropdownConfig.value}
                        onChange={handleDropdownChange}
                    >
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Choice 2</DropdownItem>
                        <DropdownItem>Selection 3</DropdownItem>
                        <DropdownItem>Selection 4</DropdownItem>
                    </Dropdown>
                </div>
                <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                    <div className=' mb-4'>
                        <Label htmlFor='dropdownPlaceholder'>Placeholder</Label>
                        <Input
                            type='text'
                            className="mt-2 w-full sm:w-72"
                            placeholder='Placeholder'
                            id='dropdownPlaceholder'
                            value={dropdownConfig.placeholder}
                            onChange={(e) => setDropdownConfig({ ...dropdownConfig, placeholder: e.target.value })}
                        />
                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='dropdownClassName'>Placeholder</Label>
                        <Input
                            className="mt-2 w-full sm:w-72"
                            type='text'
                            id='dropdownClassName'
                            placeholder='Classes'
                            value={dropdownConfig.className}
                            onChange={(e) => setDropdownConfig({ ...dropdownConfig, className: e.target.value })}
                        />
                    </div>
                    <div className=' w-full sm:w-72'>
                        <div className='flex h-full justify-center items-center'>
                            <Checkbox
                                checked={dropdownConfig.multiple}
                                onChange={(checked) => setDropdownConfig({ ...dropdownConfig, multiple: checked })}
                                id={"dropdownMultiple"}
                            />
                            <Label htmlFor={"dropdownMultiple"}>Multiple</Label>
                        </div>
                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`\n      <Dropdown\n          className={'${JSON.stringify(dropdownConfig.className)}'}\n          placeholder={'${JSON.stringify(dropdownConfig.placeholder)}'}\n          multiple={${dropdownConfig.multiple}}\n          value={${dropdownConfig.multiple ? JSON.stringify(dropdownConfig.values) : JSON.stringify(dropdownConfig.value)}}\n          onChange={handleDropdownChange}\n      >\n          <DropdownItem>Option 1</DropdownItem>\n          <DropdownItem>Choice 2</DropdownItem>\n          <DropdownItem>Selection 3</DropdownItem>\n          <DropdownItem>Selection 4</DropdownItem>\n      </Dropdown>\n`}

                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Dropdown}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page