
function normalizeTitle(title) {
  return title.replace(/^(the|a) /i, '');
}

// sort by title
function titleSort(a, b) {
  var titleA = normalizeTitle(a.title).toUpperCase(); // ignore upper and lowercase
  var titleB = normalizeTitle(b.title).toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  // equal
  return 0;
};

export function programTypeSelector(thisProgramType) {
  return ({ entries }) => {
    return entries

      // movies or series
      .filter(({ programType }) => { return programType == thisProgramType; })

      // releaseYear >= 2010
      .filter(({releaseYear}) => releaseYear >= 2010)

      // sort by title
      .sort(titleSort)

      // display 21 entries
      .slice(0, 21)
  };
}
