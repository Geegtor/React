import * as React from 'react'

type Props = {
    params: any
}

export const About: React.FC<Props> = (params: any) => {
    return (
        <img alt="about_us" src="https://picsum.photos/200/300?random=1"></img>
    )    
}