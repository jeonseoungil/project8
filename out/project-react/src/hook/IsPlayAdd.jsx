export const useIsfindList = (list, user) => {
  const isfindList = (id) => {
    if (!Array.isArray(list) || list.length === 0) {
      return false;
    }

    const playList = list.find((song) => song.rank === id);
    if (playList !== undefined) {
      if (user && Array.isArray(user.playList)) {
        return user.playList.some(
          (song) => JSON.stringify(song) === JSON.stringify(playList)
        );
      } else {
        return;
      }
    }

    return false;
  };

  return isfindList;
};
