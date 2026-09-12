import generalMedicineImg from '../assets/images/departments/general-medicine.png';
import surgeryImg from '../assets/images/services/surgeryimg.png';
import cardiologyImg from '../assets/images/services/cardioimg.png';
import orthopaedicsImg from '../assets/images/services/orthoimg.png';
import neurologyImg from '../assets/images/departments/neurology.png';
import paediatricsImg from '../assets/images/departments/paediatrics.png';

const departments = [
  {
    id: 'general-medicine',
    title: 'Department of General Medicine',
    tag: 'OPD',
    image: generalMedicineImg,
    alt: 'Department of General Medicine',
    description: 'Comprehensive diagnosis and treatment of everyday illnesses, chronic conditions and preventive health check-ups for adults.',
  },
  {
    id: 'surgery',
    title: 'Department of Surgery',
    tag: 'Surgical Care',
    image: surgeryImg,
    alt: 'Department of Surgery',
    description: 'Skilled surgical team offering safe, modern general and laparoscopic surgery with dedicated pre- and post-operative care.',
  },
  {
    id: 'cardiology',
    title: 'Department of Cardiology',
    tag: 'Heart Care',
    image: cardiologyImg,
    alt: 'Department of Cardiology',
    description: 'Complete heart care from ECG and echo screening to management of hypertension and other cardiac conditions.',
  },
  {
    id: 'orthopaedics',
    title: 'Department of Orthopaedics',
    tag: 'Bone & Joint',
    image: orthopaedicsImg,
    alt: 'Department of Orthopaedics',
    description: 'Expert care for fractures, joint pain, sports injuries and mobility issues, backed by advanced imaging and rehabilitation.',
  },
  {
    id: 'neurology',
    title: 'Department of Neurology',
    tag: 'Brain & Nerve',
    image: neurologyImg,
    alt: 'Department of Neurology',
    description: 'Specialised evaluation and treatment of headaches, seizures, stroke and other disorders of the brain and nervous system.',
  },
  {
    id: 'paediatrics',
    title: 'Department of Paediatrics',
    tag: 'Child Care',
    image: paediatricsImg,
    alt: 'Department of Paediatrics',
    description: 'Gentle, dedicated care for infants and children, including routine check-ups, vaccinations and treatment of childhood illnesses.',
  },
];

export default departments;
