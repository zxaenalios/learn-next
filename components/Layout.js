import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <meta property={props.property} content={props.content}/>
                <title>{props.title}</title>  
                <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C560BAQFxu0gAG0jafQ/company-logo_200_200/0/1533265534344?e=2159024400&v=beta&t=pVjLZveO_PBzAq1b2vTdYX6rrIJ8JOuOxCGCbarAfjA"/>  
            </Head> 
            <Navbar/>
            {props.children}
        
        </div>
    )
}
