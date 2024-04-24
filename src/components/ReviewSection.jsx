function ReviewSection() {
  const reviews = [
    {
      userImage: "./images/Harry.jpg",
      userName: "Harry Criston",
      jobRole: "Senior Developer",
      review:
        "“Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.”",
    },
    {
      userImage: "./images/sofia.jpg",
      userName: "Sofia Senr",
      jobRole: "Java FullStack Developer",
      review:
        "“I've tried several DSA learning platforms, but this one stands out. The interactive challenges make learning fun and engaging. The explanations are clear and concise, and the step-by-step solutions help reinforce my understanding.”",
    },
    {
      userImage: "./images/sania.jpg",
      userName: "Sania D'couste",
      jobRole: "Software Developer",
      review:
        "“I've been using this app to improve my DSA skills, and I'm impressed. The quizzes at the end of each section help me test my knowledge, and the detailed feedback guides me in the right direction. The app is well-designed, with a clean interface that's easy to navigate.”",
    },
    {
      userImage: "./images/neeraj.jpg",
      userName: "Neeraj Agarwal",
      jobRole: "Senior Developer Associate",
      review:
        "“As someone new to DSA, I was looking for an app that could guide me through the basics. This app did not disappoint. The learning paths are well-structured, and the explanations are easy to follow. The built-in code editor allows me to test my code without leaving the app, which is super convenient.”",
    },
  ];

  return (
    <div className="mt-20 md:flex md:justify-between md:flex-wrap">
      {reviews.map((review, index) => (
        <div className="p-4 border-solid border-t-2 border-b-2 m-3 md:border-l-2 md:border-r-2 md:w-[46%]">
          <div>
            <p className="italic">{review.review}</p>
          </div>

          <div className="flex text-center h-[100px]">
            <img
              src={review.userImage}
              alt="userImage"
              className="h-[70px] w-[70px] object-cover rounded-full items-center m-4"
            />
            <div className="flex flex-col justify-center ml-4">
              <h3 className="font-playfair font-semibold">{review.userName}</h3>
              <h4 className="font-lato">{review.jobRole}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewSection;
