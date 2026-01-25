import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { clinicsAPI } from '../services/api';
import { getSelectedClinicId, setSelectedClinicId } from '../services/clinicStorage';

const ClinicContext = createContext(null);

const normalizeClinics = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.clinics)) return payload.clinics;
  return [];
};

export function ClinicProvider({ children, isAuthenticated }) {
  const [clinics, setClinics] = useState([]);
  const [selectedClinicId, setSelectedClinicIdState] = useState(getSelectedClinicId());

  const updateSelectedClinicId = useCallback((clinicId) => {
    setSelectedClinicIdState(clinicId);
    setSelectedClinicId(clinicId);
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (isAuthenticated) {
      clinicsAPI
        .list()
        .then((response) => {
          if (!isMounted) return;
          const clinicList = normalizeClinics(response.data);
          setClinics(clinicList);
          const hasSelectedClinic = clinicList.some(
            (clinic) => (clinic.id || clinic.clinic_id) === selectedClinicId
          );
          if (clinicList.length > 0 && (!selectedClinicId || !hasSelectedClinic)) {
            const defaultClinic = clinicList[0];
            const defaultId = defaultClinic.id || defaultClinic.clinic_id || '';
            if (defaultId) {
              updateSelectedClinicId(defaultId);
            }
          }
        })
        .catch(() => {
          if (isMounted) {
            setClinics([]);
          }
        });
    } else {
      setClinics([]);
      updateSelectedClinicId('');
    }

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, selectedClinicId, updateSelectedClinicId]);

  useEffect(() => {
    const storedClinicId = getSelectedClinicId();
    if (storedClinicId !== selectedClinicId) {
      setSelectedClinicIdState(storedClinicId);
    }
  }, [selectedClinicId]);

  const value = {
    clinics,
    selectedClinicId,
    setSelectedClinicId: updateSelectedClinicId,
  };

  return <ClinicContext.Provider value={value}>{children}</ClinicContext.Provider>;
}

export const useClinicContext = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinicContext must be used within ClinicProvider');
  }
  return context;
};
