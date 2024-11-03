"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import { Breadcrumb, BreadcrumbDropdown, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/Component/Breadcrumb'

import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Breadcrumb
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='h-36 md:grow w-full flex items-center justify-center'>
                    <Breadcrumb className="my-4 ">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbEllipsis />
                        <BreadcrumbSeparator />
                        <BreadcrumbDropdown current='Breadcrumb' >
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#section1">Section 1</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#section2">Section 2</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#section3">Section 3</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbDropdown>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink active={true} href="/category">Category</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <Breadcrumb className="my-4"> \n        <BreadcrumbItem> \n            <BreadcrumbLink href="/">Home</BreadcrumbLink> \n        </BreadcrumbItem> \n        <BreadcrumbSeparator /> \n        <BreadcrumbItem> \n            <BreadcrumbLink href="/category">Category</BreadcrumbLink> \n        </BreadcrumbItem> \n        <BreadcrumbSeparator /> \n        <BreadcrumbDropdown> \n            <BreadcrumbItem> \n                <BreadcrumbLink href="#section1">Section 1</BreadcrumbLink> \n            </BreadcrumbItem> \n            <BreadcrumbItem> \n                <BreadcrumbLink href="#section2">Section 2</BreadcrumbLink> \n            </BreadcrumbItem> \n            <BreadcrumbItem> \n                <BreadcrumbLink href="#section3">Section 3</BreadcrumbLink> \n            </BreadcrumbItem> \n        </BreadcrumbDropdown> \n        <BreadcrumbSeparator /> \n        <BreadcrumbItem> \n            <BreadcrumbLink active={true} href="/category">Category</BreadcrumbLink> \n        </BreadcrumbItem> \n    </Breadcrumb>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Breadcrumb}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page