export const news = [
  {
    slug: "network-research-report",
    title: "Network Research Report",
    year: 2024,
    pdfUrl: "/pdfs/Network_Research_Report.pdf",
    thumbnail: "/pdfs/Network_Research_Report.png",
    description:
      "A research publication on trauma-informed care and resilience.",
    content: (
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-6 lg:space-y-8">
              <span className="inline-flex items-center text-sm text-gray-600">
                News & Partnerships
              </span>

              <h1 className="text-3xl font-bold text-green-800 lg:text-5xl">
                Building a Future of Learning and Resilience: A New Partnership
                for Lake Chad
              </h1>

              <p className="text-lg text-gray-800">
                In a spirit of shared purpose and collaboration, a team from the
                I AM PROJECT, led by Regional Coordinator Abdulaziz Mala,
                recently met with His Excellency Aboubakar Ousmane Tchoroma,
                Chad’s Minister of National Education and Civic Promotion.
              </p>

              <p className="text-lg text-gray-800">
                This important conversation marked the first step in a new
                partnership aimed at supporting children and families in the
                Lake Chad region through community-led research.
              </p>

              <p className="text-lg text-gray-800">
                Our shared goal is to listen, learn, and co-create solutions for
                the region’s unique challenges — including the impacts of
                climate change, ensuring continuity of education for displaced
                children, and integrating valuable local knowledge into formal
                education systems.
              </p>

              <p className="text-lg text-gray-800">
                A key focus of this initiative is strengthening community
                well-being by learning from indigenous practices that promote
                resilience, healing, and sustainable recovery.
              </p>

              <blockquote className="border-l-4 border-green-700 ps-4 italic text-gray-800 text-lg">
                The most meaningful change begins with humility, partnership,
                and walking alongside communities.
              </blockquote>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Guiding Principles for the Partnership
                </h3>

                <ul className="list-disc list-outside space-y-3 ps-5 text-lg text-gray-800">
                  <li>
                    <strong>Learning that Leads to Action:</strong> Research
                    will directly inform education policy, teacher training, and
                    community-relevant learning materials.
                  </li>
                  <li>
                    <strong>Shared Leadership:</strong> Chadian educators,
                    ministry experts, and local community leaders will co-design
                    the research from the outset.
                  </li>
                  <li>
                    <strong>Turning Insight into Support:</strong> Success will
                    be measured by transforming research knowledge into tangible
                    programs that expand access to quality education.
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-800">
                We are deeply grateful for Minister Tchoroma’s leadership and
                the Ministry’s commitment to shaping education policies grounded
                in community insight. This partnership reflects a shared belief
                that lasting impact is built through trust, respect, and
                collaboration.
              </p>

              <p className="text-lg text-gray-800">
                We are honoured to begin this journey with the Ministry and the
                resilient communities of the Lake Chad region — united in the
                conviction that every child deserves a bright, secure, and
                meaningful future.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-linear-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
          <div className="sticky top-0 py-8 lg:ps-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Focus Areas
              </h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Education Policy & Research</li>
                <li>• Climate Resilience</li>
                <li>• Community Well-being</li>
                <li>• Indigenous Knowledge Systems</li>
                <li>• Child Protection & Learning Continuity</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Region</h4>
              <p className="mt-2 text-gray-700">
                Lake Chad Basin — Chad, Nigeria, Niger, and surrounding
                communities
              </p>
            </div>
          </div>
        </div>
        {/* End Sidebar */}
      </div>
    ),
  },
];
