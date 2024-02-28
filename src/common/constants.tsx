import { AiFillGithub, AiOutlineWarning } from 'react-icons/ai';
import { BiCheckCircle, BiInfoCircle, BiXCircle } from 'react-icons/bi';

declare global {
    interface BigInt {
        toJSON(): string | number;
    }
}

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

export const MOBILE_MENU_ID = "mobile_menu";

export const PORTFOLIO_URL = "https://ikiwq-portfolio.vercel.app";

export const POST_PER_PAGE = 7;

export const API_URL = process.env.PUBLIC_API_URL;

export const CATEGORY_ON_HOMEPAGE = 10;

export const ARTICLES_PATH = "/articles/"
export const CATEGORIES_PATH = "/categories/"

export const CACHE_ONE_DAY = 86400

export class TypeOfInfo {
    public static readonly DO = new TypeOfInfo("do", <BiCheckCircle />);
    public static readonly INFO = new TypeOfInfo("info", <BiInfoCircle />);
    public static readonly WARNING = new TypeOfInfo("warning", <AiOutlineWarning />);
    public static readonly DONOT = new TypeOfInfo("donot", <BiXCircle />);

    private constructor(public readonly value: string, public readonly component: any) {

    }
}

export const SOCIAL_MEDIAS = [
    {
        name: "Github",
        icon: <AiFillGithub />,
        href: "https://github.com/ikiwq"
    },
    // {
    //     name: "Twitter",
    //     icon: <AiOutlineTwitter />,
    //     href: ""
    // }
]