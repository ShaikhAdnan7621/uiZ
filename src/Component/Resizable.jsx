'use client';
import React, { useState, useRef } from 'react';

/**
 * A group of resizable panels that can be resized horizontally or vertically.
 *
 * @param {object} props - The component props.
 * @param {'horizontal'|'vertical'} [props.direction='horizontal'] - The direction of the resize.
 * @param {React.ReactNode} props.children - The children of the panel group.
 * @returns {JSX.Element} The rendered panel group.
 * 
 * @example
 * // Horizontal resizing
 * <ResizablePanelGroup>
 *   <ResizablePanel defaultSize={200}>Panel 1</ResizablePanel>
 *   <ResizablePanel>Panel 2</ResizablePanel>
 * </ResizablePanelGroup>
 * 
 * @example
 * // Vertical resizing
 * <ResizablePanelGroup direction="vertical">
 *   <ResizablePanel defaultSize={150}>Panel 1</ResizablePanel>
 *   <ResizablePanel>Panel 2</ResizablePanel>
 * </ResizablePanelGroup>
 */
const ResizablePanelGroup = ({ direction = 'horizontal', children }) => {
    const isHorizontal = direction === 'horizontal';
    return (
        <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} h-full w-full`} >
            {children}
        </div>
    );
};

/**
 * A single resizable panel within a ResizablePanelGroup.
 *
 * @param {object} props - The component props.
 * @param {number} [props.defaultSize=300] - The default size of the panel in pixels.
 * @param {'horizontal'|'vertical'} [props.direction='horizontal'] - The direction of the resize.
 * @param {React.ReactNode} props.children - The children of the panel.
 * @returns {JSX.Element} The rendered panel.
 */
const ResizablePanel = ({ defaultSize = 300, direction = 'horizontal', children }) => {
    const [size, setSize] = useState(defaultSize);
    const panelRef = useRef(null);
    const isHorizontal = direction === 'horizontal';

    const handleMouseMove = (e) => {
        e.preventDefault();

        const boundingRect = panelRef.current.getBoundingClientRect();

        if (isHorizontal) {
            const newWidth = e.clientX - boundingRect.left;
            setSize(newWidth);
        } else {
            const newHeight = e.clientY - boundingRect.top;
            setSize(newHeight);
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (e) => {
        e.preventDefault(); // Prevent text selection when dragging the resize handle
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            ref={panelRef}
            className="relative flex-grow"
            style={{
                width: isHorizontal ? `${size}px` : '100%',
                height: isHorizontal ? '100%' : `${size}px`,
            }}
        >
            <div className="h-full w-full overflow-auto">{children}</div>
            {/* Resizing handle */}
            <div
                className={`absolute ${isHorizontal ? 'right-0 top-0 h-full' : 'bottom-0 left-0 w-full'
                    } bg-gray-500 cursor-${isHorizontal ? 'ew-resize' : 'ns-resize'}`}
                style={{
                    width: isHorizontal ? '5px' : '100%',
                    height: isHorizontal ? '100%' : '5px',
                    cursor: isHorizontal ? 'col-resize' : 'row-resize' 
                }}
                onMouseDown={handleMouseDown}
            />
        </div>
    );
};

export { ResizablePanelGroup, ResizablePanel };
