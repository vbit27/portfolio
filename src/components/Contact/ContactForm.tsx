import React from 'react';
import { ContactContainer, Link } from './Contact.styled';
import { Contact } from './Contact.styled';
import { Button } from '../../globalStyle';

const ContactForm: React.FC = () => {
  return (
    <>
      <Contact>
        <ContactContainer>
          <h4>
            Have an exciting project where you need some help?
            <br />
            Send me over a message, and let's chat.
            <br /> <br />
            <i>vasil.bituni@gmail.com</i>
          </h4>
          <Button
            primary
            big
            onClick={() =>
              (window.location.href = 'mailto:vasil.bituni@gmail.com')
            }
          >
            Contact Me
          </Button>
        </ContactContainer>
      </Contact>
    </>
  );
};

export default ContactForm;
