'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const testimonials = [
  {
    id: 1,
    content: "La collaboration avec Group Toumbe Manning a permis de créer des emplois de qualité pour notre communauté. Leur engagement social est exemplaire.",
    author: "Ibrahim Keita",
    position: "Maire de Boké",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    id: 2,
    content: "En tant que partenaire commercial, nous apprécions leur rigueur dans le respect des délais et la qualité constante de leurs minerais.",
    author: "Marie Dubois",
    position: "Directrice Achats, Aluminium International",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    id: 3,
    content: "Leur approche responsable de l'exploitation minière et leur engagement environnemental font de Group Toumbe Manning un leader dans le secteur en Guinée.",
    author: "Dr. Amadou Bah",
    position: "Expert en développement durable",
    image: "/images/testimonials/testimonial-3.jpg",
  },
];

export default function TestimonialsSection() {

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Ce que disent nos partenaires</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg bg-white p-6 shadow-md dark:bg-mining-dark/50"
            >
              <svg
                className="absolute -left-3 -top-3 h-8 w-8 text-primary-600 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {testimonial.content}
              </p>

              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-mining-dark dark:text-mining-light">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}