
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import redirect

from .serializers import UserSerializer#, ProjectSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated





# ===== BEGINNING OF ADMIN VIEWS ===== #
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def submit_project(request):
    pass

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def submit_project(request):
    pass

# ===== END OF ADMIN VIEWS ===== #














# ===== BEGINNING OF WIG VIEWS ===== #

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def submit_project(request):
    pass

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def submit_project(request):
    pass



@api_view(['POST'])
def contact(request):
    pass

# ===== END OF WIG VIEWS ===== #
















# ===== BEGINNING OF USER VIEWS ===== #

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'Message':'Account Created Successflly','token': token.key}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'Message':'login successful','token': token.key}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)


def resize_image(x):
    pass

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):

    #GET name, recent projects, profile pic, role

    #POST and resize image
    pass




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_project(request):
    pass


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ===== END OF USER VIEWS ===== #