$(document).ready(() => {
  'use strict';

  // array of channels we are interested in
  const channels = [
  'freecodecamp',
  'medrybw',
  'storbeck',
  'terakilobyte',
  'habathcx',
  'RobotCaleb',
  'thomasballinger',
  'noobs2ninjas',
  'beohoff'
];
  channels.forEach(channel => {
    $.ajax({
      url : `https://api.twitch.tv/kraken/streams/${channel}`,
      type : 'GET',
      dataType : 'json',
      success : success
    });
  });

  // ajax request success callback
  function success(response) {
    console.log(response);
  }
});
