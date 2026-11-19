import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { BusinessFooter } from './BusinessFooter';
import { BusinessHeader } from './BusinessHeader';
import { ContactSection } from './ContactSection';
import { PresentationLetter } from './PresentationLetter';
import { ServicesGrid } from './ServicesGrid';
import { TeamProfiles } from './TeamProfiles';

const Base = () => (
  <div className="min-h-screen bg-[#070b14] text-gray-300 antialiased selection:bg-cyan-500 selection:text-gray-950">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <BusinessHeader />
    <main>
      <PresentationLetter />
      <ServicesGrid />
      <TeamProfiles />
      <ContactSection />
    </main>
    <BusinessFooter />
  </div>
);

export { Base };
