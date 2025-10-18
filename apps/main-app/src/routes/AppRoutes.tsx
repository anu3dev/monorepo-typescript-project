import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../../../packages/constant/src';

import WebsiteHome from '../components/WebsiteHome/WebsiteHome';
import MyBlogs from '../components/MyBlogs/MyBlogs';
import ContactMe from '../components/ContactMe/ContactMe';
import AboutMe from '../components/AboutMe/AboutMe';

import MoodApp from 'apps/mood-app/src/MoodApp';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<WebsiteHome />} />
        <Route path={ROUTES.ABOUT} element={<AboutMe />} />
        <Route path={ROUTES.BLOG} element={<MyBlogs />} />
        <Route path={ROUTES.CONTACT} element={<ContactMe />} />
        <Route
          path={ROUTES.MOOD_TRACKER}
          element={<MoodApp isStandAlone={false} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
