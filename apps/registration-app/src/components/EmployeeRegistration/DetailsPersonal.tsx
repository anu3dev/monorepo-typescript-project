import React from 'react';

type DetailsPersonalProps = {
  formDetails: {
    name?: string;
    placeOfBirth?: string;
    city?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DetailsPersonal = ({
  formDetails,
  handleFormValue,
}: DetailsPersonalProps) => {
  return (
    <div className="details-personal">
      <div className="employee-registration__input">
        <span>Your name:</span>
        <input
          type="text"
          name="name"
          value={formDetails?.name}
          onChange={handleFormValue}
        />
      </div>
      <div className="employee-registration__input">
        <span>Birth place:</span>
        <input
          type="text"
          name="placeOfBirth"
          value={formDetails?.placeOfBirth}
          onChange={handleFormValue}
        />
      </div>
      <div className="employee-registration__input">
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
