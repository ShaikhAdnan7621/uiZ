"use client";

/**
* @param {Object} props
* @param {React.ReactNode} props.children
* @param {('default'|'outline'|'primary'|'secondary'|'danger'|'success'|'warning'|'info')} props.variant - The button variant.
* @param {('md'|'sm'|'lg'|'xl'|'icon')} [props.size='md'] - The button size.
* @param {string} props.className - Additional class names to apply.
* @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props.rest - All other props are spread to the button element.
*/

export default function Button({ children, variant = 'default', size = 'md', className, ...rest }) {
    const varients = {
        default: 'bg-white hover:bg-white/90 text-black  ',
        outline: 'bg-gray-900 hover:bg-gray-800 text-gray-100 border border-gray-700 hover:border-transparent',
        primary: 'bg-blue-500 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-300',
        danger: 'bg-red-500 hover:bg-red-800 text-white',
        success: 'bg-green-500 hover:bg-green-700 text-white  ',
        warning: 'bg-yellow-400 hover:bg-yellow-500 text-white ',
        info: 'bg-blue-400 hover:bg-blue-500 text-white',
    }
    const sizes = {
        xs: "px-1 py-1 text-xs font-thin",
        sm: " px-2 py-1 text-sm font-light",
        md: " px-3 py-1.5 text-base font-medium",
        lg: " px-5 py-2 text-lg font-semibold",
        xl: " px-6  py-2.5 text-xl font-extrabold",
        icon: " py-2 px-2 text-base ",
    };

    const clases = `duration-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed ${varients[variant]} ${sizes[size] ? sizes[size] : " px-4 py-2 text-base "} ${className}`

    return (
        <button
            className={clases}
            {...rest}
        >
            {children}
        </button>
    )
}
