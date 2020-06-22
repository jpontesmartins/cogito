export const showBirthAndDeathPlaces = (birthLocal, deathLocal) => (
  {
    type: 'SHOW_BIRTH_AND_DEATH_PLACES',
    payload: {
      birthLocal,
      deathLocal
    }
  });
