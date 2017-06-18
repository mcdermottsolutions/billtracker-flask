from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World! v0.2 (now with auto-reloading)"

if __name__ == '__main__':
    app.run(debug = True)
