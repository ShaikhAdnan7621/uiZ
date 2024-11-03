"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Badge from '@/Component/Badge'
import Button from '@/Component/Button'
import Checkbox from '@/Component/Checkbox'
import Dropdown, { DropdownItem } from '@/Component/Dropdown'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {


    const [badgeConfig, setBadgeConfig] = useState({
        variant: 'default',
        variantstyle: 'default',
        size: 'md',
        className: '',
        content: 'new',
    })

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Badge
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='h-36 md:grow w-full flex items-center justify-center'>
                    <Badge
                        variant={badgeConfig.variant}
                        variantstyle={badgeConfig.variantstyle}
                        size={badgeConfig.size}
                        className={badgeConfig.className}
                    >
                        <span>{badgeConfig.content}</span>
                    </Badge>
                </div>
                <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                    <div className=' mb-4'>
                        <Label htmlFor='BadgeClassName'>className</Label>
                        <Input
                            className="mt-2 w-full sm:w-72"
                            id='BadgeClassName'
                            type='text'
                            placeholder='classes'
                            value={badgeConfig.className}
                            onChange={(e) => setBadgeConfig({ ...badgeConfig, className: e.target.value })}
                        />
                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='BadgeContent'>Content</Label>
                        <Input
                            id='BadgeContent'
                            className="mt-2 w-full sm:w-72"
                            type='text'
                            placeholder='Badge Content'
                            value={badgeConfig.content}
                            onChange={(e) => setBadgeConfig({ ...badgeConfig, content: e.target.value })}
                        />
                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='BadgeVariant'>Variant</Label>
                        <Dropdown
                            className="mt-2 w-full sm:w-72"
                            id="BadgeVariant"
                            value={badgeConfig.variant}
                            onChange={(value) => setBadgeConfig({ ...badgeConfig, variant: value })}
                        >
                            <DropdownItem value="gray">gray</DropdownItem>
                            <DropdownItem value="red">red</DropdownItem>
                            <DropdownItem value="green">green</DropdownItem>
                            <DropdownItem value="blue">blue</DropdownItem>
                            <DropdownItem value="yellow">yellow</DropdownItem>
                            <DropdownItem value="purple">purple</DropdownItem>
                            <DropdownItem value="pink">pink</DropdownItem>
                            <DropdownItem value="cyan">cyan</DropdownItem>
                        </Dropdown>
                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='Badgevariantstyle'>Variant Style</Label>
                        <Dropdown
                            id='Badgevariantstyle'
                            className="mt-2 w-full sm:w-72"

                            value={badgeConfig.variantstyle}
                            onChange={(value) => setBadgeConfig({ ...badgeConfig, variantstyle: value })}
                        >
                            <DropdownItem value="default">default</DropdownItem>
                            <DropdownItem value="solid">Solid</DropdownItem>
                            <DropdownItem value="outline">Outline</DropdownItem>
                        </Dropdown>
                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='BadgeSize'>Size</Label>
                        <Dropdown
                            id='BadgeSize'
                            className="mt-2 w-full sm:w-72"
                            value={badgeConfig.size}
                            onChange={(value) => setBadgeConfig({ ...badgeConfig, size: value })}
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
                        {`    <Badge \n        variant="${badgeConfig.variant}" \n        variantstyle="${badgeConfig.variantstyle}" \n        size="${badgeConfig.size}" \n        className="${badgeConfig.className}"\n    >\n        <span>{badgeConfig.content}</span>\n    </Badge>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Badge}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section >
    )
}

export default Page