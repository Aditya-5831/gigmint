import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  BadgeCheck,
  BarChart,
  Briefcase,
  Brush,
  Code,
  FilePlus,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Music,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  StickyNote,
  Users,
  UserSearch,
  Video,
  Wallet,
} from "lucide-react";

const FOR_CLIENTS = [
  {
    id: 1,
    title: "Post a Job",
    description:
      "Describe what you need done, set your budget, and post it to the platform.",
    Icon: StickyNote,
  },
  {
    id: 2,
    title: "Get Matched with Freelancers",
    description:
      "Gigmint recommends top talent based on your job details using AI.",
    Icon: UserSearch,
  },
  {
    id: 3,
    title: "Chat & Hire",
    description:
      "Review proposals, chat with freelancers, and hire the best fit for your job.",
    Icon: MessageCircle,
  },
  {
    id: 4,
    title: "Pay Securely",
    description:
      "Use Gigmint’s secure payment system to pay only when you're satisfied.",
    Icon: ShieldCheck,
  },
];

const FOR_FREELANCERS = [
  {
    id: 1,
    title: "Create a Profile",
    description:
      "Highlight your skills, experience, and portfolio to attract clients.",
    Icon: FilePlus,
  },
  {
    id: 2,
    title: "Find Relevant Jobs",
    description:
      "Browse job listings that match your expertise and preferences.",
    Icon: Briefcase,
  },
  {
    id: 3,
    title: "Submit Proposals",
    description:
      "Write compelling proposals and chat with clients to win projects.",
    Icon: MessagesSquare,
  },
  {
    id: 4,
    title: "Get Paid",
    description:
      "Complete the work and receive payments securely through Gigmint.",
    Icon: Wallet,
  },
];

const CATEGORIES = [
  { title: "Design & Creative", Icon: Brush },
  { title: "Web Development", Icon: Code },
  { title: "Mobile Development", Icon: Smartphone },
  { title: "Writing & Translation", Icon: PenTool },
  { title: "Video & Animation", Icon: Video },
  { title: "Data & Analytics", Icon: BarChart },
  { title: "Marketing", Icon: Megaphone },
  { title: "Music & Audio", Icon: Music },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trusted Freelancers",
    description: "Verified talent with proven skills and positive reviews.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Matching",
    description: "Smart recommendations to connect you with the best fit.",
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description:
      "Tools built for efficient communication and project delivery.",
  },
  {
    icon: Rocket,
    title: "Fast Hiring Process",
    description: "Hire top talent in minutes, not days.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "We ensure high standards and support if issues arise.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Gupta",
    role: "Founder, PixelStart",
    text: "Gigmint helped me hire a top designer within 24 hours. Super easy and reliable!",
    image: "/testimonials/testimonial1.jpg",
  },
  {
    name: "John Raj",
    role: "Freelance UX Designer",
    text: "I landed my dream project on Gigmint within a day of signing up.",
    image: "/testimonials/testimonial2.jpg",
  },
  {
    name: "Aisha Khan",
    role: "Product Manager, Finstack",
    text: "The AI-matching made hiring super fast. I love how smooth it is!",
    image: "/testimonials/testimonial3.webp",
  },
];

export const TRUSTED_BY = [
  {
    name: "Airbnb",
    image: "/logos/airbnb.png",
    alt: "Airbnb logo",
  },
  {
    name: "Shopify",
    image: "/logos/shopify.png",
    alt: "Shopify logo",
  },
  {
    name: "Toptal",
    image: "/logos/toptal.png",
    alt: "Toptal logo",
  },
  {
    name: "Paypal",
    image: "/logos/paypal.png",
    alt: "Paypal logo",
  },
  {
    name: "Notion",
    image: "/logos/notion.png",
    alt: "Notion logo",
  },
  {
    name: "Google",
    image: "/logos/google.png",
    alt: "Google logo",
  },
];

const HomePage = () => {
  return (
    <div className="h-full w-full py-10">
      <MaxWidthWrapper className="space-y-10">
        {/* Hero section */}
        <section className="flex items-center justify-evenly">
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2 text-center">
              <h1 className="text-center text-4xl font-bold text-neutral-900 sm:text-5xl">
                “Hire top talent. Instantly.”
              </h1>
              <p className="text-muted-foreground text-base">
                “Find freelance experts powered by AI-enhanced discovery.”
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="rounded-sm px-6">Find Talent</Button>
              <Button
                variant={"outline"}
                className="border-primary text-primary hover:text-primary rounded-sm px-6"
              >
                Start Selling
              </Button>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image src={"/homepage.png"} width={500} height={500} alt="home" />
          </div>
        </section>

        {/* How it works section */}
        <section className="flex flex-col items-center justify-center space-y-5">
          <h2 className="border-primary border-b-4 pb-2 text-2xl font-semibold text-neutral-900 sm:text-3xl">
            How it works?
          </h2>
          <div className="flex w-full flex-col items-center justify-center space-y-5 sm:flex-row">
            <div className="w-1/2 space-y-5">
              <h3 className="text-center font-semibold text-pretty sm:text-xl">
                How gigmint works for clients
              </h3>
              <div className="flex flex-col space-y-3 px-5">
                {FOR_CLIENTS.map(({ id, description, title, Icon }) => (
                  <div
                    key={id}
                    className={cn(
                      "relative flex flex-col items-center gap-3 sm:flex-row",
                      (id === 2 || id === 4) && "sm:self-end",
                    )}
                  >
                    <div className="ring-primary -left-9 flex size-5 items-center justify-center rounded-full text-xs text-neutral-900 ring-1 sm:absolute">
                      {id}
                    </div>
                    <div className="w-xs space-y-3 rounded-md p-5 shadow-sm ring-1 ring-gray-200">
                      <div className="w-fit rounded-md p-2 ring-1 ring-gray-200">
                        <Icon className="text-primary" />
                      </div>
                      <span className="font-medium text-neutral-900">
                        {title}
                      </span>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary h-px w-1/2 sm:mt-56 sm:h-[40rem] sm:w-px" />

            <div className="w-1/2 space-y-5">
              <h3 className="text-center font-semibold text-pretty sm:text-xl">
                How gigmint works for freelancers
              </h3>
              <div className="flex flex-col space-y-3 px-5">
                {FOR_FREELANCERS.map(({ id, description, title, Icon }) => (
                  <div
                    key={id}
                    className={cn(
                      "relative flex flex-col items-center gap-3 sm:flex-row",
                      (id === 1 || id === 3) && "sm:self-end",
                    )}
                  >
                    <div className="ring-primary left-[21rem] flex size-5 items-center justify-center rounded-full text-xs text-neutral-900 ring-1 sm:absolute">
                      {id}
                    </div>
                    <div className="w-xs space-y-3 rounded-md p-5 shadow-sm ring-1 ring-gray-200">
                      <div className="w-fit rounded-md p-2 ring-1 ring-gray-200">
                        <Icon className="text-primary" />
                      </div>
                      <span className="font-medium text-neutral-900">
                        {title}
                      </span>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories section */}
        <section className="mt-20 space-y-10">
          <div className="space-y-2 px-5 text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              Explore Top Categories
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm">
              Find talent in every field — from coding to creativity. Choose
              from diverse skills tailored for your next big project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 px-5 sm:grid-cols-3 md:grid-cols-4">
            {CATEGORIES.map(({ Icon, title }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center gap-3 rounded-md p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
              >
                <Icon className="text-primary" size={32} />
                <span className="font-medium text-neutral-800">{title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features section */}
        <section className="mt-20 space-y-10">
          <div className="space-y-2 px-5 text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              Why Choose Gigmint
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm">
              We combine technology and human insight to deliver the best
              freelance experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {FEATURES.map(({ description, icon: Icon, title }) => (
              <div
                key={title}
                className="space-y-2 rounded-lg border p-6 text-left shadow-sm transition"
              >
                <div className="text-primary inline-flex rounded-md border p-3">
                  <Icon className="text-primary size-5" />
                </div>
                <h4 className="text-base font-semibold text-neutral-900">
                  {title}
                </h4>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20 space-y-10">
          <div className="space-y-2 px-5 text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              What our users say
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm">
              Hear it directly from our clients and freelancers who use Gigmint
              daily.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ image, name, role, text }, index) => (
              <div
                key={index}
                className="space-y-2 rounded-lg border p-6 text-left shadow-sm transition"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="absolute object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{name}</p>
                    <p className="text-muted-foreground text-sm">{role}</p>
                  </div>
                </div>

                <p className="text-sm text-neutral-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted by section */}
        <section className="mt-20 space-y-10">
          <div className="space-y-2 px-5 text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              Trusted by leading companies
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm">
              Gigmint is trusted by industry leaders to find top freelance
              talent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {TRUSTED_BY.map(({ image, name, alt }) => (
              <div
                key={name}
                className="flex items-center justify-center space-y-2 rounded-lg border p-12 text-left shadow-sm transition"
              >
                <Image
                  src={image}
                  alt={alt}
                  width={40}
                  height={40}
                  className="absolute object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to action section */}
        <section className="mt-20 space-y-10">
          <div className="space-y-2 px-5 text-center">
            <h2 className="text-2xl font-bold text-neutral-900">
              Ready to find top talent or get hired fast?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-sm">
              Join thousands of businesses and freelancers using Gigmint for
              seamless hiring.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button className="py- w-48 px-6 py-3 text-sm font-semibold">
                Find talent
              </Button>
              <Button
                variant={"outline"}
                className="border-primary text-primary hover:text-primary w-48 px-6 py-3 text-sm font-semibold"
              >
                Start Freelancing
              </Button>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
