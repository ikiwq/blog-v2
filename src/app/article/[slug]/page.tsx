import MaxiArticleCard from "@/components/article/articleCard/maxiArticleCard/MaxiArticleCard";
import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
type Props = {}

const page = (props: Props) => {
    let categories = ["Software Engineer", "Java Development", "Webflux"];
    categories.sort((a, b) => a.length - b.length);

    const markdownSource = `# header
* list
~~~cpp
Long a = "ciaoo";
Long b = "lol";
for(int i=0; i < 10; i++){
    int a = b;
}
~~~
cose che vorrei fare a nadia:
- sfondarla di baci
    - poi sfondarla ancora di baci
    - e ancora di baci.
- sfondarla di botte
- sfondarle la fessa
`;

    return (
        <div className="flex w-full justify-center relative mt-8 md:mt-0">
            <div className="flex flex-col max-w-3xl">
                <div className="">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold">GESÚ IMPALATO SI CERCANO RESPONSABILI</h1>
                    </div>
                    <div className='flex flex-wrap gap-2 pt-4'>
                        {
                            categories.map((category, index) => {
                                return (
                                    <CategoryCard categoryName={category} />
                                )
                            })
                        }
                    </div>
                    <div className="py-4 w-full">
                        <img className="" src="https://i.imgur.com/tZYaIYD.jpg" />
                    </div>
                    <div className="prose prose-invert prose-li:marker:text-red-600 prose-pre:bg-transparent prose-pre:-mb-8 prose-pre:-mt-6 prose-lg w-full" >
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
                            {markdownSource}
                        </Markdown>
                    </div>
                </div>
                <div className="pb-6">
                    <h1 className="text-xl font-bold text-red-600">OTHER CONTENTS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="w-full h-60">
                            <MaxiArticleCard />
                        </div>
                        <div className="w-full h-60">
                            <MaxiArticleCard />
                        </div>
                        <div className="w-full h-60">
                            <MaxiArticleCard />
                        </div>
                        <div className="w-full h-60">
                            <MaxiArticleCard />
                        </div>
                    </div>
                </div>
                <div className="pb-6">
                    <h1 className="text-xl font-bold text-red-600">EDITOR'S CHOICE</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="w-full h-60">
                            <MaxiArticleCard />
                        </div>
                        <div className="w-full h-60">
                            <MaxiArticleCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page