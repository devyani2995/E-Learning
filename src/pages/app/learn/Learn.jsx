import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, Outlet, useParams } from "react-router-dom";

function Learn() {
  const { courseId } = useParams();
  const course = coursesData.find((course) => course.id === courseId);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        <Link to="/courses" style={{ textDecoration: "none", color: "white" }}>
          <h2 className={style.back}>{"<<"}</h2>
        </Link>
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {course.chapters.map((chapter, index) => {
              return (
                <div className={style.chapterId} key={index}>
                  <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
                </div>
              );
            })}
          </ul>
        </div>

        <div className={style.courses}>
          {/**Chapter Details Must be rendered here */}
          <Outlet context={{...course}}/>
        </div>
      </div>
    </div>
  );
}

export default Learn;
