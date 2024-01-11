import { getArticle, getSimilarArticles } from "@/app/functions";
import MaxiArticleCard from "@/components/article/articleCard/maxiArticleCard/MaxiArticleCard";
import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";

const page = async ({ params }: { params: { slug: string } }) => {

    const { article, categories } = await getArticle(params.slug);
    const relatedContent = await getSimilarArticles(article.title);
    const editorsChoice = [];

    return (
        <div className="flex w-full justify-center relative mt-8 md:mt-0">
            <div className="flex flex-col max-w-3xl">
                <div className="">
                    <div className="flex justify-between gap-2 text-md pb-2">
                        <div className="flex items-center gap-1 text-red-600">
                            <span><FaCalendarAlt className='text-md' /></span> <span>{moment(article?.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                        <div className="flex items-center gap-1 text-neutral-500">
                            <i><span>3 Min read</span></i>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold">{article?.title}</h1>
                    </div>
                    <ul className='flex flex-wrap gap-2 pt-4'>
                        {categories.map((category, index) =>
                            <li>
                                <CategoryCard category={category} />
                            </li>
                        )}
                    </ul>
                    <div className="py-4 w-full">
                        <img className="" src={article?.img || ""} />
                    </div>
                    <div className="prose dark:prose-invert prose-li:marker:text-red-600 prose-pre:bg-transparent prose-pre:-mb-8 prose-pre:-mt-6 prose-lg w-full duration-200" >
                        <CustomMarkdown content={article.content} />
                    </div>
                </div>
                {
                    relatedContent?.articles?.length > 0 && (
                        <div className="pb-6 pt-4">
                            <h1 className="text-xl font-bold text-red-600">RELATED CONTENT</h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    relatedContent.articles.map((articleWithCategory)=>
                                        <MaxiArticleCard article={articleWithCategory.article} categories={articleWithCategory.categories}/>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
                <div className="pb-6">
                    <h1 className="text-xl font-bold text-red-600">EDITOR'S CHOICE</h1>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page