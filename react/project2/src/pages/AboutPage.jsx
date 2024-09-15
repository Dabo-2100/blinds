import Header from "../components/Header";
export default function AboutPage() {
    // Controller JS

    // let username = prompt("Enter yourname");
    // let userAge = prompt("Enter Age");\
    function sayHello2() {
        alert('hello')
    }
    const sayHello = () => {
        alert('Hello')
    }

    // View HTML
    return (
        <div className="col-12 AboutPage">
            <Header />
            {/* <div className="section">Welcome {username} your Age is : {userAge}</div> */}
            <button onClick={sayHello}>I'm Alert</button>
        </div>
    )
}
