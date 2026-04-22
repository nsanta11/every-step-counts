import heroImg from '@/assets/images/summit-hero.jpg';
import './HeroSection.scss';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        {/* Replace hero__img src with your image */}
        <img className="hero__img" alt="every step counts hero image" src={heroImg} />
        {/* <div className="hero__img-placeholder" aria-hidden="true" /> */}
      </div>
      <div className="hero__subtitle-bar">
        <div className="hero__subtitle-inner">
          <p className="hero__subtitle">Walk and talk with your kids. Use our helpful conversation starters. Or find a trail near you to spark meaningful conversations with your kids.</p>
        </div>
      </div>
    </section>
  );
}
