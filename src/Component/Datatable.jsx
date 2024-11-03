/**
 * @file Provides a set of reusable components for creating data tables.
 *
 * This module offers a collection of components that can be combined to build customizable
 * and visually appealing data tables. The components handle the basic structure and styling,
 * allowing you to focus on presenting your data effectively.
 */
import React from 'react';

/**
 * The main Datatable component, representing the entire table.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the table, including table head, body, rows, and cells.
 * @param {string} [props.className] - Additional CSS classes to apply to the table container.
 */
export default function Datatable({ children, className }) {
  return (
    <table className={`bg-gray-900 rounded-md border border-gray-500 ${className}`}>
      {children}
    </table>
  );
}

/**
 * The table header component, typically containing column headings.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the table header, usually `TableHeadingCell` components.
 * @param {string} [props.className] - Additional CSS classes to apply to the table header.
 */
export function TableHead({ children, className }) {
  return (
    <thead className={`${className}`}>{children}</thead>
  );
}

/**
 * The table body component, containing the main data rows.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the table body, typically `TableRow` components.
 * @param {string} [props.className] - Additional CSS classes to apply to the table body.
 */
export function TableBody({ children, className }) {
  return (
    <tbody className={`m-2 border-t border-t-orange-700 space-x-1 ${className}`}>
      {children}
    </tbody>
  );
}

/**
 * A single row within the table body.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the table row, usually `TableCell` components.
 * @param {string} [props.className] - Additional CSS classes to apply to the table row.
 */
export function TableRow({ children, className }) {
  return (
    <tr className={` px-2 border-b border-gray-500 ${className}`}>{children}</tr>
  );
}

/**
 * A standard data cell within a table row.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to display within the table cell.
 * @param {string} [props.className] - Additional CSS classes to apply to the table cell.
 */
export function TableCell({ children, className }) {
  return (
    <td className={`rounded-md  px-2 py-1 ${className}`}>{children}</td>
  );
}

/**
 * A header cell, typically used within the `TableHead` component for column headings.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to display within the header cell.
 * @param {string} [props.className] - Additional CSS classes to apply to the header cell.
 */
export function TableHeadingCell({ children, className }) {
  return (
    <th className={` p-2 ${className}`}>{children}</th>
  );
}
