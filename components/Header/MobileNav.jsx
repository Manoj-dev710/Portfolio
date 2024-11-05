"use client";

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { name: "Home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
        <DialogDescription className="sr-only">
          Navigation menu for mobile devices.
        </DialogDescription>
        {/* logo */}
        <div className="mt-20  text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Luke<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8 mt-10">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
