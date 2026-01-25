const CLINIC_STORAGE_KEY = 'selected_clinic_id';

export const getSelectedClinicId = () => localStorage.getItem(CLINIC_STORAGE_KEY) || '';

export const setSelectedClinicId = (clinicId) => {
  if (clinicId) {
    localStorage.setItem(CLINIC_STORAGE_KEY, clinicId);
  } else {
    localStorage.removeItem(CLINIC_STORAGE_KEY);
  }
};

export const clearSelectedClinicId = () => {
  localStorage.removeItem(CLINIC_STORAGE_KEY);
};

export default CLINIC_STORAGE_KEY;
