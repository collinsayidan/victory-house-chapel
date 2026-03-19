'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '../../components/Lightbox';
import { galleryItems } from '../../content/siteContent';

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState(null);
  const featuredImage = galleryItems[0];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={featuredImage.image}
              alt={featuredImage.alt || featuredImage.title}
              width={1400}
              height={900}
              className="h-[420px] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Featured moment
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featuredImage.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-200">
                A visual glimpse into the worship, community and shared life of
                Victory House Chapel.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-church-border bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Gallery overview
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">
                Church life, ministry and fellowship
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Our gallery shares moments from worship services, prayer
                gatherings, outreach activities and church community life. Each
                image reflects something of the warmth, faith and fellowship of
                Victory House Chapel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {galleryItems.slice(1, 5).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="relative overflow-hidden rounded-2xl text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    width={600}
                    height={500}
                    className="h-40 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
            Church life in pictures
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
            A curated gallery of worship, outreach and fellowship
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            These images help tell the story of our church family, ministry and
            community life.
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`mb-6 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-white text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index % 3 === 0 ? 'lg:mt-10' : ''
              } ${index % 4 === 0 ? 'sm:mt-8 lg:mt-0' : ''}`}
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  width={900}
                  height={index % 3 === 0 ? 1100 : 700}
                  className={`w-full object-cover ${
                    index % 3 === 0
                      ? 'h-[420px]'
                      : index % 2 === 0
                        ? 'h-[320px]'
                        : 'h-[260px]'
                  }`}
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.alt}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}