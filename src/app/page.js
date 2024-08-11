import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Project from "@/app/components/Project"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
       <Navbar/>
       <Hero/>
       <Project/>
       <Certificates/>
    </main>
  );
}
