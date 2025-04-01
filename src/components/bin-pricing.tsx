import { CheckIcon } from "@heroicons/react/20/solid";

// Example tiers data
const tiers = [
  {
    name: "Residential Bin Cleaning (One-Time & Subscription)",
    id: "tier-residential",
    href: "#",
    priceMonthly: "$40 (One-Time)",
    description:
      "One-time cleaning for your residential bins (recycling, organics, and garbage). Keep your bins fresh with a monthly subscription for all 3 bins at $60 per month.",
    features: [
      "$40 for a one-time cleaning of 1 bin",
      "$60 for a monthly subscription to clean all 3 bins (recycling, organics, and garbage)",
      "Removal of dirt, grime, and odors",
      "Eco-friendly cleaning products",
      "Email reminders for your next clean",
    ],
    featured: false,
  },
  {
    name: "Commercial Dumpster Pad Cleaning",
    id: "tier-commercial-cleaning",
    href: "#",
    priceMonthly: "$350 (Initial) + $200/month",
    description:
      "Initial $350 for deep cleaning of your commercial dumpster pad. Following that, a monthly fee of $200 is applied for regular cleaning.",
    features: [
      "$350 initial deep cleaning",
      "$200 monthly recurring fee",
      "Comprehensive deodorizing and deep cleaning",
      "Priority scheduling",
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-gray-900 px-6 py-16 sm:py-2 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#4C6EF5] to-[#1D4ED8] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-blue-500">
          Port Pressure Cleaning Plans
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Choose the right plan for your bin and dumpster pad cleaning needs
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-400 sm:text-xl">
        From residential bins to commercial dumpster pads, we offer flexible and
        affordable plans to keep your spaces clean.
      </p>

      <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-12 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-charcoal-900 shadow-xl" // Featured tier styling
                : "bg-gray-800 sm:mx-8 lg:mx-0", // Non-featured tier styling
              "rounded-3xl p-8 ring-1 ring-gray-700 sm:p-10 h-full" // Ensures equal height and padding
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-blue-400" : "text-blue-500",
                "text-base font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-100",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-200",
                "mt-6 text-base"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-200" : "text-gray-200",
                "mt-8 space-y-3 text-sm sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-blue-400" : "text-blue-500",
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
                  ? "bg-blue-600 text-white shadow-xs hover:bg-blue-500 focus-visible:outline-blue-500"
                  : "text-blue-500 ring-1 ring-blue-200 ring-inset hover:ring-blue-300 focus-visible:outline-blue-600",
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
