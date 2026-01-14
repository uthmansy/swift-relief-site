"use client";

import { TeamMember } from "@/app/types/team";
import React, { useState } from "react";
import MemberDetailsModal from "./MemberDetailsModal";
import { AVATAR_DUMMY, KARIM } from "@/app/constants/IMAGES";

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Mahamat Alkhassim Maki",
    role: "Art Therapist",
    bio: `Mahamat was born and raised in Karal, which is in the Lake Chad region. He is a dedicated art and mental health therapist who is deeply committed to healing and uplifting communities that have been touched by conflict. He is a husband and father of five, and both his personal and professional lives are strongly connected to the social fabric of the area. He specializes in culturally relevant, trauma-informed therapy that uses indigenous art forms to help vulnerable people get stronger, recover, and speak out. He does this by combining rigorous artistic and technical training with a lot of psychosocial practice.`,
    image: AVATAR_DUMMY.src,
  },
  {
    id: "2",
    name: "Elhadji Adamou Soulaymane Abdou Karim ",
    bio: `
He was born in Zinder, the second-largest city in Niger. ELHADJI ADAMOU SOULEYMANE Abdou Karim is a multidisciplinary academic artist, bronze medallist at the IXth Francophonie Games in Kinshasa in the Giant Puppets category.
Actor, puppeteer, and set designer, he holds a professional degree in Arts and Theatrical Techniques obtained from the International School of Theatre of Benin, as well as a Master's degree in Performing Arts Research from Abdou MOUMOUNI DIOFFO University of Niamey.`,
    role: "Art Therapist",
    image: KARIM.src,
  },
];

function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="py-10 lg:py-14">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl text-green-700">
            Our Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {TEAM_MEMBERS.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="text-center focus:outline-none"
            >
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
                src={member.image}
                alt={member.name}
              />

              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium capitalize  text-gray-800 sm:text-base lg:text-lg">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                  {member.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <MemberDetailsModal
        open={!!selectedMember}
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}

export default Team;
