import React from 'react'

/**
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the Datatable.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the Datatable.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <Datatable>
 *  <TableBody>
 *   <TableRow>
 *      <TableCell>cell 1</TableCell>
 *   </TableRow>
 *  </TableBody>
 * </Datatable>
 */
export default function Datatable({ children, className }) {
  return (
    <table className={`bg-gray-900 rounded-md border border-gray-500 ${className}`} >
      {children}
    </table>
  )
}

/**
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the TableHead.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the TableHead.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <TableHead>
 *   <TableRow>
 *      <TableHeadingCell>heading cell 1</TableHeadingCell>
 *   </TableRow>
 *  </TableHead>
 */
export function TableHead({ children, className }) {
  return (
    <thead className={` ${className}`}>{children}</thead>
  )
}


/**
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the TableBody.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the TableBody.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <TableBody>
 *   <TableRow>
 *      <TableCell>cell 1</TableCell>
 *   </TableRow>
 *  </TableBody>
 */
export function TableBody({ children, className }) {
  return (
    <tbody className={`m-2 border-t border-t-orange-700 space-x-1 ${className}`}>
      {children}
    </tbody>
  )
}

/**
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the TableRow.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the TableRow.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <TableRow>
 *      <TableCell>cell 1</TableCell>
 * </TableRow>
 */
export function TableRow({ children, className }) {
  return (
    <tr className={` px-2 border-b border-gray-500 ${className}`}>{children}</tr>
  )
}

/**
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the TableCell.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the TableCell.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <TableCell>cell 1</TableCell>
 */
export function TableCell({ children, className }) {
  return (
    <td className={`rounded-md  px-2 py-1 ${className}`} >{children}</td>
  )
}

/**
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed within the TableHeadingCell.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the TableHeadingCell.
 * 
 * @example
 * // Basic usage with horizontal scrolling
 * <TableHeadingCell>heading cell 1</TableHeadingCell>
 */
export function TableHeadingCell({ children, className }) {
  return (
    <th className={` p-2 ${className}`}>{children}</th>
  )
} 
