from flask import Flask, render_template
import sqlite3 as sql

app = Flask(__name__)

def reset_buttons(button=None):
    # @param button => dict item for loaded page
    nav = {
        # 1 => current page
        # 0 => other page
        'home': 0,
        'projects': 0,
        'contact': 0
    }
    if nav[button]:
        nav.update({button: 1})
    return nav

@app.route('/')
@app.route('/home')
def home():
    nav = reset_buttons('home')
    return render_template('index.html', nav=nav)

@app.route('/projects')
def projects():
    nav = reset_buttons('projects')
    return render_template('projects.html', nav=nav)

@app.route('/projects/<name>')
def single(name):
    nav = reset_buttons()
    return render_template('single.html', nav=nav)

@app.route('/contact')
def contact():
    nav = reset_buttons('contact')
    return render_template('contact.html', nav=nav)

if __name__ == '__main__':
    app.run(debug=True)