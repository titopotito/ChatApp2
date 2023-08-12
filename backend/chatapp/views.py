import json
from datetime import datetime

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import redirect

from .models import Profile, ChatRoom, Message
from .serializer import RegisterSerializer, LoginSerializer, ChatRoomSerializer, ChatRoomListSerializer, MessageSerializer, UserSerializer


class UserView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token = request.auth
        user = Token.objects.get(key=token).user
        serializer = UserSerializer(user)
        return Response(serializer.data)


class ChatRoomListView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        chatrooms = ChatRoom.objects.filter(members=request.user)
        serializer = ChatRoomListSerializer(chatrooms, many=True)

        return Response(serializer.data)


class ChatRoomDetailView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        return Response(None)


class ChatRoomCreateView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        data = json.loads(request.body)
        member_usernames = data.get('members')
        serializer = ChatRoomSerializer(data={'member_usernames': member_usernames})
        if serializer.is_valid():
            chatroom = serializer.save()
            return Response({"chatroom_id": chatroom.id}, status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MessageListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, chatroom_id):
        messages = Message.objects.filter(chatroom=chatroom_id)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MessageCreateView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        data = json.loads(request.body)
        serializer = MessageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_201_CREATED)

        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MessageDeleteView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        return Response(None)


class RegisterUserView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            Profile.objects.create(user=user)
            return Response(status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=request.data['username'], password=request.data['password'])
            if user is not None:
                login(request, user)
                try:
                    token = Token.objects.get(user_id=user.id)
                except Token.DoesNotExist:
                    token = Token.objects.create(user=user)
                return Response(token.key, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError):
            pass

        logout(request)

        return Response({"success": ("Successfully logged out.")},
                        status=status.HTTP_200_OK)
