from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator
import random, string

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField("First Name", max_length= 50, null=True, blank=True)
    last_name = models.CharField("Last Name", max_length= 50, null=True, blank=True)
    phone_number = models.CharField("Phone Number", max_length=20, null=True, blank=True)
    role = models.CharField("Role", max_length= 50, null=True, blank=True)
    profile_pic= models.ImageField(upload_to='images/', null=True, blank=True)


    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser
    

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title= models.CharField("Title", max_length= 100, null=True, blank=True)
    sub_header= models.CharField("Sub Header", max_length= 100, null=True, blank=True)
    content= models.TextField("Main Content", max_length= 10000, null=True, blank=True)
    images = models.ManyToManyField('Gallery', blank=True)
    milestone= models.CharField("Milestone", max_length= 100, null=True, blank=True)
    volunteer= models.CharField("Volunteer", max_length= 500, null=True, blank=True)
    post_time= models.CharField("Post Time", max_length= 50, null=True, blank=True)
    post_date= models.CharField("Post Date", max_length= 50, null=True, blank=True)
    date = models.DateTimeField(("Date"), auto_now_add=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['title']
    
    

class Blog(models.Model):
    author= models.CharField("Author", max_length= 100, null=True, blank=True)
    title= models.CharField("Title", max_length= 100, null=True, blank=True)
    sub_header= models.CharField("Sub Header", max_length= 100, null=True, blank=True)
    category= models.CharField("Category", max_length= 100, null=True, blank=True)
    content= models.TextField("Main Content", max_length= 10000, null=True, blank=True)
    image= models.ImageField(upload_to='images/', null=True, blank=True) 
    read_duration= models.CharField("Read Duration", max_length= 50, null=True, blank=True)
    post_date= models.CharField("Post Date", max_length= 50, null=True, blank=True)
    date= models.DateField("Date", auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['title']


class Gallery(models.Model):
    image= models.ImageField(upload_to='images/', null=True, blank=True)        