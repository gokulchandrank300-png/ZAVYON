import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import { HomeView } from './views/HomeView';
import { CollectionView } from './views/CollectionView';
import { ProductDetailView } from './views/ProductDetailView';
import { StoryView } from './views/StoryView';
import { ContactView } from './views/ContactView';
import { PoliciesView } from './views/PoliciesView';
import { NotFoundView } from './views/NotFoundView';
import { getProductBySlug } from './data/products';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Welcome overlay state - displayed automatically on first visit
  const [welcomeOpen, setWelcomeOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const dismissed = localStorage.getItem('zavyon_welcome_dismissed');
        return !dismissed;
      } catch {
        return true;
      }
    }
    return false;
  });

  // Listen to browser popstate (back / forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigation handler with pushState and smooth top scroll
  const navigate = useCallback((path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [currentPath]);

  // Welcome overlay close / dismissal handler
  const handleCloseWelcome = useCallback(() => {
    setWelcomeOpen(false);
    try {
      localStorage.setItem('zavyon_welcome_dismissed', 'true');
    } catch {
      // Ignore storage restrictions if cookies are blocked
    }
  }, []);

  // Category select from welcome overlay
  const handleSelectCategoryFromWelcome = useCallback((categoryId: string) => {
    handleCloseWelcome();
    navigate(`/category/${categoryId}`);
  }, [handleCloseWelcome, navigate]);

  // Explore all from welcome overlay
  const handleExploreAllFromWelcome = useCallback(() => {
    handleCloseWelcome();
    navigate('/shop');
  }, [handleCloseWelcome, navigate]);

  // Render current view based on path
  const renderView = () => {
    // Product Detail Route: /product/:slug
    if (currentPath.startsWith('/product/')) {
      const slug = currentPath.replace('/product/', '').replace(/\/$/, '');
      const product = getProductBySlug(slug);
      if (product) {
        return <ProductDetailView product={product} navigate={navigate} />;
      }
      return <NotFoundView navigate={navigate} />;
    }

    // Category Routes: /category/:id
    if (currentPath.startsWith('/category/')) {
      const categoryId = currentPath.replace('/category/', '').replace(/\/$/, '');
      const validCategories = ['home-decor', 'fashion-accessories', 'garments', 'others'];
      if (validCategories.includes(categoryId)) {
        return <CollectionView categoryId={categoryId} navigate={navigate} />;
      }
      return <NotFoundView navigate={navigate} />;
    }

    // Shop All Route
    if (currentPath === '/shop') {
      return <CollectionView navigate={navigate} />;
    }

    // Story Route
    if (currentPath === '/story' || currentPath === '/about') {
      return <StoryView navigate={navigate} onOpenWelcome={() => setWelcomeOpen(true)} />;
    }

    // Contact Route
    if (currentPath === '/contact') {
      return <ContactView navigate={navigate} />;
    }

    // Legal & Policy Routes
    if (currentPath === '/privacy-policy') {
      return <PoliciesView initialTab="privacy" navigate={navigate} />;
    }
    if (currentPath === '/terms') {
      return <PoliciesView initialTab="terms" navigate={navigate} />;
    }
    if (currentPath === '/shipping-policy') {
      return <PoliciesView initialTab="shipping" navigate={navigate} />;
    }
    if (currentPath === '/returns-policy') {
      return <PoliciesView initialTab="returns" navigate={navigate} />;
    }

    // Homepage Root
    if (currentPath === '/' || currentPath === '') {
      return <HomeView navigate={navigate} onOpenWelcome={() => setWelcomeOpen(true)} />;
    }

    // 404 Fallback
    return <NotFoundView navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#141411] text-[#F2EEE6] selection:bg-[#C8C0B3] selection:text-[#141411]">
      {/* Top Bar Navigation */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        onOpenWelcome={() => setWelcomeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Flagship Footer */}
      <Footer
        navigate={navigate}
        onOpenWelcome={() => setWelcomeOpen(true)}
      />

      {/* Signature Welcome Overlay (Rendered above homepage on first visit or on demand) */}
      <WelcomeOverlay
        isOpen={welcomeOpen}
        onClose={handleCloseWelcome}
        onSelectCategory={handleSelectCategoryFromWelcome}
        onExploreAll={handleExploreAllFromWelcome}
      />
    </div>
  );
}
