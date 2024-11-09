import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between text-white ">
      {/* start */}

      <div
        className="gap-4 text-black md:grid md:grid-cols-5 md:grid-rows-6 "
        style={{ paddingBottom: "32px" }}
      >
        {/* trail therapy */}
        <div
          className="flex justify-center mb-4 border-purple-600 border-2 rounded-lg md:col-span-3 md:row-span-6  md:mb-0 p-4 shadow-md shadow-purple-600"
          style={{
            backgroundImage: 'url("../images/moab2024-02.png")',
            backgroundSize: "cover",
          }}
        >
          <h2
            className="text-7xl pt-28 font-extrabold text-center text-slate-300"
            style={{
              textShadow: "1px 1px #000",
              lineHeight: "7.5rem",
              fontSize: "6.0rem",
            }}
          >
            <Link href={`/moab2024/`}>
              Thank you
              <br /> MOAB
            </Link>
          </h2>
        </div>
        {/* visit our store */}
        <div
          className="col-start-4 p-2 mb-4 text-black border-purple-600 border-2 rounded-lg md:col-span-2 md:row-span-2  md:mb-0 shadow-md shadow-purple-600"
          style={{
            backgroundImage: 'url("../images/storesOpen.png")',
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center" style={{ marginTop: "10px" }}>
            <Link href={`/store/`}>
              <button className="px-3 py-1 text-2xl font-semibold text-white bg-purple-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 drop-shadow-lg">
                Our Store is Now Open
              </button>
            </Link>
          </div>
          <Link href={`/store/`}>
            <Image
              src="/images/cart.png"
              height={177}
              width={223}
              alt="Visit our store"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10"
            />
          </Link>
        </div>
        {/* watch us on youtube */}
        <div className="col-start-4 row-start-3 mb-5 md:mb-3 border-2 rounded-lg  md:col-span-2 md:row-span-2 bg-white border-purple-600 shadow-md shadow-purple-600">
          <div className="flex justify-center" style={{ marginTop: "10px" }}>
            <Link href={`/videos/`}>
              <button className="px-3 py-1 text-2xl font-semibold text-white bg-purple-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 drop-shadow-lg">
                Watch Us On Youtube
              </button>
            </Link>
          </div>
          <Link href={`/videos/`}>
            <Image
              src="/images/youtubeLogo.png"
              height={126}
              width={400}
              alt="Visit our Youtube site"
              className="mx-auto drop-shadow-xl rounded-lg align-middle mt-10 mb-5"
            />
          </Link>
        </div>
        {/* amazon products */}
        <div
          className="col-start-4 row-start-4 bg-white border-2 rounded-lg md:col-span-2 md:row-span-2 md:-mt-3 border-purple-600 shadow-md shadow-purple-600"
          style={{
            backgroundImage: 'url("../images/amazonScreen.png")',
            backgroundSize: "cover",
          }}
        >
          <div
            className="flex justify-center mb-2"
            style={{ marginTop: "10px" }}
          >
            <Link href={`/amazon-favorites/`}>
              <button className="px-3 py-1 text-2xl font-semibold text-white bg-purple-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 drop-shadow-lg">
                Featured Amazon Product
              </button>
            </Link>
          </div>
          <Link href={`/amazon-favorites/`}>
            <Image
              src="https://m.media-amazon.com/images/I/71BHagROfAL._AC_SX679_.jpg"
              height={172}
              width={150}
              alt="LED Rechargeable Work Light"
              className="mx-auto drop-shadow-xl border-2 border-orange-600 rounded-lg"
            />{" "}
            <div className="flex justify-center" style={{ marginTop: "10px" }}>
              <button className="px-4 text-center  text-2xl text-black-900 font-semibold bg-white rounded-full border-orange-600 border hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 drop-shadow-lg">
                LED Rechargeable Work Light
              </button>
            </div>
          </Link>
          <div
            className="flex justify-center"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            &nbsp;
          </div>
        </div>
        {/* panorama */}
        <div className=" col-span-5 row-start-5 text-white bg-black border-2 rounded-lg md:col-span-5 md:row-span-5 flex justify-center mt-5 md:mt-2 shadow-md shadow-purple-600 border-purple-600">
          <Image
            src="/images/the-beaten-trail-panorama.png"
            width={1300}
            height={449}
            alt="The Beaten Trail Panorama"
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
