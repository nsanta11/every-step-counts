import Accordion from '@/components/Accordion/Accordion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import './ConversationSection.scss';

const items = [
  {
    id: 'one',
    question: 'Questions to strengthen your relationship',
    list: [
      'What do you wish we did more often?',
      'What\'s one thing you like about our family?',
      'What\'s your favorite song right now?',
      'What\'s the best thing that happened this week?',
      'What made today a good day?',
      'What\'s something fun we can plan?'
    ],
  },
  {
    id: 'two',
    question: 'Questions to help set boundaries',
    list: [
      'Who\'s your favorite friend to hang out with?',
      'What\'s our family rule on alcohol?',
      'When is it okay to say NO to a friend?',
      'What\'s a rule you\'d make for our house?',
      'How do you decide if a decision is smart?',
      'What rules at home are hard to follow?',
      'What would you do if you were offered alcohol?',
    ],
  },
  {
    id: 'three',
    question: 'Questions to stay in the loop with your child',
    list: [
      'What do you like most about your friends?',
      'To you, what are the risks of underage drinking?',
      'What have you been thinking a lot about lately?',
      'Have you ever been offered alcohol?',
      'What\'s been your best subject in school?',
      'What\'s something you\'re looking forward to?',
    ],
  },
  {
    id: 'four',
    question: 'Questions to teach the harms of underage drinking',
    list: [
      'Why do you think alcohol is unsafe for kids?',
      'How do you handle peer pressure?',
      'Why do you think there\'s an age rule on alcohol?',
      'What do you think alcohol does to your brain?',
      'What goals do you have right now?',
      'How might drinking underage hurt your future?',
    ],
  },
];

export default function ConversationSection() {
  return (
    <section className="conversation-section">
      <div className="conversation-section__inner">
        <SectionTitle>Keep the Conversation Going</SectionTitle>
        <Accordion items={items} defaultOpenId="one" />
      </div>
    </section>
  );
}
