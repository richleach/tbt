import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3" style={{ borderLeft: "thin solid #EA580C" }}>
          <h2 style={{ borderBottom: "thin solid #ea580c" }}>About Us</h2>

          <h3>Michael Herrmann - Head Honcho</h3>
          <Image
            src="/images/youtubeScreen.png"
            height={200}
            width={200}
            alt="da man...."
          />
          <p>
            Some damn good p tag stuff goes in here. Some damn good p tag stuff
            goes in here. Some damn good p tag stuff goes in here.{" "}
          </p>
          <h3>h3 subtitle here</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus nesciunt, velit ipsam eos voluptatum molestiae et harum
            atque aut aliquid non reprehenderit, fugit iusto magni amet
            consectetur dolorum at repellendus illo accusantium. Dignissimos
            quisquam soluta eligendi, odit, id debitis ipsum veniam, nobis
            libero reiciendis accusamus facere repellendus unde aut pariatur?{" "}
          </p>
          <h3>Smokey The Bear</h3>
          <Image
            src="/images/smokey.png"
            height={200}
            width={200}
            alt="da bear...."
          />
        </div>
      </main>
    </div>
  );
}
