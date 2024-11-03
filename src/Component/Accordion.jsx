/**
 * @file Provides a flexible and customizable Accordion component for displaying collapsible content sections.
 *
 * The Accordion component is designed to be highly versatile and can be easily integrated into various layouts and designs.
 * It allows for the creation of interactive user interfaces where content can be expanded or collapsed as needed.
 *
 * @example
 * // Basic usage:
 * <Accordion>
 *   <AccordionItem>
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content for Section 1</AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem open={true}>
 *     <AccordionTrigger>Section 2</AccordionTrigger>
 *     <AccordionContent>Content for Section 2</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */

import React, { useState } from 'react';

/**
 * The main Accordion component that wraps around individual AccordionItem components.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the Accordion.
 * @param {string} [props.className] - Optional className to apply to the Accordion container.
 * @returns {JSX.Element} The Accordion component.
 */
export const Accordion = ({ children, className }) => {
    return (
        <div className={`p-4 border border-gray-500/50 rounded-md ${className}`}>
            {children}
        </div>
    );
};

/**
 * Represents a single item within the Accordion, containing a trigger and its corresponding content.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components of the AccordionItem, including AccordionTrigger and AccordionContent.
 * @param {string} [props.className] - Optional className to apply to the AccordionItem container.
 * @param {boolean} [props.open=false] - Whether the AccordionItem should be initially open.
 * @returns {JSX.Element} The AccordionItem component.
 */
export const AccordionItem = ({ children, className, open = false }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full mb-2 ${className}`}>
            {React.Children.map(children, (child) => {
                if (child.type === AccordionTrigger) {
                    return React.cloneElement(child, {
                        isOpen: isOpen,
                        onClick: toggleOpen,
                    });
                } else if (child.type === AccordionContent) {
                    return React.cloneElement(child, {
                        isOpen: isOpen,
                    });
                }
                return null;
            })}
            <hr className='border-t-gray-500/50' />
        </div>
    );
};

/**
 * The trigger element that toggles the visibility of the AccordionContent.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isOpen - Whether the AccordionItem is currently open.
 * @param {Function} props.onClick - The function to be called when the trigger is clicked.
 * @param {React.ReactNode} props.children - The content to be displayed within the trigger.
 * @param {string} [props.className] - Optional className to apply to the AccordionTrigger button.
 * @returns {JSX.Element} The AccordionTrigger component.
 */
export const AccordionTrigger = ({ isOpen, onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full px-4 py-3 text-left font-medium flex justify-between items-center focus:outline-none ${className}`}
        >
            {children}
            <svg
                className={` h-4 w-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >

                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};

/**
 * The content section that is displayed or hidden based on the state of the AccordionItem.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isOpen - Whether the AccordionItem is currently open.
 * @param {React.ReactNode} props.children - The content to be displayed within the AccordionContent.
 * @param {string} [props.className] - Optional className to apply to the AccordionContent container.
 * @returns {JSX.Element} The AccordionContent component.
 */
export const AccordionContent = ({ isOpen, children, className }) => {
    return (
        <div
            className={`transition-max-height duration-300 ease-in-out transform ${isOpen ? 'min-h-fit overflow-visible' : 'max-h-0 overflow-hidden'} ${className}`}
        >
            <div className='px-4 py-3'>
                {children}
            </div>
        </div>
    );
};
