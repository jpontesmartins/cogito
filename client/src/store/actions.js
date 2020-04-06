export const showPlaces = (birthLocal, deathLocal) => (
  {
    type: 'SHOW_PLACES',
    payload: {
      birthLocal,
      deathLocal
    }
  });
