import React from "react";

/**
 * CrisisBanner: Canadian crisis support info, non-clinical, safe copy.
 */
export const CrisisBanner = () => (
  <div className="card bg-coral text-sand dark:bg-coral dark:text-sand mb-4 flex flex-col items-center text-center">
    <span className="font-bold text-lg">Need Immediate Support?</span>
    <p className="mt-2 text-base max-w-xl">
      If you or someone you know is in crisis, help is available 24/7. Call or text <b>9-8-8</b> for free, confidential support across Canada. For emergencies, dial <b>9-1-1</b> or visit your nearest emergency department.
    </p>
    <span className="mt-2 text-xs opacity-80">This service is not a substitute for emergency care.</span>
  </div>
);

export default CrisisBanner;
