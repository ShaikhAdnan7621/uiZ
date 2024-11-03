import React from 'react';

/**
 * @typedef {Object} ScrollPosition
 * @property {number} top - The vertical scroll position.
 * @property {number} left - The horizontal scroll position.
 */

/**
 * A React component that provides a scrollable area with custom scrollbar styles.
 *
 * This component applies a set of custom CSS styles to create a visually appealing scrollbar.
 * It does not inherently control the scrolling behavior or orientation.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the scrollable area.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the scrollable area.
 * @returns {JSX.Element} The rendered scrollable area component.
 *
 * @example
 * // Basic usage
 * <ScrollArea>
 *   <div style={{ width: '2000px', height: '1000px' }}>
 *     Long and tall content here...
 *   </div>
 * </ScrollArea>
 */
function ScrollArea({ children, className = '' }) {
  return (
    <>
      <style>
        {`
                /* Custom Scrollbar Styles */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 12px;
                    height: 12px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background-color: #e0e0e0;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #888;
                    border-radius: 10px;
                    border: 2px solid #f4f4f4;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #555;
                }

                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #888 #00000000;
                }
                `}
      </style>
      <div className={`custom-scrollbar overflow-auto  ${className}`}>
        {children}
      </div>
    </>
  );
}

export default ScrollArea;

