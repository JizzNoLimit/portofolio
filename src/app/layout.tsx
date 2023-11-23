import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const open_sans = Open_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--open-sans',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={open_sans.className}>
                <Provider>
                    <>{children}</>
                </Provider>
            </body>
        </html>
    )
}
