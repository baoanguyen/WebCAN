import os

from flask import Flask

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'webcan.sqlite'),

    )
    #Import .py modules
    from . import db
    db.init_app(app)

    from . import auth
    app.register_blueprint(auth.bp)

    from . import upload
    from . import webcan
    app.register_blueprint(webcan.bp)

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    # instance folder check
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/launch')
    def hello():
        return 'App Created'
    
    

    return app