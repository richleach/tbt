import Image from "next/image";
import Link from "next/link";
import Sheet from "../components/Sheet";
const Header = () => {
  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-4 border-b border-purple-600 align-middle">
        <div className="block md:float-left">
          <Link href="/">
            <Image
              src="/images/theBeatenTrailLogo.png"
              height={100}
              width={208}
              alt="thebeatentrail.net"
            />
          </Link>
        </div>
        <div className="block md:float-left md:contents">
          {/* {categories.map((category) => (
                    <Link key={category.name} href={`/category/${category.slug}`}>
                       <span className='mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right'>
                            {category.name}
                        </span> 
                    </Link>
                ))} */}

          {/* <span className="mt-12 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
            <Sheet />
          </span> */}

          <Link href={`/partners-and-friends/`}>
            <span className="mt-12 ml-4 font-semibold text-white align-bottom cursor-pointer md:float-right">
              Partners &amp; Friends
            </span>
          </Link>
          <Link href={`/store/`}>
            <span className="mt-12 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Store
            </span>
          </Link>

          <Link href={`/ride-with-us/`}>
            <span className="mt-12 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Ride With Us
            </span>
          </Link>
          <Link href={`/amazon-favorites/`}>
            <span className="mt-12 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Amazon Favorites
            </span>
          </Link>
          <Link href={`/videos/`}>
            <span className="mt-12 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Videos
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
