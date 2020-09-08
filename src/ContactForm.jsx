import React from 'react';
class ContactForm extends Component {
  render() {
    return (
      <form name="contact" method="post" netlify>
        <p>
          <label>Your Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"/></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}
export default ContactForm;
