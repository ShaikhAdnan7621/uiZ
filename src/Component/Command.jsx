import React, { useState } from 'react';

/**
 * A command palette component for searching and executing actions.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The command groups and items to display.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the command palette.
 * @param {function} [props.onSearch] - A callback function triggered when the search term changes.
 *   Receives the current search term as an argument.
 * @param {string} [props.searchablebaricon='🔍'] - The icon to display in the search bar.
 *
 * @example
 * // Basic usage with search and command groups
 * <Command onSearch={handleSearch}>
 *   <CommandGroup title="Actions">
 *     <CommandItem onClick={() => console.log('Edit clicked!')}>
 *       <CommandItemIcon>✏️</CommandItemIcon>
 *       <CommandItemText>Edit</CommandItemText>
 *     </CommandItem>
 *   </CommandGroup>
 * </Command>
 */
const Command = ({ children, className, onSearch, searchablebaricon = "🔍" }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredChildren, setFilteredChildren] = useState(children); // State for filtered children

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch && onSearch(event.target.value);

        //   Update the filtered children based on the new search term
        const newFilteredChildren = React.Children.toArray(children).filter((child) => {
            const textToSearch = child.props.title ||
                (child.props.children && React.Children.toArray(child.props.children)
                    .map(c => c.props.children)
                    .join(' '));

            return textToSearch && textToSearch.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setFilteredChildren(newFilteredChildren); // Update state to trigger re-rendering
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
            {filteredChildren} {/* Render the filtered children */}
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
 */
const CommandItemIcon = ({ children }) => (
    <div className="w-7 text-center">{children}</div>
);

/**
 * The main text label for a command item.
 *
 * @component
 * @param {React.ReactNode} props.children - The text label to display.
 */
const CommandItemText = ({ children }) => <span>{children}</span>;

/**
 * Suggestion text for a command item (e.g., keyboard shortcut).
 *
 * @component
 * @param {React.ReactNode} props.children - The suggestion text to display.
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
