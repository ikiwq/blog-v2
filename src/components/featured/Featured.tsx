import FeaturedCard from "./components/FeaturedCard";
import FeaturedMain from "./components/FeaturedMain";

type Props = {}

const Featured = (props: Props) => {
  let posts = [1, 2, 3, 4];

  return (
    <div className="flex flex-col xl:flex-row w-full h-full gap-2 overflow-hidden">
      <div className="w-full xl:w-3/5 h-full md:h-2/3 xl:h-full bg-blue-500 overflow-hidden">
        <FeaturedMain/>
      </div>
      <div className="w-full xl:w-2/5 h-full md:h-1/3 xl:h-full overflow-hidden ">
        <ul className="w-full h-full flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-col gap-2">
          {
            posts.map((posts, index)=> (
              <ul className="w-full flex-1 bg-red-500 overflow-hidden">
                <FeaturedCard/>
              </ul>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Featured