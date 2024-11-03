"use client";

/**
 * A versatile badge component for displaying concise information.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to display within the badge.
 * @param {'gray'|'red'|'green'|'blue'|'yellow'|'purple'|'pink'|'cyan'} [props.variant='gray'] - The color variant of the badge.
 * @param {'solid'|'outline'|'light'} [props.style='solid'] - The style of the badge (solid background, outlined, or light background).
 * @param {'sm'|'md'|'lg'|'xl'} [props.size='md'] - The size of the badge.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the badge.
 * @param {Object} [props.rest] - Any other props are spread to the underlying `<span>` element.
 *
 * @example
 * // Basic usage
 * <Badge>Default</Badge>
 *
 * @example
 * // With different variant, style, and size
 * <Badge variant="red" style="outline" size="lg">
 *   Outline Red (Large)
 * </Badge>
 */

export default function Badge({
    children,
    variant = 'gray',
    style = 'solid',
    size = 'md',
    className,
    ...rest
}) {
    const variantClasses = {
        gray: `${style === 'solid' ? 'bg-gray-500 text-white' : style === 'outline' ? 'border border-gray-500 text-gray-500' : 'bg-gray-100 text-gray-700'}`,
        red: `${style === 'solid' ? 'bg-red-500 text-white' : style === 'outline' ? 'border border-red-500 text-red-500' : 'bg-red-100 text-red-700'}`,
        green: `${style === 'solid' ? 'bg-green-500 text-white' : style === 'outline' ? 'border border-green-500 text-green-500' : 'bg-green-100 text-green-700'}`,
        blue: `${style === 'solid' ? 'bg-blue-500 text-white' : style === 'outline' ? 'border border-blue-500 text-blue-500' : 'bg-blue-100 text-blue-700'}`,
        yellow: `${style === 'solid' ? 'bg-yellow-500 text-white' : style === 'outline' ? 'border border-yellow-500 text-yellow-500' : 'bg-yellow-100 text-yellow-700'}`,
        purple: `${style === 'solid' ? 'bg-purple-500 text-white' : style === 'outline' ? 'border border-purple-500 text-purple-500' : 'bg-purple-100 text-purple-700'}`,
        pink: `${style === 'solid' ? 'bg-pink-500 text-white' : style === 'outline' ? 'border border-pink-500 text-pink-500' : 'bg-pink-100 text-pink-700'}`,
        cyan: `${style === 'solid' ? 'bg-cyan-500 text-white' : style === 'outline' ? 'border border-cyan-500 text-cyan-500' : 'bg-cyan-100 text-cyan-700'}`,
    };

    const sizeClasses = {
        sm: 'text-[0.5rem] px-1 py-0.5  ',
        md: 'text-xs px-2 py-1  ',
        lg: 'text-sm px-3 py-1.5  ',
        xl: 'text-base px-4 py-2  ',
    };

    return (
        <span
            className={`rounded-full  inline-flex items-center font-medium ${variantClasses[variant]} ${sizeClasses[size] ? sizeClasses[size] : " text-xs px-2 py-1 "} ${className}`}
            {...rest}
        >
            {children}
        </span>
    );
}
