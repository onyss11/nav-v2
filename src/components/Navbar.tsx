import { useState } from "react"

export const Navbar = () => {

    const [open, setOpen] = useState(false)
    
    return (

        <nav className="bg-cyan-900 text-white w-full h-14">
            
            <div className="flex justify-between">

                {/* Nav Mobile */}

                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? (
                         <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-8 w-8 text-white"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-8 w-8 text-slate-900"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </div>
                
                {/* Logo */}
                <div className="">
                    RAYN
                </div>
                
                {/* Icons */}
                <div className="flex justify-around w-20">
                    <div className="">S</div>
                    <div className="">K</div>
                </div>
                
                

            </div>

            <div className={`md:hidden bg-cyan-900 text-white fixed w-full overflow-y-auto py-8 px-5
                duration-500 ${open ? "left-0" : "left-[-100%]"}`}>

                    <h1>Hola</h1>
                </div>
        </nav>
  
    )
}
