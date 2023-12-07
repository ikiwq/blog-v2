import MaxiArticleCard from "@/components/article/articleCard/maxiArticleCard/MaxiArticleCard"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex w-full justify-center relative mt-8 md:mt-0">
      <div className="flex flex-col w-full max-w-5xl">
        <h1 className="text-xl font-bold text-red-600">CATEGORIES </h1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
          <div className="h-64">
            <MaxiArticleCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page