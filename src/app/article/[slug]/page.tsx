import { getArticle, getFeatured, getSimilarArticles } from "@/app/functions";
import MaxiArticleCard from "@/components/article/articleCard/maxiArticleCard/MaxiArticleCard";
import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import moment from "moment";
import { notFound } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";

const page = async ({ params }: { params: { slug: string } }) => {

    const { article, categories } = await getArticle(params.slug);
    if (!article) return notFound();

    const relatedContent = await getSimilarArticles(article.title);

    const featured = await getFeatured(5).then((awc) => {
        return {
            articles: awc.articles.filter(featuredArticle => {
                for (let related of relatedContent.articles) {
                    if (related.article.slug == featuredArticle.article.slug) {
                        return false;
                    }
                }
                return (featuredArticle?.article?.slug != params.slug);
            }),
            count: awc.count
        }
    });

    return (
        <div className="flex w-full justify-center relative mt-8 md:mt-0">
            <div className="flex flex-col max-w-3xl gap-2">
                <div className="flex justify-between text-md">
                    <div className="flex items-center gap-1 text-red-600">
                        <span><FaCalendarAlt className='text-md' /></span> <span>{moment(article?.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-500">
                        <i><span>{article?.readingTime}</span></i>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <h1 className="text-2xl lg:text-4xl font-bold">{article?.title}</h1>
                    </div>
                    {
                        categories.length > 0 && (
                            <ul className='flex flex-wrap gap-2'>
                                {categories.map((category, index) =>
                                    <li key={"category-card-" + index}>
                                        <CategoryCard category={category} />
                                    </li>
                                )}
                            </ul>
                        )
                    }
                    <div className="w-full">
                        <img className="w-full object-cover" style={{ maxHeight: "496px" }} src={article?.img || ""} />
                    </div>
                </div>
                <div className="mt-1 pb-6 prose-pre:-mb-8 prose-pre:-mt-6 prose dark:prose-invert prose-li:marker:text-red-600 prose-pre:bg-transparent lg:prose-lg w-full duration-200" >
                    <CustomMarkdown content={article.content} />
                </div>
                {
                    relatedContent.articles.length > 0 && (
                        <div>
                            <h1 className="text-xl font-bold text-red-600">RELATED CONTENT</h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    relatedContent.articles.map((articleWithCategory, index) =>
                                        <li key={"related-article-card-" + index}>
                                            <MaxiArticleCard article={articleWithCategory.article} categories={articleWithCategory.categories} />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
                {
                    featured.articles.length > 0 && (
                        <div className="">
                            <h1 className="text-xl font-bold text-red-600">FEATURED</h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {
                                    featured.articles
                                        .map((articleWithCategory, index) =>
                                            <li key={"maxi-article-card-" + index}>
                                                <MaxiArticleCard article={articleWithCategory.article} categories={articleWithCategory.categories} />
                                            </li>
                                        )
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default page