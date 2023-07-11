from rest_framework import serializers
from .models import TestData, ContactList, Profile
from django.contrib.auth.models import User


class TestSerializer(serializers.ModelSerializer):

    class Meta:
        model = TestData
        fields = ['text', 'number']


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email']
        )
        return user


# class ContactListSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = ContactList
#         fields = ['user', 'contacts']


# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = ['user', 'image']
