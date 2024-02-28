import { getArticle } from "@/common/functions";
import { ImageResponse } from "next/og";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined },
    params: { slug: string }
}

export const size = {
    width: 1200,
    height: 630
};

export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
    const article = await getArticle(params.slug);

    return new ImageResponse(
        <div tw="relative flex w-full h-full flex items-center justify-center">
            <div tw="absolute flex inset-0">
                <img
                    tw="flex flex-1"
                    src={article?.img + "&w=1200&h=630&auto=format&q=75"}
                    alt={article?.title!!}
                />
                <div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10"></div>
            </div>
        </div>
    )
}