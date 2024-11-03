"use client";

/**
 * A versatile button component with various variants and sizes.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be displayed within the button.
 * @param {('default'|'outline'|'primary'|'secondary'|'danger'|'success'|'warning'|'info')} [props.variant='default'] - The visual variant of the button.
 * @param {('xs'|'sm'|'md'|'lg'|'xl'|'icon')} [props.size='md'] - The size of the button.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {Object} [props....rest] - Any other props are spread to the underlying `<button>` element.
 *
 * @example
 * // Basic usage
 * <Button>Click me</Button>
 *
 * @example
 * // With different variant and size
 * <Button variant="primary" size="lg">
 *   Submit
 * </Button>
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
