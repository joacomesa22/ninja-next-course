import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo.png";
export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image src={Logo} alt="Ninja Logo" width={80} quality={100} />
      </Link>
      <h1>Dojo Tickets</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create</Link>
    </nav>
  );
}
