import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between text-white">
      {/* start */}

      <div
        className="gap-4 text-black md:grid md:grid-cols-5 md:grid-rows-6"
        style={{ paddingBottom: "32px" }}
      >
        {/* trail therapy */}
        <div
          className="flex justify-center mb-4 bg-white border-2 rounded-lg md:col-span-3 md:row-span-6  md:mb-0 p-4"
          style={{
            backgroundImage: 'url("../images/dualSxs.png")',
            backgroundSize: "cover",
          }}
        >
          <h2
            className="text-4xl pt-12 font-extrabold text-center text-black"
            style={{ textShadow: "1px 1px #fff" }}
          >
            Your home for
          </h2>

          <h2
            className="text-7xl pt-24 font-extrabold text-center"
            style={{ textShadow: "1px 1px #fff" }}
          >
            Trail Therapy
          </h2>
        </div>
        {/* join our next ride */}
        <div
          className="col-start-4 p-2 mb-4 text-black bg-white border-2 rounded-lg md:col-span-2 md:row-span-2  md:mb-0"
          style={{
            backgroundImage: 'url("../images/inTheWoods.png")',
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center" style={{ marginTop: "20px" }}>
            <button className="px-3 py-1 text-2xl font-semibold text-white bg-orange-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              Join Our Next Ride
            </button>
          </div>
        </div>
        {/* watch us on youtube */}
        <div
          className="col-start-4 row-start-3 mb-4 bg-white border-2 rounded-lg md:mb-1 md:col-span-2 md:row-span-2"
          style={{
            backgroundImage: 'url("../images/youtubeScreen.png")',
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center" style={{ marginTop: "20px" }}>
            <button className="px-3 py-1 text-2xl font-semibold text-white bg-orange-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              Watch Us On Youtube
            </button>
          </div>
        </div>
        {/* amazon products */}
        <div
          className="col-start-4 row-start-4 bg-white border-2 rounded-lg md:col-span-2 md:row-span-2"
          style={{
            backgroundImage: 'url("../images/amazonScreen.png")',
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center" style={{ marginTop: "20px" }}>
            <button className="px-3 py-1 text-2xl font-semibold text-white bg-orange-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              Amazon Products
            </button>
          </div>
          <h4 className="mt-2 text-xl leading-8 text-center">
            <Image
              src="/images/amazonMuffPott.png"
              height={162}
              width={140}
              alt="Amazon Muff Pott"
            />
          </h4>
          <div
            className="flex justify-center"
            style={{ marginTop: "10px", marginBottom: "20px" }}
          >
            &nbsp;
          </div>
        </div>
        {/* panorama */}
        <div className=" col-span-5 row-start-5 text-white bg-black border-2 rounded-lg md:col-span-5 md:row-span-5 flex justify-center">
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
