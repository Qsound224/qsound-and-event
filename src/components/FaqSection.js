import React, { useState } from 'react';

const faqs = [
  { q: 'Quels types de matériel puis-je louer ?', a: 'Sonorisation, éclairage, DJ, techniciens, accessoires et plus.' },
  { q: 'Livrez-vous et installez-vous le matériel ?', a: 'Oui, nous proposons livraison et installation sur demande.' },
  { q: 'Quels modes de paiement acceptez-vous ?', a: 'Orange Money, PayPal, carte bancaire, iDeal.' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h2>FAQ</h2>
      {faqs.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>{item.q}</button>
          {openIndex === idx && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}