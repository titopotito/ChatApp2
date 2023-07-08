from rest_framework import serializers
from .models import TestData


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestData
        fields = ['text', 'number']
