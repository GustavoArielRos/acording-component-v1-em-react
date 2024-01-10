
import './App.css';
import { useState } from "react";

const faqs = [
  {
    title:" Where are these charis assembled?",
    text: " Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  },
  {
    title:" How long do I have to return my chair?",
    text: " Lorem TTTX is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  },
  {
    title:" Do you ship to countries outside the Eu?",
    text:" Lorem Cario is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  }
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({faqs}){
  return(
    <div className="accordion">
      {faqs.map((el,i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({num, title, text}){
  const [isOpen, setIsOpen] = useState(false);


  function handleToggle(){
    setIsOpen((isOpen) => !isOpen)
  }

  return(

    <div className="item" onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">
        {text}
      </div>}

    </div>
  );
}
