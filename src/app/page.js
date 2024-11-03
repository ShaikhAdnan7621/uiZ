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
import Dropdown, { DropdownItem, DropdownSearch } from '@/Component/Dropdown';
import { Command, CommandGroup, CommandItem, CommandItemIcon, CommandItemSuggestionText, CommandItemText } from '@/Component/Command';
import DilogContener, { DilogContent, DilogMenuContent, DilogMenuGroup, DilogMenuList } from '@/Component/Dilog';
import Input from '@/Component/Input';
import Label from '@/Component/Label';
import Datatable, { TableBody, TableCell, TableRow, TableHead, TableHeadingCell } from '@/Component/Datatable';
import ScrollArea from '@/Component/ScrollArea';
import { ResizablePanel, ResizablePanelGroup } from '@/Component/Resizable';
import ProgressBar from '@/Component/Progress';



const sampleTableData = [
    { id: 1, productName: "Laptop", category: "Electronics", price: 999.99, stock: 15, available: true, rating: 4.5 },
    { id: 2, productName: "Coffee Beans", category: "Grocery", price: 12.99, stock: 50, available: true, rating: 4.8 },
    { id: 3, productName: "T-Shirt", category: "Clothing", price: 19.99, stock: 8, available: false, rating: 3.9 },
    { id: 4, productName: "Keyboard", category: "Electronics", price: 79.99, stock: 25, available: true, rating: 4.2 },
    { id: 5, productName: "Mouse", category: "Electronics", price: 29.99, stock: 30, available: true, rating: 4.0 },
    { id: 6, productName: "Monitor", category: "Electronics", price: 249.99, stock: 10, available: true, rating: 4.6 },
    { id: 7, productName: "Headphones", category: "Electronics", price: 149.99, stock: 18, available: false, rating: 4.7 },
    { id: 8, productName: "Milk", category: "Grocery", price: 3.99, stock: 60, available: true, rating: 4.1 },
    { id: 9, productName: "Bread", category: "Grocery", price: 2.49, stock: 40, available: true, rating: 4.3 },
    { id: 10, productName: "Eggs", category: "Grocery", price: 5.99, stock: 35, available: true, rating: 4.9 },
    { id: 11, productName: "Jeans", category: "Clothing", price: 49.99, stock: 12, available: true, rating: 4.0 },
    { id: 12, productName: "Dress", category: "Clothing", price: 39.99, stock: 5, available: false, rating: 3.7 },
    { id: 13, productName: "Sneakers", category: "Clothing", price: 89.99, stock: 20, available: true, rating: 4.6 },
    { id: 14, productName: "Backpack", category: "Accessories", price: 59.99, stock: 16, available: true, rating: 4.4 },
    { id: 15, productName: "Wallet", category: "Accessories", price: 24.99, stock: 28, available: true, rating: 4.2 },
    { id: 16, productName: "Sunglasses", category: "Accessories", price: 79.99, stock: 8, available: false, rating: 3.8 },
    { id: 17, productName: "Book", category: "Books", price: 14.99, stock: 32, available: true, rating: 4.5 },
    { id: 18, productName: "Notebook", category: "Stationery", price: 4.99, stock: 45, available: true, rating: 4.3 },
    { id: 19, productName: "Pen", category: "Stationery", price: 1.99, stock: 70, available: true, rating: 4.1 },
    { id: 20, productName: "Pencil", category: "Stationery", price: 0.99, stock: 80, available: true, rating: 4.0 },
    { id: 21, productName: "Camera", category: "Electronics", price: 599.99, stock: 6, available: true, rating: 4.8 },
    { id: 22, productName: "Lens", category: "Electronics", price: 299.99, stock: 4, available: false, rating: 4.9 },
    { id: 23, productName: "Tripod", category: "Electronics", price: 49.99, stock: 11, available: true, rating: 4.3 },
    { id: 24, productName: "Phone Case", category: "Accessories", price: 19.99, stock: 23, available: true, rating: 4.2 },
    { id: 25, productName: "Screen Protector", category: "Accessories", price: 9.99, stock: 38, available: true, rating: 4.7 }
];



export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [value, setvalue] = useState("asdf")
    const [DropdownValue, setDropdownValue] = useState("")
    const [showSimpleAlert, setShowSimpleAlert] = useState(false);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log('Selected date:', date);
    };

    return (
        <div className=" overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl font-bold text-center mb-20">My UI Library</h1>
            <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start space-y-4 ">
                {/* Buttons Section */}
                <section className="space-y-4" id='section1'>
                    <h2 className="text-xl font-semibold">Buttons</h2>
                    <div className="flex flex-wrap gap-4">
                        {/* Basic Usage */}
                        <Button>Default</Button>

                        {/* Variants */}
                        <Button variant="outline">Outline</Button>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="info">Info</Button>
                    </div>
                    <div className="flex items-center flex-wrap   gap-4">
                        {/* Sizes */}
                        <Button size="sm">Small</Button>
                        <Button>Medium</Button>
                        <Button size="lg">Large</Button>
                        <Button size="xl" >Extra Large</Button>
                        <Button size="icon" variant="outline" aria-label="Add">
                            <span aria-hidden="true">➕</span>
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {/* Additional Props */}
                        <Tooltip
                            text="This tooltip appears on the left."
                            position="top"
                            size="sm"
                            className="w-60"
                        >
                            <Button className="bg-purple-500 hover:bg-purple-700">
                                Custom Style
                            </Button>
                        </Tooltip>
                        <Button variant="primary" disabled>
                            Disabled
                        </Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </section>

                {/* Tooltips Section */}
                <section className="space-y-4" id='section2'>
                    <h2 className="text-xl font-semibold">Tooltips</h2>
                    <div className="flex flex-wrap gap-4">
                        <Tooltip text="This tooltip appears on top." position="top" size='xs'>
                            <Button>Hover Me</Button>
                        </Tooltip>

                        <Tooltip text="This tooltip appears on the right." position="right" size='xs'>
                            <Button>Hover Me</Button>
                        </Tooltip>

                        <Tooltip text="This tooltip appears on the bottom." position="bottom" size='md' className="w-52">
                            <Button>Hover Me</Button>
                        </Tooltip>

                        <Tooltip text="This tooltip appears on the left." position="left" size='sm'>
                            <Button>Hover Me</Button>
                        </Tooltip>
                    </div>
                </section>

                {/* Alerts Section */}
                <section className="space-y-4" id='section3'>
                    <h2 className="text-xl font-semibold">Alerts</h2>
                    <div className="flex flex-wrap gap-4">
                        {showSimpleAlert &&
                            <>
                                <Alert variant="error" size="md" position='bottom' duration={5000}>
                                    This is a small error alert that will disappear after 5 seconds.
                                </Alert>
                                <Alert variant="success" onClose={() => setShowSimpleAlert(false)}>
                                    Action successful!
                                </Alert>
                            </>
                        }
                        <Button onClick={() => setShowSimpleAlert(true)}>Simple Alirt</Button>
                        <Button onClick={() => setShowAlert(true)}>Show Confirmation</Button>
                    </div>
                </section>

                <section className="space-y-4  w-full" id='section4'>
                    <h2 className="text-xl font-semibold">Accordion</h2>
                    <div className='h-52 flex items-center justify-center w-full'>
                        <Accordion >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    <Tooltip text="This tooltip appears on the right." position="right" size='xs' className='w-52'>
                                        <Button>Hover Me</Button>
                                    </Tooltip>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Badge Examples */}
                <section className="space-y-4" id='section5'>
                    <h2 className="text-xl font-semibold">Badges</h2>
                    <div className="flex flex-wrap gap-2 items-center ">
                        <Badge>Default</Badge>
                        <Badge variant="red" size="sm" >Red</Badge>
                        <Badge variant="green" style="outline">
                            Outline Green
                        </Badge>
                        <Badge variant="blue" style="light" size="lg">
                            Light Blue (Large)
                        </Badge>
                        <Badge variant="yellow" size="lg">
                            New
                        </Badge>
                        <Badge variant="purple" style="outline" >
                            <span aria-hidden="true">5</span>
                            <span className="sr-only">5 notifications</span>
                        </Badge>
                    </div>
                </section>

                {/* Breadcrumb */}
                <section className="space-y-4" id='section6'>
                    <h2 className="text-xl font-semibold">Breadcrumb</h2>
                    <Breadcrumb className="my-4">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbDropdown>
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
                </section>

                {/* Calendar */}
                <section className="space-y-4 w-full" id='section7'>
                    <h2 className="text-xl font-semibold">Calendar</h2>

                    <div className=' flex gap-5 justify-center items-center w-full'>
                        {/* Basic usage with initial date and placeholder */}
                        <Calendar
                            initialDate={new Date()}
                            placeholder="Select your birthday"
                            onChange={handleDateChange}
                        />

                        {/* Example with date range (toDate must be before fromDate) */}
                        <Calendar
                            toDate={new Date('2024-01-01')}
                            fromDate={new Date('2024-01-15')}
                            initialDate={new Date('2024-01-15')}
                            onChange={handleDateChange}
                        />

                        {/* Example with custom theme */}
                        <Calendar
                            theme={['pink', 'green', 'gray']}
                            fromDate={new Date('2024-01-15')}
                            initialDate={new Date('2024-01-15')}
                            onChange={handleDateChange}
                        />
                        <Calendar
                            theme={['pink', 'green', 'gray']}
                            toDate={new Date('2024-01-15')}
                            initialDate={new Date('2024-01-15')}
                            onChange={handleDateChange}
                        />
                    </div>
                </section>

                {/* Carousel */}
                <section className="space-y-4 w-full" id='section8'>
                    <h2 className="text-xl font-semibold">Carousel</h2>
                    <div className="relative w-96 h-[300px] mx-auto"> {/* Adjust width and height as needed */}
                        <Carousel autoplay interval={2500} orientation='vertical'>
                            <CarouselItem className=" border ">
                                <img
                                    src="https://placehold.co/600x400/black/white?text=1"
                                    alt="Slide 1"
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://placehold.co/600x400/black/white?text=2"
                                    alt="Slide 2"
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <div className="w-full h-full bg-black flex flex-col items-center justify-center">
                                    <h3 className="text-3xl text-white font-bold">Custom Content</h3>
                                    roles watch
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </section>

                {/* Checkbox */}
                <section id='section9' className="space-y-4 w-full" >
                    <h2 className="text-xl font-semibold">Check box </h2>
                    <div className=' flex gap-5 justify-center items-center w-full'>
                        <div className='flex' >
                            <Checkbox id={"lable1"} />
                            <Label htmlFor={"lable1"}>Default</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="outline" id="Outline" />
                            <Label htmlFor={"Outline"}>Outline</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="secondary" id="Secondary1" />
                            <Label htmlFor={"Secondary1"}>Secondary1</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="danger" id="Danger" />
                            <Label htmlFor={"Danger"}>Danger</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="warning" id="Warning" />
                            <Label htmlFor={"Warning"}>Warning</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="info" id="Info" />
                            <Label htmlFor={"Info"}>Info</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox size="sm" label="Small (Default)" />
                            <Label htmlFor={"Secondary"}>Secondary</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="outline" size="sm" id="Small (Outline)" />
                            <Label htmlFor={"Small"}>Small</Label>
                        </div>
                        <div className='flex' >
                            <Checkbox variant="danger" size="lg" id="Large (Danger)" />
                            <Label htmlFor={"Large"}>Large (Danger)</Label>
                        </div>
                    </div>
                </section>

                {/* Dropdown */}
                <section id='section10' className=' space-y-6 w-full' >
                    <h2 className="text-xl font-semibold">Dropdown</h2>
                    <div className=' flex gap-5 justify-center items-center w-full' >
                        <Dropdown searchablebar className="w-56" value={DropdownValue} onChange={(newValue) => { setDropdownValue(newValue) }}  >
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Choice 2</DropdownItem>
                            <DropdownItem>Selection 3</DropdownItem>
                            <DropdownItem>Item 4</DropdownItem>
                            <DropdownItem>Value 5</DropdownItem>
                            <DropdownItem>Pick 6</DropdownItem>
                            <DropdownItem>Element 7</DropdownItem>
                            <DropdownItem>Entry 8</DropdownItem>
                            <DropdownItem>Alternative 9</DropdownItem>
                            <DropdownItem>Possibility 10</DropdownItem>
                            <DropdownItem>Choice 11</DropdownItem>
                            <DropdownItem>Option 12</DropdownItem>
                            <DropdownItem>Selection 13</DropdownItem>
                            <DropdownItem>Item 14</DropdownItem>
                            <DropdownItem>Value 15</DropdownItem>
                        </Dropdown>
                        <Dropdown className="w-96" value={DropdownValue} onChange={(newValue) => { setDropdownValue(newValue) }} placeholder={"Pic Any One"} multiple  >
                            <DropdownItem>hello</DropdownItem>
                            <DropdownItem>hello</DropdownItem>
                            <DropdownItem>Entry 8</DropdownItem>
                            <DropdownItem>Alternative 9</DropdownItem>
                            <DropdownItem>Possibility 10</DropdownItem>
                            <DropdownItem>Possibility 10</DropdownItem>
                        </Dropdown>
                    </div>
                </section>

                {/* Cammondbox */}
                <section className="space-y-4 w-full" id='section11'>
                    <h2 className="text-xl font-semibold">Command Box</h2>
                    <div className=' flex gap-5 justify-center items-center w-full text-white' >
                        <Command onSearch={handleSearch} searchablebaricon="🔍">
                            <CommandGroup title="Actions">
                                <CommandItem onClick={() => console.log('Edit clicked!')} isActive={searchTerm === 'Edit'}>
                                    <CommandItemIcon>✏️</CommandItemIcon>
                                    <CommandItemText>Edit</CommandItemText>
                                    <CommandItemSuggestionText>Ctrl+E</CommandItemSuggestionText>
                                </CommandItem>

                                <CommandItem onClick={() => console.log('Delete clicked!')}>
                                    <CommandItemIcon>🗑️</CommandItemIcon>
                                    <CommandItemText>Delete</CommandItemText>
                                </CommandItem>

                                {/* More Command Items can be added here */}
                            </CommandGroup>

                            <CommandGroup title="Settings">
                                <CommandItem>
                                    <CommandItemIcon>⚙️</CommandItemIcon>
                                    <CommandItemText>General</CommandItemText>
                                </CommandItem>
                                <CommandItem>
                                    <CommandItemIcon>🎨</CommandItemIcon>
                                    <CommandItemText>Appearance</CommandItemText>
                                </CommandItem>
                            </CommandGroup>
                        </Command>
                    </div>
                </section>

                {/* dilog */}
                <section className="space-y-4 w-full" id='section12'>
                    <h2 className="text-xl font-semibold">Dilog box</h2>
                    <div className=' flex gap-5 justify-center items-center w-full text-white' >
                        <DilogContener rightclick={() => console.log('Menu 1 clicked!')} className={"border-gray-500 border w-1/2 p-2"}>
                            <span>Right-click me for Menu 1</span>
                            <DilogMenuContent className=" border-gray-500 border  ">
                                <DilogMenuList > <div>Option 1</div></DilogMenuList>
                                <DilogMenuList > <div>Option 2</div></DilogMenuList>
                            </DilogMenuContent>
                        </DilogContener>

                        <DilogContener rightclick={() => console.log(' Menu 2 clicked!')} className={"border-gray-500 border w-1/2 p-2"}>
                            <DilogContent>
                                <span>Right-click me for Menu 2</span>
                                hehehehe
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
                </section>

                {/* Input */}
                <section className="space-y-4 w-full" id='section13'>
                    <h2 className="text-xl font-semibold">Input</h2>
                    <div className='flex gap-5 justify-center items-center w-full  ' >
                        <Input label="Jelllo" value={value} onChange={(e) => setvalue(e.taget.value)} />
                    </div>
                </section>

                {/* Input */}
                <section className="space-y-4 w-full" id='section14'>
                    <h2 className="text-xl font-semibold">Input</h2>
                    <div className='flex flex-col   justify-start w-full  ' >
                        <Label htmlFor={"hello"}>hello</Label>
                        <Input disabled label="Jelllo" value={value} onChange={(e) => setvalue(e.taget.value)} className='w-[340px]' />
                    </div>
                </section>

                {/* DataTabel */}
                <section className="space-y-4 w-full" id='section15'>
                    <h2 className="text-xl font-semibold">Datatable</h2>
                    <div className='flex flex-col justify-start w-full'>
                        <ScrollArea className={"w-1/2 mx-auto h-96 overflow-scroll"} orientation='horizontal'>
                            <Datatable className="w-fit">
                                <TableHead>
                                    <TableRow >
                                        <TableHeadingCell className={"hover:bg-slate-800 w-96"} >
                                            ID
                                        </TableHeadingCell>
                                        <TableHeadingCell className={"hover:bg-slate-800 w-96"} >
                                            Name
                                        </TableHeadingCell>
                                        <TableHeadingCell className={"hover:bg-slate-800 w-96"} >
                                            Category
                                        </TableHeadingCell>
                                        <TableHeadingCell className={"hover:bg-slate-800 w-96"} >
                                            Stock
                                        </TableHeadingCell>
                                        <TableHeadingCell className={"  hover:bg-slate-800 w-52 text-center"} >
                                            Avilability
                                        </TableHeadingCell>
                                        <TableHeadingCell className={"hover:bg-slate-800 w-96"}>
                                            Price
                                        </TableHeadingCell>
                                        <TableHeadingCell className={"hover:bg-slate-800 w-96"}>
                                            Rating
                                        </TableHeadingCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="w-fit">
                                    {
                                        sampleTableData.map((row) => {
                                            return (
                                                <TableRow >
                                                    <TableCell className={"hover:bg-slate-800 w-96"}>
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell className={"hover:bg-slate-800 w-96"}>
                                                        {row.productName}
                                                    </TableCell>
                                                    <TableCell className={"hover:bg-slate-800 w-96"}>
                                                        {row.category}
                                                    </TableCell>
                                                    <TableCell className={"hover:bg-slate-800 w-96"}>
                                                        {row.stock}
                                                    </TableCell>
                                                    <TableCell className={"  hover:bg-slate-800 w-52 text-center"}>
                                                        {row.available ? "yes" : "oh no"}
                                                    </TableCell>
                                                    <TableCell className={"hover:bg-slate-800"}>
                                                        {row.price}
                                                    </TableCell>
                                                    <TableCell className={"hover:bg-slate-800"}>
                                                        {row.rating}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Datatable>
                        </ScrollArea>
                    </div>
                </section>

                {/* scroll Area */}
                <section className="space-y-4 w-full" id='section16'>
                    <h2 className="text-xl font-semibold">Datatable</h2>
                    <div className='flex flex-col justify-start w-full'>
                        <ScrollArea className={"w-[50vw] h-[50vh] mx-auto overflow-scroll"} orientation=''>
                            <div
                                className='w-screen h-screen'
                                style={{
                                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px', // Adjust grid size here
                                    backgroundColor: '#000000', // Optional: set a background color
                                }}
                            >
                                {/* You can place other components or content here */}
                            </div>

                        </ScrollArea>
                    </div>
                </section >

                <section className="space-y-4 w-full" id='section17'>
                    <h2 className="text-xl font-semibold">Datatable</h2>
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
                                            <h1 className="text-xl">Nested Panel 1</h1>
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
                </section>

                <section className="space-y-4 w-full" id='section17'>
                    <h2 className="text-xl font-semibold">Datatable</h2>
                    <div className='flex flex-col justify-start w-1/2 mx-auto min-w-64 min-h-80 '>

                        <h1 className="text-2xl font-bold mb-4">Progress Bar Example</h1>
                        <ProgressBar progress={30} />
                    </div>
                </section>
            </main >
            {showAlert && (
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
            )}
        </div >
    );
}
