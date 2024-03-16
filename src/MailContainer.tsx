import './App.css'
import MailFetch from './MailFetch'
import MailDraft from './MailDraft'


export default function MailContainer(props: {id: string | null, changeHandler: (mailID: string | null)=>void}) {
    return(
        !props.id ? 
            (<MailDraft/>)
            :
            (<MailFetch id={props.id} changeHandler={props.changeHandler}/>)
    )
}