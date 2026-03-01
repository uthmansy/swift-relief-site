import { news } from "@/app/lib/news";
import Link from "next/link";

function NewsSection() {
  return (
    <div className="py-10 lg:py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) =>
          item.layout === "overlay" ? (
            /* Overlay Layout (Card 3 style) */
            <Link
              key={item.slug}
              className="group relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              href={`/news/${item.slug}`}
            >
              <div className="flex-auto p-4 md:p-6">
                <h3 className="text-xl text-white/90 group-hover:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="pt-0 p-4 md:p-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
                  Visit the site
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </Link>
          ) : (
            /* Standard Layout (Card 1 & 2 style) */
            <Link
              key={item.slug}
              className="group flex flex-col focus:outline-hidden"
              href={`/news/${item.slug}`}
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden aspect-square">
                <img
                  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl aspect-square"
                  src={item.thumbnail}
                  alt={item.title}
                />
                {/* {item.tag && (
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
                    {item.tag}
                  </span>
                )} */}
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-800">{item.description}</p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default NewsSection;
