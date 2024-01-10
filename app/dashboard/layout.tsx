export default function Layout ({ children } : { children: React.ReactNode})
{
    return (
        <section>
            Este es el layout del dashboard
            {children}
        </section>
    )
};