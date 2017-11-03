block('page').addMods()( ( node ) => {
  return {
    widget: true,
    refer: node.data.refer
  };
});
