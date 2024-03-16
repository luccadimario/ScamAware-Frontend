import './App.css'
export default function MailDraft() {
    
    return(
        <div className = "h-full container my-auto mx-auto bg-white py-[93px]">
            <div className="container p-24">
                <section className="mb-32 text-left">
                <div className="mx-auto max-w-[700px] md:px-3">
                    <h2 className="text-gray-600 py-4">Send New Email:</h2>
                    <form>
                    <div className="relative mb-6" data-te-input-wrapper-init = "">
                        <input
                        type="email"
                        placeholder="example@example.com"
                        name="email"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-gray-100 border-0 rounded shadow outline-none"
                        />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init = "">
                        <input
                        type="text"
                        placeholder="Subject"
                        name="Subject"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-gray-100 border-0 rounded shadow outline-none"
                        />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init="">
                        <textarea
                        placeholder="Your message"
                        name="message"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-gray-100 border-0 rounded shadow outline-none"
                        />
                    </div>
                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    </div>
                    <button
                        type="button"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                        className="mb-6 inline-block w-full rounded bg-blue-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gray-100 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Send
                    </button>
                    </form>
                </div>
                </section>
            </div>
        </div>) 
}