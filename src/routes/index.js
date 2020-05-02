import socials from './socials';
import aboutUs from './aboutUs';
import personalInsurance from './personalInsurance';
import businessInsurance from './businessInsurance';
import contact from './contact';

const allRoutes = {
    socials: { ...socials },
    aboutUs: { ...aboutUs },
    personalInsurance: { ...personalInsurance },
    businessInsurance: { ...businessInsurance },
    contact: { ...contact }
};

export default allRoutes;