import React, { useState, useEffect, useRef } from 'react';
 


/**
 * @typedef {Object} CalendarProps
 * @property {string} [className] - Additional CSS class names to apply to the calendar container.
 * @property {Date} [initialDate] - The initial date to display in the calendar. Defaults to the current date.
 * @property {Date} [toDate] - The latest selectable date in the calendar.
 * @property {Date} [fromDate] - The earliest selectable date in the calendar.
 * @property {string} [position='absolute'] - The position of the calendar dropdown.
 * @property {string} [placeholder="Select date"] - The placeholder text for the input field.
 * @property {Function} [onChange] - A callback function that is triggered when a date is selected.
 * @property {Array<string>} [theme=['blue', 'green']] - An array of two color names for primary and secondary colors.
 *
 * A customizable and responsive calendar component for selecting dates.
 *
 * @param {CalendarProps} props - The properties for the calendar component.
 * @returns {JSX.Element} The rendered calendar component.
 * 
 * example * 
 * <Calendar 
 *     initialDate={new Date('2024-03-15')} 
 *     toDate={new Date('2025-03-15')} 
 *     fromDate={new Date('2023-03-15')} 
 *     placeholder="Select a date" 
 *     onChange={handleDateChange} 
 *     theme={['red', 'gray']} 
 * />
 * 
 */

const Calendar = ({ className, initialDate, toDate, fromDate,position, placeholder = "Select date", onChange, theme }) => {
    const [currentDate, setCurrentDate] = useState(initialDate || new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null);

    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Default theme: blue, gray
    const defaultTheme = ['blue', 'green'];
    const [primary, secondary] = theme || defaultTheme;

    const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const goToPreviousMonth = () => {
        const newMonth = currentDate.getMonth() - 1;
        const newYear = currentDate.getFullYear();

        // Check if the new month is within the allowed range
        const newDate = new Date(newYear, newMonth);
        if (isValidMonth(newDate)) {
            setCurrentDate(newDate);
        }
    };

    const goToNextMonth = () => {
        const newMonth = currentDate.getMonth() + 1;
        const newYear = currentDate.getFullYear();

        // Check if the new month is within the allowed range
        const newDate = new Date(newYear, newMonth);
        if (isValidMonth(newDate)) {
            setCurrentDate(newDate);
        }
    };

    const goToToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
        if (onChange) {
            onChange(today);
        }
    };

    const handleDateClick = (day) => {
        // Check if the date is within the allowed range (if provided)
        const isInAllowedRange =
            (!toDate && !fromDate) ||
            (toDate && !fromDate && day <= toDate) ||
            (!toDate && fromDate && day >= fromDate) ||
            (toDate && fromDate && day >= toDate && day <= fromDate);


        // Only update the selected date if it's within the allowed range
        if (isInAllowedRange) {
            setSelectedDate(day);
            if (onChange) {
                onChange(day);
            }
            setIsOpen(false);
        }
    };

    const handleYearChange = (event) => {
        const newYear = parseInt(event.target.value, 10);
        const newDate = new Date(newYear, currentDate.getMonth());

        // Check if the new year is within the allowed range
        if (isValidMonth(newDate)) {
            setCurrentDate(newDate);
        }
    };

    const handleMonthChange = (event) => {
        const newMonth = parseInt(event.target.value, 10);
        const newDate = new Date(currentDate.getFullYear(), newMonth);

        // Check if the new month is within the allowed range
        if (isValidMonth(newDate)) {
            setCurrentDate(newDate);
        }
    };

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderHeader = () => {
        return (
            <div className="flex justify-between items-center p-2 gap-2 ">
                <button onClick={goToPreviousMonth} className="hover:text-blue-500">
                    {"<"}
                </button>
                <div className="flex gap-2">
                    <select
                        value={currentDate.getMonth()}
                        onChange={handleMonthChange}
                        className={` text-gray-700 border rounded-md px-2 py-1 border-${secondary} focus:outline-none focus:ring-1 focus:ring-${primary}-500 focus:ring-opacity-50`}
                    >
                        {monthNames.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        value={currentDate.getFullYear()}
                        onChange={handleYearChange}
                        className={` text-gray-700 border rounded-md px-2 py-1 border-${secondary} focus:outline-none focus:ring-1 focus:ring-${primary}-500 focus:ring-opacity-50`}
                    >
                        {Array.from({ length: 10 }, (_, i) => currentDate.getFullYear() - 5 + i).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={goToNextMonth} className="hover:text-blue-500">
                    {">"}
                </button>
            </div>
        );
    };

    const renderDays = () => {
        const days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        const firstDayIndex = days[0].getDay();
        const lastDayIndex = days[days.length - 1].getDay();

        // Calculate leading days
        const prevMonthLastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        const prevDays = [];
        for (let i = 0; i < firstDayIndex; i++) {
            prevDays.unshift(new Date(
                prevMonthLastDate.getFullYear(), prevMonthLastDate.getMonth(), prevMonthLastDate.getDate() - i));
        }

        const nextDays = [];
        for (let i = 1; i <= 6 - lastDayIndex; i++) {
            nextDays.push(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i));
        }

        return [
            ...prevDays.map((day) => ({ day, isPlaceholder: true })),
            ...days.map((day) => ({ day, isPlaceholder: false })),
            ...nextDays.map((day) => ({ day, isPlaceholder: true }))
        ].map(({ day, isPlaceholder }, index) => {
            const isToday = day.toDateString() === new Date().toDateString();
            const isSelected = day.toDateString() === selectedDate?.toDateString();

            const isInAllowedRange =
                (!toDate && !fromDate) ||
                (toDate && !fromDate && day <= toDate) ||
                (!toDate && fromDate && day >= fromDate) ||
                (toDate && fromDate && day >= toDate && day <= fromDate);

            const isDisabled = isPlaceholder || !isInAllowedRange;


            return (
                <button
                    key={index}
                    onClick={() => !isDisabled && handleDateClick(day)}
                    disabled={isDisabled} // Disable the button if needed
                    className={`
                        text-center rounded-full border-0 w-9 flex items-center justify-center h-9 p-2 relative transition duration-200 ease-in-out cursor-pointer
                        ${isPlaceholder ? ` text-gray-300 border-transparent` : ` `} 
                        ${isSelected ? ` bg-${primary}-500 text-white border-${primary}-500` : ''} 
                        ${isToday ? `  border-2 border-${primary}-500` : ''} 
                        ${isToday && !isSelected ? ` text-${primary} border-${primary}-200` : ''}  
                        ${!isPlaceholder && !isDisabled && `text-gray-700 duration-200 hover:border-2  `}  
                        ${isDisabled ? `cursor-default text-gray-300` : ''} `}
                >
                    {day.getDate()}
                </button>
            );
        });
    };

    // Helper function to check if a month is within the allowed range
    const isValidMonth = (date) => {
        if (toDate && fromDate) {
            const startMonth = toDate.getMonth();
            const startYear = toDate.getFullYear();
            const endMonth = fromDate.getMonth();
            const endYear = fromDate.getFullYear();

            const currentMonth = date.getMonth();
            const currentYear = date.getFullYear();

            // Check if the current month and year are within the allowed range
            return (
                (currentYear > startYear || (currentYear === startYear && currentMonth >= startMonth)) &&
                (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth))
            );
        }
        return true; // No range restrictions, so any month is valid
    };


    return (
        <div className="relative inline-block text-left w-full mt-1" ref={calendarRef}>
            <input
                type="text"
                className={` placeholder:text-gray-400 rounded-md px-3 bg-gray-900 focus:border-white py-2 w-full text-gray-300 focus:outline-none 900 border border-gray-500 shadow-sm sm:text-sm focus:border disabled:bg-gray-900/90 disabled:cursor-not-allowed ${className} `}
                placeholder={placeholder}
                value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                readOnly
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
                <div className={`absolute z-10 mt-2 ${position} border border-${secondary}-300  rounded-md shadow-md bg-white`}>
                    <div className="flex items-center justify-between text-center border-b border-${secondary} p-1">
                        <button onClick={goToToday} className={`text-sm text-${primary}-500 hover:underline px-2`}>
                            Today
                        </button>
                        {renderHeader()}
                    </div>
                    <div className="grid grid-cols-7 gap-1 px-2 pt-2">
                        {daysInWeek.map((day) => (
                            <div key={day} className="text-center py-2 font-medium text-gray-700">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 px-2 pb-2">{renderDays()}</div>
                </div>
            )}
        </div>
    );
};

export default Calendar;