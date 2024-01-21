import { TypeOfInfo } from "@/common/constants"
import Markdown from "react-markdown"
import './articleinfo.css'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const ArticleInfo = ({ text, type }: { text: string, type: TypeOfInfo }) => {
    return (
        <div className={`border-2 px-4 py-6 my-8 rounded-md relative flex items-center justify-center outer-box ${type.value}`}>
            <div className="text-3xl absolute -top-6 overflow-hidden rounded-full bg-primary px-2 py-2 flex icon">
                {type.component}
            </div>
            <div className="w-full prose prose-lg">
                <Markdown
                    components={{
                        code({ node, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <SyntaxHighlighter
                                    PreTag="div"
                                    language={match[1]}
                                    children={String(children).replace(/\n$/, "")}
                                    style={oneDark}
                                    // {...props}
                                />
                            ) : (
                                <code className={className ? className : ""} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}>
                {text}
                </Markdown>
            </div>
        </div>
    )
}

export default ArticleInfo