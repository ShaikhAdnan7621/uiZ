"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Checkbox from '@/Component/Checkbox'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import Navbar, { NavFoot, NavGroup, NavHead, NavLink } from '@/Component/Navbar'
import React, { useState } from 'react'

function Page() {

    const [NavbarConfig, setNavbarConfig] = useState({
        vertical: true,
        className: "",
    })

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Navbar
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='  md:grow w-full flex items-center justify-center'>
                    <Navbar vertical={NavbarConfig.vertical} className={NavbarConfig.className}>
                        <NavHead>
                            <h1 className='font-bold text-1xl'>
                                Ui Library
                            </h1>
                        </NavHead>
                        <NavGroup vertical={NavbarConfig.vertical}  >
                            <NavLink href="/components/button" className={'p-2 w-full'}> 
                                components
                            </NavLink>
                            <NavLink href="/components/accordion"  className={'p-2 w-full'}>
                                accordion
                            </NavLink>
                            <NavLink href="/components/tooltip"  className={'p-2 w-full'}>  
                                Tooltip
                            </NavLink>
                            <NavLink href="/components/badge"  className={'p-2 w-full'}>
                                Badge
                            </NavLink>
                        </NavGroup>
                        <NavFoot vertical={NavbarConfig.vertical}  >
                            footter
                        </NavFoot>
                    </Navbar>
                </div>
                <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                    <div className=' mb-4'>
                        <Label htmlFor='className'>className</Label>
                        <Input className="mt-2 w-full sm:w-72" type='text' placeholder='classes' id='className'
                            value={NavbarConfig.className}
                            onChange={(e) => { setNavbarConfig({ ...NavbarConfig, className: e.target.value }) }} />
                    </div>
                    <div className=' w-full sm:w-72'>
                        <div className='flex h-full justify-normal items-center'>

                            <Checkbox
                                checked={NavbarConfig.vertical}
                                onChange={(checked) => { setNavbarConfig({ ...NavbarConfig, vertical: checked }) }}
                                id={"NavbarVertical"} />
                            <Label htmlFor={"lable1"}>vertical</Label>
                        </div>
                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView > 
                        {`      <Navbar vertical={${NavbarConfig.vertical}} className={"${NavbarConfig.className}"}>\n          <NavHead>\n              <h1 className='font-bold text-1xl'>\n                  Ui Library\n              </h1>\n          </NavHead>\n        <NavGroup vertical={${NavbarConfig.vertical}}  >\n            <NavLink href="/components/button" className={'p-2 w-full'}> \n                components\n            </NavLink>\n            <NavLink href="/components/accordion"  className={'p-2 w-full'}>\n                accordion\n            </NavLink>\n            <NavLink href="/components/tooltip"  className={'p-2 w-full'}>  \n                Tooltip\n            </NavLink>\n            <NavLink href="/components/badge"  className={'p-2 w-full'}>\n                Badge\n            </NavLink>\n        </NavGroup>\n        <NavFoot vertical={${NavbarConfig.vertical}}  >\n            footter\n        </NavFoot>\n      </Navbar>\n`}  
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Navbar}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page
