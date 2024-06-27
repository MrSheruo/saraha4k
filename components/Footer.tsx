import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center group bg-slate-950">
      <h2 className="font-semibold text-gray-300 hover:text-gray-50">
        Made with ❤ by{" "}
        <Link
          target="_blank"
          className="group-hover:underline underline-offset-4"
          href={"https://ahmed-yasser-portfolio.vercel.app/"}
        >
          Ahmed Yasser
        </Link>
      </h2>
    </footer>
  );
}
