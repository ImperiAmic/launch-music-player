import { Song } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  const areSame = song.title === songTitle;

  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  const maximumPlaylistLength = 4;
  const isFull = songs.length >= maximumPlaylistLength;

  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  if (errorCode === "exists") {
    errorMessage = "La canción ya existe";
  } else if (errorCode === "limit") {
    errorMessage = "La playlist está llena";
  } else errorMessage = "";

  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {
  const songsCount = songs.length;

  return songsCount;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition = currentSongPosition + 1;

  if (nextSongPosition >= songs.length) {
    nextSongPosition = 0;
  }

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  const isCurrent = song.isCurrent;

  return isCurrent;
};
