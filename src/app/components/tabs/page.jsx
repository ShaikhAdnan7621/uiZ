"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import MdView from '@/Component/Mdview'
import Tabs, { TabContent, TabList, TabTrigger } from '@/Component/Tabs'
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
            <h2 className="text-4xl my-5 text-center font-semibold">
                Tabs
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className=' md:grow w-full flex items-center justify-center'>
                    <Tabs defaultActiveKey={"x"} className=' max-w-md '>
                        <TabList className={'bg-gray-900 rounded-lg p-1 grid grid-cols-2 gap-1'}>
                            <TabTrigger tabKey={"x"} className='w-full m-0'>City</TabTrigger>
                            <TabTrigger tabKey={"y"} className='w-full m-0'>Village</TabTrigger>
                        </TabList>

                        <TabContent tabKey={"x"} className='bg-gray-900 rounded-lg p-4'>
                            <p className="text-gray-200 text-lg">
                                <strong>Benefits of City Life:</strong>
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-gray-400">
                                <li>Access to better job opportunities and higher salaries.</li>
                                <li>More diverse options for dining, shopping, and entertainment.</li>
                                <li>Greater access to healthcare and educational institutions.</li>
                                <li>Enhanced public transportation and infrastructure.</li>
                            </ul>
                        </TabContent>

                        <TabContent tabKey={"y"} className='bg-gray-900 rounded-lg p-4'>
                            <p className="text-gray-200 text-lg">
                                <strong>Benefits of Village Life:</strong>
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-gray-400">
                                <li>Closer connection with nature and a cleaner environment.</li>
                                <li>Lower cost of living and affordable housing.</li>
                                <li>More space and a slower, peaceful lifestyle.</li>
                                <li>Stronger sense of community and local support.</li>
                            </ul>
                        </TabContent>
                    </Tabs>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`\n      <Tabs defaultActiveKey={"x"}>\n          <TabList className={'bg-gray-900 rounded-lg p-1 grid grid-cols-2    '}>\n              <TabTrigger tabKey={"x"}>City</TabTrigger>\n              <TabTrigger tabKey={"y"}>Village</TabTrigger>\n          </TabList>\n      \n          <TabContent tabKey={"x"} className='bg-gray-900 rounded-lg p-4'>\n              <p className="text-gray-200 text-lg">\n                  <strong>Benefits of City Life:</strong>\n              </p>\n              <ul className="list-disc pl-5 mt-2 text-gray-400">\n                  <li>Access to better job opportunities and higher salaries.</li>\n                  <li>More diverse options for dining, shopping, and entertainment.</li>\n                  <li>Greater access to healthcare and educational institutions.</li>\n                  <li>Enhanced public transportation and infrastructure.</li>\n              </ul>\n          </TabContent>\n      \n          <TabContent tabKey={"y"} className='bg-gray-900 rounded-lg p-4'>\n              <p className="text-gray-200 text-lg">\n                  <strong>Benefits of Village Life:</strong>\n              </p>\n              <ul className="list-disc pl-5 mt-2 text-gray-400">\n                  <li>Closer connection with nature and a cleaner environment.</li>\n                  <li>Lower cost of living and affordable housing.</li>\n                  <li>More space and a slower, peaceful lifestyle.</li>\n                  <li>Stronger sense of community and local support.</li>\n              </ul>\n          </TabContent>\n      </Tabs>\n      `}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Tabs}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page