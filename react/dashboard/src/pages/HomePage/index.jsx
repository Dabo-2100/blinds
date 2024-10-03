import { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Check from "../../components/check";
export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const getAllCourses = (token) => {
    let res = false;
    axios.get("https://support.israaosman.com/php/index.php/api/courses", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setCourses(res.data.data);
      console.log(res.data.data);

    }).catch((err) => {
      navigate("login");
    })
  }
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    if (userInfo) {
      let token = userInfo.user_token;
      getAllCourses(token);
      // console.log("Check Token Validity")
    } else {
      navigate('login');
    }
  }, [])
  return (
    <div className="col-12" id="HomePage">
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>-</th>
            <th>Course Name</th>
            <th>Is Active </th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map((el, index) => {
              return (
                <tr key={el.course_id}>
                  <td>{index + 1}</td>
                  <td>{el.course_name}</td>
                  <td><Check isChecked={el.is_active} /></td>
                  <td>{el.last_update}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
