import web, multiprocessing,  webbrowser
from frequency import *
from word import *

urls = (
    '/', 'show',
    '/frequency/texts/list/get', 'index',
    "/frequency/texts/count/counting", "count"
)
app = web.application(urls, globals())

class show:
    def GET(self):
        render = web.template.render('templates/')
        return render.index()


if __name__ == "__main__":
   
    multiprocessing.Process(target=app.run).start()
    webbrowser.open_new_tab("http://0.0.0.0:8080")
