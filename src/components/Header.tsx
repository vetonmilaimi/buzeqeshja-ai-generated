import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Ballina', href: '/' },
    { name: 'Shërbimet', href: '/#services' },
    { name: 'Klinika', href: '/#clinic' },
    { name: 'Kontakt', href: '/#contact' },
  ];

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Only run on home page
    if (window.location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = ['services', 'clinic', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection('/');
        return;
      }

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`/#${sectionId}`);
            return;
          }
        }
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If clicking Ballina, scroll to top
      if (href === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // If clicking a hash link, let the browser handle it (smooth scroll via CSS)
      // No need to prevent default for hash links
    }
    // If we're on a different page, let the link navigate normally
  };

  const isActive = (href: string) => {
    return activeSection === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <a 
            href="/" 
            className="flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Klinika Ime</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive(item.href) 
                  ? 'text-primary font-semibold' 
                  : ''
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button size="lg" asChild>
            <a href="/termin">Cakto Termin</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium hover:text-primary ${
                      isActive(item.href) 
                        ? 'text-primary font-semibold' 
                        : ''
                    }`}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="w-full mt-4" size="lg" asChild>
                  <a href="/termin">Cakto Termin</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
