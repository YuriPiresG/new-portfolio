"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <menu className="absolute bottom-5 right-3">
      <Popover>
        <PopoverTrigger
          onClick={toggle}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border border-black bg-purple-600 transition ease-in ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <Menu className="" />
        </PopoverTrigger>
        <PopoverContent onCloseAutoFocus={toggle} className="mr-2 grid w-44 gap-3 border border-black bg-gray-300">
          <Link href="/home">Home</Link>

          <Link href="/projects">Projetos</Link>

          <Link href="/socials">Redes Sociais</Link>
        </PopoverContent>
      </Popover>
    </menu>
  );
}
