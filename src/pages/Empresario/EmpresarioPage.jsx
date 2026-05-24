import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileBanner from '../Perfiles/components/ProfileBanner';
import ProfileProgramsSection from '../Perfiles/components/ProfileProgramsSection';
import ProfileOfertasSection from '../Perfiles/components/ProfileOfertasSection';
import ProfileCtaBanner from '../Perfiles/components/ProfileCtaBanner';
import ServiciosSection from '../../components/sections/ServiciosSection';
import AliadosSection from '../../components/sections/AliadosSection';
import perfilesContent from '../../constants/perfilesContent.json';

const { empresarioPrograms, empresarioPhases } = perfilesContent;
import '../Perfiles/Perfiles.css';

export default function EmpresarioPage() {
  const { t } = useTranslation();

  return (
    <div className="perfil-page">
      <ProfileBanner profileKey="empresario" />
      <ProfileProgramsSection
        items={empresarioPrograms}
        profileKey="empresario"
        variant="programs"
      />
      <ProfileProgramsSection
        items={empresarioPhases}
        profileKey="empresario"
        variant="phases"
      />
      <ServiciosSection
        serviceIds={['rioinnova', 'hub']}
        customTitle={t('empresario_page.servicios_title')}
      />
      <ProfileOfertasSection perfil="Empresario" profileKey="empresario" />
      <ProfileCtaBanner profileKey="empresario" />
      <AliadosSection />
    </div>
  );
}
