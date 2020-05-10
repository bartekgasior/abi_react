import React from 'react';
//import { FormattedMessage } from 'react-intl';
import { Row } from '../../components/rows/Row';
import { ImageBackgroundButton } from '../../components/buttons/ImageBackgroundButton';
import { faHome, faQuestion, faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import button1 from '../../icons/buttons/button1.png';
import button2 from '../../icons/buttons/button2.png';
import button3 from '../../icons/buttons/button3.png';

export const InsuranceDescription = () =>
    <Row>
        <div className='col-sm-100 col-md-80 col-70 boxShadow'>
            <div className='center flex-direction-column'>
                <h3 className='center-text'>
                    Header h3
                </h3>
                <div className='center'>
                    <p className='col-sm-80 col-60'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>

                <div className='col-100 center justify-content-space-around flex-wrap'>
                    <div className='col-sm-100 col-md-40 col-30 margin-x-1'>
                        <ImageBackgroundButton
                            label={'label #1'}
                            img={button1}
                            alt={'button1'}
                            icon={<FontAwesomeIcon icon={faHome} />}
                        />
                    </div>
 
                    <div className='col-sm-100 col-md-40 col-30 margin-x-1'>
                        <ImageBackgroundButton
                            label={'label #2'}
                            img={button2}
                            alt={'button2'}
                            icon={<FontAwesomeIcon icon={faQuestion} />}
                        />
                    </div>

                    <div className='col-sm-100 col-md-40 col-30 margin-x-1'>
                        <ImageBackgroundButton
                            label={'label #2'}
                            img={button3}
                            alt={'button3'}
                            icon={<FontAwesomeIcon icon={faCar} />} />
                    </div>
                </div>
            </div>
        </div>
    </Row>