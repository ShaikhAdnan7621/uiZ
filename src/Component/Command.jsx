/**
 * @file Provides a Command Palette component for quickly accessing actions and commands.
 *
 * The Command Palette allows users to search for and execute commands by typing in a search bar.
 * It provides a convenient way to navigate and interact with an application's functionality.
 *
 * @example
 * // Basic usage:
 * <Command>
 *   <CommandGroup title="Actions">
 *     <CommandItem onClick={() => console.log('Create new file')}>
 *       <CommandItemIcon>➕</CommandItemIcon>
 *       <CommandItemText>Create New File</CommandItemText>
 *       <CommandItemSuggestionText>Ctrl+N</CommandItemSuggestionText>
 *     </CommandItem>
 *     <CommandItem onClick={() => console.log('Open settings')}>
 *       <CommandItemIcon>⚙️</CommandItemIcon>
 *       <CommandItemText>Settings</CommandItemText>
 *     </CommandItem>
 *   </CommandGroup>
 * </Command>
 */
import React, { useState } from 'react';




/**
 * The main Command Palette component.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The command groups and items to display within the palette.
 * @param {string} [props.className] - Additional CSS classes to apply to the command palette container.
 * @param {function} [props.onSearch] - A callback function triggered when the search term changes. 
 *   It receives the current search term as an argument.
 * @param {string} [props.searchablebaricon="🔍"] - The icon to display in the search bar.
 * 
 * @example
 * <Command onSearch={(term) => console.log("Searching for:", term)}>
 *   {
 *      // Command groups and items
 *   }
 * </Command>
 */
const Command = ({ children, className, onSearch, searchablebaricon = "🔍" }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredChildren, setFilteredChildren] = useState(children);

    /**
     * Handles changes in the search input.
     *
     * @param {Event} event - The input change event.
     */
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch && onSearch(event.target.value);

        // Filter children based on the search term
        const newFilteredChildren = React.Children.toArray(children).filter((child) => {
            const textToSearch = child.props.title ||
                (child.props.children && React.Children.toArray(child.props.children)
                    .map(c => c.props.children)
                    .join(' '));

            return textToSearch && textToSearch.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setFilteredChildren(newFilteredChildren);
    };

    return (
        <div className={`border border-gray-500 rounded-md ${className || ''}`}>
            <div className="flex w-full gap-1 items-center justify-center p-1">
                <div className="w-10 text-center">{searchablebaricon}</div>
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow px-2 py-1 bg-transparent"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
            {filteredChildren}
        </div>
    );
};





/**
 * A group of related commands within the command palette.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The command items to display within the group.
 * @param {string} [props.title] - The title for the command group.
 * 
 * @example
 * <CommandGroup title="File Operations">
 *    {
 *     // Command items 
 *    }
 * </CommandGroup>
 */
const CommandGroup = ({ children, title }) => (
    <div>
        <hr className="w-full border-gray-500 mb-1" />
        {title && <h3 className="text-sm ml-2 w-fit opacity-70 font-semibold">{title}</h3>}
        <div className="pt-1 pb-2 px-2">
            {children}
        </div>
    </div>
);





/**
 * An individual command item within a command group.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the command item (icon, text, suggestion).
 * @param {function} [props.onClick] - A callback function triggered when the command item is clicked.
 * @param {boolean} [props.isActive=false] - Whether the command item is currently active (e.g., matches the search term).
 * 
 * @example
 * <CommandItem onClick={() => console.log('Command executed!')}>
 *   <CommandItemIcon>🚀</CommandItemIcon>
 *   <CommandItemText>Execute Command</CommandItemText>
 * </CommandItem>
 */
const CommandItem = ({ children, onClick, isActive = false }) => (
    <div
        className={`p-1 rounded-md hover:bg-gray-800/90 flex gap-1 items-center ${isActive ? 'bg-gray-800/50' : ''
            }`}
        onClick={onClick}
    >
        {children}
    </div>
);





/**
 * An icon within a command item.
 *
 * @component
 * @param {React.ReactNode} props.children - The icon to display.
 * 
 * @example
 * <CommandItemIcon>📁</CommandItemIcon>
 */
const CommandItemIcon = ({ children }) => (
    <div className="w-7 text-center">{children}</div>
);





/**
 * The main text label for a command item.
 *
 * @component
 * @param {React.ReactNode} props.children - The text label to display.
 * 
 * @example
 * <CommandItemText>Open File</CommandItemText>
 */
const CommandItemText = ({ children }) => <span>{children}</span>;





/**
 * Suggestion text for a command item (e.g., keyboard shortcut).
 *
 * @component
 * @param {React.ReactNode} props.children - The suggestion text to display.
 * 
 * @example
 * <CommandItemSuggestionText>Ctrl+O</CommandItemSuggestionText>
 */
const CommandItemSuggestionText = ({ children }) => (
    <span className="text-gray-400 ml-auto mr-1">{children}</span>
);

export {
    Command,
    CommandGroup,
    CommandItem,
    CommandItemIcon,
    CommandItemText,
    CommandItemSuggestionText,
};
