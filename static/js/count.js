	var formss=document.getElementById('form');
	formss.addEventListener("submit",sendRequest, false);
	formss.addEventListener("submit",sendRequest1, false);

	function sendRequest(){
		event.preventDefault();
		var characters={}	
		characters.text=document.getElementById('character').value;
		request("/frequency/texts/list/get", JSON.stringify(characters));

		}

		function request(url, characters){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4 && xhr.status === 200) {
					var txt="<table><tr><th>Letter</th><th>Frequency</th></tr>"
					var count=JSON.parse(xhr.responseText);
					var list=count.CharactersFrequency;
					console.log(list);
					for(var param in list){
						txt += "<tr><td>"+param+ "</td><td>"+list[param]+ "</td></tr>";
					
					}
					txt += "</table>";
					document.getElementById("table").innerHTML = txt;
				}
			}
			xhr.open("POST", url, true);
			xhr.send(characters);
			document.getElementById("table").innerHTML = "Waiting for response ...";
		}


	function sendRequest1(){
		event.preventDefault();
		var character={}
		character.words=document.getElementById('character').value;
		requests("/frequency/texts/count/counting", JSON.stringify(character));
		}

		function requests(url, character){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4 && xhr.status === 200) {
					var txt="<table><th>Frequency</th></tr>"
					var count=JSON.parse(xhr.responseText);
					var list=count.NumberOfWord;
					console.log(list);
					txt += "<tr><td>"+list+ "</td></tr></table>";
				
					document.getElementById("table").innerHTML = txt;
				}
			}
			xhr.open("POST", url, true);
			xhr.send(character);
			document.getElementById("table").innerHTML = "Waiting for response ...";
		}

