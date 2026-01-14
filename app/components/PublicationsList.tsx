import Link from "next/link";
import { publications } from "../lib/publications";

function PublicationsList() {
  return (
    <div className="py-10 lg:py-14">
      <div className="grid lg:grid-cols-2 gap-6">
        {publications.map((pub) => (
          <Link
            className="group relative block rounded-xl focus:outline-hidden"
            key={pub.slug}
            href={`/publications/${pub.slug}`}
          >
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-87.5 before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-gray-900/70">
              <img
                className="size-full absolute top-0 start-0 object-cover"
                src={pub.thumbnail}
                alt={pub.title}
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                  {pub.title}
                </h3>
                <p className="mt-2 text-white/80">{pub.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
}

export default PublicationsList;
