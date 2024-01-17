import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

type Props = {
    content: string
}

const CustomMarkdown = (props: Props) => {
    return (
        <Markdown
        remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
            components={{
                code({ node, className, children, ...props } : any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <div className="relative pt-4">
                            <div className="absolute text-lg flex-grow-0 left-4 -top-2 px-4 py-1 rounded-t-md font-bold" style={{ backgroundColor: "rgb(40, 44, 52)" }}>
                                {match[1].substring(0, 1).toUpperCase() + match[1].substring(1).toLocaleLowerCase()}
                            </div>
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={oneDark}
                                PreTag="div"
                                {...props}
                            />
                        </div>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                }
            }}
        >
            {props?.content}
        </Markdown>
    )
}

export default CustomMarkdown