//Console.log out elements in JSON file

var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var video = response.video;
    
            var output = '';

            for(var i = 0; i < video.length; i++) {
            
              output += '<li>'+video[i].id+'</li>' + 
              '<li>'+video[i].name+'</li>'  + 
              '<li>'+video[i].url+'</li>';
              
              console.log(video[0].id);
              console.log(video[0].name);
              console.log(video[0].url);
              console.log(video[0].author);
                
            var data = video[0].author.data;
            var dataOutput = '';

            }
            document.getElementById('video').innerHTML = output;
            
          }
      };
      xhttp.open("GET", "author.json", true);
      xhttp.send();


    

/*

      {
        "video": [{
            "id": 12312412312,
            "name": "Ecuaciones Diferenciales",
            "url": "/video/math/edo/12312412312",
            "author": {
                "data": [{
                    "name_author": "Alejandro Morales",
                    "url": "/author/alejandro-morales",
                    "type": "master"
                }]
            }
        }]
    }

    */


    