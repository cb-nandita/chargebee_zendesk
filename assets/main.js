$(function() {
  var client = ZAFClient.init();
 client.metadata().then(function(metadata) {
 var region = 
 metadata.settings.region ? metadata.settings.region.toLowerCase() : 'us';
 switch (region) {
  case 'au':
    location.href = "https://app.localcb.in:8443/zendesk/ticket" + location.search;
    break;
  case 'eu':
    location.href = "https://app.localcb.in:8443/zendesk/ticket" + location.search;
    break;
  default :
    location.href = "https://app.localcb.in:8443/zendesk/ticket" + location.search;
    break;
 }
});
});
