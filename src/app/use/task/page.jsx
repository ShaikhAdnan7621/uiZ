'use client'
import { useState, useEffect } from 'react';
import Alert from '@/Component/Alert';
import Button from '@/Component/Button';
import Tooltip from '@/Component/Tooltip';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Component/Accordion'; // Import all the necessary components
import Badge from '@/Component/Badge';
import { Breadcrumb, BreadcrumbDropdown, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Component/Breadcrumb';
import Calendar from '@/Component/Calendar';
import Carousel, { CarouselItem } from '@/Component/Carousel';
import Checkbox from '@/Component/Checkbox';
import Dropdown, { DropdownItem } from '@/Component/Dropdown';
import { Command, CommandGroup, CommandItem, CommandItemIcon, CommandItemSuggestionText, CommandItemText } from '@/Component/Command';
import DilogContener, { DilogContent, DilogMenuContent, DilogMenuGroup, DilogMenuList } from '@/Component/Dilog';
import Input from '@/Component/Input';
import Label from '@/Component/Label';
import Datatable, { TableBody, TableCell, TableRow, TableHead, TableHeadingCell } from '@/Component/Datatable';
import ScrollArea from '@/Component/ScrollArea';
import { ResizablePanel, ResizablePanelGroup } from '@/Component/Resizable';
import ProgressBar from '@/Component/ProgressBar';
import MdView from '@/Component/Mdview';
 import Navbar, { NavFoot, NavGroup, NavHead, NavLink } from '@/Component/Navbar';
import InputRange from '@/Component/InputRange';
import componentscode from '@/app/data/componentscode';

const sampleTableData = [
    { id: 1, productName: "Laptop", category: "Electronics", price: 999.99, stock: 15, available: true, rating: 4.5 },
    { id: 2, productName: "Coffee Beans", category: "Grocery", price: 12.99, stock: 50, available: true, rating: 4.8 },
    { id: 3, productName: "T-Shirt", category: "Clothing", price: 19.99, stock: 8, available: false, rating: 3.9 },
    { id: 4, productName: "Keyboard", category: "Electronics", price: 79.99, stock: 25, available: true, rating: 4.2 },
    { id: 5, productName: "Mouse", category: "Electronics", price: 29.99, stock: 30, available: true, rating: 4.0 },
    { id: 6, productName: "Monitor", category: "Electronics", price: 249.99, stock: 10, available: true, rating: 4.6 },
    { id: 7, productName: "Headphones", category: "Electronics", price: 149.99, stock: 18, available: false, rating: 4.7 },
    // { id: 8, productName: "Milk", category: "Grocery", price: 3.99, stock: 60, available: true, rating: 4.1 },
    // { id: 9, productName: "Bread", category: "Grocery", price: 2.49, stock: 40, available: true, rating: 4.3 },
    // { id: 10, productName: "Eggs", category: "Grocery", price: 5.99, stock: 35, available: true, rating: 4.9 },
    // { id: 11, productName: "Jeans", category: "Clothing", price: 49.99, stock: 12, available: true, rating: 4.0 },
    // { id: 12, productName: "Dress", category: "Clothing", price: 39.99, stock: 5, available: false, rating: 3.7 },
    // { id: 13, productName: "Sneakers", category: "Clothing", price: 89.99, stock: 20, available: true, rating: 4.6 },
    // { id: 14, productName: "Backpack", category: "Accessories", price: 59.99, stock: 16, available: true, rating: 4.4 },
    // { id: 15, productName: "Wallet", category: "Accessories", price: 24.99, stock: 28, available: true, rating: 4.2 },
    // { id: 16, productName: "Sunglasses", category: "Accessories", price: 79.99, stock: 8, available: false, rating: 3.8 },
    // { id: 17, productName: "Book", category: "Books", price: 14.99, stock: 32, available: true, rating: 4.5 },
    // { id: 18, productName: "Notebook", category: "Stationery", price: 4.99, stock: 45, available: true, rating: 4.3 },
    // { id: 19, productName: "Pen", category: "Stationery", price: 1.99, stock: 70, available: true, rating: 4.1 },
    // { id: 20, productName: "Pencil", category: "Stationery", price: 0.99, stock: 80, available: true, rating: 4.0 },
    // { id: 21, productName: "Camera", category: "Electronics", price: 599.99, stock: 6, available: true, rating: 4.8 },
    // { id: 22, productName: "Lens", category: "Electronics", price: 299.99, stock: 4, available: false, rating: 4.9 },
    // { id: 23, productName: "Tripod", category: "Electronics", price: 49.99, stock: 11, available: true, rating: 4.3 },
    // { id: 24, productName: "Phone Case", category: "Accessories", price: 19.99, stock: 23, available: true, rating: 4.2 },
    // { id: 25, productName: "Screen Protector", category: "Accessories", price: 9.99, stock: 38, available: true, rating: 4.7 }
];



export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const [sliderValue, setSliderValue] = useState(25);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value); // Directly update without delay
    };

    const [buttonConfig, setbuttonConfig] = useState({
        variant: "outline",
        size: "md",
        className: "",
        disabled: false,
    })

    const [TooltipConfig, setTooltipConfig] = useState({
        text: "This tooltip appears on the left.",
        position: "left",
        size: "xs",
        className: "",
    })

    const [alertConfig, setAlertConfig] = useState({
        variant: "info",
        size: "md",
        position: "top-right",
        duration: 5000,
        text: "This is an alert!",
        showAlert: false,
        showConfirm: false,
    });

    const [CheckBoxConfig, setCheckBoxConfig] = useState({
        checked: false,
        className: "",
        variant: 'default',
        size: 'md',
    })


    const [badgeConfig, setBadgeConfig] = useState({
        variant: 'default',
        variantstyle: 'default',
        size: 'md',
        className: '',
        content: 'new',
    })

    const [dropdownConfig, setDropdownConfig] = useState({
        searchable: false,
        placeholder: 'Select an option',
        multiple: false,
        className: ' w-52',
        value: '', // For single select
        values: [], // For multiple select
    });

    const [ScrollAreaConfig, setScrollAreaConfig] = useState({
        className: "",
        horizontal: false,
        vertical: false
    })

    const handleDropdownChange = (newValue) => {
        if (dropdownConfig.multiple) {
            setDropdownConfig({ ...dropdownConfig, values: newValue });
        } else {
            setDropdownConfig({ ...dropdownConfig, value: newValue });
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const [inputConfig, setInputConfig] = useState({
        className: ' w-72',
        placeholder: 'Enter text here',
        type: 'text',
        value: '',
    });

    const [calendarConfig, setCalendarConfig] = useState({
        initialDate: new Date(),
        placeholder: "Select a date",
        toDate: null,
        fromDate: null,
        theme: ['pink', 'green', 'gray'],
    });

    const [NavbarConfig, setNavbarConfig] = useState({
        vertical: false
    })


    const handleCalendarChange = (date) => {
        console.log('Selected date:', date);
    };


    const handleInputChange = (e) => {
        setInputConfig({ ...inputConfig, value: e.target.value });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log('Selected date:', date);
    };

    return (
        <div className="items-center justify-items-center pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className='max-w-4xl mx-auto mb-20'>
                <h1 className="text-3xl font-bold text-center mb-5">My UI Library</h1>
                <Breadcrumb className="my-4 text-xl">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">UI Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/use">use</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbDropdown current="Home Page">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/use/chatbot">Component AI</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/use/contactus">contactus</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/use/signup">signup</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/use/task">task</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/use/todo">todo</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbDropdown>
                    <BreadcrumbSeparator />
                </Breadcrumb>
            </header>
            <main className="w-screen flex flex-col gap-8 space-y-4 max-w-4xl mx-auto">

                <section className="space-y-4 m-4" id='section1'>
                    <h2 className="text-xl font-semibold">Navbar</h2>
                    <div className="flex flex-wrap rounded-md border border-gray-500/50 max-w-2xl p-5 mx-auto">
                        <div className='h-96  w-full flex items-center justify-center '>
                            <Navbar vertical={NavbarConfig.vertical} className={""}>
                                <NavHead>
                                    <h1 className='font-bold text-1xl'>
                                        Ui Library
                                    </h1>
                                </NavHead>
                                <NavGroup vertical={NavbarConfig.vertical} className={''}>
                                    <NavLink href="/components/button">
                                        components
                                    </NavLink>
                                    <NavLink href="/about">
                                        hello
                                    </NavLink>
                                    <NavLink href="/about">
                                        hello
                                    </NavLink>
                                    <NavLink href="/about">
                                        hello
                                    </NavLink>
                                </NavGroup>
                                <NavFoot vertical={NavbarConfig.vertical}  >
                                    footter
                                </NavFoot>
                            </Navbar>

                        </div>
                        <hr className='border-t border-gray-500/50 w-full' />

                        {/* custamize */}
                        <AccordionItem value="item-1" className='w-full'>
                            <AccordionTrigger>customize</AccordionTrigger>
                            <AccordionContent>
                                <div className=' mx-auto flex flex-wrap gap-2 justify-center'>
                                    <div className='w-72 mb-2 flex items-center justify-center'>
                                        <div className='flex justify-start mt-2 '>
                                            <Checkbox
                                                checked={NavbarConfig.vertical}
                                                onChange={(checked) => { setNavbarConfig({ ...NavbarConfig, vertical: checked }) }}
                                                id={"NavbarVertical"} />
                                            <Label htmlFor={"NavbarVertical"}>Default</Label>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* code part */}
                        <AccordionItem value="item-1" className='w-full'>
                            <AccordionTrigger>copy code</AccordionTrigger>
                            <AccordionContent>
                                <MdView >
                                    {/* {`    <button variant="${buttonConfig.variant}" size="${buttonConfig.size}" className="${buttonConfig.className}">\n        Default\n     <button>\n`} */}
                                </MdView>
                                <AccordionItem className='w-full'>
                                    <AccordionTrigger>Component Code</AccordionTrigger>
                                    <AccordionContent  >
                                        <MdView className='min-w-fit'>
                                            {/* {componentscode.button} */}
                                        </MdView>
                                    </AccordionContent>
                                </AccordionItem>
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                </section>

                <section className="space-y-4 " id='section16'>
                    <h2 className="text-xl font-semibold">Datatable</h2>
                    <div className="flex flex-wrap rounded-md border border-gray-500/50 max-w-2xl p-5 mx-auto">
                        <div className=' w-full flex items-center justify-center '>
                            <ScrollArea className={"w-[50vw] h-[50vh] mx-auto"}  >
                                <div
                                    className='w-screen h-screen'
                                    style={{
                                        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                                        backgroundSize: '100px 100px', // Adjust grid size here
                                        backgroundColor: '#000000', // Optional: set a background color
                                    }}
                                >
                                </div>
                            </ScrollArea>
                        </div>
                        <hr className='border-t border-gray-500/50 w-full mt-3' />

                        {/* code part */}
                        <AccordionItem value="item-1" className='w-full'>
                            <AccordionTrigger>copy code</AccordionTrigger>
                            <AccordionContent>
                                <MdView >
                                    {`    <ScrollArea className={"w-[50vw] h-[50vh] mx-auto"} vertical={${ScrollAreaConfig.vertical}} horizontal={${ScrollAreaConfig.horizontal}}> \n        \n    </ScrollArea>`}

                                </MdView>
                                <AccordionItem className='w-full'>
                                    <AccordionTrigger>Component Code</AccordionTrigger>
                                    <AccordionContent  >
                                        <MdView className='min-w-fit'>
                                            {componentscode.scrollArea}
                                        </MdView>
                                    </AccordionContent>
                                </AccordionItem>
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                </section >

                {/* Resizable */}
                < section className="space-y-4 " id='section17' >
                    <h2 className="text-xl font-semibold">Resizable</h2>
                    <div className='flex flex-col justify-start w-1/2 mx-auto min-w-64 min-h-80 '>

                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel defaultSize={300}>
                                <div className="p-4 h-full">
                                    <h1 className="text-2xl">Panel 1</h1>
                                    <p>This is the first panel of the outer group.</p>
                                </div>
                            </ResizablePanel>

                            <ResizablePanel defaultSize={500}>

                                <ResizablePanelGroup direction="vertical">
                                    <ResizablePanel defaultSize={100} direction='vertical'>
                                        <div className="p-4 h-full">
                                            <h1 className="text-xl">Adnan Is Grate</h1>
                                            <p>This is the first panel in the nested group.</p>
                                        </div>
                                    </ResizablePanel>
                                    <ResizablePanel defaultSize={100} direction='vertical'>
                                        <div className="p-4   h-full">
                                            <h1 className="text-xl">Nested Panel 2</h1>
                                            <p>This is the second panel in the nested group.</p>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </section >
            </main >
            {
                showAlert && (
                    <Alert
                        variant="warning"
                        size="md"
                        onConfirm={() => {
                            console.log('Confirmed!');
                            setShowAlert(false);
                        }}
                        onClose={() => setShowAlert(false)}
                    >
                        Are you sure you want to delete this?
                    </Alert>
                )
            }
        </div >
    );
}






