import { Category } from "@prisma/client";
import Link from "next/link";

type Props = {
    category : Category
}

const CategoryMaxiCard = (props: Props) => {
    return (
        <div className="w-full h-full">
            <Link href={"/category/" + props.category?.slug}>
                <div className="w-full h-full relative flex items-center text-white group" style={{backgroundColor: "rgb(30, 0, 0)"}}>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 group-hover:bg-red-400 duration-200">
                        <img className="w-full h-full object-cover" src={props.category.img || ""} />
                    </div>
                    <div className="flex flex-col z-20 px-2 py-2 justify-around">
                        <div className="py-10">
                            <h1 className="text-2xl font-bold group-hover:text-red-600 duration-200">{props.category.title}</h1>
                            <p>{props.category.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryMaxiCard