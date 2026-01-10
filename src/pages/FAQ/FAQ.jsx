import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
    {
      question: "How do I place an order on this website?",
      answer:
        "To place an order, browse products, add your selected items to the cart, and proceed to checkout. Enter your delivery details and complete the payment to confirm your order."
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept multiple payment options including Debit Card, Credit Card, UPI, Net Banking, and Cash on Delivery (COD) for selected locations."
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer:
        "Yes, Cash on Delivery is available on most products and locations. Availability may depend on your delivery pin code."
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking link via email or SMS. You can also track your order from the 'My Orders' section in your account."
    },
    {
      question: "What is your return and refund policy?",
      answer:
        "You can request a return within 7 days of delivery if the product is damaged, defective, or incorrect. Refunds are processed within 5–7 business days after successful return pickup."
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 3–7 business days depending on your location. Remote areas may take slightly longer."
    },
    {
      question: "Are the products authentic and quality-checked?",
      answer:
        "Yes, all products listed on our website go through strict quality checks and are sourced from verified sellers to ensure authenticity."
    },
    {
      question: "How can I cancel my order?",
      answer:
        "You can cancel your order before it is shipped by visiting the 'My Orders' section. Once shipped, cancellation may not be possible."
    },
    {
      question: "Do I need an account to place an order?",
      answer:
        "Creating an account is recommended for better order tracking and offers, but guest checkout is also available for quick purchases."
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support through the Contact Us page, email, or phone. Our support team is available from Monday to Saturday, 9 AM to 6 PM."
    }
  ];
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-box">
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
