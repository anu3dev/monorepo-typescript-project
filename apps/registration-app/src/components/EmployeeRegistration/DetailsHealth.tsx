import React from 'react';

type DetailsHealthProps = {
  formDetails: {
    insuranceProvider?: string;
    bloodgroup?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pageHasError: boolean | false;
};

export const DetailsHealth = ({
  formDetails,
  handleFormValue,
  pageHasError,
}: DetailsHealthProps) => {
  return (
    <div className="details-health">
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.insuranceProvider ? 'employee-registration__input-error' : ''}`}
      >
        <span>Your insurance provider:</span>
        <input
          type="text"
          name="insuranceProvider"
          value={formDetails?.insuranceProvider}
          onChange={handleFormValue}
        />
      </div>
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.bloodgroup ? 'employee-registration__input-error' : ''}`}
      >
        <span>Blood group:</span>
        <input
          type="text"
          name="bloodgroup"
          value={formDetails?.bloodgroup}
          onChange={handleFormValue}
        />
      </div>
    </div>
  );
};
