"use client"
import componentscode from '@/app/data/componentscode'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/Component/Accordion'
import Badge from '@/Component/Badge'
import Datatable, { TableBody, TableCell, TableHead, TableHeadingCell, TableRow } from '@/Component/Datatable'
import MdView from '@/Component/Mdview'
import ScrollArea from '@/Component/ScrollArea'
import React, { useState } from 'react'



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
                Datatable
            </h2>
            <div className=' md:flex gap-2 items-center'>
                <div className='md:grow w-full flex items-center justify-center'>
                    <ScrollArea className={" mx-auto"}>
                        <Datatable className='w-screen max-w-4xl'>
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
                                {sampleTableData.map((row) => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell className={"hover:bg-slate-800 w-96 text-center"}>
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
                                            <TableCell className={"hover:bg-slate-800 text-center"}>
                                                {row.price}
                                            </TableCell>
                                            <TableCell className={"hover:bg-slate-800 text-center"}>
                                                <Badge size='md' variant='green' variantstyle='outline'>
                                                    {row.rating}
                                                </Badge>

                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Datatable>
                    </ScrollArea>
                </div>
            </div>
            <AccordionItem open >
                <AccordionTrigger>copy code</AccordionTrigger>
                <AccordionContent>
                    <MdView >
                        {`    <ScrollArea  className={"w-full "}> \n        <Datatable className='w-screen max-w-4xl'> \n            <TableHead> \n                <TableRow > \n                    <TableHeadingCell className={"hover:bg-slate-800 w-96"} > \n                        ID \n                    </TableHeadingCell> \n                    <TableHeadingCell className={"hover:bg-slate-800 w-96"} > \n                        Name \n                    </TableHeadingCell> \n                    <TableHeadingCell className={"hover:bg-slate-800 w-96"} > \n                        Category \n                    </TableHeadingCell> \n                    <TableHeadingCell className={"hover:bg-slate-800 w-96"} > \n                        Stock \n                    </TableHeadingCell> \n                    <TableHeadingCell className={"  hover:bg-slate-800 w-52 text-center"} > \n                        Avilability \n                    </TableHeadingCell> \n                    <TableHeadingCell className={"hover:bg-slate-800 w-96"}> \n                        Price \n                    </TableHeadingCell> \n                    <TableHeadingCell className={"hover:bg-slate-800 w-96"}> \n                        Rating \n                    </TableHeadingCell> \n                </TableRow> \n            </TableHead> \n            <TableBody className="w-fit"> \n                {sampleTableData.map((row) => { \n                    return ( \n                        <TableRow key={row.id}> \n                            <TableCell className={"hover:bg-slate-800 w-96 text-center"}> \n                                {row.id} \n                            </TableCell> \n                            <TableCell className={"hover:bg-slate-800 w-96"}> \n                                {row.productName} \n                            </TableCell> \n                            <TableCell className={"hover:bg-slate-800 w-96"}> \n                                {row.category} \n                            </TableCell> \n                            <TableCell className={"hover:bg-slate-800 w-96"}> \n                                {row.stock} \n                            </TableCell> \n                            <TableCell className={"  hover:bg-slate-800 w-52 text-center"}> \n                                {row.available ? "yes" : "oh no"} \n                            </TableCell> \n                            <TableCell className={"hover:bg-slate-800 text-center"}> \n                                {row.price} \n                            </TableCell> \n                            <TableCell className={"hover:bg-slate-800 text-center"}> \n                                <Badge size='sm' variant='warning' variantstyle='outline'> \n                                    {row.rating} \n                                </Badge> \n                            </TableCell> \n                        </TableRow> \n                    ) \n                })} \n            </TableBody> \n        </Datatable> \n    </ScrollArea>`}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem >
                <AccordionTrigger>Component Code</AccordionTrigger>
                <AccordionContent  >
                    <MdView>
                        {componentscode.Datatable}
                    </MdView>
                </AccordionContent>
            </AccordionItem>
        </section>
    )
}

export default Page