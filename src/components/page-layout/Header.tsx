
interface HeaderProps {
    
}

export default function Header({  }: HeaderProps) {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <a href="/">Little Lemon</a>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};