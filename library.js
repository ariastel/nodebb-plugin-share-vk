'use strict';


var VkShare = {};

VkShare.addNetwork = function (networks, cb) {

  networks.push({
    id: "vkontakte",
    name: "ВКонтакте",
    class: "fa-vk"
  });

  if (cb && typeof cb === 'function') {
    cb(null, networks);
  }
};

module.exports = VkShare;