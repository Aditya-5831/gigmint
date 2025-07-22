import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t px-6 pt-10 pb-6">
      <MaxWidthWrapper>
        <div className="text-muted-foreground mx-auto grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-neutral-900">Gigmint</h3>
            <p className="text-sm">
              A modern platform connecting businesses with top freelancers.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-neutral-900">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="hover:underline">
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:underline">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-neutral-900">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-neutral-900">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-10 text-center text-xs">
          © {new Date().getFullYear()} Gigmint. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
