import React from 'react';

type DetailsEmploymentProps = {
  formDetails: {
    location?: string;
    company?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const DetailsEmployment = ({
  formDetails,
  handleFormValue,
}: DetailsEmploymentProps) => {
  return (
    <div className="details-employment">
      <div className="employee-registration__input">
        <span>Job location:</span>
        <input
          type="text"
          name="location"
          value={formDetails?.location}
          onChange={handleFormValue}
        />
      </div>
      <div className="employee-registration__input">
        <span>Company name:</span>
        <input
          type="text"
          name="company"
          value={formDetails?.company}
          onChange={handleFormValue}
        />
      </div>
    </div>
  );
};
