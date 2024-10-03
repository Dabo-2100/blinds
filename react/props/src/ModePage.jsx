import { useState } from "react"

export default function ModePage() {
    const [isDark, setIsDark] = useState(false);
    return (
        <div>
            <button onClick={() => setIsDark(!isDark)}>Change Mood</button>
            <p>You are is :{isDark ? 'Dark' : 'Light'}</p>
            <div className={`col-12 ${isDark ? 'bg-dark text-white' : ' bg-danger'}`}
                style={{ height: "500px" }}>Test</div>
        </div>
    )
}
