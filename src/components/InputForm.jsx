/*
Create a new React project.
Think about how to structure your application into components. Your application should include:
A section to add general information like name, email and phone number.
A section to add your educational experience (school name, title of study and date of study)
A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
Create a components directory under your src directory and add your components.
Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.
Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!
*/

import "../styles/style.css";

function InputForm() {
    let arr = [
        ["Name", "name", crypto.randomUUID()], 
        ["Email", "email", crypto.randomUUID()],
        ["Phone", "phone", crypto.randomUUID()],
        ["Github", "github", crypto.randomUUID()],
    ];

    return (
        <>
            <div className="inputColumnRoot">
                <div className="inputBlockRoot">
                    <h3>Personal Details</h3>
                    {arr.map((input, i) => {
                        console.log("hello") + input + i;
                        return <CreateTextInput label={input[0]} idLabel={input[1]} key={input[2]} />
                        //return CreateTextInput(label={input[0]}, input[1]);
                        //return animal.startsWith(props.c) && <li key={animal}>{animal}</li>;
                    })}
                </div>
            </div>
        </>
    )
}

function CreateTextInput({ label, idLabel, required = false }) {
    return (
        <div className="inputPairRoot">
            <label>{label}</label>
            <input type="text" id={idLabel}></input>
        </div>
    );
}

export default InputForm

function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };
  
    return <button style={buttonStyle}>{text}</button>;
  }
  
  //export default function App() {
function App() {
    return (
      <div>
        <Button />
        <Button text="Don't Click Me!" color="red" />
        <Button fontSize={20} />
      </div>
    );
  }