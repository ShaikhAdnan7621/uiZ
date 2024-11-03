"use client"
import Button from '../../Component/Button';
import { useState } from 'react'

export default function page() {
	const [classtext, setClassText] = useState(""); // Use more descriptive names
	const [variant, setVariant] = useState("default");
	const [size, setSize] = useState("md");
	const [buttonText, setButtonText] = useState("Button");

	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className='flex justify-center items-center flex-col sm:flex-row p-8 md:w-4/5 lg:max-w-7xl gap-8'>
				<div className="w-1/2">
					<p className="text-xl"><span className="text-pink-500">&lt;</span><span className="text-green-500">MyButton</span></p>
					<p className="text-xl ml-6 text-blue-600">
						<span className="text-blue-500">className</span><span className="text-yellow-500">=</span><span className="text-green-500">"</span>
						<input
							className="bg-transparent border-transparent underline border-b text-green-500 border-b-gray-500 focus:outline-none px-2"
							value={classtext}
							onChange={(e) => setClassText(e.target.value)}
						/>
						<span className="text-green-500">"</span>
					</p>
					<p className="text-xl ml-6 mt-2">
						<span className="text-blue-500">variant</span><span className="text-yellow-500">=</span><span className="text-green-500">"</span>
						<select
							className="bg-transparent focus:outline-none border-b border-b-gray-500 px-2"
							value={variant}
							onChange={(e) => setVariant(e.target.value)}
						>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="default">default</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="outline">outline</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="primary">primary</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="secondary">secondary</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="danger">danger</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="success">success</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="warning">warning</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-gray-300 focus:outline-none" value="info">info</option>
						</select>
						<span className="text-green-500">"</span>
					</p>
					<p className="text-xl ml-6 mt-2">
						<span className="text-blue-500">size</span><span className="text-yellow-500">=</span><span className="text-green-500">"</span>
						<select
							className="bg-transparent text-green-500 focus:outline-none border-b border-b-gray-500 px-2"
							value={size}
							onChange={(e) => setSize(e.target.value)}
						>
							<option className="bg-gray-900 hover:bg-gray-800 text-green-500 focus:outline-none" value="xs">xs</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-green-500 focus:outline-none" value="sm">sm</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-green-500 focus:outline-none" value="md">md</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-green-500 focus:outline-none" value="lg">lg</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-green-500 focus:outline-none" value="xl">xl</option>
							<option className="bg-gray-900 hover:bg-gray-800 text-green-500 focus:outline-none" value="icon">icon</option>
						</select>
						<span className="text-green-500">"</span>
					</p>
					<p className="text-xl ml-6 mt-2"><span className="text-blue-500">onClick</span><span className="text-yellow-500">=</span><span className="text-purple-500">{'{() => { console.log("button clicked successfully") }}'}</span></p>
					<p className="text-xl ml-6 "><span className="text-pink-500">&gt;</span></p>
					<p className="text-xl ml-6 mt-2">
						<input
							className="bg-transparent border-transparent border-b border-b-gray-500 focus:outline-none px-2"
							value={buttonText}
							onChange={(e) => setButtonText(e.target.value)}
						/>
					</p>
					<p className="text-xl "><span className="text-pink-500">&lt;/</span><span className="text-green-500">MyButton</span><span className="text-pink-500">&gt;</span></p>
				</div>

				<div className=" w-1/2  flex items-center justify-center">
					<Button
						className={classtext}
						variant={variant}
						size={size}
						onClick={() => { console.log("button clicked successfully ") }}
					>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	)
}
