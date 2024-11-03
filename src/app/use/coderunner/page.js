"use client"
import React, { useState } from 'react';
// ... (Import Button component)
import Button from '@/Component/Button';

// ... (Import all your components here)
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/Component/Accordion';
// ... (All your other component imports)


const ComponentPlayground = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleRunCode = () => {
    try {
      // dynamically create a component from the code string
      const Component = eval(`(function() { return ${code}; })()`)
        .default; // important:  get the default export
      
      setOutput(<div className="p-4 border border-gray-200 rounded-lg">
        <Component/>
        </div>)

      setError(null);  
    } catch (err) {
      setError(err.message);
      setOutput(null);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <div className="w-full max-w-4xl p-8">

          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full border border-gray-300 rounded-md p-4 h-48 resize-none focus:outline-none"
            placeholder="Paste your React component code here"
          />
        </div>
        
      <div className="p-4 w-full max-w-4xl">
        <Button onClick={handleRunCode}>Run</Button>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-2">
          {error}
        </div>}
        {output}
      </div>
    </div>
  );
};



export default ComponentPlayground;