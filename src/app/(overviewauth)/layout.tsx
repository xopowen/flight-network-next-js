export default function Layout({ children,}:
        {
            children: React.ReactNode
        }) {

    return <main className="fly-background">
        {children}
    </main>
}