import { extensiveMailProps } from "./MailFetch"
export default function MailDisplay(props: {data: extensiveMailProps}) {
    return(
        <div className = "h-full container bg-white text-gray-600">
            <div className="container px-24 py-12">
                <section className="mb-32 text-left">
                    <h3 className="inline"></h3>
                    <h3 className="inline">TO: {props.data.to} </h3>
                    <h3>FROM: {props.data.from}</h3>
                    <h3>SUBJECT: {props.data.subject}</h3>
                    <div className="text-center py-12">
                        <h3>{props.data.message}</h3>
                    </div>
                </section>
            </div>
        </div>
    )
}