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
      userImage: "./images/Harry.jpg",
      userName: "Harry Criston",
      jobRole: "Senior Developer",
      review:
        "“Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.”",
    },
    {
      userImage: "./images/Harry.jpg",
      userName: "Harry Criston",
      jobRole: "Senior Developer",
      review:
        "“Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.”",
    },
    {
      userImage: "./images/Harry.jpg",
      userName: "Harry Criston",
      jobRole: "Senior Developer",
      review:
        "“Walling helps us visually organise ideas and tasks, work collaboratively and efficiently within our team. The visual experience makes it so easy to plan content and stay on track with our projects and campaigns.”",
    },
  ];

  return (
    <div className="mt-20">
      {reviews.map((review, index) => (
        <div className="p-4 border-solid border-t-2 border-b-2 m-3">
          <div>
            <p>{review.review}</p>
          </div>

          <div className="flex text-center">
            <img
              src={review.userImage}
              alt="userImage"
              className="h-30 rounded-full"
            />
            <div className="text-center items-center">
              <h3>{review.userName}</h3>
              <h4>{review.jobRole}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewSection;
