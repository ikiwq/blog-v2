"use client";
import {useEffect} from 'react';
import Markdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

type Props = {
    content: string
}

const CustomMarkdown = (props: Props) => {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('[aria-hidden="true"]');
        hiddenElements.forEach(el => el.remove());
    }, []);

    return (
        <Markdown
            remarkPlugins={[[remarkGfm, {singleTilde: false}], remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                code({node, className, children, ...props}: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={oneDark}
                            PreTag="div"
                            {...props}
                        />
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