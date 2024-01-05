import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import { Article, Category } from "@prisma/client";

type Props = {
    article : Article
    categories : Array<Category>
}

const MaxiArticleCard = (props: Props) => {

    return (
        <div className="w-full h-full relative flex items-center bg-black text-white group">
            <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-30 z-0 group-hover:bg-red-400 duration-200">
                <img className="w-full h-full object-cover opacity-30" src="https://media.graphassets.com/fuM8HiASStCCJHdxIunU" />
            </div>
            <div className="flex flex-col gap-1 z-20 px-2 py-2">
                <h1 className="text-2xl font-bold group-hover:text-red-600 duration-200 text-start">{props.article.title}</h1>
                <p className="line-clamp-2 text-start">{props.article.excerpt}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        props.categories.map((category, index) => {
                            return (
                                <CategoryCard category={category}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MaxiArticleCard