import { useContext, useRef } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CounterContext } from "../../CounterContext";
export default function LoginPage() {
  const { test2 } = useContext(CounterContext);
  const phoneInput = useRef();
  const codeInput = useRef();
  const navigate = useNavigate();

  const phoneRegex = /^\+201\d{9}$/;
  const codeRegex = /^[a-zA-Z0-9]{4}$/;

  const handleLogin = (event) => {
    event.preventDefault()
    let phoneTest = phoneRegex.test(phoneInput.current.value);
    let codeTest = codeRegex.test(codeInput.current.value);
    if (phoneTest && codeTest) {
      let data = {
        "user_phone": phoneInput.current.value,
        "user_code": codeInput.current.value
      };
      axios.post("https://support.israaosman.com/php/index.php/api/auth/login", data).then((res) => {
        if (res.data.err) {
          Swal.fire({
            icon: "error",
            text: res.data.msg,
            timer: 1500,
          })
        } else {
          // console.log(res.data);
          Swal.fire({
            icon: "success",
            text: res.data.msg,
            timer: 1500,
          }).then(() => {
            sessionStorage.setItem("userInfo", JSON.stringify(res.data.data[0]))
            navigate('/');

          })
        }
        // 
      })
      // alert('data is valid')
    } else {
      Swal.fire({
        icon: "error",
        text: "data is invalid",
        timer: 1500
      })
    }
  }

  return (
    <div className="col-12 d-flex flex-wrap align-items-center justify-content-center" id="LoginPage">
      <form onSubmit={handleLogin} className="col-12 col-md-4 d-flex flex-wrap gap-3 p-3 justify-content-center bg-white rounded shadow border border-1">
        <h4>Course Control</h4>
        <input ref={phoneInput} className="form-control" placeholder="Enter You Phone No" />
        <input ref={codeInput} className="form-control" placeholder="Enter You Code" />
        <button className="btn btn-primary col-4">Login</button>
      </form>
    </div>
  )
}
