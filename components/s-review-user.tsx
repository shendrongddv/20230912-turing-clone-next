import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { UserReview } from "./user-review";

export const ReviewUserSection = () => {
  return (
    <section className="bg-slate-100 py-16 md:px-4">
      <div className="container space-y-8">
        {/* Heading */}
        <div className="flex flex-col gap-6 max-md:px-4 md:flex-row md:items-center md:justify-between">
          {/* # */}
          <div className="space-y-2 md:w-1/2">
            <h2 className="h2">People 💖 Turing</h2>
            <p>
              Read Turing.com reviews from developers across the world and learn
              what it&apos;s like working with top U.S. companies.
            </p>
          </div>

          {/* # */}
          <div className="flex flex-col items-start gap-0 md:h-1/3 md:items-end">
            <span className="h2">
              ⭐ 4.7{" "}
              <small className="text-[10px] font-normal uppercase">
                Out of 5
              </small>
            </span>
            <small className="text-muted-foreground">
              based on developer reviews as of September 2023
            </small>
            <Link
              href="/"
              aria-label="View all reviews"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className:
                    "hidden h-max p-0 text-center text-primary-foreground md:flex md:w-max",
                }),
              )}
            >
              View all reviews
            </Link>
          </div>
        </div>

        {/* Slide */}
        <UserReview />

        {/* Link */}
        <Link
          href="/"
          aria-label="View all reviews"
          className={cn(
            buttonVariants({
              variant: "link",
              size: "default",
              className:
                "flex h-max p-0 text-center text-primary-foreground md:hidden md:w-max",
            }),
          )}
        >
          View all reviews
        </Link>
      </div>
    </section>
  );
};
