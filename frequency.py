import web
import json

class index:
	def POST(self):
		data=web.data()
		s = data.replace('\r', '\\r').replace('\n', '\\n').replace(' ', '_')
		dic=json.loads(s)
		word=dic['text']
		d=dict()
		sorted(d)
		for character in word:
			d[character]=d.get(character,0)+1
		return json.dumps({"CharactersFrequency":d})
		console.log(d)





		
		
