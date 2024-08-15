import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@mui/material'; // Using Material-UI Dialog component

const Groupcon = () => {
  const [open, setOpen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the top of the div has crossed 40% of the screen height
        if (rect.top < windowHeight * 0.6) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px' }}> {/* Extra height for scrolling */}
    <div style={{ height: '50px', background: '#f0f0f0' }}>Scroll down to see the dialog</div>

    <div
      ref={divRef}
      style={{
        marginTop: '100vh', // Place this div below the initial view
        height: '200px',
        background: '#ddd',
      }}
    >
      I am the div that will become a dialog box!
    </div>

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        This is a dialog box that appeared because you scrolled!
      </DialogContent>
    </Dialog>
  </div>
  );
};

export default Groupcon;
