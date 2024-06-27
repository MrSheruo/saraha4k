import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 my-8">
      <Link href={"/"}>
        <h1
          className="font-bold text-3xl shrink-0 cursor-default"
          draggable="false"
        >
          Saraha4K
        </h1>
      </Link>
      <nav className="flex gap-4 shrink-0">
        <Button variant={"link"} asChild>
          <Link href={"/"}>Home</Link>
        </Button>

        {/* Create user icon */}
        {false ? (
          <></>
        ) : (
          <Button variant={"link"} asChild>
            <Link href={"#sign"}>Sign in / Register</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
