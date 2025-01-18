import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { contactDetails } from "@/database/home";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="flex justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Md Abdul Basir
            </h3>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Image
                className="rounded-full"
                src={"/images/logo.jpg"}
                alt=""
                height={50}
                width={80}
              />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © Abdul Basir {new Date().getFullYear()}
                <span className="text-gray-700"> · </span>
              </p>
              <ul className="inline-flex gap-1">
                {contactDetails.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                      href={item.link}
                      aria-label="Twitter"
                      target="_blank"
                    >
                      <item.Icon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
