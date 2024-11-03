"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Input from '@/Component/Input'
import InputRange from '@/Component/InputRange'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import ProgressBar from '@/Component/ProgressBar'
import React, { useState } from 'react'

function Page() {
    const [progress, setProgress] = useState(30)

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl mt-3 text-center font-semibold">ProgressBar</h2>
            <div className='md:flex gap-2 items-center justify-around w-full'>
                <div className='h-36 w-full max-w-96 mx-auto flex flex-col items-center justify-center'>
                    <div className='text-xl font-bold'>{progress}%</div>
                    <ProgressBar className="w-full" progress={progress} />
                </div>
                <div className="sm:flex w-full max-w-96 mx-auto sm:flex-wrap justify-center items-center gap-2">
                    <div className='w-full'>
                        <Label htmlFor='Progress'>Progress</Label>
                        <InputRange 
                            id="Progress" 
                            className="w-full" 
                            min={0} 
                            max={100} 
                            step={1} 
                            value={progress} 
                            onChange={(e) => setProgress(e.target.value)} 
                        />
                    </div>
                </div>
            </div>
            <AccordionItem open>
                <AccordionTrigger>Copy Code</AccordionTrigger>
                <AccordionContent>
                    <MdView>
                        {`      <ProgressBar progress={30} />`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent>
                    <MdView>
                        {componentscode.ProgressBar}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page
