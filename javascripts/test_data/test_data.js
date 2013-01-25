define(['json!test_data/now.json',
        'json!test_data/tomorrow.json',
        'json!test_data/weekend.json'],
function(now, tomorrow, weekend) {

  return {
    now: now, tomorrow: tomorrow, weekend: weekend
  }

});
