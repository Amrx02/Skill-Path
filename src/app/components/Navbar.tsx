import { Link, useLocation } from 'react-router';
import { Moon, Sun, GraduationCap } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap';

export const Navbar = () => {
  const { theme, toggleTheme, recommendation } = useApp();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    ...(recommendation ? [{ path: '/recommendation', label: 'My Skill' }] : []),
    ...(recommendation ? [{ path: `/roadmap/${recommendation.skillId}`, label: 'Roadmap' }] : []),
    ...(recommendation ? [{ path: '/dashboard', label: 'Dashboard' }] : []),
    { path: '/resources', label: 'Resources' },
  ];

  return (
    <BsNavbar sticky="top" className="navbar-custom shadow-sm">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <div 
            className="d-flex align-items-center justify-content-center p-2 rounded-3"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <GraduationCap size={24} color="white" />
          </div>
          <span className="fw-bold fs-5 gradient-text">SkillPath</span>
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={`px-3 py-2 rounded ${
                  location.pathname === link.path
                    ? 'bg-primary bg-opacity-10 text-primary fw-semibold'
                    : ''
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="btn btn-light rounded-circle p-2 ms-2"
              style={{ width: '40px', height: '40px' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};
