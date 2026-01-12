import React from "react";

function VideoSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* TEXT */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-green-800">
            Voices of the children
          </h2>
          <p className="text-gray-500">
            A transformative Agenda Boko-Haram and Education in the countries of
            the lake-Chad region.
          </p>
        </div>

        {/* VIDEO */}
        <div className="max-w-4xl w-full mx-auto aspect-video shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/zIzjgKQDYvo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
