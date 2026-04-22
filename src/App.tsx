import Header from '@/containers/Header/Header';
import HeroSection from '@/containers/HeroSection/HeroSection';
import ConversationSection from '@/containers/ConversationSection/ConversationSection';
import TrailSection from '@/containers/TrailSection/TrailSection';
import FooterSection from '@/containers/FooterSection/FooterSection';

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ConversationSection />
      <TrailSection />
      <FooterSection />
    </>
  );
}
