import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/reservation">Reservation</Link>
      </li>
    </ul>
  );
}
