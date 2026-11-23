export const openQuoteDrawer = (initialStone: string = 'Kota Stone') => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('open-quote-drawer', {
        detail: { stone: initialStone },
      })
    );
  }
};
