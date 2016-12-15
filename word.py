import web
import json
import re

class count:
	def POST(self):
		data=web.data()
		s = data.replace('\r', '\\r').replace('\n', '\\n')
		word=json.loads(s)
		test=word['words']
		w=dict()
		counts = len(re.findall(r'\w+', test))
		return json.dumps({"NumberOfWord":counts})
		console.log(counts)
