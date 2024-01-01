import { Navbar } from '@/components';

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="grid place-content-center p-20">
                <span className='text-lg text-center py-4'>Hola Mundo!</span>
                <div className="text-6xl font-bold">
                    {children}
                </div>
            </main>
        </>
    )
}