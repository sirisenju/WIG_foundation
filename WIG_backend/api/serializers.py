from rest_framework import serializers
from .models import User, Project
from django.contrib.auth import authenticate



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



class UserProjectSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True) 
    class Meta:
        model = Project
        fields = ['id', 'user', 'title', 'sub_header', 'content', 'image', 'date']