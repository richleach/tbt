import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Sheet from "../components/Sheet";
import Contact from "@/app/contact/page";

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <footer
        className="flex flex-col  text-white items-center"
        style={{ borderTop: "thin solid #9333EA" }}
      >
        <div className="container px-6 mx-auto">
          <div className="flex w-full py-4 px-2 items-center">
            <nav className="items-stretch text-center mx-auto">
              <SocialIcon
                url="https://www.facebook.com/TheBeatenTrailLLC"
                target="_blank"
              />{" "}
              &nbsp;
              <SocialIcon
                url="https://www.youtube.com/channel/UCnIyytMWGt41WZAc6QocKcQ"
                target="_blank"
              />{" "}
              &nbsp;
              <SocialIcon
                url="https://www.tiktok.com/@thebeatentrail"
                target="_blank"
                bgColor="grey"
              />{" "}
              &nbsp;
              <SocialIcon
                url="https://www.instagram.com/thebeatentrail/"
                target="_blank"
              />{" "}
              &nbsp;
              <SocialIcon
                url="https://twitter.com@trailbeaten"
                target="_blank"
              />
            </nav>
            <div className="align-bottom text-left mx-auto text-white ml-1 mr-1">
              &copy; Copyright {getYear()} The Beaten Trail, LLC. All Rights
              Reserved.
            </div>
            <Link href={`/about/`}>
              <span className="ml-4 mr-4 font-semibold text-white cursor-pointer">
                About
              </span>
            </Link>
            <Link href={`/contact/`}>
              <span className="ml-4 mr-4 font-semibold text-white cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
