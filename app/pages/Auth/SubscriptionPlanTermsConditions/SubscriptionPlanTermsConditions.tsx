import Button from "@root/components/Button";
import { getActiveSubscriptionPricing } from "@root/helpers";
import { ReactComponent as ConfirmIcon } from "../../../assets/tickOutline.svg";
import useSWR from "swr";

export default function SubscriptionPlanTermsConditions({
  onConfirm,
}: {
  onConfirm: () => void;
}) {
  const { data: subscriptionPricing } = useSWR("activeSubscriptionPricing", getActiveSubscriptionPricing, {
    suspense: true
  });

  return (
    <div className="w-full max-h-full flex justify-center overflow-y-auto">
      <div className="w-3/4">
        <div className="py-[35px] w-full text-center text-white font-extrabold text-4xl">
          NXU Subscription Agreement
        </div>

        <div className="w-full text-white">
          <p className="underline">IMPORTANT</p>

          <p className="mb-5">
            THIS SUBSCRIPTION AGREEMENT (“SUBSCRIPTION AGREEMENT”) GOVERNS THE
            TERMS APPLICABLE TO SUBSCRIPTION PLANS FOR NXU CHARGERS. THIS IS A
            LEGAL AGREEMENT BETWEEN EACH END USER (referenced herein as “YOU” or
            “USER” or with “YOUR”) AND NXU, INC (“COMPANY”) THAT APPLIES FOR
            CUSTOMERS WHO SIGN UP FOR A SUBSCRIPTION PLAN TO USE NXU CHARGERS ON
            THE NXU CHARGING NETWORK, (A “CHARGER” “SOLUTION” or collectively,
            the “NETWORK”). YOU SHOULD THEREFORE READ CAREFULLY THE FOLLOWING
            TERMS AND CONDITIONS CONTAINED IN THIS SUBSCRIPTION AGREEMENT.
          </p>

          <p className="mb-5">
            By selecting “Confirm” below to sign up for this Nxu Subscription,
            you agree that Nxu, Inc may charge the monthly fee of “${subscriptionPricing.subscriptionFee.toFixed(2)}” to
            the credit card on file in your user profile. Your first month will
            be prorated, after which you will be charged the full subscription
            fee on the first day of each subsequent month. While subscribed, you
            will receive discounted pricing or unlimited free charging at Nxu’s
            network of electric vehicle charging stations, in the amounts
            determined by Nxu in each region. Discounts may vary depending on
            the region. Discounts may vary depending on the region.
          </p>

          <p className="mb-5">
            This Nxu Subscription will continue until you cancel it, and will
            automatically renew each month for the same monthly subscription
            fee, charged to you on the first day of each new month that you are
            subscribed.
          </p>

          <p className="mb-5">
            There is no minimum purchase obligation for this subscription, so
            the specified discounts, or free charging will remain in effect
            regardless of how many charging sessions you purchase during the
            subscription term.
          </p>

          <p className="mb-5">
            You may cancel this Nxu Subscription at any time as follows: Log
            into the Nxu charging site and change to transaction charging Nxu in
            your user profile. You may choose to sign back up for a new Nxu
            Subscription plan at any time.
          </p>

          <p className="mb-5">
            Once you cancel your Nxu Subscription plan, you will no longer
            receive subscription discounts, or free charging on Nxu Charging
            Solutions.
          </p>

          <p className="mb-5">
            Nxu Subscription fees already paid for the current month are
            non-refundable.
          </p>

          <p className="mb-5">
            We reserve the right to change the monthly subscription fee at any
            time. If we decide to change the monthly subscription fee, we will
            notify you. The next time you log into your Nxu account, you will
            have the opportunity to review the new terms and conditions and
            monthly subscription fee. If you decide to cancel your subscription,
            your account will automatically revert back to transaction charging.
          </p>
        </div>

        <div className="flex justify-center py-20">
          <Button onClick={onConfirm} iconLeft={<ConfirmIcon />}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
