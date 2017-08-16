$(document).ready(function(){
  $('#search').click(function(){
    var searchTerm=$('#searchTerm').val();
    var output;
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:'json',
      success: function(data){
        $('#output').html('');
        var op='';
        for(var i=0;i<data[1].length;i++){
          $("#output").append('<li><h3><a href='+data[3][i]+'>'+data[1][i]+'</h3>'+'<p>'+data[2][i]+'</p></a></li>');

          
        }
      },
      error:function(errMsg){
        alert('error');
      }
    });
  });
});