import React from 'react';

// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='text-3xl font-bold mb-6'
          data-aos='fade-down'
          data-aos-offset='300'
        >
          Mixed Reality Headsets
        </h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1000'
          >
            <img src={Headset1} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
              <p>
              A metaverse is, simply put, a virtual world that connects users according to their interests.
              Metaverse is deeply connected with the concept of virtual reality
               
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            <img src={Headset2} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
              <p>
              It’s a place where people meet in virtual reality and interact with each other,
               making it feel as though they are meeting in the real world..
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            <img src={Headset3} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
              <p>
              An ergonomic, untethered self-contained holographic device with enterprise-ready applications 
              to increase user accuracy and output.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset4} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
              <p>
               Enjoy the limitless entertainment possibilities with tpcastt. Play,
                and enjoy the immersive experience of the real world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
