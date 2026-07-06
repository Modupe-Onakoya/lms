import { Route, Routes, useMatch } from "react-router-dom"
import Home from "./page/student/Home"
import CourseList from "./page/student/CourseList"
import CourseDetails from "./page/student/CourseDetails"
import MyEnrollments from "./page/student/MyEnrollments"
import Player from "./page/student/Player"
import Loading from "./components/student/Loading"
import Dashboard from "./page/educator/Dashboard"
import Educator from "./page/educator/Educator"
import AddCourse from "./page/educator/AddCourse"
import MyCourses from "./page/educator/MyCourses"
import StudentEnroll from "./page/educator/StudentEnroll"
import Navbar from "./components/student/Navbar"
import Hero from "./components/student/Hero"






function App() {

  const isInEducator = useMatch("/educator/*")

  return (
    <div className="text-default min-h-screen bg-white">

      {isInEducator ? null : <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnroll />} />

        </Route>

      </Routes>
    </div>
  )
}

export default App
