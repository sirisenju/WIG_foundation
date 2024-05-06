

from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import register_user, user_login, user_logout


urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),

]
#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)