import { Meta } from '../layout/Meta';
import { RetroContact } from '../retro/RetroContact';
import { RetroFooter } from '../retro/RetroFooter';
import { RetroHeader } from '../retro/RetroHeader';
import { RetroHero } from '../retro/RetroHero';
import { RetroLetter } from '../retro/RetroLetter';
import { RetroServices } from '../retro/RetroServices';
import { RetroTeam } from '../retro/RetroTeam';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="min-h-screen bg-[#0a0a0a] font-mono text-[#c0c0c0] antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <RetroHeader />
    <main>
      <RetroHero />
      <RetroLetter />
      <RetroServices />
      <RetroTeam />
      <RetroContact />
    </main>
    <RetroFooter />
  </div>
);

export { Base };
