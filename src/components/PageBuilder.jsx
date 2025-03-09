
import InputForm from "./InputForm.jsx"
import ResumeRender from "./ResumeRender.jsx";
import "../styles/style.css";

export default function PageBuilder() {

    return (
        <>
            <div class="ContentRoot">
                <div class="ContentContainer">
                    <InputForm />
                    <ResumeRender />
                </div>
            </div>
        </>
    )
}