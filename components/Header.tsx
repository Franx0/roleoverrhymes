// React
import { FunctionComponent } from 'react';
// Components
import LanguageSelector from '@/components/LanguageSelector';

const Header: FunctionComponent<any> = () => {
  return(
    <header className='h-content flex border-b md:items-center md:justify-between p-3 pr-6 shadow-lg'>
      <div className="flex flex-grow flex-row items-stretch">
        <h1 className='flex-start font-rancho m-0 ml-auto py-0.5 pleading-8 text-5xl whitespace-nowrap text-roleover'>
          Role Over Rhymes
        </h1>
        <div className="w-16 flex items-center md:flex-end mb-0 ml-auto">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

export default Header
