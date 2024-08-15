"use client";

import "@/components/styles/blog.css";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navbardata } from "@/data/navbardata";
import { Mail, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section>
      <header className="fixed top-0 w-full z-20">
        <div className="container">
          <Link href="/">
            <div className="">
              <Image
                src="/logo.png"
                alt="logo"
                width={400}
                height={400}
                className="w-24"
              />
            </div>
          </Link>
          <nav className="hidden lg:flex">
            <ul>
              {navbardata.map(({ id, name, route }) => (
                <li key={id}>
                  <Link href={route}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex flex-col justify-center items-end">
            <div className="flex justify-center items-center space-x-2 text-sm font-semibold">
              <Phone fill="white" className="w-4" />
              <h1>+91 9876543210</h1>
            </div>
            <div className="flex justify-center items-center space-x-2 text-sm font-semibold">
              <Mail className="w-4" />
              <h1>safireconsultants0011@gmail.com</h1>
            </div>
          </div>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-between bg-black/90 border-none">
                <div>
                  <ul className="flex flex-col space-y-5">
                    {navbardata.map(({ id, name, route }) => (
                      <li key={id}>
                        <Link href={route}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="flex justify-center items-center space-x-2 text-sm font-semibold">
                    <Phone fill="white" className="w-4" />
                    <h1>+91 9876543210</h1>
                  </div>
                  <div className="flex justify-center items-center space-x-2 text-sm font-semibold">
                    <Mail className="w-4" />
                    <h1>safireconsultants@gmail.com</h1>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="container md:py-32 py-20">
        <div>
          <h1 className="md:text-4xl text-3xl text-center font-semibold">
            Founder and Managing Director
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-10 mt-20">
          <div>
            <Image
              src="/subham.jpeg"
              alt="subham"
              width={500}
              height={500}
              className="md:w-96 w-72 rounded-lg"
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="md:text-3xl text-2xl font-semibold text-white">Words from the CEO:</h1>
            <p className="mt-10 text-lg md:text-justify">
              At Safire Consultants, we believe that every business, no matter
              its size or industry, has the potential to achieve greatness. As
              an engineer with a strong foundation in business consulting,I am
              proud to lead a team dedicated to partner with clients to achieve
              their goals. Safire Consultants was founded with the goal of
              providing comprehensive solutions to businesses across various
              sectors. Whether it&apos;s refining operations, enhancing your online
              presence, or crafting effective strategies, we are committed to
              partnering with you to drive success. With our tagline, Partnering
              for Progress, we emphasize our dedication to working hand-in-hand
              with our clients to achieve lasting success. Let&apos;s work together
              to elevate your business to new heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
