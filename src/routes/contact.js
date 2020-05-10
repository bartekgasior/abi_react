import React from 'react';
import { FormattedMessage } from 'react-intl';

const contact = {
    name: <FormattedMessage id='page.contact' />,
    url: '#',
    sub: [
        {
            name: <FormattedMessage id='page.contact.1' />,
            url: '#1',
        },
        {
            name: <FormattedMessage id='page.contact.2' />,
            url: '#2',
        }
    ]
}

export default contact;