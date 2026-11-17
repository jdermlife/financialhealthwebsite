import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeadlinesBar from './components/HeadlinesBar';
import ArticleGrid from './components/ArticleGrid';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';
import SavingsArticle from './components/SavingsArticle';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <HeroSection />
              <HeadlinesBar />
              <ArticleGrid />
              <MembershipSection />
              <Footer />
            </div>
          }
        />
        <Route path="/articles/growing-your-savings-2026" element={<SavingsArticle />} />
      </Routes>
    </Router>
  );
};

export default App;