import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

from webcan.db import get_db

bp = Blueprint('graph', __name__, url_prefix='/graph')

@bp.route('/line')
def register():
    data = [
        ("01-01-2022", 10),
        ("02-01-2022", 20),
        ("03-01-2022", 30),
        ("04-01-2022", 40),
        ("05-01-2022", 50),
    ]

    labels = [row[0] for row in data]
    values = [row[1] for row in data]

    

    return render_template('graph.html', labels=labels, values=values)