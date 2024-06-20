from rest_framework import serializers
from .models import User, Project, Gallery, Blog
from django.contrib.auth import authenticate
from django.conf import settings



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
        fields = ['email', 'first_name', 'last_name', 'phone_number', 'role', 'profile_pic']
    

class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Gallery
        fields = ('id', 'image', 'image_url')

    def get_image_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url


class UserProjectSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True) 
    images = ImageSerializer(many=True, read_only=True)
    image_files = serializers.ListField(
        child=serializers.FileField(write_only=True),
        write_only=True
    )

    class Meta:
        model = Project
        fields = ['id', 'user', 'title', 'sub_header', 'content', 'images', 'image_files', 'volunteer', 'post_time', 'post_date', 'date', 'milestone']


    def create(self, validated_data):
        image_files = validated_data.pop('image_files', [])
        user = self.context['request'].user
        project = Project.objects.create(user=user, **validated_data)
        for image_file in image_files:
            image = Gallery.objects.create(image=image_file)
            project.images.add(image)
        return project
    





######### ADMIN SERIEALIZERS ############
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'sub_header', 'content', 'image', 'read_duration', 'post_date', 'date']


    def create(self, validated_data):
        user = self.context['request'].user
        blog = Blog.objects.create(user=user, **validated_data)

        return blog
    