from flask import Flask, render_template
import sqlite3 as sql


app = Flask(__name__)


""" 
@func reset_buttons(button)

@desc Makes the button passed have the 'active' colour.
@param button {str} @default None {NoneType} 
    @desc Name of the button to make active.
@returns nav {dict} @desc Statuses of all buttons.
"""
def reset_buttons(button=None):
    nav = {
        'home': 'inactive',
        'projects': 'inactive',
        'contact': 'inactive'
    }
    if nav[button]:
        nav.update({button: 'active'})
    return nav


# —————————————— R O U T E S ——————————————


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


# run the app with debugger
if __name__ == '__main__':
    app.run(debug=True)