const openInNewTab = (url: string) => {
  // 'window' may not be available when running tests.
  if (!window || typeof window?.open !== 'function') {
    return;
  }

  // Only allowing secure pages with 'https://'.
  const isUrlValid = url?.includes('https://');
  if (!isUrlValid) {
    return;
  }

  window.open(url, '_blank');
};

export default openInNewTab;
