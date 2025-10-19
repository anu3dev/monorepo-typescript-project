import React from 'react';

type DetailsEmploymentProps = {
  formDetails: {
    location?: string;
    company?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pageHasError: boolean | false;
};
export const DetailsEmployment = ({
  formDetails,
  handleFormValue,
  pageHasError,
}: DetailsEmploymentProps) => {
  return (
    <div className="details-employment">
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.location ? 'employee-registration__input-error' : ''}`}
      >
        <span>Job location:</span>
        <input
          type="text"
          name="location"
          value={formDetails?.location}
          onChange={handleFormValue}
        />
      </div>
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.company ? 'employee-registration__input-error' : ''}`}
      >
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
