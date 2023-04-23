import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = () => {

    const defaultContact = new Contacto("enzo", "marin", "enzomarin@mail.com", true)

    return (
        <div>
            <div>
                <h1>
                    Contacto: 
                </h1>
            </div>
            <ContactoComponent contacto={defaultContact} >

            </ContactoComponent>
        </div>
    );
}

export default ContactoListComponent;
