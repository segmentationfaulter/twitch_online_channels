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
    let streamStatus;
    let displayName;
    if (response.stream === null) {
      streamStatus = 'Offline';
    }
    else {
      streamStatus = 'Live';
    }

    // further send another ajax request to get other details about the channel
    $.ajax({
      url : response._links.channel,
      type : 'GET',
      dataType : 'json',
      success : moreSuccess
    });

    function moreSuccess(resp) {
      console.log(resp.display_name);
      displayName = resp.display_name;
      let html = `<li><span id="display-name">${displayName}</span>   <span id="stream-status">${streamStatus}</span></li>`;
      $('#channels').append(html);
    }
  }
});
