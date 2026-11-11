import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeadlinesBar from './components/HeadlinesBar';
import ArticleGrid from './components/ArticleGrid';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <HeroSection />
        <HeadlinesBar />
        <ArticleGrid />
        <MembershipSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;