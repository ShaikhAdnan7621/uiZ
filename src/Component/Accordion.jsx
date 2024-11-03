import React, { useState } from 'react';

/**
 * @typedef {Object} AccordionContentProps
 * @property {boolean} isOpen - Whether the accordion content is open or closed.
 * @property {React.ReactNode} children - The content to be displayed inside the accordion.
 */

/**
 * The content section of an accordion item.
 *
 * This component should be used as a child of `AccordionItem`.
 * It displays the content associated with an accordion item.
 *
 * @param {AccordionContentProps} props - The component props.
 * @returns {JSX.Element} The rendered AccordionContent component. 
 */
export const AccordionContent = ({ isOpen, children }) => {
    return (
        <div
            className={` transition-max-height duration-300 ease-in-out overflow-hidden transform  ${isOpen ? 'min-h-fit duration-400 ' : 'max-h-0 duration-400 '} `}
        >
            <div className='px-4 py-3'>
                {children}
            </div>
        </div>
    );
};

/**
 * @typedef {Object} AccordionTriggerProps
 * @property {boolean} isOpen - Whether the accordion item is open or closed.
 * @property {Function} onClick - The function to be called when the trigger is clicked.
 * @property {React.ReactNode} children - The content to be displayed inside the trigger button.
 */

/**
 * The trigger button for an accordion item.
 *
 * This component should be used as a child of `AccordionItem`.
 * It acts as a button that toggles the open/closed state of the accordion item.
 *
 * @param {AccordionTriggerProps} props - The component props.
 * @returns {JSX.Element} The rendered AccordionTrigger component.
 */
export const AccordionTrigger = ({ isOpen, onClick, children }) => {
    return (
        <>
            <button
                onClick={onClick}
                className="w-full px-4 py-3 text-left font-medium flex justify-between items-center focus:outline-none"
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
        </>
    );
};

/**
 * @typedef {Object} AccordionItemProps
 * @property {React.ReactNode} children - The children of the AccordionItem component.
 * @property {any} value - The value associated with the accordion item.
 */

/**
 * An individual accordion item.
 *
 * This component represents a single item within an accordion.
 * It should contain `AccordionTrigger` and `AccordionContent` as children.
 *
 * @param {AccordionItemProps} props - The component props.
 * @returns {JSX.Element} The rendered AccordionItem component.
 */
export const AccordionItem = ({ children, value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" overflow-hidden mb-2">
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

            <hr className='border-t-gray-500 ' />
        </div>
    );
};

/**
 * @typedef {Object} AccordionProps
 * @property {React.ReactNode} children - The children of the Accordion component.
 */

/**
 * The main accordion component.
 *
 * This component acts as a container for multiple `AccordionItem` components.
 * It provides the overall structure and styling for the accordion.
 *
 * @param {AccordionProps} props - The component props.
 * @returns {JSX.Element} The rendered Accordion component.
 */
export const Accordion = ({ children }) => {
    return (
        <div className='p-4 border border-gray-500 rounded-md'>
            {children}
        </div>
    );
};