import {
  faFacebookF,
  faInstagram,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const socials = {
  fb: {
    name: 'Facebook',
    value: 'krzebietkejulia',
    link: 'https://fb.com/',
    icon: faFacebookF,
  },
  ig: {
    name: 'Instagram',
    value: 'photojulik',
    link: 'https://www.instagram.com/',
    icon: faInstagram,
  },
  bh: {
    name: 'Behance',
    value: 'photojulik',
    link: 'https://www.behance.net/',
    icon: faBehance,
  },
  mail: {
    name: 'Mail',
    value: 'photo.julik@gmail.com',
    link: 'mailto:',
    icon: faEnvelope,
  },
  phone: {
    name: 'Phone',
    value: '+48667270099',
    link: 'tel:',
    icon: faPhone,
  },
};

export default socials;
