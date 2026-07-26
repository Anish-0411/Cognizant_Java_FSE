function CourseDetails(){

    const courses=[
        {
            id:1,
            course:"React",
            duration:"2 Months"
        },
        {
            id:2,
            course:"Spring Boot",
            duration:"3 Months"
        },
        {
            id:3,
            course:"AWS",
            duration:"1 Month"
        }
    ];

    return(

        <div className="card">

            <h2>Course Details</h2>

            <ul>

                {
                    courses.map(course=>(
                        <li key={course.id}>
                            <b>{course.course}</b><br/>
                            Duration : {course.duration}
                            <br/><br/>
                        </li>
                    ))
                }

            </ul>

        </div>

    );

}

export default CourseDetails;