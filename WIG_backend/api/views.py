from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from . import serializers
from rest_framework import generics, permissions
from rest_framework.permissions import IsAdminUser
from django.contrib.auth import get_user_model
from .models import User, Project, Blog


class SummaryView(GenericAPIView):
    permission_classes = (AllowAny,)
    def get(self, request, *args, **kwargs):
        projects = Project.objects.all().order_by('-date')[:4]
        project_serializer = serializers.UserProjectSerializer(projects, many=True, context={'request': request})

        blogs = Blog.objects.all().order_by('-date')[:4]
        blog_serializer = serializers.BlogSerializer(blogs, many=True, context={'request': request})

        response_data = {
            'projects': project_serializer.data,
            'blogs': blog_serializer.data
        }

        return Response(response_data)
    

class BlogView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = serializers.BlogSerializer

    def get_queryset(self):
        return Blog.objects.all()

    def retrieve(self, request, *args, **kwargs):
        title = self.kwargs.get('title')
        try:
            instance = self.get_queryset().get(title=title)
        except Blog.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    

    """def get(self, request, *args, **kwargs):
        blogs = Blog.objects.all().order_by('-date')[:4]
        blog_serializer = serializers.BlogSerializer(blogs, many=True, context={'request': request})

        response_data = {
            'projets': project_serializer.data,
            'blogs': blog_serializer.data
        }

        return Response(response_data)"""




class UserRegisterationAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = serializers.UserRegisterationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = RefreshToken.for_user(user)
        data = serializer.data 
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return Response(data, status=status.HTTP_201_CREATED)



class UserLoginAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = serializers.UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        data["is_superuser"] = user.is_superuser
        return Response(data, status=status.HTTP_200_OK)
    


class UserProfileView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.UserProfileSerializer

    def get_object(self):
        return self.request.user


class UserCreateProjectView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, *args, **kwargs):
        
        serializer = serializers.UserProjectSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UserProjectView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Project.objects.all()
    serializer_class = serializers.UserProjectSerializer
    
    def get_serializer_context(self):
        return {'request': self.request}
    

class ProjectView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.UserProjectSerializer

    def get_queryset(self):
        return Project.objects.filter(user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        title = self.kwargs.get('title')
        try:
            instance = self.get_queryset().get(title=title)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)



class UserLogoutAPIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        



######### ADMIN VIEWS #########


User = get_user_model()

class AdminSummaryView(APIView):
    #permission_classes = [IsAdminUser]
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        projects = Project.objects.all()
        user_serializer = serializers.UserProfileSerializer(users, many=True, context={'request': request})
        project_serializer = serializers.UserProjectSerializer(projects, many=True, context={'request': request})
        num_projects = Project.objects.count()
        num_users = User.objects.count()
        num_blogs = Blog.objects.count()



        blogs = Blog.objects.all()
        blog_serializer = serializers.BlogSerializer(blogs, many=True)

        response_data = {
            'users': user_serializer.data,
            'projects': project_serializer.data,
            'num_projects': num_projects,
            'num_users': num_users,
            'num_blogs': num_blogs,
            'blogs': blog_serializer.data
        }

        return Response(response_data)




class AdminCreateBlogView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, *args, **kwargs):
        
        serializer = serializers.UserProjectSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)