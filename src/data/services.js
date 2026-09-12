import emergencyImg from '../assets/images/services/Emergencyimg.png';
import icuImg from '../assets/images/services/icuimg.png';
import ventilatorImg from '../assets/images/services/ventilator.png';
import operationTheatreImg from '../assets/images/services/operation-theatre.png';
import surgeryImg from '../assets/images/services/surgeryimg.png';
import laparoscopicImg from '../assets/images/services/laparoscopic-surgery.png';
import pharmacyImg from '../assets/images/services/pharmacy.png';
import pathologyImg from '../assets/images/services/pathologyimg.png';
import diagnosticCentreImg from '../assets/images/services/diagnostic-centre.png';
import generalWardsImg from '../assets/images/services/general-wards.png';
import privateRoomsImg from '../assets/images/services/private-rooms.png';
import ambulanceImg from '../assets/images/services/ambulance.png';

const services = [
  {
    id: 'emergency-care',
    title: '24×7 Emergency Care',
    tag: '24/7',
    image: emergencyImg,
    alt: 'Emergency Care',
    description: '24/7 emergency services delivering rapid, expert care in critical situations.',
  },
  {
    id: 'icu',
    title: 'ICU',
    tag: 'Ventilator',
    image: icuImg,
    alt: 'ICU',
    description: 'Advanced critical care for patients requiring continuous monitoring and life-support systems.',
  },
  {
    id: 'ventilator-support',
    title: 'Ventilator Support',
    tag: 'Critical Care',
    image: ventilatorImg,
    alt: 'Ventilator Support',
    description: 'Dedicated ventilator support for patients with severe respiratory distress and critical illness.',
  },
  {
    id: 'operation-theatre',
    title: 'Operation Theatre',
    tag: 'Modular OT',
    image: operationTheatreImg,
    alt: 'Operation Theatre',
    description: 'Fully equipped, sterile modular operation theatre for safe and advanced surgical procedures.',
  },
  {
    id: 'general-surgery',
    title: 'General Surgery',
    tag: 'Advanced',
    image: surgeryImg,
    alt: 'General Surgery',
    description: 'Skilled general surgery services covering a wide range of routine and complex procedures.',
  },
  {
    id: 'laparoscopic-surgery',
    title: 'Laparoscopic Surgery',
    tag: 'Minimally Invasive',
    image: laparoscopicImg,
    alt: 'Laparoscopic Surgery',
    description: 'Minimally invasive laparoscopic procedures for faster recovery and reduced surgical risk.',
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    tag: '24/7',
    image: pharmacyImg,
    alt: 'Pharmacy',
    description: 'In-house pharmacy stocked with essential medicines, available round the clock for patients.',
  },
  {
    id: 'pathology-lab',
    title: 'Pathology Lab',
    tag: 'Lab',
    image: pathologyImg,
    alt: 'Pathology Lab',
    description: 'Comprehensive pathology testing with accurate and timely reports for every patient.',
  },
  {
    id: 'diagnostic-centre',
    title: 'Diagnostic Centre',
    tag: 'Imaging',
    image: diagnosticCentreImg,
    alt: 'Diagnostic Centre',
    description: 'Advanced imaging and diagnostic services including Echo, Ultrasound, X-Ray and more.',
  },
  {
    id: 'general-wards',
    title: 'General Wards',
    tag: 'Comfort Care',
    image: generalWardsImg,
    alt: 'General Wards',
    description: 'Clean, well-monitored general wards offering comfortable recovery for admitted patients.',
  },
  {
    id: 'private-rooms',
    title: 'Private Rooms',
    tag: 'Premium',
    image: privateRoomsImg,
    alt: 'Private Rooms',
    description: 'Private rooms with modern amenities for patients who prefer added comfort and privacy.',
  },
  {
    id: 'ambulance',
    title: 'Ambulance',
    tag: 'Emergency',
    image: ambulanceImg,
    alt: 'Ambulance',
    description: 'Round-the-clock ambulance service ensuring prompt transport during medical emergencies.',
  },
];

export default services;
