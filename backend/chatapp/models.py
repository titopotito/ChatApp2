from django.db import models


class TestData(models.Model):
    text = models.CharField(max_length=30)
    number = models.PositiveIntegerField()
