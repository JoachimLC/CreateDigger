import React from 'react';
import Navbar from '../components/navbar';

const CreateCrates = () => {
    return (
      <div className="create-crates">
        <Navbar variant="slim" />
        <div className="content">
          <h1>Create Your Digital Crate</h1>
          <p>
            Start building your personalized vinyl-ready music collection. Choose a playlist, generate a crate, and enjoy!
          </p>
        </div>
      </div>
    );
  };
  
  export default CreateCrates;
  