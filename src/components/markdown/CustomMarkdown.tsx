import React from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
    content: string
}

const CustomMarkdown = (props: Props) => {
    return (
        <Markdown
            components={{
                code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <div className="relative pt-4">
                            <div className="absolute text-lg flex-grow-0 left-4 -top-2 px-2 py-1 rounded-t-md font-bold" style={{ backgroundColor: "rgb(40, 44, 52)" }}>
                                {match[1].substring(0, 1).toUpperCase() + match[1].substring(1).toLocaleLowerCase()}
                            </div>
                            <SyntaxHighlighter
                                style={oneDark}
                                PreTag="div"
                                language={match[1]}
                                children={String(children).replace(/\n$/, "")}
                                {...props}
                            />
                        </div>
                    ) : (
                        <code className={className ? className : ""} {...props}>
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