import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import Link from "next/link";

type Props = {}

const MaxiArticleCard = (props: Props) => {
    let categories = ["Software Engineer", "Java Development", "Webflux"];
    return (
        <div className="w-full h-full">
            <Link href={"article/1"}>
                <div className="w-full h-full relative flex items-center bg-black text-white group">
                    <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-30 z-0 group-hover:bg-red-400 duration-200">
                        <img className="w-full h-full object-cover opacity-30" src="https://media.graphassets.com/fuM8HiASStCCJHdxIunU" />
                    </div>
                    <div className="flex flex-col gap-1 z-20 px-2 py-2">
                        <h1 className="text-2xl font-bold group-hover:text-red-600 duration-200">GESÚ IMPANATO INDAGATO PER SPACCIO</h1>
                        <p className="line-clamp-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        <div className='flex flex-wrap gap-2'>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <CategoryCard categoryName={category} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MaxiArticleCard