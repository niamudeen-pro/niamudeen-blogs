"use client";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-14 border-b bg-background/50 sticky top-0 backdrop-blur flex items-center px-4">
      <div className="flex_between container mx-auto">
        <Link href="/" className="text-xl">
          Niamudeen <span className="font-semibold">Blogs
          </span>
        </Link>
        <nav className="hidden sm:flex">
          <ul className="flex items-center gap-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <ModeToggle />
          </ul>
        </nav>
        <div className="block sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Niamudeen Blogs</SheetTitle>
                <SheetDescription>
                  <nav>
                    <ul className="flex flex-col gap-4">
                      <Link href="/">
                        <li>Home</li>
                      </Link>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
