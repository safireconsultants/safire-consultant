import React from "react";
import "./Home.css";
import Image from "next/image";
import { Mail, Menu, Phone } from "lucide-react";
import { navbardata } from "@/data/navbardata";
import Link from "next/link";
import Review from "../Review/Review";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";

const Home = () => {
  return (
    <body>
      <header className="absolute top-0 w-full z-20">
        <div className="container">
          <div className="">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className=""
            />
          </div>
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
              <h1>safireconsultants@gmail.com</h1>
            </div>
          </div>
          <div className="md:hidden">
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
      <section className="hero">
        <div className="container">
          <h2>Lorem Ipsum</h2>
          <h1>LOREM IPSUM</h1>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>
      </section>
      <section className="about py-10" id="about">
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
      <section className="services" id="services">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-xl">Our Services</h2>
            <hr className="w-52" />
          </div>
          <div className="service-items">
            <div className="service-item">
              <Image src="https://via.placeholder.com/300" alt="Service 1" />
            </div>
            <div className="service-item">
              <Image src="https://via.placeholder.com/300" alt="Service 2" />
            </div>
            <div className="service-item">
              <Image src="https://via.placeholder.com/300" alt="Service 3" />
            </div>
            <div className="service-item">
              <Image src="https://via.placeholder.com/300" alt="Service 4" />
            </div>
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
      <section className="contact">
        <div className="container">
          <h2>Reach Us</h2>
          {/* <form action="#">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
          <label for="email">Email ID</label>
          <input type="email" id="email" name="email" />
          <label for="phone">Contact No.</label>
          <input type="tel" id="phone" name="phone" />
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          <button type="submit" className="btn">Submit</button>
        </form> */}
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
