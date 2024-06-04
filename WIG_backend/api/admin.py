from django.contrib import admin
from .models import User, Project, Gallery, Blog

# Register your models here.
admin.site.register(User)
admin.site.register(Blog)
admin.site.register(Project)
admin.site.register(Gallery)