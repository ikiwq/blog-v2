import Link from "next/link"
import { AiFillCalendar } from "react-icons/ai"

type Props = {}

const FeaturedCard = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex h-full">
        <div className=" bg-secondary px-2 flex flex-col py-2 w-full duration-200 group">
          <div className="flex flex-col items-start pb-2 h-full justify-center">
            <div className="flex items-center gap-0.5 text-red-600 text-sm"><span><AiFillCalendar className='text-md' /></span><span></span>13/11/2023</div>
            <h1 className="text-sm font-bold line-clamp-3 break-words text-ellipsis group-hover:duration-200 group-hover:text-red-600">
              GLI AXOLOTL HANNO INVASO IL MONDOOO OOOOO OOOOOO AAAAAAAAAA AAAAAAAAAAA
            </h1>
          </div>
        </div>
        <div className="min-w-fit">
          <img className="h-full aspect-square object-cover" src="https://i.imgur.com/tZYaIYD.jpg" />
        </div>

      </div>
    </Link>
  )
}

export default FeaturedCard