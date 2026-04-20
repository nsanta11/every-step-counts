import Accordion from '@/components/Accordion/Accordion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import locationMarker from '@/assets/images/location-marker.svg';
import './TrailSection.scss';

const MapMarkerIcon = () => (
  <img src={locationMarker} alt="" width={24} height={24} />
);

const trails = [
  {
    id: 'kamas',
    question: 'KAMAS',
    icon: <MapMarkerIcon />,
    locations: [
      {
        name: 'Kamas Food Town',
        description: '3 Trails. Themes: Bonding, Rule Setting, Checking-in (Spanish)',
      },
      {
        name: 'Liquor & Wine Outlet',
        description: '2 Trails. Themes: Bonding, Knowing the Risks (Spanish)',
      },
      {
        name: 'Summit County Library - Kamas Valley Branch',
        description: '1 Trail. Themes: Bonding',
      },
      {
        name: 'South Summit Aquatic & Fitness Center',
        description: '1 Trail. Themes: Bonding',
      },
    ],
  },
  {
    id: 'coalville',
    question: 'COALVILLE',
    icon: <MapMarkerIcon />,
    locations: [
      // {
      //   name: 'Provo River Parkway',
      //   description: 'A flat, paved trail that follows the Provo River through Provo and Orem. Perfect for a casual walk or bike ride with kids of any age.',
      // },
      // {
      //   name: 'Rock Canyon Trail',
      //   description: 'A scenic trail at the base of the Wasatch Mountains in Provo with easy access and beautiful canyon views.',
      // },
    ],
  },
  {
    id: 'park-city',
    question: 'PARK CITY',
    icon: <MapMarkerIcon />,
    locations: [
      // {
      //   name: 'Arches National Park Trails',
      //   description: 'Iconic red rock scenery with trails ranging from easy walks to moderate hikes. A bucket-list destination for Utah families.',
      // },
      // {
      //   name: 'Red Hills Parkway – St. George',
      //   description: "A paved trail through St. George's stunning red rock landscape. Flat and family-friendly with easy parking.",
      // },
      // {
      //   name: 'Zion Riverwalk',
      //   description: 'A paved, accessible trail along the Virgin River inside Zion National Park. One of the most scenic easy walks in the state.',
      // },
    ],
  },
];

export default function TrailSection() {
  return (
    <section className="trail-section">
      <div className="trail-section__inner">
        <SectionTitle>Find a Trail Near You</SectionTitle>
        <Accordion items={trails} variant="trail" />
      </div>
    </section>
  );
}
