function Body() {
  return (
    <>
      <div className="mt-16">
        <div className="items-center leading-tight flex flex-col">
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
              className="border-solid border-2 bg-black text-white text-2xl px-3 py-3 block w-full"
            >
              Buy FREE through
              <span className="text-purple-600 pl-2" text-purple-600>
                Gumroad
              </span>
            </a>
          </div>
          <div className="mt-4">
            <blockquote className="italic p-4 border-l-solid border-l-4 border-l-orange-400 bg-gray-200">
              "Awesome! Love how the concepts are explained + all the wonderful
              resources mentioned. Having everything in one guide is super
              helpful."
            </blockquote>
          </div>
        </div>

        <div className="mt-6 relative text-center">
          <img src="./images/dsa-main.png" alt="" />

          <div className="rounded-full inline-block p-4 absolute right-1 top-[-0.75rem] bg-green-700 text-white text-center font-playfair">
            New <br />
            Release
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-center mb-8 font-bold font-playfair text-4xl">
          What's Included
        </h1>

        <div>
          <div>
            <img src="./images/dsa-2.png" alt="" />
          </div>

          <div className="mt-12 text-center">
            <ul className="text-center">
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>15+ algo patterns discussed</span>
              </li>
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>Detailed solutions and explanations</span>
              </li>
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>All in one revision guide</span>
              </li>
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>Awesome resources, articles, blogs</span>
              </li>
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>Visualizers and animations included</span>
              </li>
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>100 pages of quality content</span>
              </li>
              <li className="flex gap-2">
                <img
                  src="./images/checkmark.png"
                  alt="checkmark"
                  className="h-6"
                />
                <span>Concepts explained for beginners</span>
              </li>
            </ul>
            <button className="mt-8 border-solid bg-orange-500 text-white rounded-full p-3 px-6 font-bold">
              Download for Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
