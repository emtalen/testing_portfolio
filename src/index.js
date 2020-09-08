import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
// import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hello />
      <ContactForm/>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
