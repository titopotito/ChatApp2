from django.db import models
from django.contrib.auth.models import User


class TestData(models.Model):
    text = models.CharField(max_length=30)
    number = models.PositiveIntegerField()


class ContactList(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    contacts = models.ManyToManyField(User, related_name='contacts')


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'


class Message(models.Model):
    sender = models.OneToOneField(User, on_delete=models.CASCADE)
    text_content = models.CharField(max_length=1000)
    isSeen = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
