"use client";
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

/**
 * A versatile alert component that can be used for both informational messages and confirmation dialogs.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the alert message.
 * @param {('success'|'warning'|'error'|'info')} [props.variant='info'] - The visual style of the alert.
 * @param {('sm'|'md'|'lg')} [props.size='md'] - The size of the alert.
 * @param {number} [props.duration=10000] - The duration in milliseconds to display the alert before auto-closing (ignored for confirmation dialogs).
 * @param {function} [props.onClose] - Callback function triggered when the alert is closed (either by auto-close, clicking the close button, or clicking "Cancel").
 * @param {function} [props.onConfirm] - Callback function triggered when the "Confirm" button is clicked (turns the alert into a confirmation dialog).
 * @param {boolean} [props.showCloseButton=true] - Whether to show the close button (hidden automatically for confirmation dialogs).
 * @param {string} [props.confirmButtonLabel='Confirm'] - The label for the "Confirm" button.
 * @param {string} [props.cancelButtonLabel='Cancel'] - The label for the "Cancel" button.
 * @param {('top'|'top-left'|'top-right'|'bottom'|'bottom-left'|'bottom-right'|'center')} [props.position='top'] - The position of the alert on the screen.
 * @returns {JSX.Element} The rendered Alert component.
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

    const sizeClasses = {
        sm: 'text-sm px-3 py-2',
        md: 'text-base px-4 py-3',
        lg: 'text-lg px-5 py-4',
    };

    const positionClasses = {
        top: 'top-4 left-1/2 transform -translate-x-1/2',
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        bottom: 'bottom-4 left-1/2 transform -translate-x-1/2',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    };

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
        <div className={`fixed z-50 rounded-md shadow-lg ${variantClasses[variant]} ${sizeClasses[size]} flex flex-col  justify-between w-full max-w-sm transition-opacity duration-300 bg-white ${isOpen ? 'opacity-100' : 'opacity-0'} ${positionClasses[position]}`}>
            <div className="p-4 text-left">{children}</div>
            <div className="flex items-center justify-end w-full space-x-2 border-t border-gray-200">
                {onConfirm && (
                    <>
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
                    </>
                )}
                {showCloseButton && !onConfirm &&
                    (
                        < Button variant="icon" size={size} onClick={() => { setIsOpen(false); onClose && onClose(); }}>
                            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                    )}
            </div>
        </div >
    )
}

export default Alert;
