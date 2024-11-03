"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Input from '@/Component/Input'
import InputRange from '@/Component/InputRange'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import React, { useState } from 'react'

function Page() {

    const [sliderConfig, setSliderConfig] = useState({
        value: 25,
        min: 0,
        max: 100,
        step: 1,
        className: "",

    });

    const handleSliderChange = (event) => {
        setSliderConfig({ ...sliderConfig, value: parseInt(event.target.value, 10) })
    };

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                RangeInput
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='h-36 md:grow w-full flex items-center justify-center'>
                    <InputRange
                        className="w-96"
                        value={sliderConfig.value}
                        min={sliderConfig.min}
                        max={sliderConfig.max}
                        step={sliderConfig.step}
                        onChange={handleSliderChange}
                    />
                </div>
                <div className="sm:flex w-full sm:flex-wrap justify-center items-center gap-2">
                    <div className=' mb-4'>
                        <Label htmlFor='inputrangemin' >min</Label>
                        <Input id='inputrangemin' type="number"
                            className="mt-2 w-full sm:w-72"
                            value={sliderConfig.min}
                            onChange={(event) => {
                                setSliderConfig({ ...sliderConfig, min: parseInt(event.target.value, 10) || 0 })
                            }}
                        />

                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='inputrangemax' >max</Label>
                        <Input id='inputrangemax' type="number"
                            className="mt-2 w-full sm:w-72"
                            value={sliderConfig.max}
                            onChange={(event) => {
                                setSliderConfig({ ...sliderConfig, max: parseInt(event.target.value, 10) || 100 })
                            }}
                        />

                    </div>
                    <div className=' mb-4'>
                        <Label htmlFor='inputrangestep' >step</Label>
                        <Input id='inputrangestep' type="number"
                            className="mt-2 w-full sm:w-72"
                            value={sliderConfig.step}
                            onChange={(event) => {
                                setSliderConfig({ ...sliderConfig, step: parseInt(event.target.value, 10) || 1 })
                            }}
                        />

                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <InputRange\n        min={${sliderConfig.min}}\n        max={${sliderConfig.max}}\n        step={${sliderConfig.step}}\n        value={${sliderConfig.value}}\n        onChange={handleSliderChange} // Trigger handleSliderChange on drag\n      />`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.InputRange}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page
