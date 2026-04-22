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
    question: 'Kamas Trails',
    icon: <MapMarkerIcon />,
    locations: [
      {
        name: 'Kamas Food Pantry',
        description: '1 Trail. Theme: Rule Setting (Spanish)',
      },
      {
        name: 'Kamas Food Town',
        description: '2 Trails. Themes: Rule Setting, Bonding (Spanish)',
      },
      {
        name: 'Liquor & Wine Outlet',
        description: '2 Trails. Themes: Knowing the Risks (English & Spanish)',
      },
      {
        name: 'South Summit Aquatic and Fitness Center',
        description: '2 Trails. Themes: Bonding (English & Spanish)',
      },
      {
        name: 'Summit County Library - Kamas Valley Branch',
        description: '2 Trails. Themes: Checking-in (English & Spanish)',
      },
    ],
  },
  {
    id: 'coalville',
    question: 'Coalville Trails',
    icon: <MapMarkerIcon />,
    locations: [
      {
        name: 'City Hall',
        description: '2 Trails. Themes: Rule Setting (English & Spanish)',
      },
      {
        name: 'Neena\'s Market',
        description: '1 Trail. Theme: Bonding (Spanish)',
      },
      {
        name: 'Summit County Health',
        description: '1 Trail. Theme: Knowing the Risks (English & Spanish)',
      },
      {
        name: 'Summit County Library - Coalville Branch',
        description: '1 Trail. Theme: Checking-in',
      },
    ],
  },
  {
    id: 'park-city',
    question: 'Park City Trails',
    icon: <MapMarkerIcon />,
    locations: [
      {
        name: 'The Market at Park City',
        description: '2 Trails. Themes: Bonding, Checking-in',
      },
      {
        name: 'Park City Ice Arena',
        description: '1 Trail. Theme: Rule Setting',
      },
      {
        name: 'Park City Library',
        description: '1 Trail. Theme: Bonding',
      },
      {
        name: 'Summit County Health Department',
        description: '2 Trail. Themes: Knowing the Risks, Rule Setting (Spanish)',
      },
      {
        name: 'Wasatch Pediatrics',
        description: '1 Trail. Theme: Bonding',
      },
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
