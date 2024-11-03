import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * A component that renders markdown content with syntax highlighting and GitHub Flavored Markdown (GFM) support.
 *
 * @param {object} props - The component props.
 * @param {string} props.children - The markdown content to render.
 *
 * @returns {JSX.Element} The rendered markdown content with a "Copy to Clipboard" button.
 *
 * @example
 *
 * const markdownContent = `
 * # Hello, world!
 *
 * This is an example of markdown content.
 *
 * `;
 *
 * <MdView>{markdownContent}</MdView>;
 *
 */
export default function MdView({ children }) {
	const contentRef = useRef(null);
	const [copied, setCopied] = useState(false);

	// Function to copy rendered visible text content to clipboard
	const copyToClipboard = () => {
		if (contentRef.current) {
			const visibleText = contentRef.current.textContent; // Get only visible text
			navigator.clipboard.writeText(visibleText);
			setCopied(true); // Set copied to true immediately
			setTimeout(() => {
				setCopied(false);
			}, 10000);
		}
	};

	return (
		<div className="relative p-1 pb-0 min-h-min w-full overflow-auto group moderscroller">
			<button
				onClick={copyToClipboard}
				className="absolute top-2 right-2 px-3 py-1 transition-colors duration-200 bg-gray-900 border border-gray-900 hover:border-transparent text-sm font-medium text-white rounded hidden group-hover:block"
			>
				{copied ? 'Copied!' : 'Copy to Clipboard'}
			</button>
			<div ref={contentRef}>
				<ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-container">
					{children}
				</ReactMarkdown>
			</div>
		</div>
	);
}
