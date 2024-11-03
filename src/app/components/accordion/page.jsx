"use client"
import componentscode from '@/app/data/componentscode'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Button from '@/Component/Button'
import MdView from '@/Component/Mdview'
import React from 'react'

function Page() {
 
    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Accordion
            </h2>
            <div className="">
                <div className=' md:flex gap-2 items-center'>
                    <div className='my-8 md:grow w-full flex items-center justify-center'>
                        <Accordion >
                            <AccordionItem >
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem >
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    <Button>Hover Me</Button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <AccordionItem open >
                    <AccordionTrigger>copy code</AccordionTrigger>
                    <AccordionContent>
                        <MdView >
                            {`    <Accordion >\n        <AccordionItem >\n            <AccordionTrigger>Is it accessible?</AccordionTrigger>\n            <AccordionContent>\n                Yes. It adheres to the WAI-ARIA design pattern\n            </AccordionContent>\n        </AccordionItem>\n        <AccordionItem >\n            <AccordionTrigger>Is it accessible?</AccordionTrigger>\n            <AccordionContent>\n                <Button>Hover Me</Button>\n            </AccordionContent>\n        </AccordionItem>\n    </Accordion>`}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem >
                    <AccordionTrigger>Component Code</AccordionTrigger>
                    <AccordionContent  >
                        <MdView>
                            {componentscode.Accordion}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </section>
    )
}

export default Page