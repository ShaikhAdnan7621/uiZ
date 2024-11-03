"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Calendar from '@/Component/Calendar'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import MdView from '@/Component/Mdview'
import React, { useEffect, useState } from 'react'

function Page() {
    // date now in iso string
    const [calendarConfig, setCalendarConfig] = useState({
        initialDate: null,  // Set to null initially
        placeholder: "Select a date",
        toDate: null,
        fromDate: null,
        theme: ['pink', 'green', 'gray'],
    });

    // Set the initial date after the component mounts to avoid server-client mismatch
    useEffect(() => {
        setCalendarConfig((prevConfig) => ({
            ...prevConfig,
            initialDate: new Date().toISOString().slice(0, 10),  // Set the initial date to today’s date in ISO format
        }));
    }, []);

    const handleCalendarChange = (date) => {
        console.log('Selected date:', date);
    };

    return (
        <section className="space-y-4 flex flex-col w-full" id='section1'>
            <h2 className="text-4xl my-5 text-center font-semibold">
                Calendar
            </h2>
            <div className='sm:flex gap-2 items-center justify-around'>
                <div className='h-36 w-full flex items-center justify-center'>
                    <div className=''>
                        <Calendar
                            className="mx-auto w-full max-w-80 sm:w-72"
                            initialDate={calendarConfig.initialDate}
                            placeholder={calendarConfig.placeholder}
                            toDate={calendarConfig.toDate}
                            fromDate={calendarConfig.fromDate}
                            theme={calendarConfig.theme}
                            onChange={handleCalendarChange}
                        />

                    </div>
                </div>
                <div className=" w-full mx-auto gap-2 border border-gray-500/50 p-3 rounded-lg flex-wrap items-center justify-center">
                    <div className='mb-4 w-full'>
                        <Label htmlFor='CalendarPlaceholder'>Placeholder</Label>
                        <Input
                            className="mt-2 w-full sm:max-w-96"
                            id='CalendarPlaceholder'
                            type='text'
                            placeholder='Placeholder'
                            value={calendarConfig.placeholder}
                            onChange={(e) => setCalendarConfig({ ...calendarConfig, placeholder: e.target.value })}
                        />
                    </div>
                    <div className=' mb-4  w-full'>
                        <Label htmlFor='CalendarTheme'>Theme</Label>
                        <Input
                            className="mt-2 w-full sm:max-w-96"
                            id='CalendarTheme'
                            type='text'
                            placeholder='Theme (comma-separated colors)'
                            value={calendarConfig.theme.join(',')}
                            onChange={(e) => {
                                const colors = e.target.value.split(',').map(color => color.trim());
                                setCalendarConfig({ ...calendarConfig, theme: colors });
                            }}
                        />
                    </div>
                    <div className=' mb-4 w-full'>
                        <Label htmlFor='CalendarFromDate'>From Date</Label>
                        <Calendar // Input for fromDate
                            className="mt-2 w-full sm:max-w-96 "
                            id='CalendarFromDate'
                            placeholder="Select From Date"
                            initialDate={calendarConfig.fromDate}
                            fromDate={calendarConfig.toDate ? calendarConfig.toDate : null}

                            onChange={(date) => setCalendarConfig({ ...calendarConfig, fromDate: date })}
                        />
                    </div>
                    <div className=' mb-4 w-full'>
                        <Label htmlFor='CalendarInitialDate'>To Date</Label>
                        <Calendar // Input for toDate
                            className="mt-2 w-full sm:max-w-96"
                            id='CalendarInitialDate'
                            placeholder="Select To Date"
                            initialDate={calendarConfig.toDate}
                            toDate={calendarConfig.fromDate ? calendarConfig.fromDate : null}
                            onChange={(date) => setCalendarConfig({ ...calendarConfig, toDate: date })}
                        />
                    </div>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <Calendar \n        className=" w-60 " \n        initialDate={${calendarConfig.initialDate}} \n        placeholder={${calendarConfig.placeholder}} \n        toDate={${calendarConfig.toDate}} \n        fromDate={${calendarConfig.fromDate}} \n        theme={['red', 'green']} \n        onChange={${handleCalendarChange}} \n    />`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Calendar}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page