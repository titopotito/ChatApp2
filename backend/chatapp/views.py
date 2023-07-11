from django.shortcuts import render
from rest_framework.views import APIView
from .models import TestData
from rest_framework.response import Response
from .serializer import TestSerializer, RegisterSerializer
from django.contrib.auth.models import User
from rest_framework import status


class TestView(APIView):
    def get(self, request):
        data = []
        for test_data in TestData.objects.all():
            data.append({"text": test_data.text, "number": test_data.number})

        return Response(data)

    def post(self, request):
        serializer = TestSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class UserView(APIView):
    def get(self, request):
        data = []
        for user in User.objects.all():
            data.append({"username": user.username, "email": user.email,
                        "name": f'{user.first_name} {user.last_name}'})
        return Response(data)


class RegisterUserView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
