import { ArticleWithCategories } from "@/models/article.model";
import FeaturedCard from "./components/FeaturedCard";
import FeaturedMain from "./components/FeaturedMain";

type Props = {
  articles : Array<ArticleWithCategories>
}

const Featured = (props: Props) => {
  let main = props.articles.splice(0, 1)[0];
  let minor = props.articles.splice(0, 4);

  return (
    <div className="flex flex-col xl:flex-row w-full h-full gap-2 overflow-hidden">
      <div className="w-full xl:w-3/5 h-full md:h-2/3 xl:h-full overflow-hidden">
        <FeaturedMain article={main.article} categories={main.categories}/>
      </div>
      <div className="w-full xl:w-2/5 h-full md:h-1/3 xl:h-full overflow-hidden ">
        <ul className="w-full h-full flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-col gap-2">
          {
            minor.map((articleWithCategories, index)=> (
              <li className="w-full flex-1 overflow-hidden" key={"featured-card-" + index}>
                <FeaturedCard article={articleWithCategories.article} categories={articleWithCategories.categories}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Featured