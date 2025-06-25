import React, { useEffect, useState } from 'react';
import Banner from '../Components/Common/Banner';
import FeaturedGroups from '../Components/Custom/FeaturedGroups';
import ArticleSection from '../Components/Custom/ArticleSection';
import FAQAccordion from '../Components/Custom/FAQAccordion';
import HomeLoader from '../Components/Custom/HomeLoader';

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

        const today = new Date();
        const upcoming = data
          .filter(g => new Date(g.startDate) >= today)
          .slice(0, 6);

        setFeaturedGroups(upcoming);
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
    return <HomeLoader />;
  }

  return (
    <div>
      <header>
        <Banner />
      </header>
      <main>
        <FeaturedGroups groups={featuredGroups} />
        <ArticleSection />
        <FAQAccordion />
      </main>
    </div>
  );
};

export default HomePage;
