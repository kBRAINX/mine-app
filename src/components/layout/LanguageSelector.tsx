'use client';

import { FiGlobe } from 'react-icons/fi';

export default function LanguageSelector() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      aria-label="Français"
    >
      <FiGlobe className="h-5 w-5" />
      <span className="ml-1 hidden md:block">FR</span>
    </button>
  );
}
