import ArticleCard from "@/components/article/articleCard/ArticleCard"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex w-full justify-center relative mt-8 md:mt-0">
      <div className="flex flex-col w-full max-w-3xl">
        <h1 className="text-xl font-bold text-red-600">LATEST</h1>
        <div className="grid grid-cols  gap-2">
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map(()=>{
                return (
                    <ArticleCard/>
                )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default page