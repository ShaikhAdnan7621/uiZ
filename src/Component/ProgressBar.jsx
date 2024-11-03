/**
 * A simple and customizable progress bar component.
 *
 * @param {object} props - The component's props.
 * @param {number} props.progress - The progress percentage to display (0-100).
 * @param {string} [props.className] - Additional CSS classes to apply to the progress bar container.
 * @returns {JSX.Element} The rendered progress bar component.
 *
 * @example
 * // Basic usage with 50% progress
 * <ProgressBar progress={50} />
 *
 * @example
 * // With custom class name for styling
 * <ProgressBar progress={75} className="my-custom-progress-bar" />
 */
const ProgressBar = ({ progress, className }) => {
    return (
        <div className={`w-full mx-auto ${className} `} >
            <div className="relative w-full bg-gray-200 rounded-lg h-3 overflow-hidden">
                <div
                    className="absolute h-full bg-blue-600 rounded-lg  "
                    style={{ width: `${progress}% ` }}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
