import ReviewSection from "./ReviewSection";

function Body() {
  return (
    <>
      <div className="mt-16 md:flex lg:justify-around lg:gap-4">
        <div className="items-center leading-tight flex flex-col lg:w-[65%]">
          <h1 className="text-5xl items-center font-extrabold font-playfair mb-5 pt-4">
            Best way to revise for your next coding interview
          </h1>
          <p className="text-2xl mb-7">
            Get everything in a single guide: Data structures, algorithms,
            patterns, visualizers, questions, examples, solutions, explanations,
            and much more!
          </p>
          <div className="block w-full text-center m-0">
            <a
              href=""
              className="group border-solid border-2 bg-black text-white text-2xl px-3 py-3 block w-full hover:bg-pink-600 hover:text-black"
            >
              Buy FREE through
              <span className="text-pink-600 pl-2 font-bold group-hover:text-black group-hover:font-extrabold">
                Gumroad
              </span>
            </a>
          </div>
          <div className="mt-4 lg:mt-12">
            <blockquote className="italic p-4 border-l-solid border-l-4 border-l-orange-400 bg-gray-200 lg:leading-7">
              "Awesome! Love how the concepts are explained + all the wonderful
              resources mentioned. Having everything in one guide is super
              helpful."
            </blockquote>
          </div>
        </div>

        <div className="mt-6 relative text-center lg:mt-0">
          <img
            src="./images/dsa-main.png"
            alt=""
            className="md:pt-16 md:px-6 lg:h-[700px] lg:w-[100%] lg:pt-0"
          />

          <div className="rounded-full inline-block p-4 absolute right-1 top-[-0.75rem] bg-green-700 text-white text-center font-playfair md:top-[3.25rem] md:right-[1.5rem] md:p-2 md:text-[12px] lg:right-[2rem] lg:top-[-1rem] lg:p-6 lg:text-[16px]">
            New <br />
            Release
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-center mb-8 font-bold font-playfair text-4xl">
          What's Included
        </h1>

        <div className="md:flex md:gap-3 lg:justify-center lg:gap-8">
          <div>
            <img src="./images/dsa-2.png" alt="" className="md:w-[400px]" />
          </div>

          {/* Deleted */}

          <div className="mt-12 text-center">
            <ul className="text-center">
              {[
                "15+ algo patterns discussed",
                "Detailed solutions and explanations",
                "All in one revision guide",
                "Awesome resources, articles, blogs",
                "Visualizers and animations included",
                "100 pages of quality content",
                "Concepts explained for beginners",
              ].map((item, index) => (
                <li
                  className="flex items-center gap-2 md:mb-3 md:text-[18px]"
                  key={index}
                >
                  <img
                    src="./images/checkmark.png"
                    alt="checkmark"
                    className="h-6"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 border-solid bg-orange-500 text-white rounded-full p-3 px-6 font-bold text-center">
              Download for Free
            </button>
          </div>
        </div>
      </div>

      <ReviewSection></ReviewSection>
    </>
  );
}

export default Body;
