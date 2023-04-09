const rowChildrenSettings = () => [
  {'name': 'childrenSite', 'type': 'site'},
  {'name': 'childrenDevice', 'type': 'device'},
  {'name': 'childrenSource', 'type': 'source'},
  {'name': 'childrenFeed', 'type': 'feed'},
  {'name': 'childrenMarket', 'type': 'market'},
  {'name': 'childrenBuyer', 'type': 'buyer'},
  {'name': 'childrenDate', 'type': 'date'},
  {'name': 'childrenTeam', 'type': 'team'},
  {'name': 'childrenSiteProject', 'type': 'siteProject'}
];

const getRowChildrenNameByType = (type) => {
  let result = null;

  rowChildrenSettings().forEach(rowChildSettings => {
    if (rowChildSettings.type === type) {
      result = rowChildSettings.name;
    }
  });

  return result;
};

export {
  rowChildrenSettings,
  getRowChildrenNameByType,
}
