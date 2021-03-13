'use strict';

const VkSharePlugin = {};

VkSharePlugin.addNetwork = async function (networks) {
  networks.push({
    id: "vkontakte",
    name: "[[share-vk:vk]]",
    class: "fa-vk"
  });
  return networks;
};

module.exports = VkSharePlugin;