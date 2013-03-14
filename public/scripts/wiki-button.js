$(function(){
    //redmineのwikiのpreボタンインスパイア
    $('#pre-button').click(function(){
      console.log("pre");
      var start_position = $('#text').selection('getPos').start;
      var end_position = $('#text').selection('getPos').end;
      console.log("start:"+start_position+" end:"+end_position);

      $('#text').selection('setPos',{start: 0, end: end_position});
      $('#text').selection('insert', {text: '<pre>\n', mode: 'before'}
                          ).selection('insert', {text: '\n</pre>', mode: 'after'});
      end_position = $('#text').selection('getPos').end;
      $('#text').selection('setPos',{start: end_position, end: end_position});
    });
});
