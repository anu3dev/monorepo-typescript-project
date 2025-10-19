import React from 'react';

type DetailsPersonalProps = {
  formDetails: {
    name?: string;
    placeOfBirth?: string;
    city?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pageHasError?: boolean | false;
};

export const DetailsPersonal = ({
  formDetails,
  handleFormValue,
  pageHasError,
}: DetailsPersonalProps) => {
  return (
    <div className="details-personal">
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.name ? 'employee-registration__input-error' : ''}`}
      >
        <span>Your name:</span>
        <input
          type="text"
          name="name"
          value={formDetails?.name}
          onChange={handleFormValue}
        />
      </div>
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.placeOfBirth ? 'employee-registration__input-error' : ''}`}
      >
        <span>Birth place:</span>
        <input
          type="text"
          name="placeOfBirth"
          value={formDetails?.placeOfBirth}
          onChange={handleFormValue}
        />
      </div>
      <div
        className={`employee-registration__input ${pageHasError && !formDetails?.city ? 'employee-registration__input-error' : ''}`}
      >
        <span>Current city:</span>
        <input
          type="text"
          name="city"
          value={formDetails?.city}
          onChange={handleFormValue}
        />
      </div>
    </div>
  );
};
