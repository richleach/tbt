import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&type=short&playlistId=UUnIyytMWGt41WZAc6QocKcQ&key=${process.env.YOUTUBE_API_KEY}`
  );
  //playlistId=UUnIyytMWGt41WZAc6QocKcQ
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PlaylistPage() {
  const data = await getData();
  //console.log(data.items.snippet)
  return (
    <div className="container px-10 mx-auto mb-8">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6 shadow-purple-600 border-purple-600">
        <div className="pl-3 w-full">
          <h2 style={{ borderBottom: "thin solid #9333EA" }}>
            YouTube Playlist
          </h2>
          <h4 className="text-center">
            <Link
              href="https://www.youtube.com/@TheBeatenTrail"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enjoy some of our most recent videos, recorded on the trail! Visit
              us on Youtube: https://www.youtube.com/@TheBeatenTrail
            </Link>
          </h4>

          <br />
          <div
            className="bg-white flex flex-row justify-center"
            style={{ paddingBottom: "30px" }}
          >
            {" "}
            <br />
            <br />
            <div className="wrap">
              {data.items.map((item: any) => (
                <div
                  key={item.id}
                  className="moviewrapper drop-shadow-lg"
                  style={{
                    border: "2px solid #ea580c",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.snippet.thumbnails.maxres.url}
                      height={200}
                      width={390}
                      alt={item.snippet.title}
                      style={{ borderBottom: "thin solid #ea580c" }}
                    />
                    <div style={{ backgroundColor: "#CBD5E1" }}>
                      &nbsp; {item.snippet.title.slice(0, 38)}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
