import React, { useState } from 'react';
import { DetailsHealth } from './DetailsHealth';
import { DetailsPersonal } from './DetailsPersonal';
import { DetailsEmployment } from './DetailsEmployment';

import './EmployeeRegistration.scss';

const TAB_DETAILS = [
  {
    name: 'Personal',
    page: DetailsPersonal,
  },
  {
    name: 'Health',
    page: DetailsHealth,
  },
  {
    name: 'Employment',
    page: DetailsEmployment,
  },
];

export const EmployeeRegistration = () => {
  const [currentTabName, setCurrentTabName] = useState('Personal');
  const [formDetails, setFormDetails] = useState({
    name: '',
    placeOfBirth: '',
    city: '',
    insuranceProvider: '',
    bloodgroup: '',
    company: '',
    location: '',
  });
  const [pageHasError, setPageHasError] = useState(false);

  const ActiveTab = TAB_DETAILS.find(
    (item) => item.name === currentTabName
  )?.page;

  const handleFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkPageError = () => {
    if (currentTabName === TAB_DETAILS[0].name) {
      if (formDetails.name && formDetails.placeOfBirth && formDetails.city) {
        setPageHasError(false);
      } else {
        setPageHasError(true);
        return true;
      }
    } else if (currentTabName === TAB_DETAILS[1].name) {
      if (formDetails.insuranceProvider && formDetails.bloodgroup) {
        setPageHasError(false);
      } else {
        setPageHasError(true);
        return true;
      }
    } else if (currentTabName === TAB_DETAILS[2].name) {
      if (formDetails.company && formDetails.location) {
        setPageHasError(false);
      } else {
        setPageHasError(true);
        return true;
      }
    }
  };

  const handleFormSubmit = () => {
    if (checkPageError()) {
      return;
    }

    window.sessionStorage.setItem('data', JSON.stringify(formDetails));
  };

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (checkPageError() && e.currentTarget.innerText === 'Next') {
      return;
    }

    setCurrentTabName(
      e.currentTarget.innerText === 'Previous'
        ? TAB_DETAILS[
            TAB_DETAILS.findIndex((t) => t.name === currentTabName) - 1
          ].name
        : TAB_DETAILS[
            TAB_DETAILS.findIndex((t) => t.name === currentTabName) + 1
          ].name
    );
  };

  return (
    <div className="employee-registration">
      <div className="employee-registration__heading">
        Employee registration
      </div>
      <div className="employee-registration__tab">
        {TAB_DETAILS.map((item) => (
          <button
            type="button"
            key={item.name}
            className={`employee-registration__tab__button ${item.name === currentTabName ? 'employee-registration__tab__active' : ''}`}
            onClick={() => {}}
          >
            {item.name}
          </button>
        ))}
      </div>
      {ActiveTab ? (
        <ActiveTab
          formDetails={formDetails}
          handleFormValue={handleFormValue}
          pageHasError={pageHasError}
        />
      ) : null}
      <div className="employee-registration__btn">
        <button
          type="button"
          disabled={currentTabName === TAB_DETAILS[0].name}
          className="employee-registration__btn__button"
          onClick={handleNavigation}
        >
          Previous
        </button>
        {currentTabName === TAB_DETAILS[TAB_DETAILS?.length - 1].name ? (
          <button
            type="button"
            className="employee-registration__btn__button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            className="employee-registration__btn__button"
            onClick={handleNavigation}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
