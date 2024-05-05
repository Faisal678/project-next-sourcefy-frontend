import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerTypeData } from '@/utils/sampleData';
import { toast } from 'react-toastify';

export const useRegistrationType = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>('');

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleContinue = () => {
    if (!selectedType) {
      toast.error('Please select a role.');
      return;
    }
    localStorage.setItem('selectedType', selectedType);
    router.push('/register');
  };

  return {
    selectedType,
    handleTypeChange,
    handleContinue,
    registerTypeData,
  };
};
