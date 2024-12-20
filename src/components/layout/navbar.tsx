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
import BrandLogo from "../shared/BrandLogo";

export default function Navbar() {
  return (
    <header className="h-14 border-b bg-background/50 sticky top-0 backdrop-blur flex items-center px-4 z-50">
      <div className="flex_between container mx-auto">
        <BrandLogo />
        <nav>
          <ul className="flex items-center gap-4">
            <ModeToggle />
          </ul>
        </nav>
        <div className="hidden">
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
