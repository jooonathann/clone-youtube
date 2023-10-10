import { getVideos } from "./utils/functions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main className="flex">
      {videos.map((video) => (
        <Link
          key={video.id}
          className="mx-2 my-2"
          href={`/watch?v=${video.filename}`}
        >
          <Image src={"/thumbnail.png"} alt="video" width={120} height={80} />
        </Link>
      ))}
    </main>
  );
}

export const revalidate = 30;
