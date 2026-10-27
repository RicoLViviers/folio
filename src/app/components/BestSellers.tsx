/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import Book from "./Book";

export default function BestSellers() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }

  return (
    <section className="w-full px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Best Sellers
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll books left"
          className="shrink-0 rounded-full p-2 transition-colors hover:bg-gray-100"
        >
          <img
            src="/images/arrow-left.svg"
            alt=""
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </button>

        <div
          ref={carouselRef}
          className="flex min-w-0 flex-1 gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          <div className="w-52 shrink-0">
            <Book
              id="1"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>

          <div className="w-52 shrink-0">
            <Book
              id="2"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>

          <div className="w-52 shrink-0">
            <Book
              id="3"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>

          <div className="w-52 shrink-0">
            <Book
              id="4"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>
          <div className="w-52 shrink-0">
            <Book
              id="4"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>
          <div className="w-52 shrink-0">
            <Book
              id="4"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>
          <div className="w-52 shrink-0">
            <Book
              id="4"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>
          <div className="w-52 shrink-0">
            <Book
              id="4"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>
          <div className="w-52 shrink-0">
            <Book
              id="4"
              title="AC Revelations"
              author="James"
              price={0}
              image="https://thumb.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/250px-Assassins_Creed_Revelations_Cover.jpg"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll books right"
          className="shrink-0 rounded-full p-2 transition-colors hover:bg-gray-100"
        >
          <img
            src="/images/arrow-right.svg"
            alt=""
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
}