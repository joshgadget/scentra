export const faqIntro = {
  eyebrow: 'Good to know',
  title: 'Questions, answered.',
  copy: 'Everything about ordering, delivery, authenticity and caring for your fragrance. Search the list below, or reach our concierge if you would like a hand choosing.'
}

export const faqGroups = [
  {
    group: 'Orders & delivery',
    items: [
      {
        question: 'How long does delivery take?',
        answer: 'Lagos orders usually arrive in 1-2 working days, and nationwide delivery takes 2-5 working days. You will receive a WhatsApp message with tracking details as soon as your parcel leaves our Lagos studio.'
      },
      {
        question: 'Do you deliver outside Lagos?',
        answer: 'Yes. We ship to every state in Nigeria through vetted courier partners, and you can follow your parcel from the Track order page using your order number and the phone number used at checkout.'
      },
      {
        question: 'What does delivery cost?',
        answer: 'Delivery within Lagos is ₦4,000 and ₦12,000 to other states. Orders above ₦75,000 receive complimentary standard delivery. The exact fee is shown at checkout before you confirm.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Always. Open the Track order page and enter your Scentra order number with the phone number you used at checkout to see every step, from confirmation through to delivery.'
      },
      {
        question: 'Can I collect my order in person?',
        answer: 'Studio pick-up is available in Lagos by appointment. Choose delivery at checkout, then message us on WhatsApp and we will arrange a collection slot instead.'
      },
      {
        question: 'When are orders dispatched?',
        answer: 'Orders placed Monday to Saturday before 2pm are usually dispatched the same working day. Orders placed later, or on Sunday, are prepared on the next working day.'
      }
    ]
  },
  {
    group: 'Products & authenticity',
    items: [
      {
        question: 'Are your branded perfumes authentic?',
        answer: 'Always. We source exclusively through trusted distributors and verify every item before it is dispatched. Sealed products are stored away from direct sunlight and heat.'
      },
      {
        question: 'What sizes do you offer?',
        answer: 'Sizes vary by fragrance, with 30ml, 50ml and 100ml available on most. Every option and price is listed on the product page, and custom blends are filled in the size you choose.'
      },
      {
        question: 'How long does a fragrance last on skin?',
        answer: 'Most of our fragrances wear for 6-8 hours, and deeper oud and amber blends can last considerably longer. Longevity depends on your skin, the climate and where you apply it.'
      },
      {
        question: 'How should I store my perfume?',
        answer: 'Keep bottles upright in a cool, dark place away from direct sunlight and heat. A drawer or the original box is ideal, and we would avoid a hot car or a steamy bathroom.'
      },
      {
        question: 'Do you offer samples or discovery sets?',
        answer: 'We offer sample vials for selected blends so you can live with a scent before committing to a full bottle. Message our concierge and we will suggest a set for you.'
      }
    ]
  },
  {
    group: 'Custom blends',
    items: [
      {
        question: 'Can I create my own perfume?',
        answer: 'Yes. Share the mood, notes and intensity you have in mind and our perfumer will compose a blend around them, then refine it with you until it feels right.'
      },
      {
        question: 'How long does a custom blend take?',
        answer: 'Once your notes are agreed, custom blends are usually ready in 5-7 working days. Larger or more complex compositions may take a little longer, and we will keep you posted.'
      },
      {
        question: 'Can I reorder or refill a custom blend?',
        answer: 'Yes. We keep your formula on file, so a refill is simply a message away. Reorders are matched to your original composition for the same result every time.'
      }
    ]
  },
  {
    group: 'Payments & returns',
    items: [
      {
        question: 'Which payment methods do you accept?',
        answer: 'Online card payment is coming soon. Until then orders are confirmed with you on WhatsApp and settled by bank transfer, and no card details are collected on this site.'
      },
      {
        question: 'Can I change or cancel my order?',
        answer: 'Message us as soon as you can and we will adjust or cancel the order where it has not yet been dispatched. Once a parcel is with our courier we will help you arrange a return instead.'
      },
      {
        question: 'Can I return an item?',
        answer: 'Unopened products may be returned within 7 days of delivery. For hygiene reasons, opened fragrance and body-care products cannot be returned unless faulty.'
      },
      {
        question: 'What if my order arrives damaged?',
        answer: 'Send us a photo of the parcel and the item within 48 hours of delivery. We will replace it or refund you once we have confirmed the damage with our courier.'
      }
    ]
  },
  {
    group: 'Support',
    items: [
      {
        question: 'How do I reach Scentra?',
        answer: 'Email hello@scentra.co or send a WhatsApp message. We reply Monday to Saturday, 9am-6pm WAT, and usually much sooner.'
      },
      {
        question: 'Do you have a physical store?',
        answer: 'Our studio is in Lagos, Nigeria, and visits are by appointment so we can give you our full attention. Message us and we will arrange a time that suits you.'
      }
    ]
  }
]

export const faqTotal = faqGroups.reduce((sum, group) => sum + group.items.length, 0)
