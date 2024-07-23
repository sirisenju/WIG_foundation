from rest_framework import serializers
from .models import User, Project, Blog, Contact
from django.contrib.auth import authenticate
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from django.core.mail import send_mail



class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name', 'phone_number', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
    


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        read_only_fields = ['user']
        fields = ['email', 'first_name', 'last_name', 'phone_number', 'role', 'profile_pic']



class UserProjectSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True) 


    class Meta:
        model = Project
        fields = ['id', 'user', 'title', 'sub_header', 'content', 'image', 'volunteer', 'post_time', 'post_date', 'date', 'milestone', 'is_approved']


    def create(self, validated_data):
        user = self.context['request'].user
        project = Project.objects.create(user=user, **validated_data)
        return project
    




######### ADMIN SERIEALIZERS ############
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'sub_header', 'author', 'content', 'image', 'category', 'read_duration', 'post_date', 'date']


    def create(self, validated_data):
        blog = Blog.objects.create(**validated_data)
        return blog
    

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'email', 'phone_number', 'message']


    def create(self, validated_data):
        contact = Contact.objects.create(**validated_data)
        self.send_contact_mail(contact.email, contact.first_name, contact.last_name, contact.phone_number, contact.message)
        return contact
    
    def send_contact_mail(self, email, first_name, last_name, phone_number, message):
        subject = 'INQUIRY'
        from_email = ' worldwidewesterners@gmail.com'
        to = ['westernersgroupworldwide@gmail.com']

        context = {
            'first_name': first_name,
            'last_name': last_name,
            'phone_number': phone_number,
            'message': message,
        }
        
        html_content = render_to_string('email_template.html', context)
        text_content = strip_tags(html_content)

        msg = EmailMultiAlternatives(subject, text_content, from_email, to)
        msg.attach_alternative(html_content, "text/html")
        msg.send()
