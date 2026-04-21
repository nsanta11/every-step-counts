import Accordion from '@/components/Accordion/Accordion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import './AccordionSection.scss';

const items = [
  {
    id: 'one',
    question: 'Questions to strengthen your relationship',
    list: [
      "What do you wish we did more often?",
      "What's one thing you like about our family?",
      "What's your favorite song right now?",
      "What's the best thing that happened this week?",
      "What made today a good day?",
      "What's something fun we can plan?"
    ],
  },
  {
    id: 'two',
    question: 'Questions to help set boundaries',
    list: [
      // 'Ask open-ended questions about their day',
      // 'Share a story from your own teenage years',
      // 'Use our free conversation starter cards',
      // 'Let the setting spark a natural topic',
    ],
  },
  {
    id: 'three',
    question: 'Questions to stay in the loop with your child',
    list: [
      // 'Reduces eye contact pressure for tough topics',
      // 'Physical activity boosts mood and openness',
      // 'Creates a regular, low-stakes routine',
    ],
  },
  {
    id: 'four',
    question: 'Questions to teach the harms of underage drinking',
    list: [
      // 'The risks of alcohol on a developing brain',
      // 'How to handle peer pressure',
      // "Your family's values and expectations",
      // 'What to do if they ever feel unsafe',
    ],
  },
];

export default function AccordionSection() {
  return (
    <section className="accordion-section">
      <div className="accordion-section__inner">
        <SectionTitle>Keep the Conversation Going</SectionTitle>
        <Accordion items={items} defaultOpenId="one" />
      </div>
    </section>
  );
}
