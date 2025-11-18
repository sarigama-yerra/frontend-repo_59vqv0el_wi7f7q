import { Menu, Cake, Phone, Home, BookOpenText, Images, Star } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#home", label: "Home", Icon: Home },
    { href: "#menu", label: "Menu", Icon: BookOpenText },
    { href: "#reviews", label: "Reviews", Icon: Star },
    { href: "#gallery", label: "Gallery", Icon: Images },
    { href: "#contact", label: "Contact", Icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-pink-50/60 border-b border-pink-200/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <Cake className="w-7 h-7 text-pink-600 group-hover:scale-110 transition" />
            <span className="font-black text-pink-700 tracking-tight">ohmycupcakebakehouse</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-pink-800 hover:text-pink-900 hover:bg-pink-100 transition"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-pink-100 text-pink-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-1">
              {navItems.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-pink-800 hover:text-pink-900 hover:bg-pink-100 transition"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
