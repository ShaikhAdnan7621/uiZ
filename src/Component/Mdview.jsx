import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export default function MdView({ children }) {

    return (
        <div className="p-1 pb-0 min-h-min w-full overflow-auto moderscroller whitespace-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-container">
                {children}
            </ReactMarkdown>
        </div>
    )
}