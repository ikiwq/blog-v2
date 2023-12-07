import Link from "next/link"
import { AiFillCalendar } from "react-icons/ai"

type Props = {}

const FeaturedMain = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="h-3/4 w-full">
          <img className="h-full w-full" src="https://i.imgur.com/tZYaIYD.jpg" />
        </div>
        <div className="h-1/4 bg-secondary px-2 flex flex-col py-2 w-full group duration-200">
          <div className="flex flex-col justify-between items-start pb-2">
            <div className="flex items-center gap-0.5 text-red-600 text-md"><span><AiFillCalendar className='text-lg' /></span><span></span>13/11/2023</div>
            <h1 className="text-lg font-bold line-clamp-2 break-words text-ellipsis group-hover:duration-200 group-hover:text-red-600 w-full">
              GLI AXOLOTaaaaaaaaa aaaaaaaaaaaaaaaaaaaOA AAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedMain