import React from 'react';
import { FormattedMessage } from 'react-intl';

const aboutUs = {
    name: <FormattedMessage id="page.about_us" />,
    value: 'About Us',
    url: 'about',
    sub: [
        {
            name: <FormattedMessage id="page.about_us.1" />,
            url: '#'
        },
        {
            name: <FormattedMessage id="page.about_us.2" />,
            url: '#'
        },
        {
            name: <FormattedMessage id="page.about_us.3" />,
            url: '#'
        },
        {
            name: <FormattedMessage id="page.about_us.4" />,
            url: '#'
        }
    ]
};

export default aboutUs;