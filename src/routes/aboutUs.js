import React from 'react';
import { FormattedMessage } from 'react-intl';

const aboutUs = {
    name: <FormattedMessage id="page.about_us" />,
    value: 'About Us',
    url: 'about',
    sub: [
        {
            name: <FormattedMessage id="page.about_us.1" />,
            url: '#1'
        },
        {
            name: <FormattedMessage id="page.about_us.2" />,
            url: '#2'
        },
        {
            name: <FormattedMessage id="page.about_us.3" />,
            url: '#3'
        },
        {
            name: <FormattedMessage id="page.about_us.4" />,
            url: '#4'
        }
    ]
};

export default aboutUs;