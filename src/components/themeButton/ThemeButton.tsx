'use client';


type Props = {}

const ThemeButton = (props: Props) => {
    const changeTheme = () => {
        document.documentElement.classList.toggle("dark");
    }
    return (
        <button onClick={()=> changeTheme()}>
            ThemeButton
        </button>
    )
}

export default ThemeButton