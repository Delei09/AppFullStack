import Style from '../styles/main.module.css'


const Main : React.FC =  ({children} ) => {

    return(
        <main className = {Style.main} >
           {children}
        </main>
    )
}


export default Main