// components/Tabs.js
"use client";
import React, { useState, createContext, useContext } from "react";

/**
 * @typedef {Object} TabsContextValue
 * @property {number} activeKey - The currently active tab's key.
 * @property {function(number): void} handleTabClick - Function to handle tab clicks and update the active tab.
 */

/**
 * @context TabsContext
 * @description Context for managing tab state and behavior.
 */
const TabsContext = createContext();

/**
 * Tabs component for creating a tabbed interface.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components representing tabs and their content.
 * @param {number} [props.defaultActiveKey=0] - The key of the tab that should be active by default.
 * @returns {JSX.Element} The rendered Tabs component.
 *
 * @example
 * ```jsx
 * <Tabs defaultActiveKey={1}>
 *   <TabList>
 *     <TabTrigger tabKey={0}>Tab 1</TabTrigger>
 *     <TabTrigger tabKey={1}>Tab 2</TabTrigger>
 *   </TabList>
 *   <TabContent tabKey={0}>Content for Tab 1</TabContent>
 *   <TabContent tabKey={1}>Content for Tab 2</TabContent>
 * </Tabs>
 * ```
 */
export default function Tabs({ children, defaultActiveKey = 0, className }) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  /**
   * Handles tab clicks and updates the active tab.
   *
   * @param {number} key - The key of the clicked tab.
   */
  const handleTabClick = (key) => {
    setActiveKey(key);
  };

  return (
    <TabsContext.Provider value={{ activeKey, handleTabClick }}>
      <div className={`w-full mx-auto  ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

/**
 * TabList component for grouping TabTrigger components.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child TabTrigger components.
 * @param {string} [props.className] - Additional CSS class names to apply to the TabList container.
 * @returns {JSX.Element} The rendered TabList component.
 */
export function TabList({ children, className }) {
  return <div className={` flex gap-1 mb-4 ${className}`}>{children}</div>;
}

/**
 * TabTrigger component representing a single tab that can be clicked to activate its corresponding TabContent.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content to display within the tab trigger.
 * @param {number} props.tabKey - A unique key to identify the tab and associate it with its content.
 * @param {string} [props.className] - Additional CSS class names to apply to the TabTrigger button.
 * @returns {JSX.Element} The rendered TabTrigger component.
 *
 * @throws {Error} If the `tabKey` prop is not provided.
 */
export function TabTrigger({ children, tabKey, className }) {
  if (tabKey === undefined) {
    throw new Error("TabTrigger component requires a 'tabKey' prop.");
  }

  const { activeKey, handleTabClick } = useContext(TabsContext);

  return (
    <button
      onClick={() => handleTabClick(tabKey)}
      className={` rounded-lg transition-colors duration-200 bg-gray-900 border border-gray-900 hover:border-transparent px-3 py-1.5 text-base font-medium hover:bg-opacity-70  ${activeKey === tabKey ? "bg-gray-950  text-white" : "bg-gray-900 text-gray-400"} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * TabContent component representing the content associated with a specific tab.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content to display when the associated tab is active.
 * @param {number} props.tabKey - A unique key to identify the tab content and associate it with its trigger.
 * @param {string} [props.className] - Additional CSS class names to apply to the TabContent container.
 * @returns {JSX.Element|null} The rendered TabContent component or null if the tab is not active.
 *
 * @throws {Error} If the `tabKey` prop is not provided.
 */
export function TabContent({ children, tabKey, className }) {
  if (tabKey === undefined) {
    throw new Error("TabContent component requires a 'tabKey' prop.");
  }

  const { activeKey } = useContext(TabsContext);

  return (
    activeKey === tabKey && (
      <div className={`${className}`}>{children}</div>
    )
  );
}
