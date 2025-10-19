import React from 'react';

type DetailsHealthProps = {
  formDetails: {
    insuranceProvider?: string;
    bloodgroup?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DetailsHealth = ({
  formDetails,
  handleFormValue,
}: DetailsHealthProps) => {
  return (
    <div className="details-health">
      <div className="employee-registration__input">
        <span>Your insurance provider:</span>
        <input
          type="text"
          name="insuranceProvider"
          value={formDetails?.insuranceProvider}
          onChange={handleFormValue}
        />
      </div>
      <div className="employee-registration__input">
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
