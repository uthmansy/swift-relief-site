import Container from "../Container";
import ButtonLink from "../ButtonLink";

function Hero() {
  return (
    <div className="md:relative h-[70vh] md:h-[80vh] flex items-center">
      <Container>
        <div className="z-30 relative">
          <div className="flex flex-col space-y-7 md:space-y-9 max-w-lg">
            <div>
              <h1
                className={`text-4xl md:text-6xl lg:text-5xl font-semibold max-w-lg`}
              >
                Transforming Lives Through Evidence-Based Humanitarian Action
              </h1>
            </div>

            <p className="opacity-90">
              Building resilience and restoring hope in conflict-affected
              communities
            </p>
            <div className="flex space-x-3">
              <ButtonLink href="/about">More About Us</ButtonLink>
              <ButtonLink type="white" href="/donate">
                Donate ➝
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
