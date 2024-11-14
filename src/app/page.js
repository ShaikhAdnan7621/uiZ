

"use client"

import Button from '@/Component/Button'
import Dropdown, { DropdownItem } from '@/Component/Dropdown'
import Input from '@/Component/Input'
import Label from '@/Component/Label'
import ScrollArea from '@/Component/ScrollArea'
import Tabs, { TabContent, TabList, TabTrigger } from '@/Component/Tabs'
import React from 'react'
import Link from 'next/link'
import Checkbox from '@/Component/Checkbox'
import Image from 'next/image'
import { FaApple, FaCreditCard, FaPaypal, FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';


function Page() {
	return (
		<div className="flex flex-col h-[calc(100vh-84px)] max-h-[calc(100vh-84px)] bg-stone-950 rounded-md overflow-hidden text-white">
			<ScrollArea >
				{/* Hero Section */}
				<section className="bg-gray-900 text-white py-20">
					<div className="container mx-auto text-center">
						<h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
							<span className=' text-5xl'>uiZ</span> - Build Beautiful UIs
						</h1>
						<p className="text-lg mb-6 text-gray-300">
							A curated collection of reusable React components to supercharge your next project.
						</p>
						<Link href="/components">
							<Button variant="primary" size="lg">
								Explore Components
							</Button>
						</Link>
					</div>
				</section>

				<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12"> {/* Added margin-bottom */}
					<Tabs defaultActiveKey={"Cards"} className='w-full '>
						<TabList className=' max-w-6xl mx-auto'>
							<TabTrigger tabKey={"Cards"} >
								Cards
							</TabTrigger>
							<TabTrigger tabKey={"Music App"} >
								Music App
							</TabTrigger>
							<TabTrigger tabKey={"c"} >
								hello
							</TabTrigger>
						</TabList>
						<TabContent tabKey={"Cards"} className=' w-full mt-10'>
							<div className='grid grid-cols-1 max-w-6xl sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mx-auto'>
								<div className='max-w-96 mx-auto w-full'>
									<div className=' border border-gray-500 p-4 rounded-lg pb-8 '>
										<h1 className='text-center my-6 text-3xl font-bold'> Sign Up </h1>
										<Label htmlFor="name" className='mt-6'>Name</Label>
										<Input id='name' type="text" placeholder='Enter Your Name' className='w-full ' />
										<Label htmlFor="email" className='mt-4'>Email</Label>
										<Input id='email' type="email" placeholder='Enter Your Email' className='w-full ' />
										<Label htmlFor="password" className='mt-4'>Password</Label>
										<Input id='password' type="password" placeholder='Enter Your Password' className='w-full ' />
										<Button type='submit' className='mt-8 mb-4 w-full'  >
											Sign Up
										</Button>
									</div>

									<div className='border border-gray-500 p-4 rounded-lg pb-8 max-w-96 mx-auto mt-4'>
										<div>
											<h1 className=' text-md font-bold'>Payment Method</h1>
											<h3 className=' text-sm'>Add a new payment method to your account.</h3>
											<div className='grid grid-cols-3 gap-3 items-center justify-between mt-6'>
												<div className='w-full border-2 border-gray-500 rounded-md flex items-center justify-center flex-col px-2 py-2'>
													<FaCreditCard className=' text-4xl text-center' />
													<span>Card</span>
												</div>
												<div className='w-full border-2 border-gray-500 rounded-md flex items-center justify-center flex-col px-2 py-2'>
													<FaPaypal className=' text-4xl text-center' />
													<span>Paypal</span>
												</div>
												<div className='w-full border-2 border-gray-500 rounded-md flex items-center justify-center flex-col px-2 py-2'>
													<FaApple className=' text-4xl text-center' />
													<span>Apple</span>
												</div>
											</div>

											<Label htmlFor='paymentmethodname' className='mt-6'>Name</Label>
											<Input id='paymentmethodname' type="text" placeholder='Enter Your Name' className='w-full ' />
											{/* Card number */}

											<Label htmlFor='Cardnumber' className='mt-6'>Card Number</Label>
											<Input id='Cardnumber' type="text" placeholder='Enter Your Name' className='w-full ' />
											{/* expier in  */}
											<div className=' grid grid-cols-3 gap-2 '>
												<div className='w-full'>
													<Label htmlFor='month' className='mt-6'>Name</Label>
													<Dropdown placeholder="Month" id='month' className='' onChange={(values) => console.log(values)}>
														<DropdownItem value="January">January</DropdownItem>
														<DropdownItem value="February">February</DropdownItem>
														<DropdownItem value="March">March</DropdownItem>
														<DropdownItem value="April">April</DropdownItem>
														<DropdownItem value="May">May</DropdownItem>
														<DropdownItem value="June">June</DropdownItem>
														<DropdownItem value="July">July</DropdownItem>
														<DropdownItem value="August">August</DropdownItem>
														<DropdownItem value="September">September</DropdownItem>
														<DropdownItem value="October">October</DropdownItem>
														<DropdownItem value="November">November</DropdownItem>
														<DropdownItem value="December">December</DropdownItem>
													</Dropdown>
												</div>
												<div className='w-full'>
													<Label htmlFor='year' className='mt-6'>Year</Label>
													<Dropdown placeholder="year" id='year' className='' onChange={(values) => console.log(values)}>
														<DropdownItem value="2023">2023</DropdownItem>
														<DropdownItem value="2024">2024</DropdownItem>
														<DropdownItem value="2025">2025</DropdownItem>
														<DropdownItem value="2026">2026</DropdownItem>
														<DropdownItem value="2027">2027</DropdownItem>
														<DropdownItem value="2028">2028</DropdownItem>
														<DropdownItem value="2029">2029</DropdownItem>
														<DropdownItem value="2030">2030</DropdownItem>
														<DropdownItem value="2031">2031</DropdownItem>
														<DropdownItem value="2032">2032</DropdownItem>
														<DropdownItem value="2033">2033</DropdownItem>
													</Dropdown>
												</div>

												<div className='w-full'>
													<Label htmlFor='cvv' className='mt-6'>Card Number</Label>
													<Input id='cvv' type="number" placeholder='Enter Your Name' className='w-full' />
												</div>
											</div>

											<Button className='mt-6 w-full'>
												Continue
											</Button>
										</div>
									</div>
								</div>

								<div>
									<div className='max-w-96 mx-auto w-full'>
										<div className=' border border-gray-500 p-4 rounded-lg pb-8 '>
											<h1 className=' text-md font-bold'>Report an issue</h1>
											<h3 className=' text-sm'>What area are you having problems with?</h3>
											<div className=' grid grid-cols-2 gap-2 mt-6'>
												<div>
													<Label htmlFor='reportarea'>Area</Label>
													<Dropdown placeholder="Team" id='reportarea' className='' onChange={(values) => console.log(values)}>
														<DropdownItem value="Team">Team</DropdownItem>
														<DropdownItem value="Billing">Billing</DropdownItem>
														<DropdownItem value="Account">Account</DropdownItem>
														<DropdownItem value="Deployments">Deployments</DropdownItem>
														<DropdownItem value="Support">Support</DropdownItem>
													</Dropdown>
												</div>
												<div>
													<Label htmlFor='reportSecurityLevel'>Security Level</Label>
													<Dropdown placeholder="Severity 1 (Highest)" id='reportSecurityLevel' className=' text-nowrap' onChange={(values) => console.log(values)}>
														<DropdownItem value="Security_1">Severity 1 (Highest)</DropdownItem>
														<DropdownItem value="Security_2">Security 2</DropdownItem>
														<DropdownItem value="Security_3">Security 3</DropdownItem>
														<DropdownItem value="Security_4">Severity 4 (Lowest)</DropdownItem>
													</Dropdown>
												</div>
											</div>
											<Label htmlFor="Subject" className='mt-4'>Subject</Label>
											<Input id='Subject' type="text" placeholder='I Need Help With' className='w-full ' />
											<Label htmlFor="Subject" className='mt-4'>Subject</Label>
											<textarea
												id='Subject'
												className={`mt-1 p-2 block w-full rounded-md placeholder:text-gray-400 bg-gray-900 border hover:bg-opacity-70 border-gray-500 shadow-sm sm:text-sm focus:border  disabled:bg-gray-900/90 disabled:cursor-not-allowed `}
												placeholder='I Need Help With'
											/>
											<div className=' grid grid-cols-2 gap-2 mt-6'>
												<Button variant='secondary'>
													Cancel
												</Button>
												<Button>
													Submit
												</Button>
											</div>
										</div>
										<div className='border border-gray-500 p-4 rounded-lg pb-8 max-w-96 mx-auto mt-4'>
											<div className={` rounded-md shadow-lg bg-blue-100 text-blue-800 text-base px-4 py-3 flex flex-col  justify-between w-full max-w-sm transition-opacity duration-300  opacity-100 `}>
												<div className="p-4 text-left">
													Did you want to save.
												</div>
												<hr className='border-t border-gray-500 my-2 ' />

												<div className="items-center justify-end w-full space-x-2 grid grid-cols-2">

													<>
														<Button
															size={'md'}
															variant="secondary"
															onClick={() => {
																console.log("Cancel")
															}}
														>
															Cancel
														</Button>
														<Button
															size={"md"}
															variant="primary"
															onClick={() => {
																console.log("Confirm")
															}}
														>
															Confirm
														</Button>
													</>
												</div>
											</div >
										</div>
										<div className='border border-gray-500 p-4 rounded-lg pb-8 max-w-96 mx-auto mt-4'>
											<div className={` rounded-md shadow-lg bg-blue-100 text-blue-800 text-base px-4 py-3 flex flex-col  justify-between w-full max-w-sm transition-opacity duration-300  opacity-100 `}>
												<div className="p-4 text-left">
													hello this is an alirt and confirm
												</div>
												<hr className='border-t border-gray-500 my-2 ' />
												<div className="items-center justify-end w-full space-x-2 grid grid-cols-2">

													<div>
													</div>
													<button className={`duration-100 flex items-center justify-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed  bg-gray-900 hover:bg-gray-800 text-gray-100 border border-gray-700 hover:border-transparent px-3 py-1.5 text-base font-medium  `}
														onClick={console.log("close")}>
														<svg className="h-5 w-5  fill-gray-400" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
														</svg>
													</button>
												</div>
											</div >
										</div>
										<div className='border border-gray-500 p-4 rounded-lg pb-8 max-w-96 mx-auto mt-4'>
											<h1 className='text-md font-bold'>Subscribe to Notifications</h1>
											<h3 className='text-sm'>{"Choose the types of notifications you'd like to receive:"}</h3>
											<div className='space-y-3 mt-4'>
												<div className='flex items-center'>
													<Checkbox variant="default" id="emailNotifications" />
													<Label htmlFor="emailNotifications" className='text-white' >Email Notifications</Label>
												</div>

												<div className='flex items-center'>
													<Checkbox variant="default" id="smsNotifications" />
													<Label htmlFor="smsNotifications" className='text-white' >Push Notifications</Label>
												</div>
												<div className='flex items-center'>
													<Checkbox variant="default" id="notification" />
													<Label htmlFor="notification" className='text-white' >Push Notifications</Label>
												</div>
											</div>
											<Button className='mt-6 w-full'>
												Save Preferences
											</Button>
										</div>
									</div>
								</div>

								<div className='max-w-96 mx-auto w-full'>
									<div className=' border border-gray-500 p-4 rounded-lg pb-8 '>
										<div>
											<h3 className=' font-bold text-white'>Team Members</h3>
											<h3 className='text-gray-400 text-sm'>Invite your team members to collaborate.</h3>
										</div>
										<div className='flex items-center w-full gap-2 mt-5 justify-between'>
											<div className='flex items-center gap-2 '>
												<div><CgProfile className='text-4xl' /></div>
												<div>
													<h3 className='text-sm font-bold'>Arsalan</h3>
													<h4 className='text-sm text-gray-500'>@arsalan21</h4>
												</div>
											</div>
											<div className='flex-grow max-w-36'>
												<Dropdown placeholder="Owner" className=' ' id='year' onChange={(values) => console.log(values)}>
													<DropdownItem value="Viewer" className=' border-t border-gray-500'>
														<div>
															<h3>Viewer</h3>
															<h3 className='text-sm text-gray-500'>Can view and comment.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Developer" className=' border-t border-gray-500'>
														<div>
															<h3>Developer</h3>
															<h3 className='text-sm text-gray-500'>Can view, comment and edit.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Billing" className=' border-t border-gray-500'>
														<div>
															<h3>Billing</h3>
															<h3 className='text-sm text-gray-500'>Can view, comment and manage billing.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Owner" className=' border-t border-gray-500'>
														<div>
															<h3>Owner</h3>
															<h3 className='text-sm text-gray-500'>Admin-level access to all resources.</h3>
														</div>
													</DropdownItem>
												</Dropdown>
											</div>
										</div>
										<div className='flex items-center w-full gap-2 mt-5 justify-between'>
											<div className='flex items-center gap-2 '>
												<div><CgProfile className='text-4xl' /></div>
												<div>
													<h3 className='text-sm font-bold'>Arsalan</h3>
													<h4 className='text-sm text-gray-500'>@arsalan21</h4>
												</div>
											</div>
											<div className='flex-grow max-w-36'>
												<Dropdown placeholder="Member" className=' ' id='year' onChange={(values) => console.log(values)}>
													<DropdownItem value="Viewer" className=' border-t border-gray-500'>
														<div>
															<h3>Viewer</h3>
															<h3 className='text-sm text-gray-500'>Can view and comment.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Developer" className=' border-t border-gray-500'>
														<div>
															<h3>Developer</h3>
															<h3 className='text-sm text-gray-500'>Can view, comment and edit.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Billing" className=' border-t border-gray-500'>
														<div>
															<h3>Billing</h3>
															<h3 className='text-sm text-gray-500'>Can view, comment and manage billing.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Owner" className=' border-t border-gray-500'>
														<div>
															<h3>Owner</h3>
															<h3 className='text-sm text-gray-500'>Admin-level access to all resources.</h3>
														</div>
													</DropdownItem>
												</Dropdown>
											</div>
										</div>
										<div className='flex items-center w-full gap-2 mt-5 justify-between'>
											<div className='flex items-center gap-2 '>
												<div><CgProfile className='text-4xl' /></div>
												<div>
													<h3 className='text-sm font-bold'>Arsalan</h3>
													<h4 className='text-sm text-gray-500'>@arsalan21</h4>
												</div>
											</div>
											<div className='flex-grow max-w-36'>
												<Dropdown placeholder="Member" className=' ' id='year' onChange={(values) => console.log(values)}>
													<DropdownItem value="Viewer" className=' border-t border-gray-500'>
														<div>
															<h3>Viewer</h3>
															<h3 className='text-sm text-gray-500'>Can view and comment.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Developer" className=' border-t border-gray-500'>
														<div>
															<h3>Developer</h3>
															<h3 className='text-sm text-gray-500'>Can view, comment and edit.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Billing" className=' border-t border-gray-500'>
														<div>
															<h3>Billing</h3>
															<h3 className='text-sm text-gray-500'>Can view, comment and manage billing.</h3>
														</div>
													</DropdownItem>
													<DropdownItem value="Owner" className=' border-t border-gray-500'>
														<div>
															<h3>Owner</h3>
															<h3 className='text-sm text-gray-500'>Admin-level access to all resources.</h3>
														</div>
													</DropdownItem>
												</Dropdown>
											</div>
										</div>
									</div>
									<div className='border border-gray-500 p-4 rounded-lg pb-8 max-w-96 mx-auto mt-4'>
										<div className='flex items-center w-full gap-2'>
											<div className='flex items-center w-full gap-2 '>
												<div><CgProfile className='text-4xl' /></div>
												<div>
													<h3 className='text-md font-normal'>Shaikh Adnan</h3>
													<h4 className='text-sm text-gray-500'>@shaikhadnan7621</h4>
												</div>
											</div>
											<div className='border text-2xl p-2  border-gray-500 rounded-full'>
												<FaPlus />
											</div>
										</div>
										<div>
											<p className='mr-auto w-fit max-w-72 bg-gray-900 rounded-md text-gray-300  px-4 py-1.5 mt-4' >how can i help you today</p>
											<p className='ml-auto w-fit max-w-72 bg-gray-300 rounded-md text-gray-700  px-4 py-1.5 mt-4' >{"Hey, I'm having trouble with my account."}</p>
											<p className='mr-auto w-fit max-w-72 bg-gray-900 rounded-md text-gray-300  px-4 py-1.5 mt-4' >What seems to be the problem?</p>
											<p className='ml-auto w-fit max-w-72 bg-gray-300 rounded-md text-gray-700  px-4 py-1.5 mt-4' >{"I can't log in."}</p>
										</div>
										<div>
											<Button className='mt-6 w-full'>
												Reply
											</Button>
										</div>
									</div>
									<div className='border border-gray-500 p-4 rounded-lg pb-8 max-w-96 mx-auto mt-4'>
										<Tabs defaultActiveKey={"Urban"} className='w-full p-0'>
											<TabList className=' max-w-7xl mx-auto w-full grid grid-cols-2 gap-2 bg-gray-800 p-1 rounded-md' defaultActiveKey={"city"}>
												<TabTrigger tabKey={"Urban"} >
													Urban
												</TabTrigger>
												<TabTrigger tabKey={"Rural"} >
													Rural
												</TabTrigger>
											</TabList>
											<TabContent tabKey={"Urban"} className='bg-gray-800 p-3 rounded-md  '>
												Urban areas are characterized by high population density, a diverse range of industries, and a bustling cultural scene. They offer a wide array of amenities, job opportunities, and entertainment options, attracting people from all walks of life.
											</TabContent>
											<TabContent tabKey={"Rural"} className='bg-gray-800 p-3 rounded-md  '>
												Rural areas are known for their tranquil landscapes, close-knit communities, and slower pace of life. Residents often enjoy strong social connections and a close relationship with nature, with opportunities for outdoor recreation.
											</TabContent>
										</Tabs>
									</div>
								</div>

							</div>
						</TabContent>
					</Tabs>
				</section>



				{/* AI-Powered UI Section */}
				<section className="bg-gray-800 text-white py-12 my-12"> {/* Added margin-top and margin-bottom */}
					<div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
							AI-Powered UI for Effortless Design
						</h2>
						<p className="text-lg mb-8 text-gray-300">
							Our components are designed with AI insights to help you create intuitive and engaging user experiences.
						</p>

					</div>
				</section>

				{/* Experience the Future Section */}
				<section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 mb-12"> {/* Added margin-bottom */}
					<div className="container mx-auto min-h-[500px] grid grid-cols-1 lg:grid-cols-2  items-center justify-between px-4 sm:px-6 lg:px-8">
						{/* Image (Left Side) */}
						<div className=" flex justify-center items-center ">
							<Image
								src="/chatheroimage.png"
								alt="AI Chat Window"
								width={500} // Adjust width as needed
								height={400} // Adjust height as needed
								className="rounded-md shadow-lg transform transition-transform hover:scale-105"
							/>
						</div>

						{/* Content (Right Side) */}
						<div className=" text-white text-center lg:text-left">
							<h2 className="text-3xl font-bold mb-4">Experience the Future of UI Design</h2>
							<p className="text-lg mb-6 text-gray-300">
								Interact with our AI-powered chat to discover the perfect components for your project.
							</p>
							<Link href={"/chat"}
							>
								<Button variant="primary" size="lg">
									Chat with Our AI
								</Button>
							</Link>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-gray-900 text-white px-4 py-6 mt-8">
					<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Column 1: Logo & About */}
						<div>
							<h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
								<span className=' text-2xl'>uiZ</span>
							</h2>
							<p className="text-sm text-gray-400">
								A curated collection of reusable React components to supercharge your next project.
							</p>
						</div>

						{/* Column 2: Links */}
						<div>
							<h3 className="text-lg font-semibold mb-3">Quick Links</h3>
							<ul className="text-sm space-y-2">
								<li>
									<Link href="/components" className="hover:text-gray-300">Components</Link>
								</li>
								<li>
									<Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
								</li>
								<li>
									<Link href="/blog" className="hover:text-gray-300">Blog</Link>
								</li>
							</ul>
						</div>

						{/* Column 3: Contact */}
						<div>
							<h3 className="text-lg font-semibold mb-3">Contact Us</h3>
							<ul className="text-sm space-y-2">
								<li>
									<a href="mailto:info@example.com" className="hover:text-gray-300">info@example.com</a>
								</li>
								<li>
									<a href="tel:+1234567890" className="hover:text-gray-300">+1-234-567-890</a>
								</li>
							</ul>
						</div>

						{/* Column 4: Social Media */}
						<div>
							<h3 className="text-lg font-semibold mb-3">Follow Us</h3>
							<ul className="flex space-x-4">
								<li>
									<a href="https://twitter.com/ShaikhAdnan7622" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
										<FaTwitter className="text-2xl" />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/shaikhadnan7621" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
										<FaLinkedin className="text-2xl" />
									</a>
								</li>
								<li>
									<a href="https://github.com/ShaikhAdnan7621" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
										<FaGithub className="text-2xl" />
									</a>
								</li>
								<li>
									<a href="https://instagram.com/mr_silent7621" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
										<FaInstagram className="text-2xl" />
									</a>
								</li>
								<li>
									<a href="mailto:shaikhadnan7621@gmail.com" className="text-gray-400 hover:text-gray-300">
										<FaEnvelope className="text-2xl" />
									</a>
								</li>
							</ul>
						</div>

					</div>

					{/* Copyright */}
					<div className="container mx-auto mt-8 border-t border-gray-700 pt-4">
						<p className="text-center text-sm text-gray-500">
							&copy; {new Date().getFullYear()} uiZ. All rights reserved.
						</p>
					</div>
				</footer>
			</ScrollArea >
		</div >
	)
}

export default Page