import { ButtonHTMLAttributes } from 'react'


import '../styles/button.scss'

type ButtoProps = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: ButtoProps) {



    return (
        <button className="button" {...props}/>
      
  
    )
}

