'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContentCard } from './Contentcard';

export function EventsGrid({ events, columns = 2 }) {
  const gridClass =
    columns === 1
      ? 'grid gap-6'
      : columns === 2
        ? 'grid gap-6 md:grid-cols-2'
        : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3';

  return (
    <motion.div
      className={gridClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {events.map((item, index) => (
        <ContentCard
          key={item.title}
          title={item.title}
          tone={index % 2 === 1 ? 'soft' : 'default'}
        >
          {item.image && (
            <div className="mb-4 overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.alt || item.title}
                width={800}
                height={500}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          <p><strong>When:</strong> {item.schedule}</p>
          <p><strong>Where:</strong> {item.location}</p>
          <p>{item.description}</p>
        </ContentCard>
      ))}
    </motion.div>
  );
}