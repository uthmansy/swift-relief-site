import Image from "next/image";
import Container from "../components/Container";
import TopNav from "../components/Header/TopNav";
import Footer from "../components/blocks/Footer";
import {
  GALLERY_IMG_1,
  GALLERY_IMG_2,
  GALLERY_IMG_3,
} from "@/app/constants/IMAGES";

function AboutPage() {
  return (
    <div>
      <TopNav />

      <section className="py-10">
        <Container>
          <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="py-8 lg:pe-8">
                <div className="space-y-6 lg:space-y-8">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    About Us
                  </span>

                  <h1 className="text-3xl font-bold text-green-800 lg:text-5xl">
                    From Crisis Response to Community Resilience
                  </h1>

                  <p className="text-lg text-gray-800">
                    Our organisation has extensive, field-tested experience in
                    youth empowerment, Mental Health and Psychosocial Support
                    (MHPSS), trauma-informed care, and community-based
                    resilience in conflict-affected settings. We work across the
                    humanitarian-development-peace nexus, supporting vulnerable
                    populations from the point of emergency response through to
                    long-term recovery and resilience.
                  </p>

                  <p className="text-lg text-gray-800">
                    Our interventions range from immediate humanitarian action —
                    including the provision of MHPSS services to children of
                    internally displaced persons upon arrival at camps — to
                    sustained development and research initiatives designed to
                    address the root causes and long-term impacts of conflict,
                    displacement, and social fragmentation.
                  </p>

                  {/* Image Grid */}
                  <div className="text-center">
                    <div className="grid lg:grid-cols-2 gap-3">
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                        <figure className="relative w-full h-60">
                          <Image
                            width={300}
                            height={300}
                            className="size-full absolute top-0 start-0 object-cover rounded-xl"
                            src={GALLERY_IMG_1.src}
                            alt="Community engagement"
                          />
                        </figure>
                        <figure className="relative w-full h-60">
                          <Image
                            width={300}
                            height={300}
                            className="size-full absolute top-0 start-0 object-cover rounded-xl"
                            src={GALLERY_IMG_3.src}
                            alt="Youth empowerment"
                          />
                        </figure>
                      </div>

                      <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                        <Image
                          width={300}
                          height={600}
                          className="size-full absolute top-0 start-0 object-cover rounded-xl"
                          src={GALLERY_IMG_2.src}
                          alt="Field work in conflict-affected communities"
                        />
                      </figure>
                    </div>

                    <span className="mt-3 block text-sm text-gray-500">
                      Field-based programmes and community engagement
                    </span>
                  </div>

                  <p className="text-lg text-gray-800">
                    We are currently implementing a multi-year mental therapy
                    research initiative — the IAM Project — in the Lake Chad
                    region. This project is delivered in collaboration with
                    leading academic institutions, including the Open University
                    (United Kingdom), the University of Diffa (Niger), and the
                    University of Francophonie (Chad). The research focuses on
                    evidence-based mental health interventions tailored to
                    conflict-affected populations.
                  </p>

                  <p className="text-lg text-gray-800">
                    In Borno State, Nigeria, we have successfully delivered
                    European Union-funded programmes and partnered with the
                    British Council on initiatives focused on social cohesion,
                    economic empowerment, and the reintegration of education and
                    WASH services in fragile communities.
                  </p>

                  <blockquote className="border-l-4 border-green-700 ps-4 italic text-gray-800 text-lg">
                    Our approach combines frontline psychosocial support with
                    rigorous research, strong partnerships, and community-led
                    solutions to ensure sustainable impact.
                  </blockquote>

                  <p className="text-lg text-gray-800">
                    Beyond humanitarian response, we actively collaborate with
                    regional and international partners to promote inclusive
                    development. Our work with Trend in Africa supports science
                    festivals that encourage innovation and critical thinking,
                    while our partnership with UN Women has focused on training
                    women in political participation and leadership.
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Our Track Record
                    </h3>

                    <ul className="list-disc list-outside space-y-3 ps-5 text-lg text-gray-800">
                      <li>
                        Delivery of MHPSS services in IDP camps and returnee
                        communities
                      </li>
                      <li>
                        Multi-year, cross-border research projects in the Lake
                        Chad region
                      </li>
                      <li>
                        EU-funded programmes in social cohesion and basic
                        services
                      </li>
                      <li>
                        Strategic partnerships with academic institutions,
                        donors, and UN agencies
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg text-gray-800">
                    This breadth of experience — from emergency response to
                    high-level multi-stakeholder collaboration — demonstrates
                    our consistent ability to design and deliver complex
                    programmes with measurable outcomes. We remain committed to
                    supporting communities as they move from crisis toward
                    stability, dignity, and long-term resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar (optional summary) */}
            <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-linear-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
              <div className="sticky top-0 py-8 lg:ps-8 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Areas of Focus
                  </h4>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li>• Mental Health & Psychosocial Support</li>
                    <li>• Youth Empowerment</li>
                    <li>• Trauma-Informed Care</li>
                    <li>• Community Resilience</li>
                    <li>• Applied Research</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Regions of Work
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Nigeria, Niger, Chad, and the wider Lake Chad Basin
                  </p>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-200">
        <Footer />
      </section>
    </div>
  );
}

export default AboutPage;
