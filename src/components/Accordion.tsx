import React, { useState } from 'react';
import './Accordion.css';

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: '1. What types of pans do you offer?', content: 'Content for section 1' },
    { title: '2. How do I choose the right pan?', content: 'Content for section 2' },
    { title: '3. How should I care for my pans?', content: 'Content for section 3' },
    { title: '4. Are your pans suitable for all stovetops?', content: 'Content for section 4' },
    { title: '5. Can I return or exchange a pan?', content: 'Content for section 5' },
  ];

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleToggle(index)}
          >
            <h2>{section.title}</h2>
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
