import functools

from flask import (
    Blueprint, flash, g, jsonify, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

from webcan.db import get_db

bp = Blueprint('graph', __name__, url_prefix='/graph')

@bp.route('/line', methods=['POST'])
def processJson():

    data = request.get_json()

    name = data['name']
    location = data['location']
    randomlist = data['randomlist']

    return jsonify({'result' : 'Success', 
                    'name' : name,
                    'location' : location,
                    'randomkeyinlist' :randomlist[1]})

    

@bp.route('/getData', methods=['GET'])
def getGraphData():
    UserData = [
  {
    'id': 1,
    'year': 2016,
    'userGain': 80000,
    'userLost': 823,
  },
  {
    'id': 2,
    'year': 2017,
    'userGain': 45677,
    'userLost': 345,
  },
  {
    'id': 3,
    'year': 2018,
    'userGain': 78888,
    'userLost': 555,
  },
  {
    'id': 4,
    'year': 2019,
    'userGain': 90000,
    'userLost': 4555,
  },
  {
    'id': 5,
    'year': 2020,
    'userGain': 4300,
    'userLost': 234,
  }]
    return jsonify(UserData)