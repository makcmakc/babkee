const fetchVisibleColumnsFromLocalStorage = ({commit}) => {
  const localStorageVisibleColumns = localStorage.getItem('visibleColumns');
  if (localStorageVisibleColumns) {
    const columns = JSON.parse(localStorageVisibleColumns);
    if (!columns.includes('adgroup')) columns.push('adgroup'); //adgroup is always visible
    commit('setVisibleColumns', columns);
  }
};

const saveVisibleColumnsToLocalStorage = ({getters}) => {
  let visibleColumns = [];
  for (let [key, value] of Object.entries(getters.getVisibleColumns)) {
    if (value === true) {
      visibleColumns.push(key);
    }
  }

  localStorage.setItem('visibleColumns', JSON.stringify(visibleColumns));
};
