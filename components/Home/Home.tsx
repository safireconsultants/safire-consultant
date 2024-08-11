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

const servicesdata = [
  {
    name: "Management Consultancy",
    image: "/mc.jpg",
    line: "Safire Consultants provides expert management consultancy services to drive business growth"
  },
  {
    name: "Strategy Consultancy",
    image: "/sc.jpg",
    line: "Safire Consultants provides expert management consultancy services to drive business growth"
  },
  {
    name: "Marketing Consultancy",
    image: "/marc.jpg",
    line: "Partner with us to elevate your market presence and achieve your business goals."
  },
  {
    name: "Operations Consultancy",
    image: "/opc.jpg",
    line: "Optimize efficiency and productivity with Safire Consultants."
  },
  {
    name: "Website Consultancy",
    image: "/tc.jpg",
    line: "Safire Consultants empowers businesses with innovative technology solutions."
  },
  {
    name: "HR Consultancy",
    image: "/hrc.jpg",
    line: "Our HR consultancy services streamline your human resource processes."
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
          <p className="text-justify">
            Welcome to{" "}
            <span className="text-xl font-semibold">Safire Consultants</span>,
            where our mission is encapsulated in our tagline:
            <span className="italic">&quot;Partnering for Progress.&quot;</span> Safire
            Consultants is a leading business consulting firm dedicated to
            empowering organizations to achieve their full potential. With
            extensive expertise in business strategy, product launches,
            branding, and marketing, Safire Consultants offers a comprehensive
            suite of services. With a deep understanding of the complex business
            landscape, our mission is to offer a comprehensive range of
            strategic consulting services tailored to meet the unique needs of
            our clients. Our services are designed to cater to businesses at all
            stages, from startups to established enterprises looking to innovate
            and grow. At Safire Consultants, our collaborative approach ensures
            we work closely with clients to develop and execute strategies that
            enhance efficiency, foster growth, and maximize profitability. Our
            team of seasoned professionals combines industry expertise with
            strategic acumen to deliver innovative solutions that drive success
            and create lasting value. Join us on your journey to business
            excellence and let Safire Consultants be your trusted advisor on the
            path to achieving your business goals.
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
            {servicesdata.map(({ name, image, line }, idx) => (
              <div className="flex flex-col justify-center items-center p-4 w-80" key={idx}>
                <Image
                  src={image}
                  width={400}
                  height={400}
                  className="w-80 rounded-lg"
                  alt={image}
                />
                <h1 className="mt-2 text-lg text-center ">{name}</h1>
                <p className="text-sm text-center mt-2">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="mb-10">
            <h2>What Our Clients Say</h2>
            <hr className="w-52" />
          </div>
          <div className="testimonial-items">
            <Review />
          </div>
        </div>
      </section>
      <section className="partners" id="clients">
        <div className="container mt-5">
          <div className="mb-10">
            <h2>Our Successful Clients</h2>
            <hr className="w-52" />
          </div>
          <Image
            src="/skycap.png"
            alt="skycap"
            width={500}
            height={500}
            className="w-96"
          />
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
