// src/Pages/HomePage.jsx

import React, { useEffect, useState } from 'react';
import Banner from '../Components/Common/Banner';
import FeaturedGroups from '../Components/Custom/FeaturedGroups';
import ArticleSection from '../Components/Custom/ArticleSection';
import FAQAccordion from '../Components/Custom/FAQAccordion';
import HomeLoader from '../Components/Custom/HomeLoader';
import Header from '../Components/Common/Header';
import CommunitySpotlight from '../Components/Custom/CommunitySpotlight';
import CreatorsToolkit from '../Components/Custom/CreatorsToolkit';
import FullPageLoader from '../Components/Custom/FullPageLoader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://hobby-hub-server-lemon.vercel.app/groupInformation'
        );
        const data = await response.json();
        const featured = data.slice(0, 4);

        setFeaturedGroups(featured);
        setDataLoaded(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !dataLoaded) {
    return <FullPageLoader />;
  }

  return (
    <div>
      <header>
        <Header />
        <Banner />
      </header>
      <main>
        <FeaturedGroups groups={featuredGroups} />
        <CreatorsToolkit />
        <ArticleSection />
        <CommunitySpotlight />
        <FAQAccordion />
      </main>
    </div>
  );
};

export default HomePage;
