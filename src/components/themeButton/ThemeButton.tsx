'use client';
import { useEffect, useState } from 'react';
import './themebutton.css'
import { THEME_DARK } from '@/app/constants';

type Props = {}

const ThemeButton = (props: Props) => {
    const [checked, setChecked] = useState(true);

    useEffect(()=>{
        let prefersDark;
        if(localStorage.getItem("prefersDark") == undefined){
            localStorage.setItem("prefersDark", "true");
            prefersDark = true;
        }else{
            prefersDark = localStorage.getItem("prefersDark") === "true";
        }

        if(prefersDark){
            setChecked(true);
            document.documentElement.classList.add(THEME_DARK);
        }else{
            setChecked(false)
            document.documentElement.classList.remove(THEME_DARK);
        }
    }, []);

    const changeTheme = () => {
        document.documentElement.classList.toggle("dark");
        setChecked(!checked);
        if(checked == true){
            localStorage.setItem("prefersDark", "false")
        }else{
            localStorage.setItem("prefersDark", "true")
        }
    }

    return (
        <>
            <input 
            checked={checked} 
            type="checkbox" 
            onChange={() => changeTheme()}
            id="darkmode-toggle"/>
            <label htmlFor="darkmode-toggle"
                className="rounded-full cursor-pointer"></label>
        </>
    )
}

export default ThemeButton