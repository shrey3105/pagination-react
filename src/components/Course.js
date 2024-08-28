const Course = ({ course }) => {
  return (
    <div className="py-2 px-5">
      <h3 className="font-bold text-xl">{course.title}</h3>
      <p className="font-normal">{course.description}</p>
    </div>
  );
};

export default Course;
