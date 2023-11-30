'use client';

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is crypto outreach?',
    answer:
      'Cryptoreach offers you a comprehensive database that empowers you to effortlessly connect with engaged crypto users who are already interested in crypto products, helping you maximize the impact of your sales and marketing efforts.'
  },
  {
    question: 'What are credits?',
    answer:
      "Our credit system is straightforward: one credit corresponds to exporting one lead. Depending on your plan, you'll receive a specific monthly or yearly allocation of credits."
  },
  {
    question: 'Can I export web3 user leads from the platform?',
    answer:
      'Yes, you can export web3 user leads in seconds. We offer high-speed export options for downloading large volumes of targeted leads.'
  },
  {
    question: 'In what formats can I export the data?',
    answer:
      'We currently offer exports in .csv format and are working on implementing other formats as well. If you have any questions or issues, feel free to reach out to us.'
  },
  {
    question: 'Is there a cost associated with using this platform?',
    answer:
      'You can get started for free with no credit card required. If you want to unlock more credits you can look at our pricing plans above.'
  },
  {
    question: 'What kind of support and assistance do you offer to users?',
    answer:
      'We offer comprehensive support to users through our customer service channels, email, and video calls. If you have any questions or issues, feel free to reach out to us.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, you can cancel your subscription at any time. We offer flexible subscription options to accommodate your needs.'
  }
  // More questions...
];

export default function PricingFAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold text-[#232528] text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold text-[#181818]">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-[#121212]">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
