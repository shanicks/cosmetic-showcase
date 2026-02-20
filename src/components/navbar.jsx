"use client";

import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Story", href: "#story" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Packaging", href: "#packaging" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  return (
    <header className="w-full py-5 px-6 lg:px-12 bg-[#A98F86]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            dangila
          </span>
          <span className="text-primary text-lg">*</span>
        </a>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="size-5 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingBag className="size-5 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="size-5 text-foreground" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
