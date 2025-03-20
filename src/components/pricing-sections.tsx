import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Kitten's Delight",
    id: "tier-kittens-delight",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan for your kittens to get their paws on the best meals. Perfect for small families!",
    features: [
      "Up to 25 cans per month",
      "Free shipping on orders over $50",
      "Basic support",
      "Exclusive kitten food offers",
    ],
    featured: false,
  },
  {
    name: "Purrfect Feast",
    id: "tier-purrfect-feast",
    href: "#",
    priceMonthly: "$99",
    description:
      "The best meals for your adult cats. Includes premium options and dedicated support.",
    features: [
      "Unlimited cans per month",
      "Free express shipping",
      "Priority customer support",
      "Exclusive premium recipes",
      "Custom food preferences",
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-charcoal-800 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#ff7f50] to-[#ff8c00] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-orange-500">
          Cat Food Plans
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Choose the purrfect plan for your furry friend
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-400 sm:text-xl">
        Select a plan that suits your cats appetite. From kittens to adult cats,
        weve got you covered!
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-charcoal-900 shadow-xl"
                : "bg-gray-800 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-700 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-orange-400" : "text-orange-500",
                "text-base font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-300",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-gray-500",
                  "text-base"
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-400",
                "mt-6 text-base"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-400",
                "mt-8 space-y-3 text-sm sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-orange-400" : "text-orange-500",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-orange-600 text-white shadow-xs hover:bg-orange-500 focus-visible:outline-orange-500"
                  : "text-orange-500 ring-1 ring-orange-200 ring-inset hover:ring-orange-300 focus-visible:outline-orange-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
