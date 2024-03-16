import { useEffect, useState } from "react";
import MailDisplay from "./MailDisplay"
export default function MailFetch(props: {id: string | null, changeHandler: (mailID: string | null)=>void}) {
    const [mailData, setMailData] = useState<extensiveMailProps | null>();
    useEffect(() => {
        const fetchMailData = async () => {
            console.log(props.id); // Allows for proper message to be fetched
            // Simulated fetch operation
            let simulatedMessageProps: extensiveMailProps
            if(props.id == "12345") {
                simulatedMessageProps = {
                    to: "luccadimario@gmail.com", 
                    from: "TypeScript.com", 
                    subject: "Typescript is great!", 
                    message: "Hey man! Just wanted to let you know that I think typescript is the best programming language! A typed language allows for a much easier use in businesses. It also helps with debugging! Yay!"
                };
            }
            else if(props.id == "54321") {
                simulatedMessageProps = {
                    to: "luccadimario@gmail.com", 
                    from: "JavaScript.com", 
                    subject: "JavaScript is so lovely!", 
                    message: "Hey man! Just wanted to let you know that I think JavaScript is the best programming language! No types makes it so easy!!"
                }
            }
            else {
                simulatedMessageProps = {
                    to: "luccadimario@gmail.com", 
                    from: "Undefined.com", 
                    subject: "No subject here!", 
                    message: "Cant find this message"
                }
            }
            
            setMailData(simulatedMessageProps);
        };

        fetchMailData();
    }, [props]);
    return(
        mailData &&
        (<MailDisplay data = {mailData}/>)
    )
}
export interface mailProps {
    id: string,
    to?: string,
    from?: string,
    subject?: string,
    snippet?: string
}
export interface extensiveMailProps {
    to: string,
    from: string,
    subject: string,
    message: string
}