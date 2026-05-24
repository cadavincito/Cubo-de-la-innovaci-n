import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileBanner from '../Perfiles/components/ProfileBanner';
import ProfileProgramsSection from '../Perfiles/components/ProfileProgramsSection';
import ProfileOfertasSection from '../Perfiles/components/ProfileOfertasSection';
import ProfileCtaBanner from '../Perfiles/components/ProfileCtaBanner';
import ServiciosSection from '../../components/sections/ServiciosSection';
import AliadosSection from '../../components/sections/AliadosSection';
import perfilesContent from '../../constants/perfilesContent.json';

const { emprendedorPrograms, emprendedorPhases } = perfilesContent;
import '../Perfiles/Perfiles.css';

export default function EmprendedorPage() {
  const { t } = useTranslation();

  return (
    <div className="perfil-page">
      <ProfileBanner profileKey="emprendedor" />
      <ProfileProgramsSection
        items={emprendedorPrograms}
        profileKey="emprendedor"
        variant="programs"
      />
      <ProfileProgramsSection
        items={emprendedorPhases}
        profileKey="emprendedor"
        variant="phases"
      />
      <ServiciosSection
        serviceIds={['academy', 'land']}
        customTitle={t('emprendedor_page.servicios_title')}
      />
      <ProfileOfertasSection perfil="Emprendedor" profileKey="emprendedor" />
      <ProfileCtaBanner profileKey="emprendedor" />
      <AliadosSection />
    </div>
  );
}
