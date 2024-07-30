"use client";

import React from "react";
import "./Home.css";
import Image from "next/image";
import { Mail, Menu, Phone } from "lucide-react";
import { navbardata } from "@/data/navbardata";
import Link from "next/link";
import Review from "@/components/Review/Review";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactForm from "../contact/ContactForm";
import { Button } from "../ui/button";
import { useForm, ValidationError } from "@formspree/react";

const servicesdata = [
  {
    name: "HR Consultancy",
    image: "/hrc.jpg",
  },
  {
    name: "Marketing Consultancy",
    image: "/marc.jpg",
  },
  {
    name: "Management Consultancy",
    image: "/mc.jpg",
  },
  {
    name: "Strategy Consultancy",
    image: "/sc.jpg",
  },
  {
    name: "Operations Consultancy",
    image: "/opc.jpg",
  },
  {
    name: "Tech Consultancy",
    image: "/tc.jpg",
  },
];

const Home = () => {
  return (
    <body>
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
      <section className="relative hero z-0">
        <div className="relative container z-10">
          <h2>Partnering for progress</h2>
          <Link href="/#services">
            <Button variant={"secondary"} className="mt-10">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="absolute top-0 h-full w-[100%] bg-black/40"></div>
      </section>
      <section className="about py-20" id="about">
        <div className="container">
          <div className="flex justify-between mb-10">
            <div className="">
              <h2 className="text-xl">Safire Consultants</h2>
              <hr className="w-52" />
            </div>
            <div className="hidden md:flex">
              <Image
                src="/arrow.png"
                alt="arrow"
                width={100}
                height={100}
                className="w-32"
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
      </section>
      <section className="services py-20" id="services">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-xl">Our Services</h2>
            <hr className="w-44" />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-6">
            {servicesdata.map(({ name, image }, idx) => (
              <div
                className="flex flex-col bg-white/40 p-4 rounded-xl"
                key={idx}
              >
                <Image
                  src={image}
                  width={400}
                  height={400}
                  className="w-80 rounded-lg"
                  alt={image}
                />
                <h1 className="mt-2 font-semibold text-lg ">{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-items">
            <Review />
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <h2>Our Partners</h2>
          {/* <marquee behavior="scroll" direction="left">
          <Image src="https://via.placeholder.com/150" alt="Google" />
          <Image src="https://via.placeholder.com/150" alt="Glassdoor" />
          <Image src="https://via.placeholder.com/150" alt="Goodfirms" />
        </marquee> */}
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-xl">Reach Us</h2>
            <hr className="w-32" />
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-10">
            <div className="flex justify-center items-center">
              <Image
                src="/contactimg.jpg"
                alt="contactimg"
                width={500}
                height={400}
                className="lg:w-max w-full h-full select-none rounded-lg"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2024 Safire Consultants. All rights reserved.</p>
        </div>
      </footer>
    </body>
  );
};

export default Home;
