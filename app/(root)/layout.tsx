import React, { ReactNode } from 'react'
import Link from "next/link"
import Image from "next/image"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav className="flex items-center justify-between py-4 px-6 bg-card rounded-lg shadow-md">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                    <h2 className="text-primary-100 text-xl font-semibold">Mockly</h2>
                </Link>
            </nav>

            <main className="mt-6">
                {children}
            </main>
        </div>
    )
}

export default RootLayout
