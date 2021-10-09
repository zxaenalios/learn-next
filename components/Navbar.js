import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="bg-blue-500">
            <div className="container">
                <div className="flex item-center justify-between">
                    <div className="flex item-center">
                        
                        <a className="text-blue-200 text-4xl hover:text-white py-5" href="">
                            { process.env.appName }
                        </a>
                    </div>
                    <div className="flex item-center">
                    <Link href="/about">
                        <a className="text-blue-200 text-4xl hover:text-white px-3 py-5">
                            About
                        </a>
                    </Link>
                    <Link href="/register">
                        <a className="text-blue-200 text-4xl hover:text-white px-3 py-5">
                            Register
                        </a>
                    </Link>
                    <Link href="/login">
                        <a className="text-blue-200 text-4xl hover:text-white px-3 py-5">
                            Login
                        </a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
