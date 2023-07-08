from django.shortcuts import render
from rest_framework.views import APIView
from .models import TestData
from rest_framework.response import Response
from .serializer import TestSerializer


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
