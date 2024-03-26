import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const amazonData = {
  amazon: [
    {
      id: "1",
      title: "Litt Industries",
      image: "/images/partners/littIndustries.png",
      description:
        "GoPro HERO8 Black E-Commerce Packaging - Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization",
      link: "http://littindustries.com",
    },
    {
      id: "2",
      title: "Black Rock Synthetics",
      image: "/images/partners/blackRockSynthetics.png",
      description:
        "Insta360 X3 - Get Set Kit Waterproof 360 Action Camera with 1/2&quot;  48MP Sensors, 5.7K 360 Active HDR Video, 72MP 360 Photo, 4K Single-Lens, 60fps Me Mode, Stabilization, 2.29&quot;  Touchscreen, AI Editing",
      link: "http://blackrocksynthetics.com",
    },
    {
      id: "3",
      title: "CFSNAP.COM",
      image: "/images/partners/cfsnap.png",
      description:
        "X~PWR H8 All-Weather External Power Kit for GoPro HERO8 with 66'' Cable",
      link: "https://www.cfsnap.com",
    },
    {
      id: "4",
      title: "Ride Royal Blue, TN",
      image: "/images/partners/rideRoyalBlue.png",
      description:
        "RAM Mounts RAP-401U Tough-Claw Large Clamp Ball Base with C Size 1.5' Ball for Rails 1' to 2.25' in Diameter",
      link: "http://rideroyalblue.com",
    },
    {
      id: "5",
      title: "PA Dirt Riders",
      image: "/images/partners/paDirtriders.png",
      description:
        "Taisioner Super Clamp Mount Double Ball Head Adapter Compatible with GoPro AKASO DJI Action or DSLR Digital Camera Monitor / LED Lights / Ronin-M/Ronin MX / Freefly MOVI Accessories",
      link: "https://www.padirtriders.com/",
    },
    {
      id: "6",
      title: "Rowdy Life",
      image: "/images/partners/rowdyLife.png",
      description:
        "RAM Mounts RAP-B-404U Tough-Claw Medium Clamp Base with B Size 1' Ball for Rails 1' to 1.875' in Diameter",
      link: "https://rowdylifedesigns.com/",
    },
    {
      id: "7",
      title: "Arizona Kid",
      image: "/images/partners/arizonaKid.png",
      description:
        "USAMS ISAIBELL Multi Charging Cable 2Pack 4FT 4 in 1 Nylon Braided Multiple USB Fast Charging Cord Adapter Type C Micro USB Port Connectors Compatible Cell Phones Tablets and More",
      link: "https://www.youtube.com/c/ArizonaKid/featured",
    },
    {
      id: "8",
      title: "Pine Grove Yamaha",
      image: "/images/partners/pgPowersports.png",
      description:
        "The Original MuffPot Exhaust Food Warmer for Motorsports Vehicles. Snowmobile, ATV, UTV, and Motorcycles",
      link: "https://www.pgpowersports.com/",
    },
    {
      id: "9",
      title: "Knit Decor Gifts",
      image: "/images/partners/knitDecorGifts.png",
      description:
        "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
      link: "https://www.etsy.com/shop/KnitDecorGifts",
    },
    {
      id: "10",
      title: "DTF Powersports",
      image: "/images/partners/dtfPowerSports.png",
      description:
        "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
      link: "https://dtfpowersports.com/",
    },
    {
      id: "9",
      title: "Slawdog Off-road Shenanigans",
      image: "/images/partners/slawdog.png",
      description:
        "LED Work Light Rechargeable, 2 COB 2500LM Folding Portable Flood Light with Magnetic Base and 360° Rotation Stand, Waterproof Spotlights for Camping Car Repairing Emergency Job Site Lighting (2, Red)",
      link: "https://www.youtube.com/@slawdogshenanigans",
    },
  ],
};

export default function partnersAndFriends() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3" style={{ borderLeft: "thin solid #EA580C" }}>
          <h2 style={{ borderBottom: "thin solid #ea580c" }}>
            Partners &amp; Friends
          </h2>
          {/* <div
            className="p-2 mb-4 mt-4 text-black bg-white border-2 rounded-lg md:col-span-2 md:row-span-2  md:mb-0 drop-shadow-xl"
            style={{
              backgroundImage: 'url("../images/groupShot01.png")',
              backgroundSize: "cover",
              height: "34rem",
            }}
          ></div> */}
          <div>
            <h3>Our Partners &amp; Friends</h3>
            <p>
              Over the years we&apos;ve done lots of work with other people and
              companies, and this is our shout-out to them. Should you find
              yourself needing any of the products/services they offer reach out
              to them first.
            </p>
            <br />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {amazonData.amazon.map((a) => (
              <Card key={a.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <Link href={a.link} target="_blank">
                    <div className="w-full">
                      <CardTitle className="border-b border-orange-600">
                        {a.title}
                      </CardTitle>
                      <CardContent className="pt-4 items-center align-middle">
                        <center>
                          <Image
                            src={a.image}
                            alt={a.title}
                            width={200}
                            height={200}
                            className="rounded-lg drop-shadow-lg border-2 border-slate-600"
                          />
                        </center>
                      </CardContent>
                      <CardDescription className="w-full">
                        &nbsp;
                      </CardDescription>
                    </div>
                  </Link>
                </CardHeader>
                {/* <CardFooter className="flex justify-between pl-3">
                  
                  <div className="w-full content-end">
                    <Link href={a.link} target="_blank">
                      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 w-full">
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </CardFooter> */}
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
