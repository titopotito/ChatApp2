from rest_framework import serializers
from .models import Profile, ChatRoom, Message
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ["sender", "chatroom", "text_content"]

    def create(self, validated_data):
        message = Message.objects.create(
            sender=validated_data['sender'], text_content=validated_data['text_content'], chatroom=validated_data['chatroom'])
        return message


class ChatRoomSerializer(serializers.ModelSerializer):
    member_usernames = serializers.ListField(
        child=serializers.CharField()
    )

    class Meta:
        model = ChatRoom
        fields = ['member_usernames']

    def create(self, validated_data):
        members = User.objects.filter(username__in=validated_data['member_usernames'])
        chatroom = ChatRoom()
        chatroom.save()
        for member in members:
            chatroom.members.add(member)
        return chatroom


class ChatRoomListSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)
    latest_message = serializers.SerializerMethodField()

    class Meta:
        model = ChatRoom
        fields = ['id', 'members', 'latest_message']

    def get_latest_message(self, obj):
        try:
            message = obj.message_set.all().latest('created_at')
            serializer = MessageSerializer(message)
            print(serializer.data)
            return serializer.data
        except:
            return None
