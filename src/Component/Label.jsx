/**
 * Renders a label element with default styling and optional class names.
 *
 * @component
 *
 * @param {string} htmlFor - The ID of the element that the label is associated with.
 * @param {ReactNode} children - The content of the label.
 * @param {string} [className] - Additional class names to apply to the label.
 * @param {object} [...rest] - Any other props to pass to the label element.
 *
 * @returns {JSX.Element} The rendered label element.
 *
 * @example
 * <Label htmlFor="name">Name:</Label>
 */
export default function Label({ htmlFor, children, className, ...rest }) {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm text-gray-400 ${className}`}
            {...rest}
        >
            {children}
        </label>
    );
}
