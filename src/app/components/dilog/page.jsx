"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import DilogContener, { DilogContent, DilogMenuContent, DilogMenuGroup, DilogMenuList } from '@/Component/Dilog'
import MdView from '@/Component/Mdview'
import React from 'react'

function Page() {
    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Dilog
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className=' md:grow w-full flex items-center justify-center'>
                    <DilogContener rightclick={() => console.log(' Menu 2 clicked!')} className={"border-gray-500/50 border p-2 w-52 h-52 rounded-md bg-gray-500 "}>
                        <DilogContent>
                            <div className='container'>Right click here for Menu</div>
                        </DilogContent>
                        <DilogMenuContent className=" w-96  " >
                            <DilogMenuGroup title="hello">
                                <DilogMenuList >Item A</DilogMenuList>
                                <DilogMenuList>Item B</DilogMenuList>
                                <DilogMenuList >Item A</DilogMenuList>
                                <DilogMenuList>Item B</DilogMenuList>
                            </DilogMenuGroup>
                            <DilogMenuGroup>
                                <DilogMenuList >Item A</DilogMenuList>
                                <DilogMenuList>Item B</DilogMenuList>
                            </DilogMenuGroup>
                        </DilogMenuContent>
                    </DilogContener>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <DilogContener rightclick={() => console.log(' Menu 2 clicked!')} className={"border-gray-500/50 border p-2 w-full rounded-md "}> \n        <DilogContent> \n            <span>Right-click me for Menu</span> \n        </DilogContent> \n        <DilogMenuContent className=" w-96  " > \n            <DilogMenuGroup title="hello"> \n                <DilogMenuList >Item A</DilogMenuList> \n                <DilogMenuList>Item B</DilogMenuList> \n                <DilogMenuList >Item A</DilogMenuList> \n                <DilogMenuList>Item B</DilogMenuList> \n            </DilogMenuGroup> \n            <DilogMenuGroup> \n                <DilogMenuList >Item A</DilogMenuList> \n                <DilogMenuList>Item B</DilogMenuList> \n            </DilogMenuGroup> \n        </DilogMenuContent> \n    </DilogContener>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Dilog}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page