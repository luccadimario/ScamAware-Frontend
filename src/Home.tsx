import './App.css'
import MailContainer from './MailContainer';


function Home(props: {id: string | null, changeHandler: (mailID: string | null)=>void}) {

  return (
    <>
    <MailContainer id={props.id} changeHandler={props.changeHandler}/>
    </>
  )
}

export default Home
