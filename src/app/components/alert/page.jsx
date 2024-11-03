"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Alert from '@/Component/Alert'
import Button from '@/Component/Button'
import Dropdown, { DropdownItem } from '@/Component/Dropdown'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {

    const [alertConfig, setAlertConfig] = useState({
        variant: "info",
        size: "md",
        position: "top-right",
        duration: 5000,
        text: "This is an alert!",
        showAlert: false,
        showConfirm: false,
    });

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Alert
            </h2>
            <div className="">
                <div className=' md:flex gap-2 items-center'>
                    <div className='h-36 md:grow w-full flex items-center justify-center flex-wrap gap-3'>
                        {alertConfig.showAlert && (
                            <Alert
                                variant={alertConfig.variant}
                                size={alertConfig.size}
                                position={alertConfig.position}
                                duration={alertConfig.duration}
                                onClose={() => setAlertConfig({ ...alertConfig, showAlert: false })}
                            >
                                {alertConfig.text}
                            </Alert>
                        )}
                        <Button onClick={() => setAlertConfig({ ...alertConfig, showAlert: true })} variant='outline'>Show Alert</Button>

                        {alertConfig.showConfirm && (
                            <Alert
                                variant="warning"
                                size={alertConfig.size}
                                position={alertConfig.position}
                                onConfirm={() => {
                                    console.log('Confirmed!');
                                    setAlertConfig({ ...alertConfig, showConfirm: false });
                                }}
                                onClose={() => setAlertConfig({ ...alertConfig, showConfirm: false })}
                            >
                                Are you sure you want to delete this?
                            </Alert>
                        )}
                        <Button onClick={() => setAlertConfig({ ...alertConfig, showConfirm: true })} variant='outline'>Show Confirmation</Button>

                    </div>
                    <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                        <div className=' mb-4'>
                            <Label htmlFor='AlertText'>text</Label>
                            <Input className="mt-2 w-full sm:w-72" id='AlertText' type='text' placeholder='Alert Text'
                                value={alertConfig.text}
                                onChange={(e) => { setAlertConfig({ ...alertConfig, text: e.target.value }) }} />
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='AlertVariant'>variant</Label>
                            <Dropdown className="mt-2 w-full sm:w-72"
                                id="AlertVariant"
                                value={alertConfig.variant}
                                onChange={(value) => { setAlertConfig({ ...alertConfig, variant: value }) }}
                            >
                                <DropdownItem value="error">Error</DropdownItem>
                                <DropdownItem value="success">Success</DropdownItem>
                                <DropdownItem value="warning">Warning</DropdownItem>
                                <DropdownItem value="info">Info</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='AlertSize'>size</Label>
                            <Dropdown className="mt-2 w-full sm:w-72"
                                value={alertConfig.size}
                                id="size"
                                onChange={(value) => { setAlertConfig({ ...alertConfig, size: value }) }}
                            >
                                <DropdownItem value="xs">Extra Small</DropdownItem>
                                <DropdownItem value="sm">Small</DropdownItem>
                                <DropdownItem value="md">Medium</DropdownItem>
                                <DropdownItem value="lg">Large</DropdownItem>
                                <DropdownItem value="xl">Extra Large</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className=' mb-4'>
                            <Label htmlFor='AlertPosition'>position</Label>
                            <Dropdown
                                className="mt-2 w-full sm:w-72"
                                id="AlertPosition"
                                value={alertConfig.position}
                                onChange={(value) => { setAlertConfig({ ...alertConfig, position: value }) }}
                            >
                                <DropdownItem value="top-left">Top Left</DropdownItem>
                                <DropdownItem value="top-center">Top Center</DropdownItem>
                                <DropdownItem value="top-right">Top Right</DropdownItem>
                                <DropdownItem value="bottom-left">Bottom Left</DropdownItem>
                                <DropdownItem value="bottom-center">Bottom Center</DropdownItem>
                                <DropdownItem value="bottom-right">Bottom Right</DropdownItem>
                                <DropdownItem value="center">center</DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <AccordionItem open >
                    <AccordionTrigger>copy code</AccordionTrigger>
                    <AccordionContent>
                        <MdView >
                            {`\n      {alertConfig.showAlert && ( \n          <Alert \n              variant={alertConfig.variant} \n              size={alertConfig.size} \n              position={alertConfig.position} \n              duration={alertConfig.duration} \n              onClose={() => setAlertConfig({ ...alertConfig, showAlert: false })}\n          >\n              {alertConfig.text} \n          </Alert>\n      )}\n\n      <Button onClick={() => setAlertConfig({ ...alertConfig, showAlert: true })}\n          variant='outline'\n      >\n          Show Alert\n      </Button>  `}
                        </MdView>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem >
                    <AccordionTrigger>Component Code</AccordionTrigger>
                    <AccordionContent  >
                        <MdView>
                            {componentscode.Alert}

                        </MdView>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </section>
    )
}

export default Page