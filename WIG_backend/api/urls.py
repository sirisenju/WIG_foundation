

from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import register_user, user_login, submit_project, user_logout


urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),

    path('submit_project/', submit_project, name='submit_project'),
    path('logout/', user_logout, name='logout'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)