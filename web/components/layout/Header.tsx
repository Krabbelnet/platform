import { Logo } from "../ui/Logo";

export function Header() {
  return (
    <header className="border-b border-orange-100 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="flex items-center gap-8 font-semibold">
          <a href="/">Home</a>
          <a href="/profiel">Profiel</a>

          <button className="rounded-full bg-orange-500 px-5 py-2 text-white">
            Inloggen
          </button>
        </nav>
      </div>
    </header>
  );
}