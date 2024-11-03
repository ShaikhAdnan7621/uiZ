import React from 'react';

/**
 * A customizable range input component.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} [props.className] - Additional CSS classes to apply to the input element.
 * @param {number} [props.value] - The current value of the range input. Defaults to the `min` value.
 * @param {number} [props.min=0] - The minimum value for the range input.
 * @param {number} [props.max=100] - The maximum value for the range input.
 * @param {number} [props.step=1] - The stepping interval for the range input.
 * @param {Object} [props....rest] - Any other props are spread to the underlying `<input type="range">` element.
 *
 * @example
 * // Basic usage
 * <InputRange />
 *
 * @example
 * // With custom value, min, max, and step
 * <InputRange value={50} min={0} max={200} step={10} />
 */
function InputRange({ className, value, min = 0, max = 100, step = 1, ...rest }) {
  let initialValue = value || min;
  return (
    <input
      type="range"
      className={`h-2  bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 before:bg-blue-500 after:bg-gray-400 ${className}`}
      min={min}
      max={max}
      value={initialValue}
      step={step}
      {...rest}
    />
  );
}

export default InputRange;
