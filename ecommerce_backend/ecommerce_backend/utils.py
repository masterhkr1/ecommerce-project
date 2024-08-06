from rest_framework_jwt.settings import api_settings

def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': {
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }
    }
