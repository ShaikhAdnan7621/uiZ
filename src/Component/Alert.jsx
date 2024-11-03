"use client";
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

/**
 * @typedef {Object} AlertProps
 * @property {React.ReactNode} children - The content of the alert message.
 * @property {'success' | 'warning' | 'error' | 'info'} [variant='info'] - The variant of the alert, which determines its color.
 * @property {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='md'] - The size of the alert, which determines its font size and padding.
 * @property {number} [duration=10000] - The duration in milliseconds to display the alert. Set to 0 to disable auto-close.
 * @property {() => void} [onClose] - Callback function triggered when the alert is closed.
 * @property {() => void} [onConfirm] - Callback function triggered when the confirm button is clicked.
 * @property {boolean} [showCloseButton=true] - Whether to show the close button.
 * @property {string} [confirmButtonLabel='Confirm'] - The label for the confirm button.
 * @property {string} [cancelButtonLabel='Cancel'] - The label for the cancel button.
 * @property {'top' | 'top-left' | 'top-right' | 'top-center' | 'bottom' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'center'} [position='top'] - The position of the alert on the screen.
 */

/**
 * A flexible and customizable alert component for displaying important messages to the user.
 *
 * @param {AlertProps} props - The props for the Alert component.
 * @returns {JSX.Element | null} The rendered Alert component or null if not open.
 */
const Alert = ({
    children,
    variant = 'info',
    size = 'md',
    duration = 10000,
    onClose,
    onConfirm,
    showCloseButton = true,
    confirmButtonLabel = 'Confirm',
    cancelButtonLabel = 'Cancel',
    position = 'top' // Default position
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const timerRef = useRef(null);

    const variantClasses = {
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    };
    const ButtonVarients = {
        info: 'bg-gray-800 hover:bg-gray-700 text-gray-100 border border-gray-700 hover:border-transparent',
        error: 'bg-red-500 hover:bg-red-800 text-white',
        success: 'bg-green-500 hover:bg-green-700 text-white  ',
        warning: 'bg-yellow-400 hover:bg-yellow-500 text-white ',
    }

    const sizeClasses = {
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-2',
        md: 'text-base px-4 py-3',
        lg: 'text-lg px-5 py-4',
        xl: 'text-xl px-6 py-5',
    };

    const Buttonsizes = {
        xs: "px-1 py-1 text-xs font-thin",
        sm: " px-2 py-1 text-sm font-light",
        md: " px-3 py-1.5 text-base font-medium",
        lg: " px-5 py-2 text-lg font-semibold",
        xl: " px-6  py-2.5 text-xl font-extrabold",
        icon: " py-2 px-2 text-base ",
    };

    const positionClasses = {
        top: 'top-4 left-1/2 transform -translate-x-1/2',
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
        bottom: 'bottom-4 left-1/2 transform -translate-x-1/2',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
        center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',

    };

    const svgfillcolor = {
        info: ' fill-gray-300',
        error: ' fill-black',
        success: ' fill-black  ',
        warning: '  fill-black ',
    }



    useEffect(() => {
        if (duration > 0 && !onConfirm) {
            timerRef.current = setTimeout(() => {
                setIsOpen(false);
                onClose && onClose();
            }, duration);
        }

        return () => clearTimeout(timerRef.current);
    }, [duration, onClose, onConfirm]);

    if (!isOpen) return null;

    return (
        <div className={`fixed z-50 rounded-md shadow-lg ${variantClasses[variant]} ${sizeClasses[size]} flex flex-col  justify-between w-full max-w-sm transition-opacity duration-300 bg-gray-900 ${isOpen ? 'opacity-100' : 'opacity-0'} ${positionClasses[position]}`}>
            <div className="p-4 text-left">{children}</div>
            <hr className='border-t border-gray-500 my-2 ' />

            <div className="items-center justify-end w-full space-x-2 grid grid-cols-2">
                {onConfirm && (
                    <>
                        <Button
                            size={size}
                            variant="secondary"
                            onClick={() => {
                                setIsOpen(false);
                                onClose && onClose();
                            }}
                        >
                            {cancelButtonLabel}
                        </Button>
                        <Button
                            size={size}
                            variant="primary"
                            onClick={() => {
                                setIsOpen(false);
                                onConfirm();
                            }}
                        >
                            {confirmButtonLabel}
                        </Button>
                    </>
                )}
                {showCloseButton && !onConfirm &&
                    (
                        <>
                            <div>

                            </div>
                            <button className={`duration-100 flex items-center justify-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed ${ButtonVarients[variant]} ${Buttonsizes[size] ? Buttonsizes[size] : " px-4 py-2 text-base "}  `}
                                onClick={() => { setIsOpen(false); onClose && onClose(); }}>
                                <svg className={`h-5 w-5  fill-gray-400 ${svgfillcolor[variant]}`} viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </>
                    )}
            </div>
        </div >
    )
}

export default Alert;
