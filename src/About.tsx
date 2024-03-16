import './App.css'
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react'
export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true)
  }, []);
    return (
    <body>
      <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms]"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-10"
        >
      <div className="container my-24 mx-auto md:px-6 bg-transparent rounded-3xl">
        <section className="mb-16 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <header className="text-gray-800 mb-12 text-6xl font-bold">About us</header>
          </div>
        </section>
      </div>
      </Transition>
      <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-1000"
        enterFrom="opacity-0 -translate-x-0"
        enterTo="opacity-100 -translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-0"
      >
        <section className="mb-10 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-800 mb-12 text-3xl font-bold">Scam Aware is an attempt to prevent the $8.8 BILLION worth of scams that happen each year</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[2000ms]"
        enterFrom="opacity-0 -translate-x-0 translate-y-20"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-0 translate-y-20"
      >
        <section className="mb-8 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-800 mb-12 text-3xl font-bold">Our Goals:</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[3500ms]"
        enterFrom="opacity-0 -translate-x-20 translate-y-0"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-20 translate-y-0"
      >
        <section className="mb-4 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-800 mb-12 text-3xl font-bold">1. Create a simple and easy to use mail application</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[4000ms]"
        enterFrom="opacity-0 -translate-x-20 translate-y-0"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-20 translate-y-0"
      >
        <section className="mb-4 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-800 mb-12 text-3xl font-bold">2. Utilize AI technology to warn users about potential scams and to prevent them from giving away confidential information</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[4500ms]"
        enterFrom="opacity-0 -translate-x-20 translate-y-0"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-20 translate-y-0"
      >
        <section className="mb-4 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-800 mb-12 text-3xl font-bold">3. Save YOUR money</h1>
          </div>
        </section>
    </Transition>
  </body>
    )
}